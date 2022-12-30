let saludo = document.getElementById("saludo");

saludo.innerHTML =`
            <section class="my-xl-5" id="title">
                <h1 class="btn-dark position-relative">Registrate y obtene fantasticas ofertas!</h1>
            </section>
            <section id="formulario">
                <form class="row g-0 ">
                    <div class="col-md-6 p-2">
                        <label for="inputEmail4" class="form-label">Nombre</label>
                        <input type="email" class="form-control" id="inputEmail4">
                    </div>
                    <div class="col-md-6 p-2">
                        <label for="inputPassword4" class="form-label">Apellido</label>
                        <input type="password" class="form-control" id="inputPassword4">
                    </div>
                    <div class="col-12 p-2">
                        <label for="inputAddress" class="form-label">Email</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="ejemplo@gmail.com">
                    </div>
                    <div class="col-12 p-2">
                        <label for="inputAddress2" class="form-label">Telefono</label>
                        <input type="text" class="form-control" id="inputAddress2"
                            placeholder="011-12345678">
                    </div>
                    <div class="col-md-6 p-2">
                        <label for="inputCity" class="form-label">Ciudad</label>
                        <input type="text" class="form-control" id="inputCity">
                    </div>
                    <div class="col-md-4 p-2">
                        <label for="inputState" class="form-label">Provincia</label>
                        <select id="inputState" class="form-select">
                            <option selected>Elegir...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="col-md-2 p-2">
                        <label for="inputZip" class="form-label">CP</label>
                        <input type="text" class="form-control" id="inputZip">
                    </div>
                    <div class="col-12 p-2">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck">
                            <label class="form-check-label" for="gridCheck">
                                acepto recivir novedades
                            </label>
                        </div>
                    </div>
                    <div class="col-12 p-2">
                        <button type="submit" class="btn btn-primary">enviar</button>
                    </div>
                </form>
            </section>`;
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputs = e.target.children;

let usuario ={
    nombre: inputs[0].value,
    edad: inputs[1].value,
}
    localStorage.setItem("nombre", inputs[0].value);
    localStorage.setItem("edad", inputs[1].value);
});

let seccion = prompt(`seleccione el modelo de zapatilla deseado:
          vapormax
          360`);

