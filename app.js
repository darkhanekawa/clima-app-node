const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async(direccion) => {

    try {
        const coord = await lugar.getLugarlatlng(direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);
        return `El clima de ${coord.dir} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ coord.dir }`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

