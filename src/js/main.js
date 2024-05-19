//arrays necesarios-------------------------
let namePets = [];
let nameOwners = [];

//pintar mascostas desde js---------------------------------------------------
let divMacotas = document.getElementById("lista__mascotas");
divMacotas.classList.add(
    "d-flex",
    "justy-content-center",
    "aling-items-center",
    "flex-wrap",
    "gap-3",
    "mt-2"
);

function pintarDatos() {
    divMacotas.innerHTML = "";
    for (let i = 0; i < resgistroMascotas.length; i++) {
        divMacotas.innerHTML += `
        <div class="card mb-3 col-sm-5 col-md-4 p-3 bg-success bg-opacity-10 border border-success border-end-0" style="max-width: 440px;max-height: 320px;">
        <div class="row g-0">
            <div class="col-md-5 col-sm-4">
                <img src="${resgistroMascotas[i].image}" class="img-fluid rounded object-fit-cover" alt="mascota" style="max-width: 100%;">
            </div>
            <div class="col-md-7 col-sm-8">
                <div class="card-body text-center">
                    <h5 class="card-title mb-3 fs-2 text-uppercase">${resgistroMascotas[i].name}</h5>
                    <p class="card-text mb-0"><strong>Raza mascota: </strong> ${resgistroMascotas[i].breed}</p>
                    <p class="card-text mb-3"><strong>Edad mascota: </strong> tengo ${resgistroMascotas[i].age} años</p>
                    <button type="button" class="btn btn-danger me-2" id="${resgistroMascotas[i].id}" onclick="deletePest(${resgistroMascotas[i].id})">
                        Eliminar
                    </button>
                    <button type="button" id="${resgistroMascotas[i].id}"  onclick="updatePets(${resgistroMascotas[i].id})" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalForUpdating" data-bs-whatever="@mdo">Editar</button>
                </div>
            </div>
        </div>
    </div>`;
    }
}

// total mascotas--------------------------------------------
function totalPets() {
    let total = resgistroMascotas.length
    let totalPets = document.querySelector('.totalPets')
    totalPets.textContent = total;
}


/* pintar dueños desde js--------------------------------------------------   */
/* let listaDueños = document.getElementById("lista__dueños");
console.log(listaDueños);

for (let i = 0; i < resgistroMascotas.length; i++) {
    listaDueños.innerHTML += `
    <tr>
      <th>${resgistroMascotas[i].name.toLocaleUpperCase()}</th>
      <td>${resgistroMascotas[i].species}</td>
      <td>${resgistroMascotas[i].owner.nameOwner}</td>
      <td>${resgistroMascotas[i].owner.contact.slice(3)}</td>
    </tr>
`;
} */


//Buscar dueño---------------------------------
function filterByOwner(callOwner) {
    let dueño = [];
    resgistroMascotas.filter((Element) =>
        Element.owner.nameOwner == callOwner ? dueño.push(Element) : ""
    );
    console.log(dueño);
    dueño = [];
}

//Buscar mascota------------------------------
function filterPets(pets) {
    for (let i = 0; i < resgistroMascotas.length; i++) {
        if (pets === resgistroMascotas[i].name) {
            console.log(resgistroMascotas[i]);
        }
    }
}

//ELIMINAR MASCOTA---------------------------------
function deletePest(idPest) {
    console.log("encontradooo", idPest);
    for (let i = 0; i < resgistroMascotas.length; i++) {
        if (idPest == resgistroMascotas[i].id) {
            console.log(resgistroMascotas[i]);
            Swal.fire({
                title: "Desea eliminar la mascota?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si,eliminar!",
            }).then((result) => {
                if (result.isConfirmed) {
                    resgistroMascotas.splice(i, 1); // Eliminar la mascota del arreglo
                    totalPets();//funcion de pets totales
                    pintarDatos(); // Volver a llamar funcion que pinta
                    Swal.fire({
                        title: "Eliminada!",
                        text: "Mascota eliminada correctamente",
                        icon: "success",
                    });
                }
            });
            break; // Salir del bucle después de eliminar la mascota
        }
    }
}


