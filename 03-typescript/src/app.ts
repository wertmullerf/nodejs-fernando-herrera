import { findHero } from "./services/hero.service";

const hero = findHero(2);
console.log(hero?.name ?? "Not found");
