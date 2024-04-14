import { emailTemplate } from "./../../src/js-foundation/01-template";
describe("js-foundation/01-template.ts", () => {
    test("emailtTemplate should contain a greeting", () => {
        expect(emailTemplate).toContain("Hi, ");
    });
    test("emailtTemplate should contain {{name}} and {{orderId}}", () => {
        expect(emailTemplate).toContain("{{name}}");
        expect(emailTemplate).toContain("{{orderId}}");
    });
});
