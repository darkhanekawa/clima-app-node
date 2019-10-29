const axios = require('axios');

const getLugarlatlng = async(direccion) => {

    const encodedUrl = encodeURI(direccion);
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'x-rapidapi-key': '953d32631cmsh041b77c5d7adbcbp1ef8fcjsn8eb72da76ee0'}
    });
    
    const resp = await instance.get();
    if (resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

     return {
         dir,
         lat,
         lng
     }
}

module.exports = {
    getLugarlatlng
}