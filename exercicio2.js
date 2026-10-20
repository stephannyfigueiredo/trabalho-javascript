//Cálculo Média de Vendas
//Situação-problema: Uma empresa deseja acompanhar o desempenho de um vendedor durante quatro semanas. Para isso, precisa de um programa que calcule a média semanal de vendas realizadas

let vendasSemana1 = parseFloat(prompt("Digite o valor das vendas da semana 1:"));
let vendasSemana2 = parseFloat(prompt("Digite o valor das vendas da semana 2:"));
let vendasSemana3 = parseFloat(prompt("Digite o valor das vendas da semana 3:"));
let vendasSemana4 = parseFloat(prompt("Digite o valor das vendas da semana 4:"));

let mediaVendas = (vendasSemana1 + vendasSemana2 + vendasSemana3 + vendasSemana4) / 4;

console.log("=== MÉDIA DE VENDAS ===");
console.log("Semana 1: " + vendasSemana1.toFixed(2));
console.log("Semana 2: " + vendasSemana2.toFixed(2));
console.log("Semana 3: " + vendasSemana3.toFixed(2));
console.log("Semana 4: " + vendasSemana4.toFixed(2));
console.log("Média semanal de vendas: " + mediaVendas.toFixed(2));