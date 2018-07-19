"use strict";

var _dataClients = require("./dataClients");

var dataImports = _interopRequireWildcard(_dataClients);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var compareImport = {};


compareImport.compareName = function (getUserName) {
    for (var k = 0; k < dataImports.dataClients.length; k++) {
        var dataName = dataImports.dataClients[k].name;
        if (dataName === getUserName) return true;
    }
    console.log("fallo el nombre");
    return false;
};
//export const compareName = 

compareImport.creditNumber = function (numberCreditVaidateForLuhn) {
    for (var k = 0; k < dataImports.dataClients.length; k++) {
        var dataCreditNumber = dataImports.dataClients[k].creditNumber;
        if (numberCreditVaidateForLuhn.toString() === dataCreditNumber.toString()) return true;
    }
    console.log("fallo creditnumber");
    return false;
};
compareImport.isInputMonthEqualDataMonth = function (inputMonth) {
    for (var k = 0; k < dataImports.dataClients.length; k++) {
        var dataMonth = dataImports.dataClients[k]['exp-month'];
        if (parseInt(inputMonth) === parseInt(dataMonth)) return true;
    }
    console.log("fallo el mes");
    return false;
};

compareImport.isInputYearEqualDataYear = function (inputYear) {
    for (var k = 0; k < dataImports.dataClients.length; k++) {
        var dataYear = dataImports.dataClients[k]['exp-year'];
        console.log(inputYear);
        console.log(dataYear);
        if (parseInt(inputYear) === parseInt(dataYear)) return true;
    }
    console.log("fallo el ano");
    return false;
};

compareImport.compareCvvNumber = function (getCvvNumber) {
    for (var k = 0; k < dataImports.dataClients.length; k++) {
        var dataCvv = dataImports.dataClients[k].cvv;
        if (parseInt(getCvvNumber) === dataCvv) return true;
    }
    console.log("fallo el cvv");
    return false;
};
module.exports = compareImport;