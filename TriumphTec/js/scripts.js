var resposta = {};
var teste = 0;
var questaoUm = document.getElementById('questao1');
var questaoDois = document.getElementById('questao2');
var questaoTres = document.getElementById('questao3');
var questaoQuatro = document.getElementById('questao4');
var questaoCinco = document.getElementById('questao5');

var url = '';

var botao = document.getElementById("proximaQuestao1");
botao.style.display = "none";

var rodape = document.getElementById("footerPrincipal");

function habilitarBotao1(teste){
    var botao1 = document.getElementById("proximaQuestao1");
    var botao2 = document.getElementById("proximaQuestao2");
    if(teste == 1){
        botao1.style.display = "inline-block";
        botao1.style.background = "#075da8";
        botao2.style.display = "none";
        rodape.style.marginTop = '27px';
    }
}

function habilitarBotao2(teste){
    var botao2 = document.getElementById("proximaQuestao2");
    var botao3 = document.getElementById("proximaQuestao3");
    if(teste == 2){
        botao2.style.display = "inline-block";
        botao2.style.background = "#075da8";
        botao3.style.display = "none";
        rodape.style.marginTop = '27px';
    }
}

function habilitarBotao3(teste){
    var botao3 = document.getElementById("proximaQuestao3");
    var botao4 = document.getElementById("proximaQuestao4");
    if(teste == 3){
        botao3.style.display = "inline-block";
        botao3.style.background = "#075da8";
        botao4.style.display = "none";
        rodape.style.marginTop = '27px';
    }
}

function habilitarBotao4(teste){
    var botao4 = document.getElementById("proximaQuestao4");
    var botao5 = document.getElementById("proximaQuestao5");
    if(teste == 4){
        botao4.style.display = "inline-block";
        botao4.style.background = "#075da8";
        botao5.style.display = "none";
        rodape.style.marginTop = '27px';
    }
}

function habilitarBotao5(teste){
    var botao = document.getElementById("proximaQuestao5");
    if(teste == 5){
        botao.style.display = "inline-block";
        botao.style.background = "#075da8";
        rodape.style.marginTop = '27px';
    }
}

function valorResposta(questaoNumero, evento){
    if(evento.target.type === 'radio'){
        console.log(evento.target.value);
        resposta['questao'+questaoNumero] = parseInt(evento.target.value);
        console.log(resposta);
        teste = questaoNumero;
        habilitarBotao1(teste)
        habilitarBotao2(teste)
        habilitarBotao3(teste)
        habilitarBotao4(teste)
        habilitarBotao5(teste)
    }
}

questaoUm.addEventListener('click', function(evento){
    valorResposta(1, evento)
})
questaoDois.addEventListener('click', function(evento){
    valorResposta(2, evento)
})
questaoTres.addEventListener('click', function(evento){
    valorResposta(3, evento)
})
questaoQuatro.addEventListener('click', function(evento){
    valorResposta(4, evento)
})
questaoCinco.addEventListener('click', function(evento){
    valorResposta(5, evento)
})

function totalResposta(){
    var total_resposta = 0+
    resposta.questao1+
    resposta.questao2+
    resposta.questao3+
    resposta.questao4+ 
    resposta.questao5;
    
    return total_resposta;
}

function encontrarProfissao(){
    if(totalResposta() <= 5){
        var profissao = "Desenvolvedor de Software";
    } else if(totalResposta() > 5 && totalResposta() <=10){
        var profissao = "Analista de sistemas"
    } else if(totalResposta() > 10 && totalResposta() <=15){
        var profissao = "Segurança da Informação"
    } else if(totalResposta() > 15 && totalResposta() <=20){
        var profissao = "Desenvolvedor Web"
    } else if(totalResposta() > 20 && totalResposta() <=25){
        var profissao = "UI UX Designer"
    } 

    return profissao;
}

var proximaQuestao1 = document.getElementById('proximaQuestao1');
var proximaQuestao2 = document.getElementById('proximaQuestao2');
var proximaQuestao3 = document.getElementById('proximaQuestao3');
var proximaQuestao4 = document.getElementById('proximaQuestao4');
var proximaQuestao5 = document.getElementById('proximaQuestao5');

function proxQuestao(numero_questao){
    var questao_anterior = numero_questao - 1;
    var numero_questao = numero_questao.toString();
    var questao_anterior = questao_anterior.toString();

    var atual = document.getElementById('questao'+numero_questao);
    var anterior = document.getElementById('questao'+questao_anterior);

    atual.style.display = "block";
    anterior.style.display = "none";
    rodape.style.marginTop = '75px'

    if(numero_questao == 6){
        var botaoProf = document.getElementById("profissao");
        botaoProf.style.display = "inline-block";
    }
}

proximaQuestao1.addEventListener('click', function(){
    proxQuestao(2);
    progressoBarra('40%');

})
proximaQuestao2.addEventListener('click', function(){
    proxQuestao(3);
    progressoBarra('60%');
})
proximaQuestao3.addEventListener('click', function(){
    proxQuestao(4);
    progressoBarra('80%');
})
proximaQuestao4.addEventListener('click', function(){
    proxQuestao(5);
    progressoBarra('100%');
})
proximaQuestao5.addEventListener('click', function(){
    proxQuestao(6);
})

proximaQuestao5.addEventListener('click', function(){
    document.getElementById("totalResposta").innerHTML = totalResposta();
    document.getElementById("profissao").innerHTML = encontrarProfissao();
    url = encontrarProfissao();
    var botaoProf = document.getElementById('profissao');
    url = url+'.html';
    botaoProf.href = url;
})

function progressoBarra(percentage_width){
    var barra = document.getElementById("barraProg");
    barra.style.width = percentage_width;
}

function LeiaMais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnLeiaMais=document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Leia Menos";
    }
}