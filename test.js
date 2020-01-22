import { toRoman } from './index';
import { equal } from "assert";

describe(('Conversión a números romanos'), () => {
  it('test 1', () => { equal(toRoman(1), "I") })
})