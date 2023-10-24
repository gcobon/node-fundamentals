import { buildMakePerson } from './../../src/js-foundation/factory';

describe('js-foundation/factory', () => {
  const getUUID = () => '123';
  const getAge = () => 20;

  test('buildMakePerson should return a function', () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    expect(typeof makePerson).toBe('function');
  });

  test('buildMakePerson should return a person object', () => {
    const makePerson = buildMakePerson({ getUUID, getAge });

    const person = makePerson({ name: 'John Doe', birthDate: '2000-01-01' });

    expect(person).toMatchObject({
      id: '123',
      name: 'John Doe',
      birthDate: '2000-01-01',
      age: 20,
    });
  });
});
