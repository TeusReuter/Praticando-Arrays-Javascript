const nomes = ['João', 'Juliana',
 'Ana', 'Caio', 'Lara', 'Marjorie',
  'Guilherme', 'Aline', 'Fabiana',
'Andre', 'Carlos', 'Paulo', 'Bia',
'Vivian', 'Isabela', 'Vinícius',
'Renan', 'Renata', 'Daisy', 'Camilo'];

// console.log(nomes.length);

const sala1 = nomes.slice(0, nomes.length / 2)
const sala2 = nomes.slice(nomes.length / 2);

// console.log(`Alunos da sala 1: ${sala1}`);
// console.log(`Alunos da sala 1: ${sala2}`);

const carrosDisponiveis = ['argo', 'bravo', 'uno', 'celta', 'gol', 'golf', 'fox', 'polo', 'kwid', 'clio'];

console.log(carrosDisponiveis.length);

const deposito1 = carrosDisponiveis.slice(0, carrosDisponiveis.length/2);
const deposito2 = carrosDisponiveis.slice(carrosDisponiveis.length/2);

console.log(`Os carros que ficarãio no depósito um serão ${deposito1}`);
console.log(`Os carros que ficarãio no depósito dois serão ${deposito2}`);
