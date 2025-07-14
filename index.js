const fs = require('fs');

// const files = fs.readdirSync('./');

// console.log(files);

// const files = fs.readdir('.qw', (err, files)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log(files);
// })


// const readFile = fs.readFile('./file.docx', 'utf8', (err, file)=>{
//     if(err)
//         throw err
//     else
//         console.log(file);
        
// });

// console.log(readFile);

const EventEmitter = require('events');

const emitter = new EventEmitter(); // <-- new qo‘shildi

// emitter.on('salom', () => {
//   console.log('Salom olindi!');
// });

// emitter.emit('salom'); // ➜ "Salom olindi!"



// emitter.on('salom', (ism) => {
//   console.log(`Salom, ${ism}!`);
// });

// emitter.emit('salom', 'Asom'); // ➜ "Salom, Asom!"

// emitter.once('birMarta', () => {
//   console.log('Bu faqat bir marta ishlaydi.');
// });

// emitter.emit('birMarta');
// emitter.emit('birMarta'); // bu safar ishlamaydi


function xabar() {
  console.log('Bu hodisa yozildi');
}

emitter.on('xabar', xabar);
emitter.emit('xabar'); // ➜ "Bu hodisa yozildi"

emitter.off('xabar', xabar); // endi olib tashlandi
emitter.emit('xabar'); // hech narsa bo‘lmaydi
