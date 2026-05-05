let hora = new Date();
console.log(hora.getHours(), ":" + hora.getMinutes())
let mensagem = hora <= 18 ? "Boa tarde" : "Bom dia"
console.log(mensagem); 