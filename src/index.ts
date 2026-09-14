/**
 * index.ts
 * Ponto de entrada do projeto: executa os exemplos de variáveis e funções.
 */

import { demonstrarVariaveis } from "./variaveis";
import { demonstrarFuncoes, demonstrarFuncaoAssincrona } from "./funcoes";

async function main(): Promise<void> {
  demonstrarVariaveis();
  console.log("");
  demonstrarFuncoes();
  console.log("");
  await demonstrarFuncaoAssincrona();
}

main();
