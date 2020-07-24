// Constante images que toma todas las imagenes que tengan la clase img --- debe tener el punto .img

const images = document.querySelectorAll('.img');

// Esta constante va con querySelector para solo seleccionar uno
const containerImage = document.querySelector('.container-img');

const imageContainer = document.querySelector('.img-show');

const copy = document.querySelector('.copy');


// Si queremos cerrar con el icono "X"

const closeModal = document.querySelector('.bx.bx-x');

// Recorrer cada una de las imagenes

images.forEach(image =>{
    image.addEventListener('click', ()=>{

      

        addImage(image.getAttribute('src'), image.getAttribute('alt') );

    })
})


const addImage = (src, alt) =>{
      // Accedemos a las clases de .container-img
        // Si no tiene la clase la agrega, si la tiene la quita
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
    imageContainer.src = src;
    copy.innerHTML = alt;
}

// Si queremos que solo cierre con el icono "X" se cambia abajo el containerImage por closeModal

containerImage.addEventListener('click', ()=>{
      // Accedemos a las clases de .container-img
        // Si no tiene la clase la agrega, si la tiene la quita
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
})

