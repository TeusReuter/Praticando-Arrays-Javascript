const alunos = ['João', 'Juliana', 'Caio', 'Ana'];

const mediasDosAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];


const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice] + ' sua média é ' + listaDeNotasEAlunos[1][indice];
    } else {
        return `${nomeDoAluno}, você não está cadastrado no sistema!`;
    }
}

// console.log(exibeNomeNota("Matheus"));

// const carros = ['Gol', 'Celta', 'Uno', 'Clio'];
// const marcas = ['VW', 'Chevrolet', 'Fiat', 'Renault'];
// const valores = [30, 15, 25, 18];

// let carrosMarcasValores = [carros,marcas, valores];

// const exibeCarro = (nomeDoCarro) => {
//     if (carrosMarcasValores[0].includes(nomeDoCarro)) {
//         let index = carrosMarcasValores[0].indexOf(nomeDoCarro);
//         return `O ${carrosMarcasValores[0][index]} é da marca ${carrosMarcasValores[1][index]} e está custando ${carrosMarcasValores[2][index]} mil reais`
//     }
// } 

// console.log(exibeCarro('Clio'));

const bandas = ['Green Day', 'Fall Out Boy', 'Panic! At the Disco', 'My Chemical Romance'];
const vocalistas = ['Billie Joe', 'Patrick Stump', 'Brendon Urie', 'Gerard Way'];

const bandasVocalistas = [bandas, vocalistas];

// console.log(bandasVocalistas[0][0], bandasVocalistas[1][0]);

const exibeBandaVocal = (nomeBanda) => {
    if (bandasVocalistas[0].includes(nomeBanda)) {
        let index = bandasVocalistas[0].indexOf(nomeBanda);
        return `O vocalista do ${bandasVocalistas[0][index]} é o ${bandasVocalistas[1][index]}`;
    }
}

console.log(exibeBandaVocal('My Chemical Romance'));