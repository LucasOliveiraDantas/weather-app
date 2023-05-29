
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

      let wind = data.wind.speed

      document.querySelector('.desc-speed-wind').textContent = wind +"m/S"

      let celMax = parseInt(data.main.temp_max - 273)
      document.querySelector('.desc-time-max').textContent = celMax + '°'


      
      let objWJ = JSON.stringify(data)

      let objW = JSON.parse(objWJ)

      objW = objW.weather[0].main
      
      if(objW ===  "Clouds"){

        const iconW =  document.querySelector('.clima .bi')
        document.querySelector('.clima .bi').classList.replace(iconW.classList[1] ,"bi-clouds-fill")

        iconW.style.color= "white"
      }

      if(objW ===  "Drizzle"){

        const iconW =  document.querySelector('.clima .bi')
        document.querySelector('.clima .bi').classList.replace(iconW.classList[1] ,"bi-cloud-drizzle-fill")

        iconW.style.color= "white"
      }

      if(objW ===  "Rain"){

        const iconW =  document.querySelector('.clima .bi')
        document.querySelector('.clima .bi').classList.replace(iconW.classList[1] ,"bi-cloud-rain-fill")

        iconW.style.color= "white"
      }


      if(objW ===  "Clear"){

        const iconW =  document.querySelector('.clima .bi')
        document.querySelector('.clima .bi').classList.replace(iconW.classList[1] ,"bi-sun-fill")

        iconW.style.color= "white"
      }

      
      console.log(document.querySelector(".clima .bi").classList[1])
      console.log(objW)

      
    }



    let timeToday = new Date()

    let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let day = timeToday.getDay()

    day = dayName[day]

    let hours = timeToday.getHours()
    let minutes = timeToday.getMinutes()

    document.querySelector(".info-time-day").textContent = day + " " + hours + ":" + minutes


    if(hours > 12){
      document.querySelector(".info-time-day").textContent = day + " " + hours + ":" + minutes + " PM"
    }

    if(hours < 12){
      document.querySelector(".info-time-day").textContent = day + " " + hours + ":" + minutes + " AM"
    }

     
    if (minutes < 10){
      document.querySelector(".info-time-day").textContent = day + " " + hours + ":" + "0" + minutes + " AM"
    }
