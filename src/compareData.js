const compareImport = {};
if (typeof window === 'undefined') {
    const dataClients = require('./dataClients');
}

compareImport.compareName = (getUserName) => {
    for (let k = 0; k < dataClients.length; k++) {
        let dataName = dataClients[k].name.toLowerCase();
        if (dataName === getUserName.toLowerCase())
            return true;
    }
    return false;
}

//export const compareName = 

compareImport.creditNumber = (numberCreditVaidateForLuhn) => {
    for (let k = 0; k < dataClients.length; k++) {
        let dataCreditNumber = dataClients[k].creditNumber;
        if (numberCreditVaidateForLuhn.toString() === dataCreditNumber.toString())
            return true;
    }
    return false;
}

compareImport.isInputMonthEqualDataMonth = (inputMonth) => {
    for (let k = 0; k < dataClients.length; k++) {
        let dataMonth = dataClients[k]['exp-month'];
        if (parseInt(inputMonth) === parseInt(dataMonth))
            return true;
    }
    return false;
}

compareImport.isInputYearEqualDataYear = (inputYear) => {
    for (let k = 0; k < dataClients.length; k++) {
        let dataYear = dataClients[k]['exp-year'];
        console.log(inputYear);
        console.log(dataYear)
        if (parseInt(inputYear) === parseInt(dataYear))
            return true;
    }
    return false;
}

compareImport.compareCvvNumber = (getCvvNumber) => {
    for (let k = 0; k < dataClients.length; k++) {
        let dataCvv = dataClients[k].cvv;
        if ((parseInt(getCvvNumber) === dataCvv))
            return true;
    }
    return false;
}

if (typeof window === 'undefined') {
    module.exports = compareImport;
} else {
    window.compareImport = compareImport;
}

