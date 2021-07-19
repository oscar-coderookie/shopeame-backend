
 const getApp = async () => {
    const res = await fetch('http://localhost:3000/products');
    const productsArray = await res.json();
    console.log(productsArray);
    printProducts(productsArray);
  }

  getApp()

  const mainDiv$$ = document.querySelector(`[data-function="products"]`);

const myDiv$$ = document.createElement('div');
myDiv$$.classList.add("b-products", "row");

const titleBar$$ = document.createElement('div');
titleBar$$.classList.add('b-products__titlebar', 'd-flex','align-items-center', 'justify-content-between')

const title$$ = document.createElement('h2');
title$$.textContent = 'Listado de productos (8)';
title$$.classList.add('b-products__title')
titleBar$$.appendChild(title$$)
myDiv$$.appendChild(titleBar$$)

const searchBar$$= document.createElement('div');
searchBar$$.classList.add("d-flex","pb-5","justify-content-end","container-lg")
searchBar$$.innerHTML = `<input placeholder="Buscador" aria-label="Search" type="search" class= "b-products__input"></input>`
myDiv$$.appendChild(searchBar$$)

const iconsBox$$ = document.createElement('div');
iconsBox$$.classList.add('b-products__iconsbox','d-inline-block')
iconsBox$$.innerHTML = `<a class="b-products__icon-links"><span class="b-products__icon1 fas fa-list-ul"></span></a>
<a class="b-products__icon-links"><span class="b-products__icon2 fas fa-th-large"></span></a>`;

titleBar$$.appendChild(iconsBox$$)

function printProducts(productsArray) {
  for (const product of productsArray) {
    // -------pinto la imagen-----------------
    const myImg$$ = document.createElement("img");
    myImg$$.src = product.image;
    myImg$$.classList.add("b-products__img", "d-block");
    // ------------declarar el div contenedor-----------
    const containerP$$ = document.createElement("div");
    containerP$$.classList.add(
      "b-products__container",
      "col-sm-12",
      "col-md-6",
      "col-lg-4",
      "col-xl-3"
    );
    containerP$$.append(myImg$$);
    myDiv$$.appendChild(containerP$$);
    mainDiv$$.appendChild(myDiv$$);
  
    // ------------barra de titulo-----------
    const supBar$$ = document.createElement('div')
    mainDiv$$.appendChild(supBar$$)
    // ---------------- crear título------------------
    const h1$$ = document.createElement("h1");
    h1$$.textContent = product.name;
    h1$$.classList.add("b-products__h1");
    containerP$$.appendChild(h1$$);
    // ------------ crear campo de precios-----------------
    const price$$ = document.createElement("p");
    price$$.textContent = product.price + " €";
    price$$.classList.add("b-products__price");
    containerP$$.appendChild(price$$);
    // ---------------------crear descripcion--------------
    const description$$ = document.createElement("h3");
    description$$.textContent = product.description;
    description$$.classList.add("b-products__h3");
    containerP$$.appendChild(description$$);

    // ---------------------------barra de rate(puntuacion)----------------
    const starBar$$ = document.createElement("div");
    starBar$$.classList.add(
      "b-products__starbar",
      "d-flex",
      "justify-content-between",
      "flex-row",
      "align-items-center"
    );
    containerP$$.appendChild(starBar$$);
    // ----------aqui defino la etiqueta icono estrella----------
    for (let i = 0; i < 5; i++) {
      const stars$$ = document.createElement("span");
      stars$$.classList.add( "fas", "fa-star", "starbar__icons");
      starBar$$.appendChild(stars$$);
    }
  
    // -----------------etiqueta button---------------------
    const btn$$ = document.createElement("button");
    btn$$.classList.add("b-products__btn");
    btn$$.textContent = "Editar";
    starBar$$.appendChild(btn$$);
  }
}