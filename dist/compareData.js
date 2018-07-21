'use strict';

var compareImport = {};

compareImport.dataClients = {};

compareImport.setDataClients = function (data) {
    compareImport.dataClients = data;
};

compareImport.compareName = function (getUserName) {
    for (var k = 0; k < compareImport.dataClients.length; k++) {
        var dataName = compareImport.dataClients[k].name.toLowerCase();
        if (dataName === getUserName.toLowerCase()) return true;
    }
    return false;
};

//export const compareName = 

compareImport.creditNumber = function (numberCreditVaidateForLuhn) {
    for (var k = 0; k < compareImport.dataClients.length; k++) {
        var dataCreditNumber = compareImport.dataClients[k].creditNumber;
        if (numberCreditVaidateForLuhn.toString() === dataCreditNumber.toString()) return true;
    }
    return false;
};

compareImport.isInputMonthEqualDataMonth = function (inputMonth) {
    for (var k = 0; k < compareImport.dataClients.length; k++) {
        var dataMonth = compareImport.dataClients[k]['exp-month'];
        if (parseInt(inputMonth) === parseInt(dataMonth)) return true;
    }
    return false;
};

compareImport.isInputYearEqualDataYear = function (inputYear) {
    for (var k = 0; k < compareImport.dataClients.length; k++) {
        var dataYear = compareImport.dataClients[k]['exp-year'];
        console.log(inputYear);
        console.log(dataYear);
        if (parseInt(inputYear) === parseInt(dataYear)) return true;
    }
    return false;
};

compareImport.compareCvvNumber = function (getCvvNumber) {
    for (var k = 0; k < compareImport.dataClients.length; k++) {
        var dataCvv = compareImport.dataClients[k].cvv;
        if (parseInt(getCvvNumber) === dataCvv) return true;
    }
    return false;
};

if (typeof window === 'undefined') {
    module.exports = compareImport;
} else {
    window.compareImport = compareImport;
}