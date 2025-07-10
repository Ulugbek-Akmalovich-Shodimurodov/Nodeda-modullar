const fs = require('fs');

// const files = fs.readdirSync('./');

// console.log(files);

// const files = fs.readdir('.qw', (err, files)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log(files);
// })


const readFile = fs.readFile('./file.docx', 'utf8', (err, file)=>{
    if(err)
        throw err
    else
        console.log(file);
        
});

console.log(readFile);
