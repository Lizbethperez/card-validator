const dataClients = [
    {
        'name': 'Carolina Fernandez',
        'creditNumber': "4791672372586571",
        'cvv': 123,
        'exp-month': 12,
        'exp-year': 18
    },
    {
        'name': 'Carolina Perez',
        'creditNumber': '4791672372586571',
        'cvv': 456,
        'exp-month': 05,
        'exp-year': 22
    },
    {
        'name': 'Orlando Garcia Mora',
        'creditNumber': '4791672372586579',
        'cvv': 123,
        'exp-month': 09,
        'exp-year': 23
    }
];

// DATOS INGRESADOS POR EL USUARIO.

var nameUser=$("#owner").val();
console.log(nameUser);
var creditNumber= $("#cardNumber").val();
var inputMonth=$("#monthValue").val();
var inputYear=$("#monthValue").val();
var cvvUser=$("#yearValue").val();

/*
const nameUser = "Orlando Garcia Mora";
const cvvUser = "123";
const inputMonth = ("09");
const inputYear = ("23");
const creditNumber = ("4791672372586579");
//console.log(creditNumber);

*/
//************************************VALIDACIONES*********************************

//FUNCIÓN QUE VALIDA EL NOMBRE DEL USUARIO
const validateUserName = (receiveUserName) => {
    const regexUserName = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/
    if (regexUserName.exec(receiveUserName) != null)
        return true;
    else
        return false;

}

// FUNCION VALIDA QUE SEAN DIGITOS 16 DIGITOS DEL 0 AL 9 Y QUE SEA VISA Y MASTER CARD Digitos del 0 al 9 y que sean 16 digitos 
const validateNumbersCreditCard = (dataValidate) => {
    const regexNumberCard = /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/; //Expresion regualar para validar
    if (regexNumberCard.exec(dataValidate) === null) { // compara la expresion regular con el numero de tarjeta Ingresado.
        return false;
    } else {
        console.log("Tarjeta sin cosas raras");
        return convertStringToArray(dataValidate);
    }
}
//VALIDANDO TARJETA DE CREDITO CON LUHN

//FUNCION QUE COLOCA CADA NUMERO INGRESADO POR EL USUARIO EN UN ARRAY Y LO CONVIERTE A ENTERO. 
const convertStringToArray = (string) => {
    let arrayCreditNumber = [];
    for (let i = 0; i < string.length; i++) {
        arrayCreditNumber.push(parseInt(string[i]));
    }
    return luhnValidate(arrayCreditNumber);
}

//FUNCION QUE LA TARJETA SE UNA TARJETA VALIDA A TRAVES DEL ALGORITMO DE LUHN 
const luhnValidate = (validateCardNumber) => {
    let sumDigitsArray = 0;
    let arrayReverseCreditCard = validateCardNumber.reverse();
    for (let j = 0; j < arrayReverseCreditCard.length; j++) {
        let multiplyPar = 0;
        if ((j + 1) % 2 === 0) {
            multiplyPar = arrayReverseCreditCard[j] * 2;
            if (multiplyPar >= 10) {
                let sumDigits = (multiplyPar - 10) + 1;
                arrayReverseCreditCard[j] = sumDigits;
            } else {
                arrayReverseCreditCard[j] = multiplyPar;
            }
        }
        sumDigitsArray += arrayReverseCreditCard[j];

    }
    if (sumDigitsArray % 10 === 0) {
        console.log('tarjeta aprobada  por luhn');
        return true;
    } else
        return false;
}
//FUNCION QUE VALIDA QUE EL CODIGO CVV SEAN  3 DIGITOS DEL 0 AL 9

const validateCvvNumber = (receiveCvvNumber) => {
    const regexCvvNumber = /^[0-9]{3}$/;
    if (regexCvvNumber.exec(receiveCvvNumber) == null) {
        console.log("EL CVV ES INVALIDO");
        return false;
    } else {
        console.log("EL CVV ES VALIDO");
        return true;
    }
}

//*****************COMPARACION DE DATOS DE USUARIO CON DATA********************* */

// COMPARACION DEL NOMBRE
const compareName = (getUserName, dataName) => {
    return dataName === getUserName;
}
//COMPARACION DE LA TARJETA DE CREDITO
const compareCreditNumber = (numberCreditVaidateForLuhn, dataCreditNumber) => {
    console.log(numberCreditVaidateForLuhn);
    console.log(dataCreditNumber);
    if (numberCreditVaidateForLuhn == dataCreditNumber) {
        console.log("EL NUMERO DE TARJETA ES IGUAL A DATA");
        return true;
    }
    else
        return false;
}

//COMPARACION DE LA FECHA 

const isInputMonthEqualDataMonth = (inputMonth, dataMonth) => {
    console.log("el mes es a", parseInt(inputMonth) === parseInt(dataMonth))
    return parseInt(inputMonth) === parseInt(dataMonth);
}

const isInputYearEqualDataYear = (inputYear, dataYear) => {
    return parseInt(inputYear) === parseInt(dataYear);
}

//COMPARACION DEL CVV

const compareCvvNumber = (getCvvNumber, dataCvv) => {
    if (parseInt(getCvvNumber) === dataCvv) {
        console.log(getCvvNumber);
        return true;
    } else {
        return false;
    }
}

// *****************************FUNCION PRINCIPAL*******************************

const compareAllData = (receiveNameForUser, reciveCreditNumberForUser, inputMonth, inputYear, receiveCvvForUser) => {
    if (!validateUserName(receiveNameForUser) || !validateNumbersCreditCard(reciveCreditNumberForUser) || !validateCvvNumber(receiveCvvForUser))
        return;
    for (let k = 0; k < dataClients.length; k++) {
        let currentClient = dataClients[k];
        if (!compareName(receiveNameForUser, currentClient.name)){
            continue;
        } 
        let isMonthValid = isInputMonthEqualDataMonth(inputMonth, currentClient["exp-month"]);
        let isYearValid = isInputYearEqualDataYear(inputYear, currentClient["exp-year"]);
        if (!compareCreditNumber(reciveCreditNumberForUser, currentClient.creditNumber) || !isMonthValid || !isYearValid || !compareCvvNumber(receiveCvvForUser, currentClient.cvv))
            break;
        else{
            alert("TRANSACCION EXITOSA");
            return true;
        }
           
    }
}

$(document).ready(function(){
    $('#confirm-purchase').click(compareAllData(nameUser, creditNumber, inputMonth, inputYear, cvvUser));
  });

