function calcular(){
    var txt1 = document.getElementById('txtv')
    var res = document.getElementById('verif')
    var n1 = Number(txt1.value)
    res.innerText = `Sua velocidade é de ${n1} Km/h.`
    
    if (n1 > 80){
        res.innerHTML += `<p>Voce foi multado!</p>`
    }
    else{
        res.innerHTML += `<p>Dirija sempre com cinto de segurança.</p>`
    }
}