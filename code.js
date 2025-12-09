// CODIGO INCLUIDO
class Plants{
    constructor(Nombre,Origen,Beneficios,Cuidados,Imagen,ImagenDespues){
        this.Nombre = Nombre;
        this.Origen = Origen;
        this.Beneficios = Beneficios;
        this.Cuidados = Cuidados;
        this.Imagen = Imagen;
        this.ImagenDespues = ImagenDespues;
    }
}
document.querySelector(".grancontenedor").classList.add("ocultar");
let flecha;
let n;
let indexs = -1;
let O;
let b;
let c;
let imgs;
let imgsD;
let array = [];
let Flora;
let objeto;
let x = 0;
let des = 0;
console.log(b);
    n = "Fresas (fragaria x ananassa)"
    O = "Las fresas modernas provienen del cruce entre dos especies originarias de América: una fresa de Virginia (Estados Unidos) y una fresa chilena que fue llevada a Europa en el siglo XVIII. En Europa ocurrió el cruce que dio origen a la fresa grande y jugosa que conocemos hoy. Aunque los europeos ya consumían fresas silvestres, la fresa actual es el resultado de un desarrollo agrícola relativamente reciente. Con el tiempo, se adaptó a climas templados de todo el mundo y se convirtió en uno de los frutos más cultivados globalmente debido a su sabor, facilidad de cultivo y valor comercial."
    b = "★ Ricas en vitaminas C y antioxidantes. \n★ Favorecen la salud cardiovascular. \n★ Antiinflamatorias y bajas en calorias. \n★ Mejoran la piel y fortalecen el sistema inmune."
    c = "❥ Requieren sol directo 4-6 horas al día. \n❥ Riego constante pero sin encharcar. \n❥ Sembrar en camas elevadas para evitar pudrición.\n❥ Usar mantillo (paja, hojarasca) para conservar humedad. \n❥ Revisar plagas comunes como caracoles o pulgones. \n❥ Mantener distancia de 25-30 cm entre plantas."
    imgs = "https://cdn0.ecologiaverde.com/es/posts/6/9/9/riego_de_fresas_en_maceta_996_3_600.jpg"
    imgsD = "https://upload.wikimedia.org/wikipedia/commons/e/ed/Strawberries.JPG"
    Flora = new Plants(n,O,b,c,imgs,imgsD);
    array.push(Flora);
    n = "Tomate (Solanum lycopersicum)"
    O = "El tomate es originario de Mesoamérica, especialmente de la región que hoy es México. Fue domesticado por culturas prehispánicas como los mexicas y los pueblos mayas, que lo utilizaban tanto como alimento como medicina. Cuando los españoles llegaron al continente americano, lo llevaron a Europa, donde fue inicialmente visto con desconfianza por ser parte de la familia de las solanáceas. Con el tiempo, se convirtió en un ingrediente esencial en la cocina europea, especialmente en Italia. Desde entonces se convirtió en uno de los cultivos más importantes del mundo."
    b = "★ Alto contenido de vitamina A y C. \n★ Rico en licopeno (antioxidante). \n★ Favorece la salud del corazón. \n★ Ayuda a la hidratación. \n★ Contiene fibra. \n★ Favorece la piel."
    c = "❥ Necesitan mucho sol, 6-8 horas. \n❥ Riego profundo, evitando mojar las hojas para prevenir hongos. \n❥ Colocar tutores o estacas para que crezcan hacia arriba. \n❥ Usar composta y suelo bien drenado. \n❥ Retirar los “chupones” (brotes laterales). \n❥ Cuidar plagas como el gusano cogollero y pulgones."
    imgs = "https://i0.wp.com/pepeplantas.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-20-at-12.54.08-PM-1.jpeg?fit=1200%2C1600&ssl=1"
    imgsD = "https://www.mvgarden.com/garden-center/wp-content/uploads/2024/03/Tomates.jpg"
    Flora = new Plants(n,O,b,c,imgs,imgsD);
    array.push(Flora);
    n = "Frijoles (Phaseolus vulgaris)"
    O = "El frijol es originario de América, principalmente de México y Centroamérica. Se ha cultivado desde hace más de 7,000 años y es uno de los tres cultivos fundamentales de las culturas mesoamericanas junto con el maíz y la calabaza. El frijol fue clave en la alimentación indígena y se expandió por todo el continente. Tras la llegada de los europeos, se difundió a todo el mundo por su alto valor nutricional y facilidad de cultivo. Hoy es uno de los alimentos más importantes en la dieta global."
    b = "★ Alto contenido de proteína vegetal. \n★ Fuente de fibra. \n★ Rica cantidad de hierro y potasio. \n★ Aporta carbohidratos complejos. \n★ Ayuda al sistema digestivo. \n★ Bajo en grasa."
    c = "❥ Crece bien con sol pleno. \n❥ Riego moderado, evitando el exceso de agua. \n❥ Puede sembrarse a lo largo de cercas o usar enrejados si es de tipo trepador. \n❥ Colocar semillas directamente en el suelo (no trasplante). \n❥ Requiere suelo suelto y aireado. \n❥ No necesita tanto fertilizante porque fija nitrógeno."
    imgs = "https://static9.depositphotos.com/1036434/1091/i/450/depositphotos_10916835-stock-photo-bean-sprout.jpg"
    imgsD = "https://www.gruposacsa.com.mx/wp-content/uploads/2016/05/Noticias-2016-Que-es-necesario-para-cultivar-una-planta-de-frijoles-02.jpg"
    Flora = new Plants(n,O,b,c,imgs,imgsD);
    array.push(Flora);
    n = "Lechuga (Lactuca sativa)"
    O = "La lechuga proviene del Mediterráneo y Medio Oriente. Fue cultivada por los antiguos egipcios, quienes la consideraban una planta sagrada y la utilizaban tanto para consumo como para obtener aceite de sus semillas. Los griegos y romanos también la adoptaron y difundieron su cultivo por Europa. Con la colonización europea llegó a América, donde se adaptó bien por su rápido crecimiento y bajo requerimiento de cuidados. Su variedad actual proviene de múltiples selecciones hechas a lo largo de siglos."
    b = "★ Alta en agua (hidratante). \n★ Fuente de vitamina A y K. \n★ Rica en fibra. \n★ Ayuda a la digestión. \n★ Baja en calorías. \n★ Aporta antioxidantes."
    c = "❥ Prefiere semisombra o sol suave (especialmente en climas cálidos). \n❥ Riego constante para mantener la tierra húmeda. \n❥ Sembrar en hileras con espacio de 20-25 cm. \n❥ Proteger de caracoles y babosas. \n❥ Usar suelo fresco y con buen drenaje."
    imgs = "https://media.admagazine.com/photos/618a64eea986d2482cad22c8/master/w_1600%2Cc_limit/70493.jpg"
    imgsD = "https://cdn.wikifarmer.com/images/detailed/2019/07/Como-Cultivar-Lechuga-%E2%80%93-Guia-Completa-de-Cultivo-de-la-Lechuga-desde-la-Siembra-hasta-la-Cosecha.jpg"
    Flora = new Plants(n,O,b,c,imgs,imgsD);
    array.push(Flora);
    n = "Árbol de almendras (Terminalia catappa)"
    O = "Terminalia catappa es originario de las regiones tropicales del sudeste asiático y del océano Índico, especialmente en zonas costeras de India, Malasia y Polinesia. Desde tiempos antiguos, las corrientes marinas distribuyeron sus semillas flotantes, lo que permitió que el árbol se expandiera de manera natural. Con el tiempo, las culturas humanas lo adoptaron tanto por su sombra como por sus frutos, lo trasladaron a Centroamérica, Sudamérica y demás. En la actualidad, es ampliamente cultivado en climas cálidos por su resistencia al calor, facilidad de establecimiento y su belleza ornamental."
    b = "★ Producción de semillas comestibles, ricas en grasas saludables. \n★ Ayuda a reducir el calor ambiental. \n★ Sus hojas tienen propiedades medicinales. \n★ Contiene antioxidantes. \n★ Aumenta la fertilidad del suelo."
    c = "❥ Necesita sol directo todo el día. \n❥ Plantarlo en el perímetro del huerto o en un espacio amplio. \n❥ Requiere muy poco riego: durante su primer año regarlo 2-3 veces por semana. \n❥ NO requiere químicos . \n❥ Dejar mucho espacio alrededor: mínimo 5-6 metros."
    imgs = "https://http2.mlstatic.com/D_NQ_NP_917336-MLM43065792722_082020-O.webp"
    imgsD = "https://gulfgardens.co.th/wp-content/uploads/2024/08/Terminalia-catappa-common-name-2-1024x1024.webp"
    Flora = new Plants(n,O,b,c,imgs,imgsD);
    array.push(Flora);
    console.log(array);
