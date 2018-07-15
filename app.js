const data =[
        {
        'name':'Carolina Fernandez',
        'creditNumber':"4791672372586571",
        'cvv': 123,
        'exp-month':12,
        'exp-year':18
      },
      {
          'name':'Carolina Perez',
          'creditNumber':'4791672372586571',
          'cvv': 456,
          'exp-month':05,
          'exp-year':22
        },
        {
        'name':'Diego Macias Perez',
        'creditNumber':'4791672372586579',
        'cvv': 456,
        'exp-month':05,
        'exp-year':22
      },
      {
        'name':'Orlando Garcia Mora',
        'creditNumber':'0000000000000000',
        'cvv': 883,
        'exp-month':01,
        'exp-year':23
      }
    ];

// DATOS INGRESADOS POR EL USUARIO.

const nameUser="Orlando Garcia Mora";
const cvvUsuer= ("134");
const expMonthUser=("09");
const expYearUser=("22");
const creditNumber=("0000000000000000");
//console.log(creditNumber);



/*Funcion que valida Que Solo se Ingresen Digitos del 0 al 9 y que sean 16 digitos 
VALIDA SOLO LAS SIGUIENTES TARJETAS:
VISA = EMPIEZA CON 4 
MASTER CARD= EMPIEZA CON 5
*/

const validateNumbersCreditCard = (dataValidate)=>{
  const regexNumberCard= /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/; //Expresion regualar para validar
  if(regexNumberCard.exec(dataValidate)== null){ // compara la expresion regular con el numero de tarjeta Ingresado.
      console.log("Invalido");
  }else {
      console.log("valido");
      return convertStringToArray(dataValidate);   
    }

}
//FUNCION QUE COLOCA CADA NUMERO INGRESADO POR EL USUARIO EN UN ARRAY Y LO CONVIERTE A ENTERO. 
const convertStringToArray = (string)=>{
    let arrayCreditNumber=[];
    for(let i=0;i<string.length;i++){
        arrayCreditNumber.push(parseInt(string[i]));
      }
     return luhnValidate(arrayCreditNumber);
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
        ( sumDigitsArray += arrayReverseCreditCard[j]);  
    }
    if(sumDigitsArray%10===0)
       return true;
    else 
        return false;
}
//FUNCIÓN QUE VALIDA EL NOMBRE DEL USUARIO
const validateUserName = (receiveUserName) => {
    const regexUserName = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/
    return regexUserName.exec(receiveUserName) != null
}

const compareName = (getUserName, dataName)=>{
    if(dataName === getUserName){
       console.log(getUserName);
       return true
     } else{
      console.log('nombreInvalido');
      return false;
    }
}

const compareCreditNumber =(numberCreditVaidateForLuhn,dataCreditNumber) =>{
    console.log(numberCreditVaidateForLuhn);
     return numberCreditVaidateForLuhn === dataCreditNumber;
}

const compareAllData = (receiveNameForUser,reciveCreditNumberForUser)=>{
    for(let k=0;k<data.length;k++){
        if(!validateUserName(receiveNameForUser)|| !compareName(receiveNameForUser, data[k].name)){
            continue; 
        }else{
            if(!validateNumbersCreditCard(reciveCreditNumberForUser) || !compareCreditNumber(reciveCreditNumberForUser,data[k].creditNumber)){
                break;
            }
            break;
        }     
    }
}

const dataIteration= () => {
    for (let i = 0; i < data.clients.length; i++) {
        let currentClient = data.clients[i];
        let inputMonth = "05";
        let inputYear = "22";
        let isMonthValid = isInputMonthEqualDataMonth(inputMonth, currentClient["exp-month"]);
        let isYearValid = isInputYearEqualDataYear(inputYear, currentClient["exp-year"]);

        if(!isMonthValid || !isYearValid){
            continue;
        }
    }
}

const isInputMonthEqualDataMonth = (inputMonth, dataMonth) => {
    return parseInt(inputMonth) === parseInt(dataMonth);
}

const isInputYearEqualDataYear = (inputYear, dataYear) => {
    return parseInt(inputYear) === parseInt(dataYear);
}
compareAllData(nameUser,creditNumber);
