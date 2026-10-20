//Cálculo Média Consumo de Energia Elétrica
//Situação-problema: Uma família deseja acompanhar seu consumo de energia elétrica durante quatro meses para verificar se está respeitando uma meta de consumo mensal.

let consumoMes1 = parseFloat(prompt("Digite o consumo de energia elétrica do mês 1 (em kWh):"));
let consumoMes2 = parseFloat(prompt("Digite o consumo de energia elétrica do mês 2 (em kWh):"));
let consumoMes3 = parseFloat(prompt("Digite o consumo de energia elétrica do mês 3 (em kWh):"));
let consumoMes4 = parseFloat(prompt("Digite o consumo de energia elétrica do mês 4 (em kWh):"));   

let mediaConsumo = (consumoMes1 + consumoMes2 + consumoMes3 + consumoMes4) / 4;

let metaConsumo = 150; // Meta de consumo mensal em kWh
let statusmeta = mediaConsumo <= metaConsumo ? "Atingiu a meta de consumo." : "Não atingiu a meta de consumo.";

console.log("=== MÉDIA DE CONSUMO DE ENERGIA ELÉTRICA ===");
console.log("Mês 1: " + consumoMes1 + " kWh");
console.log("Mês 2: " + consumoMes2 + " kWh");
console.log("Mês 3: " + consumoMes3 + " kWh");
console.log("Mês 4: " + consumoMes4 + " kWh");
console.log("Média de consumo: " + mediaConsumo.toFixed(2) + " kWh");
console.log("Status: " + statusmeta);