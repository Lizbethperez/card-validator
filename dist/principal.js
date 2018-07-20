'use strict';

if (typeof window === 'undefined') {

    var _validations = require('./validate');
    var _compareImport = require('./compareData');
}

var compareAllData = function compareAllData(receiveNameForUser, reciveCreditNumberForUser, inputMonth, inputYear, receiveCvvForUser) {
    if (!validations.validateUserName(receiveNameForUser) || !validations.validateNumbersCreditCard(reciveCreditNumberForUser) || !validations.validateMonth(inputMonth) || !validations.validateYear(inputYear) || !validations.validateCvvNumber(receiveCvvForUser)) {
        console.log("TARJETA INVALIDAooo");
        return;
    }
    if (!compareImport.compareName(receiveNameForUser) || !compareImport.creditNumber(reciveCreditNumberForUser) || !compareImport.isInputMonthEqualDataMonth(inputMonth) || !compareImport.isInputYearEqualDataYear(inputYear) || !compareImport.compareCvvNumber(receiveCvvForUser)) {
        console.log("TARJETA INVALIDA");
        return;
    }
    console.log("TARJETA VALIDA");
    return true;
};
if (typeof window === 'undefined') {
    module.exports = compareAllData;
} else {
    window.compareAllData = compareAllData;
}
