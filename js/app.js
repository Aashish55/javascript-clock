// console.log('javascript file loaded successfully')

function clock(){

    const hours = document.querySelector('.hours')
    const minutes = document.querySelector('.minutes')
    const seconds = document.querySelector('.seconds')

    let hr = new Date().getHours()
    let min = new Date().getMinutes()
    let sec = new Date().getSeconds()
 
 function addzero(el){ 
      return el<10?('0' + el): el 
   }
  hours.innerHTML = addzero(hr)
  minutes.innerHTML = addzero(min)
  seconds.innerHTML = addzero(sec)

}
const interval = setInterval(clock,1000)
