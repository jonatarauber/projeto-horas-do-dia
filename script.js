function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var m = new Date()
    var minutos = data.getMinutes()
    
    if(hora >= 5 && hora <12){
        document.body.style.background='#e2cd2f'
        msg.innerHTML=`Agora são ${hora} horas e ${minutos} minutos!</br> Bom dia!`
        img.src='./imagens/manha.png'
    }else if(hora >=12 && hora < 18){
        document.body.style.background='#b9846f'
        msg.innerHTML=`Agora são ${hora} horas e ${minutos} minutos!</br> Boa tarde!`
        img.src = './imagens/tarde.png'
    }else{
        document.body.style.background='#515154'
        msg.innerHTML=`Agora são ${hora} horas e ${minutos} minutos!</br> Boa noite!`
        img.src = './imagens/noite.png'
    }
}
