const valorEmReal = document.querySelector('input')


function converter() {
    const valorConvertido = valorEmReal.value * 5.41
    document.querySelector('h2').innerHTML = `O valor em Dolar é $${valorConvertido.toFixed(2)}`
}