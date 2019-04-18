const {readdir} = require('fs');
const path = require('path');

let massFiles = [];
let tempMassDir = [];
let massDir = [];
let addr = '/home/dmisilin/nodejs/';

const readDirr = (...args) => {
    addr = args[0];
    return new Promise((accepr, reject) => {
        readdir(...args, (err, date) => {
            if(err) return reject(err);

            return accepr(date);
        })
    })
} 

const analTempMass = (mass) => {    
    let a;
    return new Promise((accept, reject) => {
        if(mass.length > 0) {
            for(a of mass) {
                a.isDirectory() ? tempMassDir.push(`${addr}${a.name}/`) : massFiles.push(a);
            }
            return accept();
        }
        return reject('массив пустой');
    })
}

(async () => {
    const result = await readDirr(addr, {withFileTypes: true});
    console.log(result);
    //const str = String.toString(tempMassDir[0]);
    console.log(tempMassDir.indexOf('/home/dmisilin/nodejs/новая папка/'));
    //result = await readDirr(tempMassDir[0], {withFileTypes: true});
    
    //console.log(result[4].isDirectory());
    analTempMass(result);
    let tick;
    // while(tempMassDir.length > 0) {
    //     massDir = tempMassDir;
    //     //tempMassDir = [];
    //     for(tick of massDir){
    //         readDirr(tick, {withFileTypes: true});
    //     }
    // }

    console.log('massF');
    console.log(massFiles);
    console.log('tempMassDir');
    console.log(tempMassDir);
    console.log('massDir');
    console.log(massDir);
})();
