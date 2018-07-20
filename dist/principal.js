'use strict';

var _validate = require('./validate');

var _validate2 = _interopRequireDefault(_validate);

var _compareData = require('./compareData');

var _compareData2 = _interopRequireDefault(_compareData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compareAllData = function compareAllData(receiveNameForUser, reciveCreditNumberForUser, inputMonth, inputYear, receiveCvvForUser) {
    if (!_validate2.default.validateUserName(receiveNameForUser) || !_validate2.default.validateNumbersCreditCard(reciveCreditNumberForUser) || !_validate2.default.validateMonth(inputMonth) || !_validate2.default.validateYear(inputYear) || !_validate2.default.validateCvvNumber(receiveCvvForUser)) {
        console.log("TARJETA INVALIDAooo");
        return;
    }
    if (!_compareData2.default.compareName(receiveNameForUser) || !_compareData2.default.creditNumber(reciveCreditNumberForUser) || !_compareData2.default.isInputMonthEqualDataMonth(inputMonth) || !_compareData2.default.isInputYearEqualDataYear(inputYear) || !_compareData2.default.compareCvvNumber(receiveCvvForUser)) {
        console.log("TARJETA INVALIDA");
        return;
    }
    console.log("TARJETA VALIDA");
    return true;
};
compareAllData('Orlando Garcia Mora', "4791672372586579#$%", "01", "23", "883");