//actualizar informacion mascota-------------------------------------
function updatePets(pets) {
    
    console.log("encontre a revv", pets);
    const modal = document.getElementById("modalForUpdating");
    //tomamos variables de los inputs de la modal
    let inputName = modal.querySelector("#inputName");
    let inputAge = modal.querySelector("#inputAge");
    let inputweight = modal.querySelector("#inputweight"); 
    let inputStatus = modal.querySelector("#inputStatus"); 

    let modalUpdateBtn = modal.querySelector("#modalUpdateBtn"); // se toma el Button de la modal

    let foundPet = resgistroMascotas.find((pet) => pet.id == pets); // Se comparan Id's
    console.log(foundPet);

    let onUpdateFn = () => {
        // Object.assign actualiza el objeto pasado como primer parametro con las propiedades del segundo parametro (objeto)
        Object.assign(foundPet, {
            // Se cambian los datos actuales por los que se ingresa en el modal
            name: inputName.value,
            age: parseInt(inputAge.value),
            weight: inputweight.value,
            status: inputStatus.value,
        });
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Mascota editada correctamente",
            showConfirmButton: false,
            timer: 1500
          });

        totalPets();
        pintarDatos(); // Se vuelven a imprimir las cards ya que se modifico alguna
        modalUpdateBtn.removeEventListener("click", onUpdateFn); // Se remueve el Listener para que no me quede registro en memoria de los valores anteriores
    };


    modalUpdateBtn.addEventListener("click", onUpdateFn); // Se vuelve a agregar el Listener para un caso futuro de modificación
    
    // Mostrar los datos actuales de la mascota
    inputName.value = foundPet.name;
    inputAge.value = foundPet.age;
    inputweight.value = foundPet.weight;
    inputStatus.value = foundPet.status;
}


// buscar mascota------------------------------------------
function encontrado(mascota) {
    console.log("entrando");
    console.log(mascota);
    // Obtener los nuevos valores de los campos de entrada
    let newName = document.getElementById("namePest").value;
    let newAge = document.getElementById("age").value;
    let newWeight = document.getElementById("weight").value;

    for (let i = 0; i < resgistroMascotas.length; i++) {
        if (mascota == resgistroMascotas[i]) {
            console.log("bien");
            resgistroMascotas[i].name = newName;
            resgistroMascotas[i].age = newAge;
            resgistroMascotas[i].weight = newWeight;
            console.log(resgistroMascotas[i]);
            break;
        }
    }
    pintarDatos();
}


//funcion para crear mascota-------------------------------------
function createPets() {
    let namePest = document.getElementById("regisName");
    let species = document.getElementById("regisEspecie");
    let bread = document.getElementById("regisRaza");
    let age = document.getElementById("regisAge");
    let weight = document.getElementById("regisWeight");
    let statusM = document.getElementById("regisStatus");
    let nameOwner = document.getElementById("regisOvwer");
    let ownerId = document.getElementById("regisOwnerId");
    let contact = document.getElementById("regisContact");
    let email = document.getElementById("regisEmail");
    // id para que empiece a contar desde este numero y me ponga id nuevos
    let idM = 11

    //Me falta hacer validaciones para el guardado de mascota
    let datesPets = {
        id: idM++,
        name: namePest.value,
        species: species.value,
        breed: bread.value,
        age: calculateAge(age.value),
        weight: weight.value,
        status: statusM.value,
        owner: {
            nameOwner: nameOwner.value,
            ownerId: ownerId.value,
            contact: contact.value,
            email: email.value,
        },
        image:"",
    };
    //agregar datos al array principal
    resgistroMascotas.push(datesPets);
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Mascota registrada",
        showConfirmButton: false,
        timer: 1200
      });
    document.getElementById("form").reset();
    pintarDatos();
    totalPets();
}

// Modo oscuro-----------------------------------------------------------
document.getElementById("toggler").addEventListener("click", function () {
    let toggle = document.getElementById("toggler");
    toggle.innerHTML = '<i class="bi bi-cloud-sun-fill"></i>';
    document.body.classList.toggle("bg-dark");
    document.querySelector("#toggler").classList.toggle("bg-dark");
    document.querySelector("header").classList.toggle("bg-dark");
    document.querySelector('.modal-content').classList.toggle("bg-dark")
    let body = document.querySelectorAll(".card-body");
    body.forEach((card) => {
        card.classList.toggle("text-light");
    });

    // Cambiar el color del botón a verde
    toggle.classList.remove("btn-primary");
    toggle.classList.add("btn-success");
});

// llamado de funciones
totalPets()
pintarDatos()
