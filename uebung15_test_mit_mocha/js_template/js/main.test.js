'use strict';
const output1 = document.getElementById('output1');
function myDiv() {
}
output1.innerText = myDiv(27, 3);

mocha.setup('bdd'); 
let assert = chai.assert; 
chai.config.truncateThreshold = 0; 
describe('myDiv', function () {
it('raises to n-th power', function () {
assert.equal(myDiv(27, 3), 9);
});
});
mocha.run();

function myDiv() {
  return 9; 
  }

  describe('myDiv', function () {
    it('raises to n-th power', function () {
    assert.equal(myDiv(27, 3), 9);
    assert.equal(myDiv(4, 2), 2);
    });
    });

    describe('myDiv', function () {
      it('27 / 3 = 9', function () {
      assert.equal(myDiv(27, 3), 9);
      });
      it('4 / 2 = 2', function () {
      assert.equal(myDiv(4, 2), 2);
      });
      });

      function myDiv(Num1, Num2) {
        let result = 1;
        for (let i = 0; i < Num2; i++) {
        result = Num1 / Num2;
        }
        return result;
        }

        describe('myDiv', function () {
          function makeTest(base) {
          let expected = Num1 / Num2;
          it(`${Num1} in the power 3 is ${expected}`, function () {
          assert.equal(myDiv(Num1, 3), expected);
          });
          }
          for (let i = 1; i <= 5; i++) {
          makeTest(i);
          }
          });