import 'mocha'; 
import { expect } from 'chai';
import { PrimeNumber} from '../src/ejercicio-lab/primeNumber';

const primeNumber = PrimeNumber.getPrimeNumInstance(1);

// constructor
describe('constructor', () => {
  it('should throw an error if n is not a positive integer', () => {
    expect(() => PrimeNumber.getPrimeNumInstance(0)).to.throw('n debe ser un numero entero positivo');
    expect(() => PrimeNumber.getPrimeNumInstance(-1)).to.throw('n debe ser un numero entero positivo');
    expect(() => PrimeNumber.getPrimeNumInstance(1.5)).to.throw('n debe ser un numero entero positivo');
  });
})

// contructor correcto
describe('constructor', () => {
  it('should create a PrimeNumber instance', () => {
    const primeNumber = PrimeNumber.getPrimeNumInstance(1);
    expect(primeNumber).to.be.an.instanceof(PrimeNumber);
  });
})

// getPrimes
describe('getPrimes', () => {
  it('should return the first n primes', () => {
    const primeNumber = PrimeNumber.getPrimeNumInstance(1);
    expect(primeNumber.getPrimes()).to.be.deep.equal([2]);
  });
})

// setPrimes
describe('setPrimes', () => {
  it('should set the first n primes', () => {
    const primeNumber = PrimeNumber.getPrimeNumInstance(1);
    primeNumber.setPrimes(2);
    expect(primeNumber.getPrimes()).to.be.deep.equal([2, 3]);
  });
})

// comprobar getprimesinrange
describe('getPrimesInRange', () => {
  it('should return the first n primes', () => {
    const primeNumber = PrimeNumber.getPrimeNumInstance(1);
    expect(primeNumber.getPrimesInRange(2, 10)).to.be.eql([2, 3, 5, 7]);
  });
})

// getPrimesInRange error
describe('getPrimesInRange', () => {
  it('should throw an error if n or m are not a positive integer', () => {
    expect(() => primeNumber.getPrimesInRange(0, 10)).to.throw('n y m deben ser un numero entero positivo');
    expect(() => primeNumber.getPrimesInRange(-1, 10)).to.throw('n y m deben ser un numero entero positivo');
    expect(() => primeNumber.getPrimesInRange(1.5, 10)).to.throw('n y m deben ser un numero entero positivo');
    expect(() => primeNumber.getPrimesInRange(5, 2)).to.throw('m debe ser mayor que n');
  });
})

// comprobar que es iterable con un foreach
describe('is iterable', () => {
  it('should be iterable', () => {
    primeNumber.setPrimes(5);
    let array: number[] = [];
    [...primeNumber].forEach((prime) => array.push(prime));
    expect(array).to.be.deep.equal([2, 3, 5, 7, 11]);
  });
})
  