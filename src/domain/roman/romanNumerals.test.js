import roman from "./romanNumerals";

describe("The Roman numeral converter", () => {

  expectNumeral("I", 1);
  expectNumeral("II", 2);
  expectNumeral("IV", 4);
  expectNumeral("V", 5);
  expectNumeral("VI", 6);
  expectNumeral("VII", 7);
  expectNumeral("IX", 9);
  expectNumeral("X", 10);
  expectNumeral("XI", 11);
  expectNumeral("XIV", 14);
  expectNumeral("XV", 15);
  expectNumeral("XIX", 19);
  expectNumeral("XX", 20);
  expectNumeral("XXX", 30);
  expectNumeral("XL", 40);
  expectNumeral("XLV", 45);
  expectNumeral("L", 50);
  expectNumeral("C", 100);
  expectNumeral("D", 500);
  expectNumeral("M", 1000);
  expectNumeral("MCDXLV", 1445);
  expectNumeral("MCMXIV", 1914);
  expectNumeral("MCMLXXVIII", 1978);
  expectNumeral("MCMXCIX", 1999);


  function expectNumeral(expected, input) {
    it(`given ${input} returns ${expected}`, () => {
      expect(roman(input)).toEqual(expected);
    });
  }
});
