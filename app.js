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
const cvvUsuer= parseInt("134");
const expMonthUser=parseInt("09");
const expYearUser=parseInt("22");
const creditNumber=parseInt("1235698734560923");
console.log(creditNumber);


const cardNumber =(creditNumber) =>{
    validateNumbers(creditNumber)
}


const validateNumbers = (dataValidate)=>{

  const regexNumberCard= /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/;
  if(!dataValidate.search(regexNumberCard)){
      console.log("Invalido");
  }else {
      console.log("valido");
  }

}

const validateWords = (dataValidate)=>{
 const regex= /^[^a-zA-Z\ \.]$/;

}
cardNumber(creditNumber);