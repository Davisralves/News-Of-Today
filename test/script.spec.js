import { getJson } from "../js/script";
import { object } from '../js/object.js';
import { testElement } from "domutils";

describe('Testando função getJson()', () => {
  mockFunctions.getJson.mockImplementation(
    (event) => {
      if (event !== 0 && typeof(event) !== 'string') {event = '1'};
      if (event === 'home') event = '2';
      if (event !== 0 && event !== 'home') event = `3`;
      if (event === 0) event = '4';
      return event;
    });
   test('Testa se os "if" funcionam corretamente)', () => {
    expect(mockFunctions.getJson(0)).toBe('4');
    expect(mockFunctions.getJson(1)).toBe('1');
    expect(mockFunctions.getJson('home')).toBe('2');
    expect(mockFunctions.getJson('outro')).toBe('3');
   }); 
});