// Exemplo 07 - Testes de conversão de temperatura

// importa as funções do arquivo temperatura.js
const { celsiusParaFahrenheit, fahrenheitParaCelsius } = require("./temperatura");

// grupo de testes de Celsius para Fahrenheit
describe("celsiusParaFahrenheit", () => {
  // ponto de congelamento da água
  test("0 °C deve ser 32 °F", () => {
    // verifica a conversão exata
    expect(celsiusParaFahrenheit(0)).toBe(32);
  });

  // ponto de ebulição da água
  it("100 °C deve ser 212 °F", () => {
    // verifica a conversão exata
    expect(celsiusParaFahrenheit(100)).toBe(212);
  });
});

// grupo de testes de Fahrenheit para Celsius
describe("fahrenheitParaCelsius", () => {
  // temperatura do corpo humano
  test("98.6 °F deve ser aproximadamente 37 °C", () => {
    // toBeCloseTo evita falhas por imprecisão de casas decimais (o resultado é 36.99999...)
    expect(fahrenheitParaCelsius(98.6)).toBeCloseTo(37);
  });

  // curiosidade: -40 é igual nas duas escalas
  it("-40 °F deve ser -40 °C", () => {
    // verifica que o valor se mantém
    expect(fahrenheitParaCelsius(-40)).toBe(-40);
  });
});
