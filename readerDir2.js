// Рекурсивно прочитать директорию и вывести список ее файлов и файлов из вложенных директорий
const {readdir} = require ('fs');
const {join} = require('path');
const {promisify} = require('util'); 
const readDirectory = promisify(readdir);

async function maker (directories, counter = 0, files = []) {
    
    const pathDirectory = directories[counter]; //определеям имя директории, которую буде мсканировать далее

    if (counter >= listOfDirectory.length) {
        return listOfFiles;
    } 

    const result = await readDirectory(pathDirectory, {withFileTypes: true});

    for(let a of result) {
        a.isDirectory() ? 
            directories.push(join(directories[counter], a.name)) : 
            files.push(join(directories[counter], a.name));
    }

    return maker(directories, ++counter, files, );
}

(async() => {
  const list = await maker(['/home/dmisilin/nodejs/']);
  console.log(list);  
})();

