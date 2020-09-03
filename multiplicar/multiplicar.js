const fs = require('fs'); //libreria propia de nodejs
const colors = require('colors');

let crearArchivo = (base, limite) => { //module.exports.crearArchivo
    return new Promise((resolve, reject) =>{
        
        if (!Number(base)){
            reject(`El valor intruducido ${base} no es un numero`);
            return;
        }

        if (!Number(limite)){
            reject(`El valor intruducido ${limite} no es un numero`);
            return;
        }
        
        let data = '';

        for(let i = 1; i<=limite; i++){
            data+=(`${i}*${base}=${base*i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject (err);
            else(`tabla-${base}.txt`);
        });
    });
}

let listarTabla = (base, limite) => {
 
        if (!Number(base)){
            reject(`El valor intruducido ${base} no es un numero`);
            return;
        }

        if (!Number(limite)){
            reject(`El valor intruducido ${limite} no es un numero`);
            return;
        }
        
        let data = '';

        for(let i = 1; i<=limite; i++){
            data+=(`${i}*${base}=${base*i}\n`);  
        }

        console.log('============================'.red);
        console.log(`======= tabla del ${base} =======`.red);
        console.log('============================'.red);
        console.log(data);
}

module.exports = {
    crearArchivo, //: crearArchivo
    listarTabla
}


