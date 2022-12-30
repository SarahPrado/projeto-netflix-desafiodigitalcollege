function SaibaMais(){
    var pontos = document.getElementsById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnsaibamais=document.getElementById("btnsaibamais")

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnsaibamais.innerHTML="Saiba Mais.";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnsaibamais.innerHTML="Voltar";
    }
}