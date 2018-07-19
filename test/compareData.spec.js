

const compareImport = require('../dist/compareData');
console.log(compareImport);
   describe("compareImport()",()=>{
    it('debería devolver true para el nombre Orlando Garcia Mora', () => {
      if (compareImport.compareName('Orlando Garcia Mora') !== true) {
        console.error('✗ fail');
      } else {
        console.log('✓ ok');
      }
    });
    it('debería devolver false para el nombre Orlando Garcia 1234', () => {
        if (compareImport.compareName('Orlando Garcia 123') !== true) {
          console.error('✗ fail');
        } else {
          console.log('✓ ok');
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
          if (compareImport.creditNumber('479167aa725865794578') !== true) {
            console.error('✗ fail');
          } else {
            console.log('✓ ok');
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
              if (compareImport.isInputMonthEqualDataMonth('g6') !== true) {
                console.error('✗ fail');
              } else {
                console.log('✓ ok');
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
                  if (compareImport.isInputYearEqualDataYear('dd') !== true) {
                    console.error('✗ fail');
                  } else {
                    console.log('✓ ok');
                  }
                });
                it('debería devolver true para el cvv, 835',() => {
                    if (compareImport.compareCvvNumber('835') !== true) {
                      console.error('✗ fail');
                    } else {
                      console.log('✓ ok');
                    }
                  });
                  it('debería devolver false para el cvv f134', () => {
                      if (compareImport.compareCvvNumber('f134') !== true) {
                        console.error('✗ fail');
                      } else {
                        console.log('✓ ok');
                      }
                    });

});


