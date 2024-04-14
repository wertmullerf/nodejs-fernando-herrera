"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findHero = void 0;
const heroes_1 = require("../data/heroes");
const findHero = (id) => {
    return heroes_1.heroes.find((heroe) => heroe.id === id);
};
exports.findHero = findHero;
