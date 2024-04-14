import { buildMakePerson } from "./../../src/js-foundation/05-factory";

describe("js-foundation/05-factory.ts", () => {
    const getUUID = () => "1234";
    const getAge = () => 23;
    test("buildMakePerson should return a function", () => {
        const makePerson = buildMakePerson({ getUUID, getAge });
        expect(typeof makePerson).toBe("function");
    });
});
