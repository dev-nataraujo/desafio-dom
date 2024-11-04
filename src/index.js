let msgTotalConta = document.getElementById('total-conta');
let msgNrPessoasPag = document.getElementById('nr-pessoas-pag');
let msgTotalDesconto = document.getElementById('total-desconto');
let msgTotalPessoa = document.getElementById('total-pessoa');

const buttonCalcular = document.getElementById('botao-calcular');
const modal = document.getElementById('modal');
const buttonFinalizar = document.getElementById('botao-finalizar');

let valorDividido = 0;
let desconto = 0;
let valorTotalDesconto = 0;
let valorIndividual = 0;
let comDesconto = false;

function abrirModal() {
    modal.style.display = "block";
}

function finalizar() {
    location.reload();
}
    
function calcularPagamento() {
    let numeroPessoas = document.getElementById('nr-pessoas').value;
    let valorTotal = document.getElementById('valor-total-conta').value;
    let formaPagamento = document.getElementById('forma-pagamento').value;

    if (formaPagamento == '1' || formaPagamento == '2') {
        desconto = valorTotal * 0.1;
        comDesconto = true;
    }
    valorDividido = valorTotal / numeroPessoas;
    valorTotalDesconto = valorTotal - desconto;
    valorIndividual = valorTotalDesconto / numeroPessoas;

    msgTotalConta.textContent = (`O valor total da conta é R$ ${parseFloat(valorTotal).toFixed(2)}.`);
    msgNrPessoasPag.textContent = (`A conta será dividida para ${numeroPessoas} pessoas.`);
    msgTotalDesconto.textContent = (`O novo valor da conta com desconto é R$ ${valorTotalDesconto.toFixed(2)}.`);
    msgTotalPessoa.textContent = (`O valor individual para pagamento da conta é R$ ${valorIndividual.toFixed(2)}.`);

    if (formaPagamento == '3') {
        msgTotalDesconto.style.display = "none";
    } else {
        msgTotalDesconto.style.display = "block";
    }
    
    abrirModal();
}

buttonCalcular.addEventListener('click', function (event) {
    event.preventDefault();
    calcularPagamento();
});

buttonFinalizar.addEventListener('click', function (event) {
    event.preventDefault();
    finalizar();
});
