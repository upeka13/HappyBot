document.getElementById('bored-bot').addEventListener("click",getIdea)

function getIdea(){
    fetch("https://www.boredapi.com/api/activity")
    .then(response=>response.json())
    .then(data=>{
        document.body.classList.add('fun') 
        document.getElementById('idea').textContent = data.activity
        document.getElementById('title').textContent = "HappyBot"
    })
}



  