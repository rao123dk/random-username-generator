const { generateRandomUsername } = require("../src/index");
jest.mock("../src/utils.js", () => ({
  ...jest.requireActual("../src/utils.js"),
  usernameFromEmail: jest.fn(() => "edx.dheerajrao"),
}));
afterAll(() => {
  jest.clearAllMocks();
});

describe("generateRandomUsername test case", () => {
  test("Generates username randomly", () => {
    const username = generateRandomUsername();
    expect(username.length).toBeTruthy();
  });
  test("Generates username randomly", () => {
    const username = generateRandomUsername({});
    expect(username.length).toBeTruthy();
  });
  test("Generates username with separator", () => {
    const username = generateRandomUsername({ separator: "-" });
    expect(username).toContain("-");
    expect(username.length).toBeGreaterThan(6);
  });

  test("Generates username with email and separator", () => {
    const username = generateRandomUsername({
      email: "edx.dheerajrao@gmail.com",
    });
    expect(username).toContain("edx");
  });

  test("Generates username with email and maxLength", () => {
    const maxLength = 12;
    const username = generateRandomUsername({
      email: "edx.dheerajrao@gmail.com",
      maxLength: maxLength,
    });
    expect(username).toContain("edx");
    expect(username.length).toBeLessThanOrEqual(maxLength);
  });

  test("Generates username with only randomDigits", () => {
    const randomDigits = 4;
    const username = generateRandomUsername({
      randomDigits: randomDigits,
    });
    expect(username.length).toBeGreaterThan(randomDigits);
    expect(username.length).toBeTruthy();
  });

  test("Generates username with separator and randomDigits", () => {
    const randomDigits = 3;
    const username = generateRandomUsername({
      randomDigits: randomDigits,
      separator: "_",
    });
    expect(username.length).toBeGreaterThan(randomDigits);
    expect(username.length).toBeTruthy();
  });
});
