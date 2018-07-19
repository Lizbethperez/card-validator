const validations = require('../dist/validate');

  describe("validateAllData()",()=>{
    it('debería devolver true para el nombre Orlando Garcia Mora', () => {
      if (validations.validateUserName('Orlando Garcia Mora') !== true) {
        console.error('✗ fail');
      } else {
        console.log('✓ ok');
      }
    });
    it('debería devolver false para el nombre Orlando Garcia 1234', () => {
        if (validations.validateUserName('Orlando Garcia 123') !== true) {
          console.error('✗ fail');
        } else {
          console.log('✓ ok');
        }
      });
      it('debería devolver true para la tarjeta 4791672372586579', () => {
        if (validations.validateNumbersCreditCard('4791672372586579') !== true) {
          console.error('✗ fail');
        } else {
          console.log('✓ ok');
        }
      });
      it('debería devolver false parapara la tarjeta 4791672372586579', () => {
          if (validations.validateNumbersCreditCard('479167aa725865794578') !== true) {
            console.error('✗ fail');
          } else {
            console.log('✓ ok');
          }
        });
        it('debería devolver true para el mes 09', () => {
            if (validations.validateNumbersCreditCard('09') !== true) {
              console.error('✗ fail');
            } else {
              console.log('✓ ok');
            }
          });
          it('debería devolver false el mes g6', () => {
              if (validations.validateNumbersCreditCard('g6') !== true) {
                console.error('✗ fail');
              } else {
                console.log('✓ ok');
              }
            });
            it('debería devolver true para el ano 23', () => {
                if (validations.validateNumbersCreditCard('23') !== true) {
                  console.error('✗ fail');
                } else {
                  console.log('✓ ok');
                }
              });
              it('debería devolver false para el ano', () => {
                  if (validations.validateNumbersCreditCard('dd') !== true) {
                    console.error('✗ fail');
                  } else {
                    console.log('✓ ok');
                  }
                });
                it('debería devolver true para el cvv, 835',() => {
                    if (validations.validateNumbersCreditCard('835') !== true) {
                      console.error('✗ fail');
                    } else {
                      console.log('✓ ok');
                    }
                  });
                  it('debería devolver false para el cvv f134', () => {
                      if (validations.validateNumbersCreditCard('f134') !== true) {
                        console.error('✗ fail');
                      } else {
                        console.log('✓ ok');
                      }
                    });

});