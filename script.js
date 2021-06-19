let seconds = document.getElementById('second'),minutes = document.getElementById('minute'), hours = document.getElementById('hour')
let myVar = setInterval(timer,1000)
function timer() {
    var d = new Date()
    var ss = d.getSeconds()*6, mm = d.getMinutes()*6 + d.getSeconds()*0.1, hh = d.getHours()*30 + d.getMinutes()*0.5
    seconds.style.transform = `rotate(${ss}deg) translateY(-30%)`
    minutes.style.transform = `rotate(${mm}deg) translateY(-50%)`
    hours.style.transform = `rotate(${hh}deg) translateY(-50%)`
}

// nigh mode
let check = document.querySelector('#checkbox')
check.addEventListener('change',(e)=>{
    let mini = document.getElementsByClassName('mini-check')[0].style
    if (check.click) {
        mini.transform = 'translatex(40px)', mini.backgroundColor = '#fff'
        document.body.classList.toggle('list')
        document.getElementsByClassName('moon')[0].style.display = 'none'
        document.getElementsByClassName('sun')[0].style.display = 'initial'
    }
    if (!check.checked) {
        mini.transform = 'translatex(0px)'
        document.getElementsByClassName('moon')[0].style.display = 'initial'
        document.getElementsByClassName('sun')[0].style.display = 'none'
    }
})