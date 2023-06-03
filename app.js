let dogs = [
    {
        img: './imagenes/perro1.jpg',
        name: 'Cobu',
        telefono: '55533300',
        pais: 'Perú',
        descripcion: 'hola',
        id: 01,
    },
    {
        img: './imagenes/perro2.jpg',
        name: 'Hachi',
        telefono: '55533300',
        pais: 'Perú',
        descripcion: 'hola',
        id: 02,
    },
    {
        img: './imagenes/perro3.jpg',
        name: 'Manchas',
        telefono: '55533300',
        pais: 'Perú',
        descripcion: 'hola',
        id: 03,
    },
    {
        img: './imagenes/perro4.jpg',
        name: 'Doby',
        telefono: '55533300',
        pais: 'Perú',
        descripcion: 'hola',
        id: 04,
    },
    {
        img: './imagenes/perro5.jpg',
        name: 'Chester',
        telefono: '55533300',
        pais: 'Perú',
        descripcion: 'hola',
        id: 05,
    },
    {
        img: './imagenes/perro6.jpg',
        name: 'Harry',
        telefono: '55533300',
        pais: 'Perú',
        descripcion: 'hola',
        id: 06,
    },
    {
        img: './imagenes/perro7.jpg',
        name: 'Marley',
        telefono: '55533300',
        pais: 'Perú',
        descripcion: 'hola',
        id: 07,
    },
    {
        img: './imagenes/perro8.jpg',
        name: 'Benji',
        telefono: '55533300',
        pais: 'Perú',
        descripcion: 'hola',
        id: 08,
    },
];

const main =document.querySelector('.container');
const fragmento=document.createDocumentFragment();

const render =()=>{
 dogs.forEach(element => {
    
    const div=document.createElement('div');

    const botonoes=document.createElement('div');
    const img=document.createElement('div');
    const name=document.createElement('div');
    const telefono=document.createElement('div');
    const pais=document.createElement('div')

    
    div.classList.add('card_dog')
    botonoes.classList.add('botones_superiores')
    name.classList.add('img_dog')
    telefono.classList.add('name_dog')
    pais.classList.add('telefono_dog')
    img.classList.add('pais_dog')

    div.appendChild(botonoes)
    div.appendChild(img)
    div.appendChild(name)
    div.appendChild(telefono)
    div.appendChild(pais)

    botonoes.innerHTML=`<div class="editar">edit</div>
                        <div class="delete">Delete</div>`

    img.innerHTML=`<img class="img_dog-size" src="${element.img}" alt="">`
    
    name.textContent=element.name
    telefono.textContent=element.telefono
    pais.textContent=element.pais
    
    main.appendChild(div)    
 });
 main.appendChild(fragmento);

}
render();
 
const boton_eliminar=document.querySelector('.delete').classList.value

main.addEventListener('click', function(e) {
    if (e.target.classList.value===boton_eliminar){
        ventana_eliminar.className = "eliminar";
    }if(e.target.classList.value===aceptar){
        console.log("no")
    }

    });

const aceptar=document.querySelector('.aceptar'); 
const cancelar=document.querySelector('.cancelar')
const ventana_eliminar=document.querySelector('.default_eliminar')

aceptar.addEventListener('click',function(e){
    if (e.target.classList.value===boton_eliminar){
        ventana_eliminar.className = "eliminar";
    }else{
        console.log("no")
    }
});
cancelar.addEventListener('click',function(e){
  
});






