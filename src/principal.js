if (typeof window === 'undefined'){
const validations = require('./validate');
const compareImport = require('./compareData');
}

const compareAllData = (receiveNameForUser, reciveCreditNumberForUser, inputMonth, inputYear, receiveCvvForUser) => {
    if (!validations.validateUserName(receiveNameForUser) || !validations.validateNumbersCreditCard(reciveCreditNumberForUser) || !validations.validateMonth(inputMonth) || !validations.validateYear(inputYear) || !validations.validateCvvNumber(receiveCvvForUser)){
        return;
    }
    if (!compareImport.compareName(receiveNameForUser) || !compareImport.creditNumber(reciveCreditNumberForUser) || !compareImport.isInputMonthEqualDataMonth(inputMonth) || !compareImport.isInputYearEqualDataYear(inputYear) || !compareImport.compareCvvNumber(receiveCvvForUser)){
        return;
    }
    return true;
      
}

if (typeof window === 'undefined'){
    module.exports= compareAllData;
}else{
    window.compareAllData  = compareAllData;
}
    