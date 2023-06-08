const express = require('express')
const app = express()
const PORT = 8000

const fighters = {
    'israel adesanya':{
        'age': 33,
        'nickName':'The Last Style Bender',
        'fightingOutOf': 'Auckland, New Zealand' 
    },
    'kai kara-france':{
        'age': 30,
        'nickName':'Dont Blink',
        'fightingOutOf': 'Auckland, New Zealand' 
    },
    'jon jones':{
        'age': 35,
        'nickName':'Bones',
        'fightingOutOf': 'Rochester, New York' 
    },
    'unknown':{
        'age': 0,
        'nickName':'unknown',
        'fightingOutOf': 'unknown' 
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:fighterName', (request,response)=>{
    const fightersName = request.params.fighterName.toLowerCase()
    if(fighters[fightersName]){
        response.json(fighters[fightersName])
    }else{
        response.json(fighters['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}!`)
})