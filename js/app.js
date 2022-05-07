window.addEventListener('load',()=>{
    let lon;
    let lat;

    let temperaturaValor = document.getElementById('temperatura-valor');
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion');

    let ubicacion = document.getElementById('ubicacion');
    let iconoAnimado = document.getElementById('icono-animado');

    let vientoVelocidad = document.getElementById('viento-velocidad');
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion =>{
            lon = posicion.coords.longitude;
            lat = posicion.coords.latitude;

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${-17.7344201}&lon=${-63.1699605}&appid=e2a8f632c6aaf694d9f9371efdc6dd68`

            //console.log(url);

            fetch(url)
            .then(response =>{return response.json();})
            .then(data =>{
                let temp = Math.round(data.main.temp -273.15);
                temperaturaValor.textContent = `${temp} °C`
                console.log(data.weather[0].description);
                let desc= data.weather[0].description;
                temperaturaDescripcion.textContent = desc.toUpperCase();

                ubicacion.textContent = data.name;
                
                vientoVelocidad.textContent = `${data.wind.speed} m/s`
                console.log(data.weather[0].main);
                switch (data.weather[0].main){
                    case 'Clear':
                        iconoAnimado.src = 'src/animated/day.svg';
                        console.log('limpio');
                        break;
                    case 'Clouds':
                        iconoAnimado.src = 'src/animated/cloudy-day-1.svg';
                        console.log('Nubes');
                        break;
                    case 'Thunderstorm':
                        iconoAnimado.src = 'src/animated/thunder.svg';
                        console.log('tormenta');
                        break;
                    case 'Drizzle':
                        iconoAnimado.src = 'src/animated/rainy-2.svg';
                        console.log('llovizna');
                        break;
                    case 'Rain':
                        iconoAnimado.src = 'src/animated/rainy-7.svg';
                        console.log('llovizna');
                        break;
                }

                
            })
            .catch(error =>{
                console.log(error);
            })
        })
    }
})