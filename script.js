function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.borderRadius = '100%'
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 11) {
                // Criança
                img.setAttribute('src', 'image/h-bebe.jpg')
            } else if (idade < 25) {
                // Jovem
                img.setAttribute('src', 'image/h-jovem.jpg')
            } else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'image/h-adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'image/h-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'image/f-bebe.jpg')
            } else if (idade < 25) {
                // Jovem
                img.setAttribute('src', 'image/f-jovem.jpg')
            } else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'image/f-adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'image/f-idoso.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}