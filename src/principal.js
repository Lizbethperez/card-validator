import validations from './validate'
import compareImport from './compareData'

const compareAllData = (receiveNameForUser, reciveCreditNumberForUser, inputMonth, inputYear, receiveCvvForUser) => {
    if (!validations.validateUserName(receiveNameForUser) || !validations.validateNumbersCreditCard(reciveCreditNumberForUser) || !validations.validateMonth(inputMonth) || !validations.validateYear(inputYear) || !validations.validateCvvNumber(receiveCvvForUser)){
        console.log("TARJETA INVALIDAooo");
        return;
    }
    if (!compareImport.compareName(receiveNameForUser) || !compareImport.creditNumber(reciveCreditNumberForUser) || !compareImport.isInputMonthEqualDataMonth(inputMonth) || !compareImport.isInputYearEqualDataYear(inputYear) || !compareImport.compareCvvNumber(receiveCvvForUser)){
        console.log("TARJETA INVALIDA");
        return;
    }
    console.log("TARJETA VALIDA");
    return true;
      
}
compareAllData('Orlando Garcia Mora', "4791672372586579","1","23","883");