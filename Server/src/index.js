// //importo modulo http
// const http = require('http');
// const getCharById = require('./controllers/getCharById')
// // llamo al puerto
// const PORT = "3001";
// // importo el archivo data.js
// //const characters = require('./utils/data')

// //levanto el servidor
// http
//   .createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const { url } = req;

//     if (url.includes("/rickandmorty/character")) {
//         const id = url.split('/').pop() 
//         getCharById(res, id)
//     }
//     // if(url.includes("/rickandmorty/character")) {
//     //     // extrae el id 
//     //     const id = Number(url.split('/').pop())
//     //     //busca el personaje en la db
//     //         const character = characters.find((char) => {
//     //             return char.id === id
//     //         })
//             //damos caso de exito y retornamos al servidor
//     // res.writeHead(200, {'Content-type' : 'application/json' });
//     // res.end(JSON.stringify(character))
        
// })
// .listen(PORT, 'localHost')

// //crea condicional verifica URL

// const express = require('express');
// const server = express();
const PORT = 3001;
// const router = require('./routes/index');

// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header(
//      'Access-Control-Allow-Headers',
//      'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   res.header(
//      'Access-Control-Allow-Methods',
//      'GET, POST, OPTIONS, PUT, DELETE'
//   );
//   next();
// });
// server.use(express.json());
// server.use('/rickandmorty', router)

server.listen(PORT, () => {
  console.log('Server raised in port: ' + PORT);
});

