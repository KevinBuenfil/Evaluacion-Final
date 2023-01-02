document.addEventListener('DOMContentLoaded',function(){
    //Funcion paraobtener el ID aleatorio
    function numeroAleatorio(max){
        return Math.floor(Math.random()*max)
    }
    //Obtener imagenes de manera aleatoria
    const imagen1 = document.getElementById("imagen1");
    const idAleatorio1 = numeroAleatorio(1000)
    const urlimagen1 = "https://picsum.photos/id/"+(idAleatorio1)+"/800/700";
    imagen1.innerHTML = `<img src="${urlimagen1}" alt="" data-img-mostrar="0">`;
    
    const imagen2 = document.getElementById("imagen2");
    const idAleatorio2 = numeroAleatorio(1000)
    const urlimagen2 = "https://picsum.photos/id/"+(idAleatorio2)+"/800/700";
    imagen2.innerHTML = `<img src="${urlimagen2}" alt="" data-img-mostrar="1">`;
    
    const imagen3 = document.getElementById("imagen3");
    const idAleatorio3 = numeroAleatorio(1000)
    const urlimagen3 = "https://picsum.photos/id/"+(idAleatorio3)+"/800/700";
    imagen3.innerHTML = `<img src="${urlimagen3}" alt="" data-img-mostrar="2">`;

    const imagen4 = document.getElementById("imagen4");
    const idAleatorio4 = numeroAleatorio(1000)
    const urlimagen4 = "https://picsum.photos/id/"+(idAleatorio4)+"/800/700";
    imagen4.innerHTML = `<img src="${urlimagen4}" alt="" data-img-mostrar="3">`;

    const imagen5 = document.getElementById("imagen5");
    const idAleatorio5 = numeroAleatorio(1000)
    const urlimagen5 = "https://picsum.photos/id/"+(idAleatorio5)+"/800/700";
    imagen5.innerHTML = `<img src="${urlimagen5}" alt="" data-img-mostrar="4">`;

    const imagen6 = document.getElementById("imagen6");
    const idAleatorio6 = numeroAleatorio(1000)
    const urlimagen6 = "https://picsum.photos/id/"+(idAleatorio6)+"/800/700";
    imagen6.innerHTML = `<img src="${urlimagen6}" alt="" data-img-mostrar="5">`;
    
    const imagen7 = document.getElementById("imagen7");
    const idAleatorio7 = numeroAleatorio(1000)
    const urlimagen7 = "https://picsum.photos/id/"+(idAleatorio7)+"/800/700";
    imagen7.innerHTML = `<img src="${urlimagen7}" alt="" data-img-mostrar="6">`;
    
    const imagen8 = document.getElementById("imagen8");
    const idAleatorio8 = numeroAleatorio(1000)
    const urlimagen8 = "https://picsum.photos/id/"+(idAleatorio8)+"/800/700";
    imagen8.innerHTML = `<img src="${urlimagen8}" alt="" data-img-mostrar="7">`;

    const imagen9 = document.getElementById("imagen9");
    const idAleatorio9 = numeroAleatorio(1000)
    const urlimagen9 = "https://picsum.photos/id/"+(idAleatorio9)+"/800/700";
    imagen9.innerHTML = `<img src="${urlimagen9}" alt="" data-img-mostrar="8">`;

    const imagen10 = document.getElementById("imagen10");
    const idAleatorio10 = numeroAleatorio(1000)
    const urlimagen10 = "https://picsum.photos/id/"+(idAleatorio10)+"/800/700";
    imagen10.innerHTML = `<img src="${urlimagen10}" alt="" data-img-mostrar="9">`;

    const imagen11 = document.getElementById("imagen11");
    const idAleatorio11 = numeroAleatorio(1000)
    const urlimagen11 = "https://picsum.photos/id/"+(idAleatorio11)+"/800/700";
    imagen11.innerHTML = `<img src="${urlimagen11}" alt="" data-img-mostrar="10">`;
    
    const imagen12 = document.getElementById("imagen12");
    const idAleatorio12 = numeroAleatorio(1000)
    const urlimagen12 = "https://picsum.photos/id/"+(idAleatorio12)+"/800/700";
    imagen12.innerHTML = `<img src="${urlimagen12}" alt="" data-img-mostrar="11">`;
    
    const imagen13 = document.getElementById("imagen13");
    const idAleatorio13 = numeroAleatorio(1000)
    const urlimagen13 = "https://picsum.photos/id/"+(idAleatorio13)+"/800/700";
    imagen13.innerHTML = `<img src="${urlimagen13}" alt="" data-img-mostrar="12">`;

    const imagen14 = document.getElementById("imagen14");
    const idAleatorio14 = numeroAleatorio(1000)
    const urlimagen14 = "https://picsum.photos/id/"+(idAleatorio14)+"/800/700";
    imagen14.innerHTML = `<img src="${urlimagen14}" alt="" data-img-mostrar="13">`;

    const imagen15 = document.getElementById("imagen15");
    const idAleatorio15 = numeroAleatorio(1000)
    const urlimagen15 = "https://picsum.photos/id/"+(idAleatorio15)+"/800/700";
    imagen15.innerHTML = `<img src="${urlimagen15}" alt="" data-img-mostrar="14">`;

    const imagen16 = document.getElementById("imagen16");
    const idAleatorio16 = numeroAleatorio(1000)
    const urlimagen16 = "https://picsum.photos/id/"+(idAleatorio16)+"/800/700";
    imagen16.innerHTML = `<img src="${urlimagen16}" alt="" data-img-mostrar="15">`;
    
    const imagen17 = document.getElementById("imagen17");
    const idAleatorio17 = numeroAleatorio(1000)
    const urlimagen17 = "https://picsum.photos/id/"+(idAleatorio17)+"/800/700";
    imagen17.innerHTML = `<img src="${urlimagen17}" alt="" data-img-mostrar="16">`;
    
    const imagen18 = document.getElementById("imagen18");
    const idAleatorio18 = numeroAleatorio(1000)
    const urlimagen18 = "https://picsum.photos/id/"+(idAleatorio18)+"/800/700";
    imagen18.innerHTML = `<img src="${urlimagen18}" alt="" data-img-mostrar="17">`;

    const imagen19 = document.getElementById("imagen19");
    const idAleatorio19 = numeroAleatorio(1000)
    const urlimagen19 = "https://picsum.photos/id/"+(idAleatorio19)+"/800/700";
    imagen19.innerHTML = `<img src="${urlimagen19}" alt="" data-img-mostrar="18">`;

    const imagen20 = document.getElementById("imagen20");
    const idAleatorio20 = numeroAleatorio(1000)
    const urlimagen20 = "https://picsum.photos/id/"+(idAleatorio20)+"/800/700";
    imagen20.innerHTML = `<img src="${urlimagen20}" alt="" data-img-mostrar="19">`;

    //Arreglo de las imagenes
    let imagenes = [
        {img:urlimagen1},
        {img:urlimagen2},
        {img:urlimagen3},
        {img:urlimagen4},
        {img:urlimagen5},
        {img:urlimagen6},
        {img:urlimagen7},
        {img:urlimagen8},
        {img:urlimagen9},
        {img:urlimagen10},
        {img:urlimagen11},
        {img:urlimagen12},
        {img:urlimagen13},
        {img:urlimagen14},
        {img:urlimagen15},
        {img:urlimagen16},
        {img:urlimagen17},
        {img:urlimagen18},
        {img:urlimagen19},
        {img:urlimagen20}
        
    ]
    let contador = 0
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const galeria_imagenes = document.querySelectorAll('.galeria img')
    const img_slideshow = document.querySelector('.slideshow img')

    //Funcion que permite avanzar y retroceder de imagen
    contenedor.addEventListener('click', function(event){
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if(tgt == atras){
            if (contador > 0){
                img.src = imagenes[contador - 1].img
                contador--
            }else{
                img.src = imagenes[imagenes.length - 1].img
                contador = imagenes.length - 1
            }
        } else if(tgt == adelante){
            if (contador < imagenes.length - 1){
                img.src = imagenes[contador + 1].img
                contador++
            } else{
                img.src = imagenes[0].img
                contador = 0
            }
        }
    })
    //Evento que nos permite que al seleccionar una imagen se muestre en grande 
    Array.from(galeria_imagenes).forEach(img =>{
        img.addEventListener('click',event =>{
            const imagen_seleccionada = +event.target.dataset.imgMostrar
            img_slideshow.src = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })
    //Evento que nos permite que al darle click oculte la ventana que nos muetra la imagen grande
    document.querySelector('.btn_cerrar').addEventListener('click',()=>{
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    })

})