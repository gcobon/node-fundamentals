import { getUUID, getAge, buildLogger } from "./plugins";
import { getPokemonById } from "./js-foundation/promises";
import { buildMakePerson } from "./js-foundation/factory";

// *****factory function ****
const makePerson = buildMakePerson({ getAge, getUUID });
const obj = { name: "jhon", birthDate: "1986-10-22" };
const jhon = makePerson(obj);
console.log(jhon);
// ****** end *****

// **** promises ****
getPokemonById(4)
  .then((pokemon) => console.log(pokemon))
  .catch((error) => console.log(error));

// **** logger ****
const logger = buildLogger("app.js");

logger.log("Hola mundo");
logger.error("Esto es un error");
