document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const fighterName = document.querySelector('input').value
    try{
        const response = await fetch(`https://mma-fighters-api.onrender.com/api/${fighterName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.nickName
    }catch(error){
        console.log(error)
    }
}