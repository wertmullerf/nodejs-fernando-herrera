import { heroes } from "../data/heroes";

export const findHero = (id: number) => {
    return heroes.find((heroe) => heroe.id === id);
};
