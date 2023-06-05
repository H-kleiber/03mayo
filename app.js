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

function render (){

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

    botonoes.innerHTML=`<div class="editar">editar</div>
                        <div id='${element.id}'class="id_card">${element.id}</div>
                        <div class="delete">Delete</div>`

    img.innerHTML=`<img class="img_dog-size" src="${element.img}" alt="">`
    name.textContent=element.name
    telefono.textContent=element.telefono
    pais.textContent=element.pais
    
    main.appendChild(div)    

    
 });
 main.appendChild(fragmento);
 

}


main.addEventListener('click', function(e) {
    
    const boton_eliminar=document.querySelector('.delete').classList.value;
    const aceptar=document.querySelector('.aceptar').classList.value;; 
    const cancelar=document.querySelector('.cancelar').classList.value;
    const editar=document.querySelector('.editar').classList.value;
    const ventana_eliminar=document.querySelector('#default_eliminar_id');
    const ventana__edit=document.querySelector('#ventana__edit_id');
    const ventana__edit_guardar=document.querySelector('.ventana__edit_guardar').classList.value;
    const ventana__edit_cancelar=document.querySelector('.ventana__edit_cancelar').classList.value;
    
    let contador=0;
    
    if(e.target.classList.value===boton_eliminar){
        ventana_eliminar.className = "eliminar";
        elemento_temp=e.target;
        
    }if(e.target.classList.value===editar){
        ventana__edit.className = "ventana__edit_show";
        // console.log('editar')
        const id=e.target.parentNode.childNodes;
        captura_id=id[2].id;
        
        console.log(captura_id)
        
    }if(e.target.classList.value===aceptar){
        const el=elemento_temp;const lis=el.parentNode;lit=lis.parentNode;sect=lit.parentNode; 
        sect.removeChild(lit)
        ventana_eliminar.className = "default_eliminar";
        
    }if(e.target.classList.value===cancelar){
        ventana_eliminar.className = "default_eliminar";
    }
    if(e.target.classList.value===ventana__edit_guardar){
        console.log('guardar')
        
        
        const nombre=document.querySelector('#nombre').value;
        const telefono=document.querySelector('#telefono').value;
        const pais=document.querySelector('#pais').value;
        const descripcion=document.querySelector('#descripcion').value;
        // dogs[`${captura_id}`].name=nombre;
        // dogs[`${captura_id}`].telefono=telefono;
        // dogs[`${captura_id}`].pais=pais;
        // dogs[`${captura_id}`].descripcion=descripcion;
        // console.log(dogs)
        contador++;
        console.log(contador)
        
        
        dogs.forEach(function(objeto) {
            if (objeto.id == captura_id) {
              objeto.nombre = nombre;
              objeto.name=nombre;
              objeto.telefono=telefono;
              objeto.pais=pais;
              objeto.descripcion=descripcion;
            }
          });
          console.log(dogs)
          render();

    }if(e.target.classList.value===ventana__edit_cancelar){
        ventana__edit.className = "ventana__edit";  
    }
    
});

render();

