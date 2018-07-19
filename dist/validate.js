"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//************************VALIDACIONES******* */

//VALIDA QUE EL NOMBRE ESCRITO SOLO ACEPTE LETRAS Y ESPACIOS 
var validations = {};

validations.validateUserName = function (receiveUserName) {
    console.log(receiveUserName);
    var regexUserName = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/;
    if (regexUserName.exec(receiveUserName) != null) {
        console.log("EL NOMBRE SE INGRESO CORRECTAMENTE");
        return true;
    } else {
        console.log("EL NOMBRE INGRESADO NO SE ESCRIBIO BIEN");
        return false;
    }
};
//VALIDA QUE SEAN 16 DIGITOS Y QUE SEAN DEL 0 AL 9 Y QUE SOLO SEA VISA Y MASTERCARD

validations.validateNumbersCreditCard = function (dataValidate) {
    console.log(dataValidate);
    console.log(typeof dataValidate === "undefined" ? "undefined" : _typeof(dataValidate));
    var regexNumberCard = /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/; //Expresion regualar para validar
    if (regexNumberCard.exec(dataValidate === null)) {
        // compara la expresion regular con el numero de tarjeta Ingresado.
        console.log("EL numero de la tarjeta se ingreso incorrectamente");
        return false;
    } else {
        console.log("El numero de tarjeta esta ingresado correcto");
        return convertStringToArray(dataValidate);
    }
};

//VALIDANDO TARJETA DE CREDITO CON LUHN
var convertStringToArray = function convertStringToArray(string) {
    var arrayCreditNumber = [];
    for (var i = 0; i < string.length; i++) {
        arrayCreditNumber.push(parseInt(string[i]));
    }
    return luhnValidate(arrayCreditNumber);
};

var luhnValidate = function luhnValidate(validateCardNumber) {
    var sumDigitsArray = 0;
    var arrayReverseCreditCard = validateCardNumber.reverse();
    for (var j = 0; j < arrayReverseCreditCard.length; j++) {
        var multiplyPar = 0;
        if ((j + 1) % 2 === 0) {
            multiplyPar = arrayReverseCreditCard[j] * 2;
            if (multiplyPar >= 10) {
                var sumDigits = multiplyPar - 10 + 1;
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
    } else {
        console.log('fallo luhn');
        return false;
    }
};

validations.validateCvvNumber = function (receiveCvvNumber) {
    console.log("numero de CVV RECIBIDO" + receiveCvvNumber);
    var regexCvvNumber = /^[0-9]{3}$/;
    if (regexCvvNumber.exec(receiveCvvNumber) == null) {
        console.log("EL CVV ES INVALIDO");
        return false;
    } else {
        console.log("EL CVV ES VALIDO");
        return true;
    }
};
exports.default = validations;