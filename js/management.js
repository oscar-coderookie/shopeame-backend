const form$$ = document.querySelector('form');

form$$.addEventListener("submit", (e) =>{
    e.preventDefault()
    const name = form$$.querySelector('#name').value;
    const price = form$$.querySelector('#price').value;
    const description = form$$.querySelector('#description').value;
    const image = form$$.querySelector('#image').value
    const rating = form$$.querySelector('#rating').value
    const newProduct = {name,price,description,image,rating}
    
    console.log(name);
    addProduct(newProduct)
});

function addProduct(newProduct){
    fetch("http://localhost:3000/products"),{
        method:'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(newProduct)
    }
}