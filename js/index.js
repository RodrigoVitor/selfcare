function showHours() 
{ 
    //pegando horario atual
    let date = new Date();
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let time = document.getElementById('time')

    if(hours < 10)
    {
        hours = "0" + hours
    }
    if(minutes < 10)
    {
        minutes = "0" + minutes

    }
    if(seconds < 10)
    {
        seconds = "0" + seconds
    }
    time.innerText = hours + " : " + minutes + " : " +seconds
}
let tmp = setInterval(showHours, 1000)
// ------------------------------------




