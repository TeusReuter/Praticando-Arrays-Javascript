const planos = ['3GB', '5GB', '8GB', '10GB'];
const valores = [35, 45, 60, 70];

const planosComValores = [planos, valores];

// console.log(planosComValores[0][2], planosComValores[1][2] + 'R$');

const exibePlano = (plano) => {
    if (planosComValores[0].includes(plano)) {
        let index = planosComValores[0].indexOf(plano);
        return planosComValores[0][index];
    }
}

// console.log(exibePlano('3GB'))

// const exibeNomeNota = (nomeDoAluno) => {
//     if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
//         let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
//         return listaDeNotasEAlunos[0][indice] + ' sua média é ' + listaDeNotasEAlunos[1][indice];
//     } else {
//         return `${nomeDoAluno}, você não está cadastrado no sistema!`;
//     }
// }


const alunos = ['Harry', 'Draco', 'Luna', 'Cedrico'];
const casas = ['Grifinória', 'Sonserina', 'Corvinal', 'Lufa-Lufa'];

const alunosECasas = [alunos, casas];

// // console.log(alunosECasas[0][0]);

const chapeuSeletor = (bruxo) => {
    if (alunosECasas[0].includes(bruxo)) {
        let index = alunosECasas[0].indexOf(bruxo);
        return `${alunosECasas[0][index]}, você foi selecionado para a ${alunosECasas[1][index]}`;
    } else {
        return `Você é trouxa, não deveria estar em Hogwarts`;
    }
}

console.log(chapeuSeletor('Cedrico'));

