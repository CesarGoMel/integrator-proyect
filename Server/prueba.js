const axios = require ('axios')

function suma(a, b) {
    return a+b;
}

//.then catch

function getActi() {
    let respo =axios.get('https://www.boradapi.com/api/activity')
    .then((res) => {
        console.log (`Esta e la RTA ${res.data.activity}`)
    })
    .catch((err)=> {
        console.error(err)
    })
}


function getAsync() {
    try {
        let response =await axios.get('https://www.boradapi.com/api/activity')
        console.log (response.data.activity)
    } catch((error) {
        console.log(error)
    })

getAsync}
