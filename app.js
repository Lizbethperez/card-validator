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
        'name': 'Orlando Garcia Morales',
        'creditNumber': '4791672372586578',
        'cvv': 456,
        'exp-month': 01,
        'exp-year': 23
    },
    {
        'name': 'Orlando Garcia Mora',
        'creditNumber': '4791672372586579',
        'cvv': 121,
        'exp-month': 01,
        'exp-year': 23
    }
];

// DATOS INGRESADOS POR EL USUARIO.

const nameUser = "Orlando Garcia Mora";
const cvvUser = "125";
const inputMonth = "01";
const inputYear = "23";
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
    const regexCvvNumber = /^[0-9]{3}$/;
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

//COMPARACION DE DATOS DE USUARIO Y DATOS EN LA DATA REGISTRADA

const compareName = getUserName => {
    let validUserName = validateUserName(getUserName);
    if (validUserName) {
        for (let k = 0; k < dataClients.length; k++) {
            if (getUserName === dataClients[k].name) {
                console.log('el usuario que coincide es' + getUserName);
                return true;
            } else {
                continue;
                console.log('nombreInvalido');
                return false;
            }
        }
    }
}

const compareCreditNumber = (creditNumber, inputMonth, inputYear) => {
    if (validateNumbersCreditCard(creditNumber)) {
        for (let k = 0; k < dataClients.length; k++) {
            if (creditNumber == dataClients[k].creditNumber) {
                console.log('la tarjeta de credito valida es' + creditNumber);
                isInputDateEqualDataDate(inputMonth, inputYear);
            } else {
                continue;
            }

        }
    }
}

const isInputDateEqualDataDate = () => {
    for (let k = 0; k < dataClients.length; k++) {
        let currentClient = dataClients[k];
        let isMonthValid = isInputMonthEqualDataMonth(inputMonth, currentClient["exp-month"]);
        let isYearValid = isInputYearEqualDataYear(inputYear, currentClient["exp-year"]);
        if (!isMonthValid || !isYearValid) {
            console.log("fecha invalida");
            continue;
        }else{
            console.log('la fecha valida es:'+inputMonth+inputYear);
            compareCvvNumber(cvvUser);
        }
    }
}

const isInputMonthEqualDataMonth = (inputMonth, dataMonth) => {
    return parseInt(inputMonth) === parseInt(dataMonth);
}

const isInputYearEqualDataYear = (inputYear, dataYear) => {
    return parseInt(inputYear) === parseInt(dataYear);
}

const compareCvvNumber = getCvvNumber => {
    console.log(cvvUser);
    validateCvvNumber(getCvvNumber);
    for (let k = 0; k < dataClients.length; k++) {
        console.log(dataClients[k].cvv);
        if (parseInt(getCvvNumber) === dataClients[k].cvv){
            console.log('el cvv valido es' + getCvvNumber);
            return true;
        }else{
            continue;
        }     
    }

}

const compareAllData = (receiveValidUserName, receiveValidCreditNumber, receiveValidInputMonth, receiveValidInputYear) => {
    if (receiveValidUserName) {
        console.log(receiveValidUserName);
        compareCreditNumber(receiveValidCreditNumber, receiveValidInputMonth, receiveValidInputYear);

    }
}

// compareCvvNumber(cvvUser);
// compareCreditNumber(creditNumber, inputMonth, inputYear);
// compareName(nameUser);
compareAllData(compareName(nameUser),creditNumber, inputMonth, inputYear);
