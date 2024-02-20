function gerarTabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('selTab')

    if (num.value.length == 0) {
        alert('[ERRO] - Você precisa digitar um número')
    } else {
        let n = Number(num.value)
        tab.innerText = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.innerHTML = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}

