const axios = require ('axios');
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req,res) => {
    try { 
        const {id} = req.params;
        const {name, gender, species, origin, image, status} = (await axios(URL + id)).data;
        const character = {id, name, gender, species, origin, image, status}
        
        return character.name
        ? res.status(200).json(character)
        : res.status(404).send('Not found')
    
        
    } catch (error) {
        return res.status(500).send(error.message)
        
    }
}

module.exports = getCharById



// promises homework promises advanced


// const getCharById = (req, res) => {
//     const {id} = req=params;
//     axios(URL+id)
//     .then(({data}) =>{
//         const {name, gender, species, origin, image, status} = data;
//         const character = {id, name, gender, species, origin, image, status}
        
//         return character.name
//         ? res.status(200).json(character)
//         : res.status(404).send('Not found')
//     })
//     .catch((err) => {
//         return res.writeHead(500).send(err.message);})
 
// }

// module.exports = getCharById