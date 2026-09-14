/**
 * funcoes.ts
 * Exemplos de diferentes formas de declarar e usar funções em TypeScript,
 * com tipagem de parâmetros e retorno.
 */

// Função declarada, com tipos explícitos de parâmetros e retorno
function somar(a: number, b: number): number {
  return a + b;
}

// Função expressa
const subtrair = function (a: number, b: number): number {
  return a - b;
};

// Arrow function
const multiplicar = (a: number, b: number): number => a * b;

// Arrow function com corpo de bloco e tratamento de erro
const dividir = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Não é possível dividir por zero");
  }
  return a / b;
};

// Parâmetro opcional (?) e parâmetro padrão
function saudacao(nome: string = "visitante", sobrenome?: string): string {
  return sobrenome ? `Olá, ${nome} ${sobrenome}!` : `Olá, ${nome}!`;
}

// Rest parameters tipados
function somarTodos(...numeros: number[]): number {
  return numeros.reduce((total, atual) => total + atual, 0);
}

// Função de alta ordem: recebe outra função como argumento,
// tipada com um "function type"
function aplicarOperacao(
  a: number,
  b: number,
  operacao: (x: number, y: number) => number
): number {
  return operacao(a, b);
}

// Função genérica: funciona com qualquer tipo T
function primeiroElemento<T>(itens: T[]): T | undefined {
  return itens[0];
}

// Função assíncrona tipada com Promise<string>
async function buscarMensagemAtrasada(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Mensagem carregada após 500ms"), 500);
  });
}

function demonstrarFuncoes(): void {
  console.log("--- Exemplos de funções ---");
  console.log("somar(2, 3):", somar(2, 3));
  console.log("subtrair(5, 2):", subtrair(5, 2));
  console.log("multiplicar(4, 3):", multiplicar(4, 3));
  console.log("dividir(10, 2):", dividir(10, 2));
  console.log("saudacao():", saudacao());
  console.log("saudacao('Maria', 'Silva'):", saudacao("Maria", "Silva"));
  console.log("somarTodos(1,2,3,4):", somarTodos(1, 2, 3, 4));
  console.log("aplicarOperacao(6, 3, multiplicar):", aplicarOperacao(6, 3, multiplicar));
  console.log("primeiroElemento([10, 20, 30]):", primeiroElemento([10, 20, 30]));
}

async function demonstrarFuncaoAssincrona(): Promise<void> {
  const resultado = await buscarMensagemAtrasada();
  console.log("buscarMensagemAtrasada():", resultado);
}

export {
  somar,
  subtrair,
  multiplicar,
  dividir,
  saudacao,
  somarTodos,
  aplicarOperacao,
  primeiroElemento,
  buscarMensagemAtrasada,
  demonstrarFuncoes,
  demonstrarFuncaoAssincrona,
};
