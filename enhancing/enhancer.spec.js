const enhancer = require("./enhancer.js");
// test away!
describe("enhancers", () => {
  describe("repair", () => {
    it("runs without crashing", () => {
      enhancer.repair({
        name: "a name",
        durability: 20,
        enhancement: 50
      });
    });
    it("returns object with durability:100", () => {
      const expectedOutput = {
        name: "a name",
        durability: 100,
        enhancement: 50
      };
      expect(
        enhancer.repair({
          name: "a name",
          durability: 20,
          enhancement: 50
        })
      ).toEqual(expectedOutput);
    });
  });

  describe("succeed", () => {
    it("runs without crashing", () => {
      enhancer.succeed({
        name: "a name",
        durability: 20,
        enhancement: 10
      });
    });
    it("runs without crashing", () => {
      enhancer.succeed({
        name: "a name",
        durability: 20,
        enhancement: 21
      });
    });

    it("increments enhancement by 1 conditionally", () => {
      const expectedOutput2 = {
        name: "a name",
        durability: 20,
        enhancement: 11
      };
      const expectedOutput3 = {
        name: "a name",
        durability: 20,
        enhancement: 20
      };
      expect(
        enhancer.succeed({
          name: "a name",
          durability: 20,
          enhancement: 10
        })
      ).toEqual(expectedOutput2);

      expect(
        enhancer.succeed({
          name: "a name",
          durability: 20,
          enhancement: 20
        })
      ).toEqual(expectedOutput3);
    });
  });

  describe("fail", () => {
    it("runs without crashing", () => {
      enhancer.fail({
        name: "a name",
        durability: 20,
        enhancement: 10
      });
    });
    it("decrements durability by 5 or 10 conditionally", () => {
      const expectDurDec5 = {
        name: "a name",
        durability: 15,
        enhancement: 10
      };
      const expectDurDec10 = {
        name: "a name",
        durability: 10,
        enhancement: 15
      };
      const expectEnhanceDec1 = {
        name: "a name",
        durability: 10,
        enhancement: 16
      };

      expect(
        enhancer.fail({
          name: "a name",
          durability: 20,
          enhancement: 10
        })
      ).toEqual(expectDurDec5);

      expect(
        enhancer.fail({
          name: "a name",
          durability: 20,
          enhancement: 15
        })
      ).toEqual(expectDurDec10);

      expect(
        enhancer.fail({
          name: "a name",
          durability: 20,
          enhancement: 17
        })
      ).toEqual(expectEnhanceDec1);
    });
  });

  describe("get", () => {
    it("runs without crashing", () => {
      enhancer.get({
        name: "Item",
        durability: 20,
        enhancement: 2
      });
    });
    it("returns name preceeded by enhancement (conditional)", () => {
      const expectedName = {
        name: "[+2]Item",
        durability: 100,
        enhancement: 2
      };
      expect(
        enhancer.get({
          name: "Item",
          durability: 100,
          enhancement: 2
        })
      ).toEqual(expectedName);
    });
  });
});
