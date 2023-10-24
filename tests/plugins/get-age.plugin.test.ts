import { getAge } from './../../src/plugins/get-age.plugin';
import { differenceInYears } from 'date-fns';

describe('plugins/get-age.plugin', () => {
  test('getAge should return the age of a person', () => {
    const birthDate = '1990-10-24';
    const age = getAge(birthDate);
    expect(typeof age).toBe('number');
  });

  test('getAge should return current age', () => {
    const birthDate = '1990-10-24';
    const age = getAge(birthDate);

    const calculatedAge = differenceInYears(new Date(), new Date(birthDate));

    expect(age).toEqual(calculatedAge);
  });
});
