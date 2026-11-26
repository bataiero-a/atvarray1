//01
let nomes = ["Ana", "Bruno", "Carla", "Diego", "Elena"]

primeiroNome = 0
ultimoNome = (nomes.length -1)
totalAlunos = (nomes.length)

console.log("O primeiro nome é: " + nomes[primeiroNome])
console.log("O ultimo nome é: " + nomes[ultimoNome])
console.log("O total de Alunos é: " + totalAlunos)


//02

let pedido = ["Teclado Mecânico", "Mouse Gamer"]

function fnAdicionarProduto(lista, novoItem){
pedido.push(novoItem)
console.log(pedido)
}

fnAdicionarProduto(pedido, "Headseat USB")

//03

let fila = ["Marcos", "Juliana", "Roberto"]
function fnEncaixarPrioridade(fila, nomePaciente){
    fila.unshift(nomePaciente)
    console.log(fila)
}

fnEncaixarPrioridade(fila, "Dona Clara(idosa)")

//04

let filaRetirada =  ["Dona Clara (Idosa)", "Marcos", "Juliana", "Roberto"]

function fnChamarProximo(filaRetirada){
    fila.shift(filaRetirada)
    console.log(filaRetirada)
}

fnChamarProximo(fila)

//05

let lista = ["Escreveu título", "Aplicou negrito", "Inseriu tabela"]

function fnDesfazeracao(lista){
    lista.pop(lista)
    console.log(lista)
}

fnDesfazeracao(lista)

//06

let listaContagem = ["Camiseta", "Calça", "Tênis", "Boné"]

function fnVerificarEstoque(listaContagem){
    console.log(listaContagem.length)
}

fnVerificarEstoque(listaContagem)

//07

let convidados = ["Lucas", "Mariana", "Thiago", "Beatriz"]
 
function fnEstaNaLista(convidados,nome){
    if(convidados.includes(nome) == true){
        console.log(nome+" esta convidado");
       
    }
    else{
        console.log(nome+" nao esta convidado");
       
    }
}
 
fnEstaNaLista(convidados, "Mariana")
fnEstaNaLista(convidados, "Rafael")
 

//08

let ordem = ["Arroz", "Feijão", "Açúcar", "Café", "Sal"]

function fnConsultarCorredor(ordem, item){
    console.log("o Café está na ordem: " + (ordem.indexOf("Café") + 1))

    if (ordem.includes(item) == false){
        console.log("O " + item + " não tem no array");
        
    }
}
 
fnConsultarCorredor (ordem, "Macarrão")

//09

let preços = [15.00, 25.00, 40.00] 

function fnAtualizarPreco(lista, indice, novoValor){
    if ((lista.length - 1) < indice){
        console.log(`Produto não encontrado!`)
        return
    }
        
    lista[indice] = novoValor

    console.log(`Novos valores de preços ${lista}`)
}

fnAtualizarPreco(preços, 2, 28.50)

//10

function fnCriarBoletim(nota1, nota2, nota3){
    let notas = [nota1, nota2, nota3]
 
    console.log(notas);
   
}

fnCriarBoletim(8, 9, 2)
