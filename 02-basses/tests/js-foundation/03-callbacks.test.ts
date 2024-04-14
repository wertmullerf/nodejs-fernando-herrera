import { getUserById } from "./../../src/js-foundation/04-arrow";

describe("js-foundation/03-callbacks.ts", () => {
    test("getUserById should return an error", (done) => {
        const id = 10;
        getUserById(id, (err, user) => {
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();
            done();
        });
    });
    test("getUserById should return Jhon Doe with id = 1", () => {
        const id = 1;
        getUserById(id, (err, user) => {
            expect(err).toBeUndefined();
            expect(user).toEqual({ id: 1, name: "John Doe" });
        });
    });
});
