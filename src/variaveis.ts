/**
 * variaveis.ts
 * Exemplos de declaração e uso de variáveis em TypeScript,
 * incluindo tipagem estática (o principal diferencial em relação ao JS puro).
 */

// let: variável cujo valor pode ser reatribuído (tipo inferido como number)
let contador: number = 0;
contador += 1;

// const: valor não pode ser reatribuído
const nomeDoProjeto: string = "exemplo-node-ts";

// Tipos primitivos com tipagem explícita
const numero: number = 42;
const texto: string = "Olá, mundo!";
const booleano: boolean = true;
const semValor: null = null;
let indefinido: undefined;

// Array tipado
const lista: string[] = ["maçã", "banana", "laranja"];

// Interface: define o formato de um objeto
interface Pessoa {
  nome: string;
  idade: number;
}

const pessoa: Pessoa = {
  nome: "Ana",
  idade: 28,
};

// Union type: variável que aceita mais de um tipo
let identificador: string | number = "abc123";
identificador = 123; // também é válido

// Enum: conjunto nomeado de valores constantes
enum StatusPedido {
  Pendente = "PENDENTE",
  Enviado = "ENVIADO",
  Entregue = "ENTREGUE",
}

const statusAtual: StatusPedido = StatusPedido.Enviado;

export function demonstrarVariaveis(): void {
  console.log("--- Exemplos de variáveis ---");
  console.log("contador (let):", contador);
  console.log("nomeDoProjeto (const):", nomeDoProjeto);
  console.log("numero:", numero, "| tipo:", typeof numero);
  console.log("texto:", texto, "| tipo:", typeof texto);
  console.log("booleano:", booleano, "| tipo:", typeof booleano);
  console.log("semValor:", semValor);
  console.log("indefinido:", indefinido);
  console.log("lista:", lista);
  console.log("pessoa:", pessoa);
  console.log("identificador (union type):", identificador);
  console.log("statusAtual (enum):", statusAtual);
}

export { pessoa, lista, Pessoa, StatusPedido };
