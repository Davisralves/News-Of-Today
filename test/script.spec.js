/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
// ({ getJson } = require('../js/script'))
const { describe } = require('yargs');

jest.mock('../js/script');
const getJson = require('../js/script');

describe('Testando função getJson()', () => {
    getJson.mockImplementation(
    (event) => {
      if (event !== 0 && typeof (event) !== 'string') { event = '1'; }
      if (event === 'home') event = '2';
      if (event !== 0 && event !== 'home') event = '3';
      if (event === 0) event = '4';
      return event;
    },
);
   test('Testa se os "if" funcionam corretamente', () => {
    expect(getJson(1)).toBe('1');    
    expect(getJson('home')).toBe('2');
    expect(getJson('outro')).toBe('3');
    expect(getJson(0)).toBe('4');
   }); 
});

describe()