# Testes automatizados com Jest no Node.js

10 exemplos simples de testes com o [Jest](https://jestjs.io/), usando `describe`, `test`, `it` e `expect`.
Em cada pasta há um arquivo com o código e um arquivo `.test.js` com comentários explicando cada linha.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (confira com `node -v` e `npm -v`)

---

## Passo 1: Iniciar o projeto Node

No terminal, entre na pasta:

```bash
cd exemplo-jest
```

Depois rode:

```bash
npm init -y
```

Isso cria o `package.json`, o arquivo que guarda as informações do projeto e as dependências. O `-y` aceita todas as respostas padrão sem fazer perguntas.

## Passo 2: Instalar o Jest

```bash
npm install --save-dev jest
```

- `--save-dev` instala o Jest como dependência de **desenvolvimento**. Ele só serve para testar, não vai junto para produção.
- Depois do comando vão aparecer a pasta `node_modules` e o arquivo `package-lock.json`.
- No `package.json` vai surgir algo assim:

```json
"devDependencies": {
  "jest": "^30.x.x"
}
```

## Passo 3: Configurar o script de teste

No `package.json`, troque esta linha:

```json
"test": "echo \"Error: no test specified\" && exit 1"
```

por:

```json
"test": "jest"
```

## Passo 4: Rodar os testes

Ainda dentro da pasta `exemplo-jest`, use um destes comandos:

```bash
npm test                              # roda todos os exemplos
npx jest 01-operacoes-matematicas     # roda só esta pasta
npm test -- --verbose                 # mostra cada teste pelo nome
```

Se tudo estiver certo, a saída termina assim:

```
Test Suites: 10 passed, 10 total
Tests:       53 passed, 53 total
```

Rodando só a pasta `01-operacoes-matematicas`, aparecem **9 testes passando**.

> **Dica para a aula:** troque `return a + b` por `return a - b` em `somar` (arquivo `01-operacoes-matematicas/calculadora.js`) e rode de novo. Os alunos vão ver o teste falhar, com os valores `Expected` (esperado) e `Received` (recebido) lado a lado.

> **Já baixou o projeto pronto?** Basta rodar `npm install` (instala o Jest listado no `package.json`) e depois `npm test`.

## Passo 5: Ver a cobertura de código

A cobertura mostra **quanto do código foi executado pelos testes**. O Jest já traz esse recurso, então não é preciso instalar nada.

### Rodar com cobertura

```bash
npm test -- --coverage                       # todos os exemplos
npx jest 01-operacoes-matematicas --coverage # só uma pasta
```

### Ler a tabela no terminal

```
---------------|---------|----------|---------|---------|-------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------|---------|----------|---------|---------|-------------------
calculadora.js |     100 |      100 |     100 |     100 |
```

| Coluna | O que mede |
|---|---|
| **% Stmts** | Instruções (comandos) executadas pelos testes |
| **% Branch** | Caminhos de `if`/`else`, `? :`, `&&`, `\|\|` testados |
| **% Funcs** | Funções chamadas pelo menos uma vez |
| **% Lines** | Linhas executadas |
| **Uncovered Line #s** | Números das linhas que **nenhum** teste executou |

### Abrir o relatório visual em HTML

O comando cria a pasta `coverage/`. Abra no navegador o arquivo `coverage/lcov-report/index.html`, ou rode no terminal (Windows):

```bash
start coverage/lcov-report/index.html
```

Clicando em um arquivo, o código aparece colorido:

- **verde**: linha executada pelos testes;
- **vermelho**: linha que nenhum teste executou;
- **amarelo** ou o marcador **`I`/`E`**: um lado do `if`/`else` que não foi testado.

### Atalho no `package.json` (opcional)

```json
"scripts": {
  "test": "jest",
  "coverage": "jest --coverage"
}
```

Depois é só rodar `npm run coverage`.

> **Dica para a aula:** os exemplos devem dar perto de **100%** de cobertura. Para mostrar a cobertura caindo, apague o teste `"dividir por zero deve lançar erro"` em `01-operacoes-matematicas/calculadora.test.js` e rode de novo. A coluna **% Branch** fica abaixo de 100 e **Uncovered Line #s** passa a mostrar a linha do `throw new Error(...)`. Assim os alunos veem que deixar de testar o caso de erro deixa um trecho do código sem verificação.

---

## Os 10 exemplos

| Pasta | Assunto | Recursos principais |
|---|---|---|
| `01-operacoes-matematicas` | Somar, subtrair, multiplicar e dividir | `toBe`, `toBeCloseTo`, `toThrow` |
| `02-textos` | Maiúsculas, inverter texto, saudação | `toBe`, `toHaveLength`, `toContain` |
| `03-par-impar` | Par, ímpar e positivo (true/false) | `toBe(true)`, `toBeTruthy`, `toBeFalsy`, `not` |
| `04-arrays` | Somar lista, maior valor, filtrar pares | `toEqual`, `toContain`, `toHaveLength` |
| `05-objetos` | Criar e desativar usuário | `toEqual`, `toHaveProperty` |
| `06-validacao` | E-mail, senha e maioridade | `toBeTruthy`, `toBeFalsy`, `not` |
| `07-temperatura` | Celsius ↔ Fahrenheit | `toBe`, `toBeCloseTo` |
| `08-media-escolar` | Média e situação do aluno | `toBeGreaterThanOrEqual`, `toBeLessThanOrEqual` |
| `09-conta-bancaria` | Depósito e saque com erros | `toThrow`, `not.toThrow` |
| `10-assincrono` | Busca de usuário com Promise | `async/await`, `resolves`, `rejects` |

## Estrutura de um teste

```js
const { somar } = require("./calculadora");   // importa o que será testado

describe("Somar", () => {                     // agrupa testes relacionados
  test("2 + 3 deve ser 5", () => {            // um caso de teste
    expect(somar(2, 3)).toBe(5);              // verificação: obtido vs. esperado
  });

  it("-2 + 5 deve ser 3", () => {             // "it" é igual a "test"
    expect(somar(-2, 5)).toBe(3);
  });
});
```

| Recurso | Para que serve |
|---|---|
| `describe` | Agrupa testes relacionados sob um título |
| `test` | Define um caso de teste |
| `it` | Mesmo que `test`, só muda o nome |
| `expect` | Recebe o valor obtido e é combinado com um *matcher* |

O Jest encontra automaticamente os arquivos terminados em `.test.js` (ou `.spec.js`).

## Matchers usados nos exemplos

| Matcher | Uso |
|---|---|
| `toBe(valor)` | Igualdade exata (números, textos, booleanos) |
| `toEqual(valor)` | Compara o conteúdo de objetos e arrays |
| `toBeCloseTo(n)` | Números decimais, com tolerância de arredondamento |
| `toBeTruthy()` / `toBeFalsy()` | Valor verdadeiro / falso |
| `toContain(item)` | Array ou texto contém o item |
| `toHaveLength(n)` | Tamanho de array ou texto |
| `toHaveProperty(nome, valor)` | Objeto possui a propriedade |
| `toBeGreaterThanOrEqual(n)` / `toBeLessThanOrEqual(n)` | Maior ou igual / menor ou igual |
| `toThrow(mensagem)` | A função lança um erro |
| `resolves` / `rejects` | Valor resolvido / erro de uma Promise |
| `not` | Inverte qualquer matcher: `expect(x).not.toBe(3)` |

## Estrutura do projeto

```
exemplo-jest/
├── 01-operacoes-matematicas/
│   ├── calculadora.js
│   └── calculadora.test.js
├── 02-textos/
├── 03-par-impar/
├── 04-arrays/
├── 05-objetos/
├── 06-validacao/
├── 07-temperatura/
├── 08-media-escolar/
├── 09-conta-bancaria/
├── 10-assincrono/
├── package.json
└── README.md
```
