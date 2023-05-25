
/*
function getAdvice(){

  
  w3.getHttpObject("https://api.openweathermap.org/data/2.5/weather?lat=-24.00274255872897&lon=-46.41654902058352&appid=541101029ad59e9e9e61305999af050f",function(data){

    console.log(data.main)

    document.querySelector('.info-city').textContent = data.name
    let cel = parseInt(data.main.temp - 273)
    document.querySelector(".info-clima").textContent = cel + '°C'

    let wind = parseInt(data.wind.speed)

    document.querySelector('.desc-speed-wind').textContent = data.wind.speed +"m/S"

    let celMax = parseInt(data.main.temp_max - 273)
    document.querySelector('.desc-time-max').textContent = celMax + '°'
    
    
 })
  

  
*/
 w3.getHttpObject("https://api.openweathermap.org/data/2.5/weather?lat=-24.00274255872897&lon=-46.41654902058352&appid=541101029ad59e9e9e61305999af050f", getAdvice)

    function getAdvice(data){
        console.log(data.main)

      document.querySelector('.info-city').textContent = data.name
      let cel = parseInt(data.main.temp - 273)
      document.querySelector(".info-clima").textContent = cel + '°C'

      let sunRiseTime = data.sys.sunrise

      let sunRise = new Date(sunRiseTime * 1000 )

      document.querySelector(".desc-time-sunset").textContent = sunRise.toLocaleTimeString("it-IT")

      let wind = parseInt(data.wind.speed)

      document.querySelector('.desc-speed-wind').textContent = wind +"m/S"

      let celMax = parseInt(data.main.temp_max - 273)
      document.querySelector('.desc-time-max').textContent = celMax + '°'

    }

    
    
