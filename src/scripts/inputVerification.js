const validator = require("validator")

export function validateSWEPhoneNumber(phoneNumber){
    return validator.isMobilePhone(phoneNumber, 'sv-SE')
}

export function validatePersonName(personName){
    const nameRegex = /^[a-zA-ZåäöÅÄÖ]+([ '-][a-zA-ZåäöÅÄÖ]+)*$/;
    return nameRegex.test(personName)
}

export function validateAdress(address){
    const addressRegex = /^[a-zA-ZåäöÅÄÖ0-9\s-]{5,}$/;
    return addressRegex.test(address)
}

export function validateCreditCard(creditCard){
    const cardRegex = /^(\\d{4} ){3}\\d{4}$/;
    return cardRegex.test(creditCard)
}