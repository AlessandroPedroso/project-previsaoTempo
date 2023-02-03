const botao = document.querySelector('#buscar');
let chaveKey = '077cbd45a9ea2bf6d8da89720a5859fa';
let chaveRodolfo = 'cebcd482eda57fa9a6714c1c2ba91885';
const cidade = document.querySelector('.cidade');
const temperatura = document.querySelector('.temp');
const descricao = document.querySelector('.descricao');
const umidade = document.querySelector('.umidade');
const imgTemperatura = document.querySelector('.icone');

const colocaNaTela = (dados) => {

    cidade.innerHTML = "Tempo em " + dados.name;
    temperatura.innerHTML = Math.floor(dados.main.temp) + "ºC"
    descricao.innerHTML = dados.weather[0].description
    umidade.innerHTML = `Umidade: ${dados.main.humidity}%`
    imgTemperatura.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    //console.log(dados)
}

const buscarCidade = async (cidade) => {

    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveRodolfo}&lang=pt_br&units=metric`)
        .then(resposta => resposta.json())
    // let dadosConvertido = await dados.json();
    colocaNaTela(dados)
}

botao.addEventListener('click', () => {

    let cidade = document.querySelector('.input-cidade').value
    buscarCidade(cidade)
})