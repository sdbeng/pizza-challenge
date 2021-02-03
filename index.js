console.log('it works!')
let pizzaNode = document.getElementById("image-div")
let fetchBtn = document.getElementById("btn")
let apiUrl = "https://foodish-api.herokuapp.com/api/images/pizza"

async function fetchPizza(){
    // console.log('calling func...')
    const response = await fetch(apiUrl)
    const json = await response.json()
    console.log(json)
    let html = ""
    
    const img = document.createElement('img');
		img.src = json.image; // Set the image source to the image URL value
		pizzaNode.appendChild(img);
    
    // .catch(error => {
    //     console.error('Something went wrong...')
    // })
}
//fetch
fetchBtn.addEventListener('click', fetchPizza)
