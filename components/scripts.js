document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Validación de los datos ingresados en el formulario
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let country = document.getElementById('country').value;
    let city = document.getElementById('city').value;
    let query = document.getElementById('query').value;

    if (!name || !phone || !email || !country || !city || !query) {
        alert('Por favor, complete todos los campos.');
    } else {
        // Aquí iría el código para enviar los datos al servidor o por email
        console.log('Formulario enviado:', { name, phone, email, country, city, query });
        alert('Gracias por contactarnos!');
    }
});

document.getElementById('get-weather').addEventListener('click', function() {
    var city = document.getElementById('city-input').value;
    var url = `http://api.weatherapi.com/v1/current.json?key=8317649aa62c4fdab86163725240305&q=${city}&aqi=no`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        var weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = `
            <h4>${data.location.name}</h4>
            <p>${data.current.condition.text}</p>
            <p>${data.current.temp_c}°C</p>
        `;
    })
    .catch(error => {
        console.error('An error occurred:', error);
        var weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = `<p>Unable to retrieve weather data.</p>`;
    });
});
// Aquí se cierra la función del evento click