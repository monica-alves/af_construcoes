
// script formulário


var dados_formulario = document.getElementById("btn2").onclick = function(){

    var nome = document.getElementById("exampleFormControlInput1").value;
    var email = document.getElementById("exampleFormControlInput2").value;
    var mensagem = document.getElementById("exampleFormControlTextarea1").value;

    if(nome.length !== 0 & email.length !== 0 & mensagem.length !== 0){
        alert("Mensagem enviada com sucesso.");
        document.getElementById("exampleFormControlInput1").value = "";
        document.getElementById("exampleFormControlInput2").value = "";
        document.getElementById("exampleFormControlTextarea1").value = "";
            
    }else{
        alert("Preencha os dados solicitados");
    }
    
}
