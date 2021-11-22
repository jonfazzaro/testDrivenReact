export default function roman(number) {
  const key = prefixKey(number);
  return key ? render(number, key) : eyes(number);
}

function eyes(number) {
    return "I".repeat(number);
}

function render(number, key) {
    return keys[key] + roman(number - key);
}

function prefixKey(number) {
  return Math.max(...Object.keys(keys).filter((k) => k <= number));
}

const keys = {
  0: "",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};
