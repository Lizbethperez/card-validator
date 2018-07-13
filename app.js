const data = {
    'clients':[
        {
        'name':'berenice Galvan Lopez',
        'creditNumber':4365775241079571,
        'cvv': 123,
        'exp-month':12,
        'exp-year':18
      },
      {
          'name':'Diego Macias Perez',
          'creditNumber':4791672372586579,
          'cvv': 456,
          'exp-month':05,
          'exp-year':22
        }
    ]
}
// DATOS INGRESADOS POR EL USUARIO.

const nameUser="Carolina Fernandez";
const cvvUsuer= ("134");
const expMonthUser=("09");
const expYearUser=("22");
const creditNumber=("4791672372586579");
console.log(creditNumber);


const cardNumber =(creditNumber) =>{
    validateNumbers(creditNumber) // se manda llamar la validacion que corresponde al numero de tarjeta.
}


/*Funcion que valida Que Solo se Ingresen Digitos del 0 al 9 y que sean 16 digitos 
VALIDA SOLO LAS SIGUIENTES TARJETAS:
VISA = EMPIEZA CON 4 
MASTER CARD= EMPIEZA CON 5
*/

const validateNumbers = (dataValidate)=>{
  const regexNumberCard= /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/; //Expresion regualar para validar
  if(regexNumberCard.exec(dataValidate)== null){ // compara la expresion regular con el numero de tarjeta Ingresado.
      console.log("Invalido");
  }else {
      console.log("valido");
      convertStringToArray(dataValidate);   
    }

}
//FUNCION QUE COLOCA CADA NUMERO INGRESADO POR EL USUARIO EN UN ARRAY Y LO CONVIERTE A ENTERO. 
const convertStringToArray = (string)=>{
    let arrayCreditNumber=[];
    for(let i=0;i<string.length;i++){
        arrayCreditNumber.push(parseInt(string[i]));
      }
      luhnValidate(arrayCreditNumber);
}

//FUNCION QUE LA TARJETA SE UNA TARJETA VALIDA A TRAVES DEL ALGORITMO DE LUHN 
  const luhnValidate =(validateCardNumber)=>{
    let sumDigitsArray=0;
    let arrayReverseCreditCard=validateCardNumber.reverse();
    for(let j=0;j<arrayReverseCreditCard.length;j++){
       let multiplyPar=0;
       if((j+1)%2===0){
            multiplyPar=arrayReverseCreditCard[j]*2;
            if(multiplyPar>=10){
                let sumDigits=(multiplyPar-10)+1;
                arrayReverseCreditCard[j]=sumDigits;
            }else{
                arrayReverseCreditCard[j]=multiplyPar;
            }
       }
      console.log( sumDigitsArray += arrayReverseCreditCard[j]);  
    }
    if(sumDigitsArray%10===0)
        console.log('tarjeta valida');
    else 
       console.log('tarjeta Invalida');
}
//FUNCIÓN QUE VALIDA EL NOMBRE DEL USUARIO
const validateUserName = (receiveUserName) => {
    const regexUserName = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/
    if (regexUserName.exec(receiveUserName) == null) { 
        console.log("Invalido");
    } else {
        console.log("valido"); 
    }

}

validateUserName(nameUser);
