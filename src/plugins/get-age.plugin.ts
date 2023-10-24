import { differenceInYears } from 'date-fns';

export const getAge = (birthDate: string): number => {
  return differenceInYears(new Date(), new Date(birthDate));
};
