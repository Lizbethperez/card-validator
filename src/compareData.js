
const compareImport = {};
import * as dataImports from './dataClients'

compareImport.compareName= (getUserName) => {
    for(let k=0;k < dataImports.dataClients.length;k++){
        let dataName=dataImports.dataClients[k].name;
        if(dataName === getUserName)
         return true;
    }
    console.log("fallo el nombre");
    return false;
   
}
//export const compareName = 

compareImport.creditNumber = (numberCreditVaidateForLuhn) => {
    for(let k=0; k< dataImports.dataClients.length;k++){
        let dataCreditNumber=dataImports.dataClients[k].creditNumber;
        if(numberCreditVaidateForLuhn.toString() === dataCreditNumber.toString())
          return true;
    }  
    console.log("fallo creditnumber");
    return false;
}
compareImport.isInputMonthEqualDataMonth= (inputMonth) => {
    for(let k=0; k< dataImports.dataClients.length;k++){
        let dataMonth=dataImports.dataClients[k]['exp-month'];
        if(parseInt(inputMonth) === parseInt(dataMonth))
          return true;
    }
    console.log("fallo el mes");
    return false;
}

compareImport.isInputYearEqualDataYear= (inputYear) => {
    for(let k=0; k< dataImports.dataClients.length;k++){
        let dataYear= dataImports.dataClients[k]['exp-year'];
        console.log(inputYear);
        console.log(dataYear)
        if(parseInt(inputYear) === parseInt(dataYear))
            return true;
    }
    console.log("fallo el ano");
    return false;
}

compareImport.compareCvvNumber = (getCvvNumber) => {
    for(let k=0; k< dataImports.dataClients.length;k++){
        let dataCvv=dataImports.dataClients[k].cvv;
        if((parseInt(getCvvNumber) === dataCvv))
          return true;
    }
    console.log("fallo el cvv");
    return false;
}
export default compareImport;