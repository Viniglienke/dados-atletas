class Atleta{
    
    constructor(nome,idade,peso,altura,notas){
this.nome = nome
this.idade = idade
this.peso = peso
this.altura = altura
this.notas = notas
this.categoria = undefined
this.imc = undefined
this.media = undefined
    }
calculaCategoria(){
if(atleta.idade >= 9 && atleta.idade <= 11){
   return atleta.categoria = "Infantil"

}else{
   if(atleta.idade >= 12 && atleta.idade <=13 ){
   return atleta.categoria = "Juvenil"

}else{
   if(atleta.idade >= 14 && atleta.idade<=15){
   return atleta.categoria = "Intermediario"

}else{
    if(atleta.idade >= 16 && atleta.idade<=30){
    return atleta.categoria = "Adulto"
}
else{return atleta.categoria = "Sem Categoria"}
}}}}

calculaIMC(){
    let multi = atleta.altura*atleta.altura
    atleta.imc = atleta.peso/multi
    return atleta.imc
}

calculaMediaValida(){
    let soma = 0
    let media = 0
    let notas = atleta.notas
    notas.sort(function(a,b){
        if(a > b) return 1
        if(a < b) return -1
        return 0
    })
    notas.pop()
    notas.shift()
    notas = notas
    atleta.notas.forEach(function(nota){
    soma = soma + nota
    media = soma/notas.length
    })
    return media
}
obtemNomeAtleta(){
return atleta.nome
}
obtemIdadeAtleta(){
return atleta.idade
}
obtemPesoAtleta(){
return atleta.peso
}
obtemNotasAtleta(){
return atleta.notas
}
obtemCategoria(){
return atleta.calculaCategoria()
}
obtemIMC(){
return atleta.calculaIMC()
}
obtemMediaValida(){
return atleta.calculaMediaValida()
}

}

 
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88],);
    
 console.log(`Nome: ${atleta.nome}
Idade: ${atleta.idade}

Peso: ${atleta.peso}

Altura: ${atleta.altura}

Notas: ${atleta.notas}

Categoria: ${atleta.obtemCategoria()}

IMC: ${atleta.obtemIMC()}

Média válida: ${atleta.obtemMediaValida()}
`
)