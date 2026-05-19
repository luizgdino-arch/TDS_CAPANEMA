// Sistema de um objeto {}
const aluno = {
    nome: "Luiz",
    idade: 24,
    curso: "técnico em Desenvolvimento de sistema"
}

console.log(aluno);
console.log(aluno.nome);
console.log(aluno.[idade]);

aluno.matricula = "2026TDS"; // adiciona uma nova propriedade
aluno.idade = 18; //atualiza caso existir

delete aluno.curso;
console.log(aluno);
