// const axios = require ('axios');


// const getCharById = (res, id)=> {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//    //destructurin de data
//     .then(({data}) => {
//         //destructurin nuevamente a lo interno de data
//         const {name, gender, species, origin, image, status} = data;
//         const character = {id, name, gender, species, origin, image, status}

//         res.writeHead(200, {'Content-type' : 'aplication/json'})
//         // convertir un archivo de javascript a JSON
//         return res.end(JSON.stringify(character))


//         .catch((err) => {
//             res.writeHead(500, {'Content-type' : 'text-plain'})
//             return res.end(err.message)
//         })


//     })


// }
const axios = require ('axios');
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async(rew, res) => {
    try{
        // traemos de id 
        const {id} = req.params;
        // destructurin para traweer las propiedades   y le traigo la data por una url 
        const {name, gender, species, origin, image, status} = (await axios(url + id)).data
        const character = {name, gender, species, origin, image, status}

        // si tiene un name
        return character.name
        //imprimi el name
        ?res.status(200).json(character)
        // si no existe envio error
        : res.status(404).send('Not Found')


     } catch (error) {
        return res.status(500).send(erro.message)
     }
}


module.exports = getCharById