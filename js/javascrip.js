
const botao = document.getElementById("pegarDadosCep")
var pegarDados =  document.querySelector("#pegar")
const estado = document.querySelector("#estado-saida")
const bairro = document.querySelector("#bairro-saida")
const ddd = document.querySelector("#ddd-saida")
const ibge = document.querySelector("#ibge-saida")
/*
document.addEventListener('DOMContentLoaded', () =>{
    let botao = document.getElementById('pegarDadosCep')
   // console.log(botao)
})
*/
/*Função que pega o dado do lado cliente
 */
function analisadorCep(dado){
    //Recebe o valor de dado e armazena em (tamanho)
    const tamanho = dado.cep.value
    //Fiz uma copia do valor e quardei em(cep_cep)
    const cep_cep = tamanho
    //Uso a função length para saber quanto string ou letras tem essa informação
    const tamanho_dado = tamanho.length
    //Uso a função  number que converto uma string em numero
    const tipo_de_dado = Number(tamanho)
    

    //Comparo o valor com 8 para saber se tem a quantidade para valer de um cep de rua 
    if (tamanho_dado == 8){
        
        return cep_cep
        
    } else{
        console.log("Não e um cep")
    }

}

//E um evento ou ação que ao clicar o botão vai ocorrer
botao.addEventListener("click", function(evento){
    evento.preventDefault()
//chamo a função que filtra e armazena dado em (cep_res)
    let cep_res = analisadorCep(pegarDados)

//chamo a função e entro com o dado para buscar API
    pegarDadosCep(cep_res)
    
})












    
//função que busca API viacep.com.br
    async function pegarDadosCep(elemento){

        try{
            /*fecth utiliza http-> API para buscar a informação pedida
            que esta em ${elemento}  */
            var dados = await fetch(`https://viacep.com.br/ws/${elemento}/json/`)            
            var dadosPego = await dados.json()
            
            /*Os dados recebidos em  json são convertido no formato string*/ 
            estado.innerHTML = String(dadosPego.uf)
            bairro.innerHTML = String(dadosPego.bairro)
            ddd.innerHTML = String(dadosPego.ddd)
            ibge.innerHTML = String(dadosPego.ibge)
            console.log(dadosPego)

    
        } catch(erro) {
    
            console.log("deu um pequeno erro no codigo")
        }
    }
 

 
 
   

