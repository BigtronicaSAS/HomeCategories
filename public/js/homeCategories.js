document.addEventListener("DOMContentLoaded", function () {
    const images = [
      // Array de imágenes y contenido
      
      {
        src: "https://bigtronica.com/img/cms/SliderResponsive/18650.png",
        color: "#0c211f",
        producto: {
          titulo: "CAPACIDAD REAL ⚡",
          span: "¡Tiempo Extra!",
          parrafo:
            "Activa el boton y desafía tus expectativas con nuestras baterías 18650 genuinas. ¡Demuestra tu poder!",
          enlace: "¡Sorpréndeme!",
          link: "https://www.bigtronica.com/search?controller=search&orderby=position&orderway=desc&search_query=CapacidadReal&submit_search=",
        },
      },
      
      {
        src: "https://bigtronica.com/img/cms/Halloween/home2-img.png",
        color: "#FF843E",
        producto: {
          titulo: "Truco o trato!",
          span: "",
          parrafo: "BUUU",
          enlace: "¡Ver Ahora!",
          link: "#",
        },
      },
    ];
  
    const thumbnailContainer = document.querySelector(".section_slider .thumb_slider");
    const pepsiImage = document.querySelector(".product");
    const sec = document.querySelector(".section_slider");
    const textBox = document.querySelector(".content_slider .textBox");
    const h2 = textBox.querySelector("h2");
    const span = textBox.querySelector("h2 span");
    const p = textBox.querySelector("p");
    const a = textBox.querySelector("a");
  
    // Inicializar el slider con un índice aleatorio
   /* initializeSlider(getRandomIndex());*/
    initializeSlider(0);
  
    let currentIndex = 0; // Índice del slide actual
    let intervalId; // ID del intervalo
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlide(currentIndex);
    }
  
    // startSlider();  Iniciar el desplazamiento automático
  
    // Crear los elementos de los thumbnails
    images.forEach((image) => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = image.src;
      img.setAttribute("data-color", image.color);
      img.classList.add("thumbnail_slider");
      li.appendChild(img);
      thumbnailContainer.appendChild(li);
    });
  
    const thumbnails = document.querySelectorAll(".thumbnail_slider");
    // Asignar el evento click a los thumbnails
  
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", function () {
        const producto = images[index].producto;
        const imageSource = thumbnail.src;
        updateContent(producto);
        imgSlider(imageSource);
        changeBColor(images[index].color);
        stopSlider(); // Detener el desplazamiento automático
      });
    });
  
    // Función para cambiar la imagen principal del slider
    function imgSlider(imageSource) {
      pepsiImage.src = imageSource;
    }
    // Función para cambiar el color de fondo de la sección
    function changeBColor(color) {
      sec.style.background = color;
    }
    // Función para actualizar el contenido del slide
    function updateContent(producto) {
      h2.innerHTML = `${producto.titulo}<br/><span>${producto.span}</span>`;
      p.textContent = producto.parrafo;
      a.href = producto.link;
      a.textContent = producto.enlace;
      pepsiImage.src = producto.src;
    }
  
    // Inicializar el slider con un item específico
  
    function initializeSlider(item) {
      const primerProducto = images[item].producto;
      updateContent(primerProducto);
      imgSlider(images[item].src);
      changeBColor(images[item].color);
    }
  
    // Función para actualizar el slide según el índice
    function updateSlide(index) {
      const producto = images[index].producto;
      const imageSource = images[index].src;
      updateContent(producto);
      imgSlider(imageSource);
      changeBColor(images[index].color);
    }
    // Función para iniciar el desplazamiento automático
    function startSlider() {
      intervalId = setInterval(nextSlide, 4000);
    }
    // Función para detener el desplazamiento automático
    function stopSlider() {
      clearInterval(intervalId);
    }
  
    //  Función para inicializar el  slider con un índice aleatorio
  
    function getRandomIndex() {
      return Math.floor(Math.random() * images.length);
    }
  });
  