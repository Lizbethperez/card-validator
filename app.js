const dataClients = [
    {
        'name': 'Carolina Fernandez',
        'creditNumber': "4791672372586571",
        'cvv': "1234",
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
        'name': 'Orlando Garcia Morales',
        'creditNumber': '4791672372586578',
        'cvv': 456,
        'exp-month': 05,
        'exp-year': 22
    },
    {
        'name': 'Orlando Garcia Mora',
        'creditNumber': '4791672372586579',
        'cvv': "1234",
        'exp-month': 01,
        'exp-year': 23
    }
];

// DATOS INGRESADOS POR EL USUARIO.

const nameUser = "Orlando Garcia Mora";
const cvvUser = "1234";
const inputMonth = "05";
const inputYear = "22";
const creditNumber = ("4791672372586579");
//console.log(creditNumber);


//************************************VALIDACIONES*********************************

//FUNCIÓN QUE VALIDA EL NOMBRE DEL USUARIO
const validateUserName = (receiveUserName) => {
    const regexUserName = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/
    if (regexUserName.exec(receiveUserName) != null)
        return true;
    else
        return false;
}

const validateCvvNumber = (receiveCvvNumber) => {
    const regexCvvNumber = /^[0-9]{3,4}$/;
    if (regexCvvNumber.exec(receiveCvvNumber) == null) {
        console.log("EL CVV ES INVALIDO");
    } else
        console.log("EL CVV ES VALIDO");
}

/*Funcion que valida Que Solo se Ingresen Digitos del 0 al 9 y que sean 16 digitos 
VALIDA SOLO LAS SIGUIENTES TARJETAS:
VISA = EMPIEZA CON 4 
MASTER CARD= EMPIEZA CON 5
*/

const validateNumbersCreditCard = (dataValidate) => {
    const regexNumberCard = /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/; //Expresion regualar para validar
    if (regexNumberCard.exec(dataValidate) === null) { // compara la expresion regular con el numero de tarjeta Ingresado.
        return false;
    } else {
        console.log("Tarjeta valida por luhn");
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

//COMPARACION DE DATOS DE USUARIO Y DATOS EN LA DATA REGISTRADA

const compareName = getUserName => {
    if (validateUserName(getUserName)) {
        for (let k = 0; k < dataClients.length; k++) {
            if (getUserName === dataClients.name) {
                console.log(getUserName);
                return true
            } else {
                console.log('nombreInvalido');
                return false;
            }
        }
    }
}



const compareCreditNumbe = (creditNumber, inputMonth, inputYear) => {
    if (validateNumbersCreditCard(creditNumber)) {
        for (let k = 0; k < dataClients.length; k++) {
            console.log(creditNumber);
            console.log(dataCreditNumber);
            if (creditNumber == dataClients.creditNumber)
                //console.log('tarjeta valida');
                isInputDateEqualDataDate(inputMonth,inputYear);
            // return "tarjeta valida";
            else
                return false;
        }
    }
}

const isInputDateEqualDataDate = (inputMonth, inputYear, getCvvNumber) => {
    for (let k = 0; k < dataClients.length; k++) {
        if (parseInt(inputMonth) === parseInt(dataClients["exp-month"] && parseInt(inputYear) === parseInt(dataClients["exp-year"])))
            compareCvvNumber(getCvvNumber);
        else
            return false
    }

}

const compareCvvNumber = getCvvNumber => {
    for (let k = 0; k < dataClients.length; k++) {
        if (getCvvNumber === dataClients.cvv)
            return true;
        else
            return false;
    }

}




const compareAllData = (receiveValidUserName ,receiveValidCreditNumber, receiveValidInputMonth, receiveValidInputYear) => {
    if(receiveValidUserName){
        compareCreditNumber(receiveValidCreditNumber, receiveValidInputMonth, receiveValidInputYear);

    }
}
            

compareAllData(compareName(nameUser),creditNumber, inputMonth, inputYear);
