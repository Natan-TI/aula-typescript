// Ex. 1

interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}

const meuCarro: Carro = {
    marca: "Dodge",
    modelo: "Journey",
    ano: 2014,
    motor: "3.6",
};

console.log("O meu carro é: ", meuCarro);

// Ex. 2

interface Multiplicacao {
    (x: number, y: number): number;
}

const resultado: Multiplicacao = (x, y) => x * y;
console.log("10 x 2 = ", resultado(10, 2));
console.log("7 x 6 = ", resultado(7, 6));
console.log("3 x 8 = ", resultado(3, 8));

// Ex. 3
function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}

const numeros = [1, 2, 3, 4, 5];
const carros = ["Jetta", "Ka", "Corolla", "Etios", "Porsche"]
console.log("Array invertido: ", inverterArray(numeros));
console.log("Array invertido: ", inverterArray(carros));

// Ex. 4
interface Repository<T> {
    save(dado: T): void;
    getAll(): T[];
}
class UserRepository implements Repository<{ name: string; email: string }> {
    private usuarios: { name: string; email: string }[] = [];
    save(dado: { name: string; email: string }): void {
        this.usuarios.push(dado);
    }
    getAll(): { name: string; email: string }[] {
        return this.usuarios;
    }
}

const repository = new UserRepository();
repository.save({ name: "Natan", email: "natan201125@hotmail.com" });
repository.save({ name: "Kayky", email: "kaykypribeiro@gmail.com" });
repository.save({ name: "Enzo", email: "enzolulu@gmail.com" });
console.log("Usuários listados:", repository.getAll());

// Ex. 5
type RespostaServidor = string | boolean;
function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Resposta: ${resposta}`);
    } else if (typeof resposta === "boolean") {
        console.log(`Deu certo? ${resposta ? "Sim" : "Não"}`);
    }
}
processarResposta("Hello world!");
processarResposta(false);
processarResposta(true);

// Ex. 6
type Estudante = {
    nome: string;
    curso: string;
};
type Trabalhador = {
    empresa: string;
    cargo: string;
};
type EstudanteETrabalhador = Estudante & Trabalhador;
const estudanteETrabalhador: EstudanteETrabalhador = {
    nome: "Natan Eguchi dos Santos",
    curso: "Engenharia de Software",
    empresa: "Easypoints",
    cargo: "Desenvolvedor Fullstack Pleno"
};
console.log("Estudante e trabalhador:", estudanteETrabalhador);