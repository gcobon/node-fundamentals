// const { getAge, getUUID } = require("../plugins");

interface BuildMakePersonOptions {
  getAge: (birthDate: string) => number;
  getUUID: () => string;
}

interface Person {
  id: string;
  name: string;
  birthDate: string;
  age: number;
}

export const buildMakePerson = ({
  getUUID,
  getAge,
}: BuildMakePersonOptions) => {
  return ({ name, birthDate }: { name: string; birthDate: string }): Person => {
    return {
      id: getUUID(),
      name,
      birthDate,
      age: getAge(birthDate),
    };
  };
};

// const obj = { name: "John", birthDate: new Date(1980, 0, 1) };

// const person = buildPerson(obj);

// console.log(person);
