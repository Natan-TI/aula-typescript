// Ex. 1
var meuCarro = {
    marca: "Dodge",
    modelo: "Journey",
    ano: 2014,
    motor: "3.6",
};
console.log("O meu carro é: ", meuCarro);
var resultado = function (x, y) { return x * y; };
console.log("10 x 2 = ", resultado(10, 2));
console.log("7 x 6 = ", resultado(7, 6));
console.log("3 x 8 = ", resultado(3, 8));
// Ex. 3
function inverterArray(array) {
    return array.reverse();
}
var numeros = [1, 2, 3, 4, 5];
var carros = ["Jetta", "Ka", "Corolla", "Etios", "Porsche"];
console.log("Array invertido: ", inverterArray(numeros));
console.log("Array invertido: ", inverterArray(carros));
var UserRepository = /** @class */ (function () {
    function UserRepository() {
        this.usuarios = [];
    }
    UserRepository.prototype.save = function (dado) {
        this.usuarios.push(dado);
    };
    UserRepository.prototype.getAll = function () {
        return this.usuarios;
    };
    return UserRepository;
}());
var repository = new UserRepository();
repository.save({ name: "Natan", email: "natan201125@hotmail.com" });
repository.save({ name: "Kayky", email: "kaykypribeiro@gmail.com" });
repository.save({ name: "Enzo", email: "enzolulu@gmail.com" });
console.log("Usuários listados:", repository.getAll());
function processarResposta(resposta) {
    if (typeof resposta === "string") {
        console.log("Resposta: ".concat(resposta));
    }
    else if (typeof resposta === "boolean") {
        console.log("Deu certo? ".concat(resposta ? "Sim" : "Não"));
    }
}
processarResposta("Hello world!");
processarResposta(false);
processarResposta(true);
var estudanteETrabalhador = {
    nome: "Natan Eguchi dos Santos",
    curso: "Engenharia de Software",
    empresa: "Easypoints",
    cargo: "Desenvolvedor Fullstack Pleno"
};
console.log("Estudante e trabalhador:", estudanteETrabalhador);
