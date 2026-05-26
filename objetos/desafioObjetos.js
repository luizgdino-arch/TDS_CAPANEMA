/* Shift + Alt + A -> Atalho para comentários de várias linhas

Desafios: Criar um objeto que contenha informações de um filme favorito,
sendo necessário inserir uma nova propriedade, modificar uma existente, e
excluir uma propriedade. No final imprimir o objetivo no console

*/

const filmeFavorito = {
    titulo: "Senhor dos aneis",
    lançamento: 2001,
    genero: "Fantasia"
}

filmeFavorito.protagonista = "Frodo"; // adicionar
console.log(filmeFavorito);

filmeFavorito.lançamento = 2012; // Modificar
console.log(filmeFaorito);

delete filmeFavorito.protagonista; // Excluir
console.log(filmeFavorito);