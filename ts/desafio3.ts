// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizarSaldo');
//let botaoLimpar = document.getElementById('limparSaldo');
//let soma = document.getElementById('soma');
//let campoSaldo = document.getElementById('campoSaldo');

botaoAtualizar?.addEventListener("click",function(){ alert("Hello World!"); });


//let saldoTotal = 0;
//limparSaldo();

//function somarAoSaldo(soma: number) {
//    if (campoSaldo){
//      saldoTotal += soma ;
//      campoSaldo.innerHTML = saldoTotal.toString();
//      limparSaldo();
//    }
//}

//function limparSaldo() {
//    if (campoSaldo) {
//      campoSaldo.innerHTML = '';
//    }
//}

//botaoAtualizar.addEventListener('click', function () {
//alert("Cheguei")
 //   if (soma){
  //     somarAoSaldo(Number(soma.innerText));
  //  } else{
  //      somarAoSaldo(Number(soma.innerText)); 
 //   }
//);

//botaoLimpar?.addEventListener('click', function () {
//    limparSaldo();
//});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */