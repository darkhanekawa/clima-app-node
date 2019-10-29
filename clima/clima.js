const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6f44719bfa8f039f7fdd2197d78b3437&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}