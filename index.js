'use strict'

function isValid(phone) {
    var phoneNumber = parseInt(phone);
    phoneNumber = '0' + phoneNumber;
    var valid = false;
    if((phoneNumber.startsWith('09') || phoneNumber.startsWith('08')) && phoneNumber.length === 10) {
        valid = new RegExp(/(^0[2-9]\d{8}$)|(^01\d{9}$)/).test(phoneNumber);
    } else if (phoneNumber.indexOf('01') !== -1 && phoneNumber.length === 11) {
        valid = new RegExp(/(^0[2-9]\d{8}$)|(^01\d{9}$)/).test(phoneNumber);
    }
    return valid
}

module.exports = {
  isValid: isValid
}