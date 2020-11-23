import { toRoman } from './index';
import { strictEqual } from "assert";
import { clearScreenDown } from 'readline';

describe(('Conversión a números romanos'), () => {
  it('test 1', () => { strictEqual(toRoman(1), "I") });
  it('test 2', () => { strictEqual(toRoman(2), "II") });
  it('test 3', () => { strictEqual(toRoman(3), "III") });
  it('test 4', () => { strictEqual(toRoman(4), "IV") });
  it('test 5', () => { strictEqual(toRoman(5), "V") });
  it('test 7', () => { strictEqual(toRoman(7), "VII") });
  it('test 9', () => { strictEqual(toRoman(9), "IX") });
  it('test 11', () => { strictEqual(toRoman(11), "XI") });
  it('test 14', () => { strictEqual(toRoman(14), "XIV") });
  it('test 16', () => { strictEqual(toRoman(16), "XVI") });
  it('test 20', () => { strictEqual(toRoman(20), "XX") });
  it('test 35', () => { strictEqual(toRoman(35), "XXXV") });
  it('test 40', () => { strictEqual(toRoman(40), "XL") });
  it('test 49', () => { strictEqual(toRoman(49), "XLIX") });
  it('test 50', () => { strictEqual(toRoman(50), "L") });
  it('test 69', () => { strictEqual(toRoman(69), "LXIX") });
  it('test 90', () => { strictEqual(toRoman(90), "XC") });
  it('test 100', () => { strictEqual(toRoman(100), "C") });
  it('test 111', () => { strictEqual(toRoman(111), "CXI") });
  it('test 400', () => { strictEqual(toRoman(400), "CD") });
  it('test 500', () => { strictEqual(toRoman(500), "D") });
  it('test 666', () => { strictEqual(toRoman(666), "DCLXVI") });
  it('test 900', () => { strictEqual(toRoman(900), "CM") });
  it('test 999', () => { strictEqual(toRoman(999), "CMXCIX") });
  it('test 1000', () => { strictEqual(toRoman(1000), "M") });
  it('test 1500', () => { strictEqual(toRoman(1500), "MD") });
  it('test 3000', () => { strictEqual(toRoman(3000), "MMM") });
  it('test 3999', () => { strictEqual(toRoman(3999), "MMMCMXCIX") });

  

  
})
clearScreenDown