function Despues(des){
    console.log("array:", array);
    des = parseInt(des);
    console.log(des)
    let objeto1 = array[des];
    console.log(objeto1)
    let i = objeto1.ImagenDespues;
    console.log(i);
    document.getElementById("imagenPlantas").src = i;
}
function Plantas(){
    let textdefault = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    
    console.log(textdefault);
    let texto1 = "HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    console.log("usado");
    let planta = document.getElementById("Plantas").value;
    console.log(planta)
    switch (planta){
        case "def":
            document.querySelector(".grancontenedor").classList.add("ocultar");
            break;
        case "planta1":
            document.querySelector(".grancontenedor").classList.remove("ocultar");
            flecha = document.querySelector(".flecha");
            flecha.classList.remove("oculta");
            document.querySelector(".botonflecha").classList.remove("ocultar")
            x = 0
            console.log("entró");
            objeto = array[0];
            for(let prop in objeto){
                x++;
                let yxz = objeto[prop];
                console.log(yxz)
                if(x===1){
                    console.log("hola")
                    document.getElementById("nombre1").textContent = yxz;
                }
                if(x===2){
                    document.getElementById("origen").textContent = yxz;
                }
                if(x===3){
                    document.getElementById("beneficios").textContent = yxz;
                }
                if(x===4){
                    document.getElementById("cuidados").textContent = yxz;
                }
                if(x===5){
                    document.getElementById("imagenPlantas").src = yxz;
                }
                if(x===6){
                    indexs = 0;
                }
            }
            break;
        case "planta2":
            document.querySelector(".grancontenedor").classList.remove("ocultar");
            flecha = document.querySelector(".flecha");
            flecha.classList.remove("oculta");
            document.querySelector(".botonflecha").classList.remove("ocultar")
            x = 0;
            console.log(x)
            objeto = array[1];
            console.log("este no")
            for(let prop in objeto){
                x++;
                let yxz = objeto[prop];
                if(x===1){
                    document.getElementById("nombre1").textContent = yxz;
                }
                if(x===2){
                    document.getElementById("origen").textContent = yxz;
                }
                if(x===3){
                    document.getElementById("beneficios").textContent = yxz;
                }
                if(x===4){
                    document.getElementById("cuidados").textContent = yxz;
                }
                if(x===5){
                    document.getElementById("imagenPlantas").src = yxz;
                }
                if(x===6){
                    indexs = 1;
                }
            }
            break;
        case "planta3":
            document.querySelector(".grancontenedor").classList.remove("ocultar");
            flecha = document.querySelector(".flecha");
            flecha.classList.remove("oculta");
            document.querySelector(".botonflecha").classList.remove("ocultar")
            x = 0;
            objeto = array[2];
            for(let prop in objeto){
                x++;
                let yxz = objeto[prop];
                if(x===1){
                    document.getElementById("nombre1").textContent = yxz;
                }
                if(x===2){
                    document.getElementById("origen").textContent = yxz;
                }
                if(x===3){
                    document.getElementById("beneficios").textContent = yxz;
                }
                if(x===4){
                    document.getElementById("cuidados").textContent = yxz;
                }
                if(x===5){
                    document.getElementById("imagenPlantas").src = yxz;
                }
                if(x===6){
                    indexs = 2;
                }
            }
            break;
        case "planta4":
            document.querySelector(".grancontenedor").classList.remove("ocultar");
            flecha = document.querySelector(".flecha");
            flecha.classList.remove("oculta");
            document.querySelector(".botonflecha").classList.remove("ocultar")
            x = 0;
            objeto = array[3];
            for(let prop in objeto){
                x++;
                let yxz = objeto[prop];
                if(x===1){
                    document.getElementById("nombre1").textContent = yxz;
                }
                if(x===2){
                    document.getElementById("origen").textContent = yxz;
                }
                if(x===3){
                    document.getElementById("beneficios").textContent = yxz;
                }
                if(x===4){
                    document.getElementById("cuidados").textContent = yxz;
                }
                if(x===5){
                    document.getElementById("imagenPlantas").src = yxz;
                }
                if(x===6){
                    indexs = 3;
                }
            }
            break;
        case "planta5":
            document.querySelector(".grancontenedor").classList.remove("ocultar");
            flecha = document.querySelector(".flecha");
            flecha.classList.remove("oculta");
            document.querySelector(".botonflecha").classList.remove("ocultar")
            x = 0;
            objeto = array[4];
            for(let prop in objeto){
                x++;
                let yxz = objeto[prop];
                if(x===1){
                    document.getElementById("nombre1").textContent = yxz;
                }
                if(x===2){
                    document.getElementById("origen").textContent = yxz;
                }
                if(x===3){
                    document.getElementById("beneficios").textContent = yxz;
                }
                if(x===4){
                    document.getElementById("cuidados").textContent = yxz;
                }
                if(x===5){
                    document.getElementById("imagenPlantas").src = yxz;
                }
                if(x===6){
                    indexs = 4;
                }
            }
            break;
    }
}
function Crecimientos(){
    if(indexs<0){
      alert("Por favor elige una de las plantas")
      return;
  }
  else{
  Despues(indexs);
  }
  flecha = document.querySelector(".flecha");
  flecha.classList.add("oculta");
  setTimeout(()=>{
  document.querySelector(".botonflecha").classList.add("ocultar")
  }, 400)
}
let icono = document.createElement("link");
icono.rel = "icon";
icono.href = 'favicon_io/favicon.ico';
document.head.appendChild(icono);