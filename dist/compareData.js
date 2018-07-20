'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var compareImport = {};
console.log(typeof window === 'undefined' ? 'undefined' : _typeof(window));
if (typeof window === 'undefined') {
    var _dataClients = require('./dataClients');
}

compareImport.compareName = function (getUserName) {
    for (var k = 0; k < dataClients.length; k++) {
        var dataName = dataClients[k].name.toLowerCase();
        if (dataName === getUserName.toLowerCase()) return true;
    }
    console.log("fallo el nombre");
    return false;
};
//export const compareName = 

compareImport.creditNumber = function (numberCreditVaidateForLuhn) {
    for (var k = 0; k < dataClients.length; k++) {
        var dataCreditNumber = dataClients[k].creditNumber;
        if (numberCreditVaidateForLuhn.toString() === dataCreditNumber.toString()) return true;
    }
    console.log("fallo creditnumber");
    return false;
};
compareImport.isInputMonthEqualDataMonth = function (inputMonth) {
    for (var k = 0; k < dataClients.length; k++) {
        var dataMonth = dataClients[k]['exp-month'];
        if (parseInt(inputMonth) === parseInt(dataMonth)) return true;
    }
    console.log("fallo el mes");
    return false;
};

compareImport.isInputYearEqualDataYear = function (inputYear) {
    for (var k = 0; k < dataClients.length; k++) {
        var dataYear = dataClients[k]['exp-year'];
        console.log(inputYear);
        console.log(dataYear);
        if (parseInt(inputYear) === parseInt(dataYear)) return true;
    }
    console.log("fallo el año");
    return false;
};

compareImport.compareCvvNumber = function (getCvvNumber) {
    for (var k = 0; k < dataClients.length; k++) {
        var dataCvv = dataClients[k].cvv;
        if (parseInt(getCvvNumber) === dataCvv) return true;
    }
    console.log("fallo el cvv");
    return false;
};

if (typeof window === 'undefined') {
    module.exports = compareImport;
} else {
    window.compareImport = compareImport;
}