const calculadora = require("../Models/calculadora.js");

test("Somar 2 + 2 deveria ser 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});
