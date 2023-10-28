function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
var segundo = data.getSeconds()
msg.innerHTML = `agora são ${hora} horas, ${minuto} minutos e ${segundo} segundos`
if (hora >= 0 && hora < 12) {
    //BOM DIA 
    img.src = 'de manhã.png'
    document.body.style.background = '#f6d236'
} else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'de tarde.png'
        document.body.style.background = '#f98a16'
    } else {
        //BOA NOITE 
        img.src = 'de noite.png'
        document.body.style.background = '#22363f'
    }
    setTimeout(carregar,1000)
}

