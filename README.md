# exemplo-node-ts

Projeto Node.js em **TypeScript**, criado para demonstrar, na prática, o uso de **variáveis** e **funções** com tipagem estática.

## O que foi feito

Foi montada a estrutura básica de um projeto Node.js + TypeScript:

```
exemplo-node-ts/
├── package.json      # metadados, scripts e dependências (typescript, ts-node, @types/node)
├── tsconfig.json      # configuração do compilador TypeScript
├── .gitignore          # arquivos/pastas ignorados pelo Git (inclui node_modules/ e dist/)
├── README.md            # este arquivo
└── src/
    ├── index.ts          # ponto de entrada, executa as demonstrações
    ├── variaveis.ts      # exemplos de variáveis com tipagem
    └── funcoes.ts        # exemplos de funções com tipagem
```

### `src/variaveis.ts`
Demonstra:
- Declaração com `let` e `const`, com tipos explícitos (`number`, `string`, `boolean`, etc.);
- Array tipado (`string[]`);
- `interface` para descrever o formato de um objeto (`Pessoa`);
- Union type (`string | number`);
- `enum` (conjunto nomeado de valores constantes).

### `src/funcoes.ts`
Demonstra:
- Função declarada, expressa e arrow function, todas com parâmetros e retorno tipados;
- Parâmetro padrão e parâmetro opcional (`?`);
- Rest parameters tipados (`...numeros: number[]`);
- Função de alta ordem, tipando o parâmetro que é uma função;
- Função genérica (`<T>`);
- Função assíncrona tipada com `Promise<string>`.

### `src/index.ts`
Importa as funções de demonstração dos dois arquivos acima e as executa em sequência.

## Como executar

Pré-requisito: [Node.js](https://nodejs.org) instalado (versão 18 ou superior recomendada).

```bash
# instalar dependências
npm install

# rodar direto em TypeScript, sem gerar arquivos compilados (modo dev)
npm run dev

# ou compilar para JavaScript (gera a pasta dist/) e depois executar
npm run build
npm start
```

## Saída esperada

O script imprime no terminal os exemplos de variáveis (valores, tipos, interface, union type, enum) e os resultados das funções de exemplo (soma, subtração, multiplicação, divisão, saudação, soma de vários números, aplicação de operação, função genérica e uma função assíncrona).
