
const dataClients = require('../dist/dataClients');
const compareImport = require('../dist/compareData');
   
describe("compareImport()",()=>{

  const dataClients = [
    {
      'name': 'Berenice Galvan Lopez',
      'creditNumber': 4365775241079571,
      'cvv': 123,
      'exp-month': 12,
      'exp-year': 18
    },
    {
      'name': 'Diego Macias Perez',
      'creditNumber': 4791672372586579,
      'cvv': 456,
      'exp-month': 5,
      'exp-year': 22
    },
    {
      'name': 'Maria Sachez Parra',
      'creditNumber': 4053776587209365,
      'cvv': 354,
      'exp-month': 9,
      'exp-year': 20
    },
    {
      'name': 'Orlando Garcia Mora',
      'creditNumber': 4791672372586579,
      'cvv': 883,
      'exp-month': 1,
      'exp-year': 23
    },
    {
      'name': 'Karla Rios Ramos',
      'creditNumber': 4111998178085273,
      'cvv': 198,
      'exp-month': 11,
      'exp-year': 25
    },
  
  ];

  compareImport.setDataClients(dataClients);
    it('debería devolver true para el nombre Orlando Garcia Mora', () => {
      if (compareImport.compareName('Orlando Garcia Mora') !== true) {
        console.error('✗ fail');
      } else {
        console.log('✓ ok');
      }
    });
    it('debería devolver false para el nombre Orlando Garcia 1234', () => {
        if (compareImport.compareName('Orlando Garcia 123') === false) {
          console.log('✓ ok')
        } else {
          console.error('✗ fail');
        }
      });
      it('debería devolver true para la tarjeta 4791672372586579', () => {
        if (compareImport.creditNumber('4791672372586579') !== true) {
          console.error('✗ fail');
        } else {
          console.log('✓ ok');
        }
      });
      it('debería devolver false parapara la tarjeta 4791672372586579', () => {
          if (compareImport.creditNumber('479167aa725865794578') === false) {
            console.log('✓ ok');
          } else {
            console.error('✗ fail');
          }
        });
        it('debería devolver true para el mes 09', () => {
            if (compareImport.isInputMonthEqualDataMonth('09') !== true) {
              console.error('✗ fail');
            } else {
              console.log('✓ ok');
            }
          });
          it('debería devolver false el mes g6', () => {
              if (compareImport.isInputMonthEqualDataMonth('g6') === false) {
                console.log('✓ ok');
              } else {
                console.error('✗ fail');
              }
            });
            it('debería devolver true para el ano 23', () => {
                if (compareImport.isInputYearEqualDataYear('23') !== true) {
                  console.error('✗ fail');
                } else {
                  console.log('✓ ok');
                }
              });
              it('debería devolver false para el ano', () => {
                  if (compareImport.isInputYearEqualDataYear('dd') === false) {
                    console.log('✓ ok');
                  } else {
                    console.error('✗ fail');
                  }
                });
                it('debería devolver true para el cvv, 883',() => {
                    if (compareImport.compareCvvNumber('883') !== true) {
                      console.error('✗ fail');
                    } else {
                      console.log('✓ ok');
                    }
                  });
                  it('debería devolver false para el cvv f134', () => {
                      if (compareImport.compareCvvNumber('f134') === false) {
                        console.log('✓ ok');
                      } else {
                        console.error('✗ fail');
                      }
                    });

});


