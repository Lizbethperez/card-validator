
//************************VALIDACIONES******* */

//VALIDA QUE EL NOMBRE ESCRITO SOLO ACEPTE LETRAS Y ESPACIOS 
const validations = {}

validations.validateUserName = (receiveUserName) => {
    const regexUserName = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/
    if (regexUserName.exec(receiveUserName) != null) {
        return true;
    }
    else {
        return false;
    }
}

//VALIDA QUE SEAN 16 DIGITOS Y QUE SEAN DEL 0 AL 9 Y QUE SOLO SEA VISA Y MASTERCARD

validations.validateNumbersCreditCard = (dataValidate) => {
    const regexNumberCard = /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/; //Expresion regualar para validar
    if (regexNumberCard.exec(dataValidate) !== null) { // compara la expresion regular con el numero de tarjeta Ingresado.
        return convertStringToArray(dataValidate);
    } else {
        return false;
    }
}

//VALIDANDO TARJETA DE CREDITO CON LUHN
const convertStringToArray = (string) => {
    let arrayCreditNumber = [];
    for (let i = 0; i < string.length; i++) {
        arrayCreditNumber.push(parseInt(string[i]));
    }
    return luhnValidate(arrayCreditNumber);
}

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
        return true;
    } else {
        return false;
    }
}

// VALIDA FECHA DE EXPIRACION (MES)

validations.validateMonth = month => {
    const validMonthRegEx = /^(0[0-9]|1[0-2])$/;
    if (validMonthRegEx.exec(month) === null) {
        return false;
    } else {
        return true;
    }
}

//VALIDA FECHA DE EXPIRACION (AÑO)

validations.validateYear = year => {
    const validYearRegEx = /^(20)?([0-9]{2})$/;
    if (validYearRegEx.exec(year) === null) {
        return false;
    } else {
        return true;
    }
}

//VALIDA EL CVV

validations.validateCvvNumber = (receiveCvvNumber) => {
    const regexCvvNumber = /^[0-9]{3}$/;
    if (regexCvvNumber.exec(receiveCvvNumber) === null) {
        return false;
    } else {
        return true;
    }
}

if (typeof window === 'undefined') {
    module.exports = validations;
} else {
    window.validations = validations;
}
