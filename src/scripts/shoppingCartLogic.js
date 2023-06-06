/**
 * Updates the value for a single food item, or deletes if below 1.
 * @param {object} stateVar The React state variable containing this cart should be an object with
 * both keys and values representing integer values, with the key
 * being the id of the food item and the key being the quantity in cart
 * @param {function} stateVarSetter The setter (callback) for the React state variable
 * @param {number} id The database Id of the food item
 * @param {number} quantity Quantity to CHANGE the carts value by
 */
export function updateSingleCartItem(stateVar, stateVarSetter, idOfFood, quantity) {
  /* If the quantity is positive and there is no property for said Id then its created */
  if (!stateVar.hasOwnProperty(`${idOfFood}`) && quantity > 0) {
    stateVarSetter((prevState) => ({
      ...prevState,
      [idOfFood]: quantity,
    }));
  } 
  
  /* If the property exists and the quantity is positive then it needs to be added
  to the existing properties value */
  else if (stateVar.hasOwnProperty(`${idOfFood}`) && quantity > 0) {
    const updatedAmount = stateVar[idOfFood] + quantity;
    stateVarSetter((prevState) => ({
      ...prevState,
      [idOfFood]: updatedAmount,
    }));
  } 
  
  /* If the quantity is negative then one of two things need to happen. If the
  quantity is less than the absolute value of amount in cart then its simply
  subtracted from the value. If however its equal to or larger than that the
  entry (property) is removed from the cart, the object */
  /* First case the absolute quantity is less than the carts value
  and is subtracted */
  else if (stateVar.hasOwnProperty(`${idOfFood}`) && Math.abs(quantity) < stateVar[idOfFood]) {
    const updatedAmount = stateVar[idOfFood] + quantity;
    stateVarSetter((prevState) => ({
      ...prevState,
      [idOfFood]: updatedAmount,
    }));
  }
  /**Second case the absolute quantity is equal to or larger than
   * the carts value
   */
  else if(stateVar.hasOwnProperty(`${idOfFood}`) && Math.abs(quantity) >= stateVar[idOfFood]){
    let newObj = JSON.parse(JSON.stringify(stateVar));
    delete newObj[idOfFood];
    stateVarSetter(newObj)
  }

  /** Nothing other than console error (so far) printed if decrementing
   * nonexistant property
   */
  else if(!stateVar.hasOwnProperty(`${idOfFood}`) && quantity < 0){
    console.log("Can't decrement nonexistant cart item")
  }

  /** Unexpected uncaught situation */
  else{
    console.log("Uncaught cart in/de-crement situation")
  }
}

/**
 * Sums up the amount of items in the cart
 * @param {object} stateVar React state variable that is an object with properties
 * that have integer values
 * @returns The sum of the properties values
 */
export function sumAllCartItems(stateVar){
  let sum = 0;

  for (const key in stateVar) {
    if (typeof stateVar[key] === 'number') {
      sum += stateVar[key];
    }
  }

  return sum;
}

/**
 * Calculates the total price of all the items in the cart
 * @param {*} foodMenu Object containing the entire menu fetched
 * from the menu-db json server
 * @param {*} cart Users cart in the form of an object with both
 * keys and values as integers
 * @returns The total price
 */
export function calcTotalCartPrice(foodMenu, cart){
  let result = 0;

  // Loop over all the keys of the cart, i.e the Id of the food
  Object.entries(cart).forEach(([cartKey, cartValue]) => {
    // Finds the food item with Id corresponding cartKey
    const foodItem = foodMenu.find((foodObj) => foodObj.id == cartKey)
    // Gets that foodItem's price property and multiplies it by
    // the cartValue (i.e amount of food item) before adding it
    // to the result
    const foodItemTotal = foodItem.price * cartValue;
    result += foodItemTotal
  })

  // Returns result
  return result;
}

/**
 * Sends a post request to :2001/orders
 * @param {object} cart_ The obj corresponding to users cart, in the
 * form of an obj with purely integer keys and values
 * @param {number} total_ The total price of the items in the cart, 
 * calculated by function calcTotalCartPrice
 * @param {string} orderersname_ The name of the person doing the
 * ordering.
 * @param {string} username_ Optional parameter. The username of the
 * logged in user
 */
export function placeOrder(cart_, total_, orderersname_, username_ = ""){
  const order = {
    id: 0,
    username: username_, 
    orderersname: orderersname_,
    items: cart_, 
    total: total_
  }

  console.log(order)

  fetch("http://localhost:2001/orders", {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  })
}