if (seccion === "vapormax") {

let container = document.getElementById("container");
const zapatillas = [{
        id: "Nike Air Vapormax Flyknit",
        modelo: [`Celeste Pipa Rosa`,`Negra Pipa Dorada`,`Negra Pipa Blanca`,`Barcelona`],
        precio: 24000,
        img:[`
        <iframe src="https://drive.google.com/file/d/1EUnygNOw3Z7rycKGQ3maSGDCbYJ589Bu/preview" width="300" height="400" allow="autoplay"></iframe>`,

        `<iframe src="https://drive.google.com/file/d/1EF9tm1f_S8YQkmELFHXzafjyXVECz6nA/preview" width="300" height="400" allow="autoplay"></iframe>`,

        `<iframe src="https://drive.google.com/file/d/1EY0RzyFcEesY4L1wwlk0ccA9j3u5LBmX/preview" width="300" height="400" allow="autoplay"></iframe>`,

        `<iframe src="https://drive.google.com/file/d/1Cd8Bk1uFDFznymWDtyPvMVc5Xgg_KHv0/preview" width="300" height="400" allow="autoplay"></iframe>`]
        }];
zapatillas.forEach(zapatilla => {
    let div = document.createElement("div");
    div.innerHTML =

    `<section class="my-xl-5" id="title">
        <h1 class="btn-dark position-relative">${zapatilla.id}</h1>
     </section>
     <div class="row row-cols-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3 my-xl-5 mx-xl-5 g-0" id="body">
        <div class="col my-md-3 my-xl-3">
            <div class="card h-100 mx-md-3 mx-xl-3" id="img-card">
                ${zapatilla.img[0]}
                <div class="card-body">
                    <small class="text-muted">$${zapatilla.precio}</small>
                    <h5 class="card-title">${zapatilla.modelo[0]}</h5>
                    <button type="button" class="btn btn-outline-primary" id="boton${zapatilla.id}">Agregar al carrito</button>
                </div>
            </div>
        </div>
        <div class="col my-md-3 my-xl-3">
            <div class="card h-100 mx-md-3 mx-xl-3" id="img-card">
               ${zapatilla.img[1]}
                <div class="card-body">
                    <small class="text-muted">$${zapatilla.precio}</small>
                    <h5 class="card-title">${zapatilla.modelo[1]}</h5>
                   <button type="button" class="btn btn-outline-primary" id="boton${zapatilla.id}">Agregar al carrito</button>
                </div>
            </div>
        </div>
        <div class="col my-md-3 my-xl-3">
            <div class="card h-100 mx-md-3 mx-xl-3" id="img-card">
                ${zapatilla.img[2]}
                <div class="card-body">
                    <small class="text-muted">$${zapatilla.precio}</small>
                    <h5 class="card-title">${zapatilla.modelo[2]}</h5>
                  <button type="button" class="btn btn-outline-primary" id="boton${zapatilla.id}">Agregar al carrito</button>
                </div>
            </div>
        </div>
        <div class="col my-md-3 my-xl-3">
            <div class="card h-100 mx-md-3 mx-xl-3" id="img-card">
                ${zapatilla.img[3]}
                <div class="card-body">
                    <small class="text-muted">$${zapatilla.precio}</small>
                    <h5 class="card-title">${zapatilla.modelo[3]}</h5>
                    <button type="button" class="btn btn-outline-primary" id="boton${zapatilla.id}">Agregar al carrito</button>
                </div>
            </div>
        </div>
    </div>
    </section>`;

    container.append(div);
    let boton = document.getElementById(`boton${zapatilla.id}`);

    const ejecutar = (id) => {
    console.log(id.modelo);
}
    boton.addEventListener("click", () => ejecutar(zapatilla.id));
    let item = localStorage.getItem("")
});


localStorage.setItem("zapatillas", JSON.stringify(zapatillas));
}
else if (seccion === "360") {
    let container = document.getElementById("container");
    const zapatillas = [
   {    id: "Nike Air Vapormax 360",
        modelo: [`Crema`,`Celeste`,`Negra Multicolor`,`Gris`],
        precio: 26000,
        img: [`
        <iframe src="https://drive.google.com/file/d/1fUISmhVo2NyL3BdH8M5kT79HqGUGKGbK/preview" width="300" height="400" allow="autoplay"></iframe>`,

        `<iframe src="https://drive.google.com/file/d/1a0uSAFu-G2UW5VM2zP2xl7YyZakppXi-/preview" width="300" height="400" allow="autoplay"></iframe>`,

        `<iframe src="https://drive.google.com/file/d/1SSM2tzuQldEeJeyA2MoP-wLZKYJ2n7sn/preview" width="300" height="400" allow="autoplay"></iframe>`,

        `<iframe src="https://drive.google.com/file/d/1gf0SIiyYFuhD3gFTeEQIOsEc9W2Kqvat/preview" width="300" height="400" allow="autoplay"></iframe>`]
    },
];
localStorage.setItem("zapatillas", JSON.stringify(zapatillas));

zapatillas.forEach(zapatilla => {
    let div = document.createElement("div");
    div.innerHTML = `

    <section class="my-xl-5" id="title">
        <h1 class="btn-dark position-relative">${zapatilla.id}</h1>
     </section>
    <div class="row row-cols-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3 my-xl-5 mx-xl-5 g-0" id="body">
        <div class="col my-md-3 my-xl-3">
            <div class="card h-100 mx-md-3 mx-xl-3" id="img-card">
                ${zapatilla.img[0]}
                <div class="card-body">
                    <small class="text-muted">$${zapatilla.precio}</small>
                    <h5 class="card-title">${zapatilla.modelo[0]}</h5>
                    <button type="button" class="btn btn-outline-primary" id="boton${zapatilla.id}">Agregar al carrito</button>
                </div>
            </div>
        </div>
        <div class="col my-md-3 my-xl-3">
            <div class="card h-100 mx-md-3 mx-xl-3" id="img-card">
               ${zapatilla.img[1]}
                <div class="card-body">
                    <small class="text-muted">$${zapatilla.precio}</small>
                    <h5 class="card-title">${zapatilla.modelo[1]}</h5>
                   <button type="button" class="btn btn-outline-primary" id="boton${zapatilla.id}">Agregar al carrito</button>
                </div>
            </div>
        </div>
        <div class="col my-md-3 my-xl-3">
            <div class="card h-100 mx-md-3 mx-xl-3" id="img-card">
                ${zapatilla.img[2]}
                <div class="card-body">
                    <small class="text-muted">$${zapatilla.precio}</small>
                    <h5 class="card-title">${zapatilla.modelo[2]}</h5>
                  <button type="button" class="btn btn-outline-primary" id="boton${zapatilla.id}">Agregar al carrito</button>
                </div>
            </div>
        </div>
        <div class="col my-md-3 my-xl-3">
            <div class="card h-100 mx-md-3 mx-xl-3" id="img-card">
                ${zapatilla.img[3]}
                <div class="card-body">
                    <small class="text-muted">$${zapatilla.precio}</small>
                    <h5 class="card-title">${zapatilla.modelo[3]}</h5>
                    <button type="button" class="btn btn-outline-primary" id="boton${zapatilla.id}">Agregar al carrito</button>
                </div>
            </div>
        </div>
    </div>
    </section>`;

    container.append(div);
    let boton = document.getElementById(`boton${zapatilla.id}`);

    const ejecutar = (id) => {
    console.log(id.modelo);
}
    boton.addEventListener("click", () => ejecutar(zapatilla.id));
    let item = localStorage.getItem("")
})

}
else {
    saludo.innerHTML = "Bienvenid@ a nuestra pajina";
}

    // {
    //     id: "Nike Air Max 97",
    //     modelo: [`Multicolor`,`Multicolor`,`Multicolor`,`Multicolor`],
    //     precio: 25500,
    //     img: [`
    //     <iframe src="https://drive.google.com/file/d/1EdyIvniiqh9F-sSW_0P7l83hjCJCafEn/preview" width="300" height="400" allow="autoplay"></iframe>`,

    //     `<iframe src="https://drive.google.com/file/d/1v2d9QatoEHkxyr1ZjR9Few2RLl0jqh_O/preview" width="300" height="400" allow="autoplay"></iframe>`,

    //     `<iframe src="https://drive.google.com/file/d/1enCt9eZOr4_eYlWGp9EB2nXrQfhFtqqz/preview" width="300" height="400" allow="autoplay"></iframe>`,

    //     `<iframe src="https://drive.google.com/file/d/1EcZRajvyMjVA2LiKIChduUpuXFieJcJA/preview" width="300" height="400" allow="autoplay"></iframe>`]
    // },
    // {
    //     id: "Nike Shox TL1",
    //     modelo: [`Negra`,`Negra Tornazolada`,`Blanca`,`Azul/Celeste`],
    //     precio: 7000,
    //     img: [`
    //     <iframe src="https://drive.google.com/file/d/1DeDuD41duO3L4e3vLai5pNSIqfPClctb/preview" width="300" height="400" allow="autoplay"></iframe>`,

    //     `<iframe src="https://drive.google.com/file/d/1EBNCnABxMMh7p_n9_baIXYbmjL94mXz_/preview" width="300" height="400" allow="autoplay"></iframe>`,

    //     `<iframe src="https://drive.google.com/file/d/1Djlln8XjbIVHadXanzlm70rPzblRjCU1/preview" width="300" height="400" allow="autoplay"></iframe>`,

    //     `<iframe src="https://drive.google.com/file/d/1Qmk6oXdsrBkeHEHwgzK0xtjTFJr_yke8/preview" width="300" height="400" allow="autoplay"></iframe>`]
    // },