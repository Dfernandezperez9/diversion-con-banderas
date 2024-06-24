
const COUNTRY_LIST = document.querySelector(".countryList");
const CUERPO = document.querySelector(".cuerpo");
const TITULO = document.querySelector(".titulo");



const GET_SOME_DATA_ABOUT_FLAGS = async () => {
    try {
      const BRING_DATA_FROM_SPECIFIC_URL = await fetch(`https://restcountries.com/v3/all`);
      if (!BRING_DATA_FROM_SPECIFIC_URL.ok) {
        throw new Error(`Something went really really wrong, ${BRING_DATA_FROM_SPECIFIC_URL.status}`);
      } 
      else {
        const FINALLY_THE_DATA_IN_MY_HANDS = await BRING_DATA_FROM_SPECIFIC_URL.json();
        console.log(FINALLY_THE_DATA_IN_MY_HANDS)
        for(let i = 0; i < FINALLY_THE_DATA_IN_MY_HANDS.length; i++) {
            let container = document.createElement("button");
            container.classList.add("contenedor");
            let container2 = document.createElement("div");
            container2.classList.add("contenedor2");

            let parrafoPais = document.createElement("p");
            parrafoPais.classList.add("parrafo");
            parrafoPais.innerText = FINALLY_THE_DATA_IN_MY_HANDS[i].name.official;

            let imagen = document.createElement("img");
            imagen.classList.add("flagPic");
            imagen.src = FINALLY_THE_DATA_IN_MY_HANDS[i].flags[1]

        
            COUNTRY_LIST.appendChild(container);
            container.appendChild(container2);
            container2.appendChild(imagen);
            container.appendChild(parrafoPais)

            container.addEventListener("click", () => {
                TITULO.classList.add("tituloOnClick");
                TITULO.innerText = FINALLY_THE_DATA_IN_MY_HANDS[i].name.official;
                container.disabled = true;
                COUNTRY_LIST.classList.add("vanish");
                let newContainer = document.createElement("div");
                newContainer.classList.add("claseOnClick");
                parrafoPais.classList.add("parrafoOnClick");
                container2.classList.add("imagenOnClick");


                CUERPO.appendChild(newContainer);
                newContainer.appendChild(container2);
                container2.appendChild(imagen);



                let botonNuevo = document.createElement("button");
                botonNuevo.classList.add("newButton");
                botonNuevo.innerText = "Cerrar";
                newContainer.appendChild(botonNuevo);

                botonNuevo.addEventListener("click", () => {
                    location.reload();
                })

                let parrafoInterior = document.createElement("p");
                parrafoInterior.classList.add("template");

                parrafoInterior.innerText = `${FINALLY_THE_DATA_IN_MY_HANDS[i].name.official} es un lugar precioso, 
                localizado en alguna parte del mundo, su capital es ${FINALLY_THE_DATA_IN_MY_HANDS[i].capital[0]}, 
                excepcional destino turistico, con una poblacion de ${FINALLY_THE_DATA_IN_MY_HANDS[i].population} personas, 
                y se conduce por la ${FINALLY_THE_DATA_IN_MY_HANDS[i].car.side}.`

                newContainer.appendChild(parrafoInterior)
                
            })
        }
        }
    } catch (error) {
      console.log(
        `Something went wrong, but not really wrong, just wrong, ${error}`
      );
    }
};

  

    GET_SOME_DATA_ABOUT_FLAGS()











    /*const COUNTRY_LIST = document.querySelector(".countryList");




    const GET_SOME_DATA_ABOUT_FLAGS = async () => {
        try {
          const BRING_DATA_FROM_SPECIFIC_URL = await fetch(`https://restcountries.com/v3/all`);
          if (!BRING_DATA_FROM_SPECIFIC_URL.ok) {
            throw new Error(`Something went really really wrong, ${BRING_DATA_FROM_SPECIFIC_URL.status}`);
          } 
          else {
            const FINALLY_THE_DATA_IN_MY_HANDS = await BRING_DATA_FROM_SPECIFIC_URL.json();
            console.log(FINALLY_THE_DATA_IN_MY_HANDS)
            for(let i = 0; i < FINALLY_THE_DATA_IN_MY_HANDS.length; i++) {
                let container = document.createElement("button");
                container.classList.add("contenedor");
                let container2 = document.createElement("div");
                container2.classList.add("contenedor2");
    
                let parrafoPais = document.createElement("p");
                parrafoPais.classList.add("parrafo");
                parrafoPais.innerText = FINALLY_THE_DATA_IN_MY_HANDS[i].name.official;
    
                let imagen = document.createElement("img");
                imagen.classList.add("flagPic");
                imagen.src = FINALLY_THE_DATA_IN_MY_HANDS[i].flags[1]
    
            
                COUNTRY_LIST.appendChild(container);
                container.appendChild(container2);
                container2.appendChild(imagen);
                container.appendChild(parrafoPais)
    
                container.addEventListener("click", () => {
                    container.disabled = true;
                    container.classList.add("claseOnClick");
                    parrafoPais.classList.add("parrafoOnClick");
                    container2.classList.add("imagenOnClick");
    
                    let botonNuevo = document.createElement("button");
                    botonNuevo.classList.add("newButton");
                    botonNuevo.innerText = "Cerrar";
                    container.appendChild(botonNuevo);
    
                    botonNuevo.addEventListener("click", () => {
                        location.reload();
                    })
    
                    let parrafoInterior = document.createElement("p");
                    parrafoInterior.classList.add("template");
    
                    parrafoInterior.innerText = `${FINALLY_THE_DATA_IN_MY_HANDS[i].name.official} es un lugar precioso, 
                    localizado en alguna parte del mundo, su capital es ${FINALLY_THE_DATA_IN_MY_HANDS[i].capital[0]}, 
                    excepcional destino turistico, con una poblacion de ${FINALLY_THE_DATA_IN_MY_HANDS[i].population} personas, 
                    y se conduce por la ${FINALLY_THE_DATA_IN_MY_HANDS[i].car.side}.`
    
                    container.appendChild(parrafoInterior)
                    
                })
            }
            }
        } catch (error) {
          console.log(
            `Something went wrong, but not really wrong, just wrong, ${error}`
          );
        }
    };
    
      
    
        GET_SOME_DATA_ABOUT_FLAGS()

        */







