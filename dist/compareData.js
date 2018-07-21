'use strict';

var compareImport = {};
if (typeof window === 'undefined') {
    var _dataClients = require('./dataClients');
}

compareImport.compareName = function (getUserName) {
    for (var k = 0; k < dataClients.length; k++) {
        var dataName = dataClients[k].name.toLowerCase();
        if (dataName === getUserName.toLowerCase()) return true;
    }
    return false;
};

//export const compareName = 

compareImport.creditNumber = function (numberCreditVaidateForLuhn) {
    for (var k = 0; k < dataClients.length; k++) {
        var dataCreditNumber = dataClients[k].creditNumber;
        if (numberCreditVaidateForLuhn.toString() === dataCreditNumber.toString()) return true;
    }
    return false;
};

compareImport.isInputMonthEqualDataMonth = function (inputMonth) {
    for (var k = 0; k < dataClients.length; k++) {
        var dataMonth = dataClients[k]['exp-month'];
        if (parseInt(inputMonth) === parseInt(dataMonth)) return true;
    }
    return false;
};

compareImport.isInputYearEqualDataYear = function (inputYear) {
    for (var k = 0; k < dataClients.length; k++) {
        var dataYear = dataClients[k]['exp-year'];
        console.log(inputYear);
        console.log(dataYear);
        if (parseInt(inputYear) === parseInt(dataYear)) return true;
    }
    return false;
};

compareImport.compareCvvNumber = function (getCvvNumber) {
    for (var k = 0; k < dataClients.length; k++) {
        var dataCvv = dataClients[k].cvv;
        if (parseInt(getCvvNumber) === dataCvv) return true;
    }
    return false;
};

if (typeof window === 'undefined') {
    module.exports = compareImport;
} else {
    window.compareImport = compareImport;
}