//array con los objetos de cada mascota
let resgistroMascotas = [
    {
        id: "1",
        name: "max",
        species: "Perro",
        breed: "Labrador Retriever",
        age: calculateAge("2019-03-15"),
        weight: "25 kg",
        status: "Estable",
        owner: {
            nameOwner: "juan perez",
            ownerId: "12345678",
            contact: "+1234567890",
            email: "juanperez@example.com",
        },
        image: "./public/img/labrador.webp",
    },
    {
        id: "2",
        name: "luna",
        species: "Gato",
        breed: "Siamés",
        age: calculateAge("2020-06-20"),
        weight: "4 kg",
        status: "Estable",
        owner: {
            nameOwner: "maria garcia",
            ownerId: "87654321",
            contact: "+9876543210",
            email: "mariagarcia@example.com",
        },
        image: "./public/img/siames.webp",
    },
    {
        id: "3",
        name: "buddy",
        species: "Perro",
        breed: "Golden Retriever",
        age: calculateAge("2017-11-10"),
        weight: "30 kg",
        status: "Crítico",
        owner: {
            nameOwner: "pedro rodriguez",
            ownerId: "56789012",
            contact: "+1122334455",
            email: "pedrorodriguez@example.com",
        },
        image: "./public/img/Golden_Retriever.webp",
    },
    {
        id: "4",
        name: "milo",
        species: "Perro",
        breed: "Bulldog Francés",
        age: calculateAge("2020-02-25"),
        weight: "12 kg",
        status: "Estable",
        owner: {
            nameOwner: "elena martin",
            ownerId: "45678901",
            contact: "+1234567890",
            email: "elenamartin@example.com",
        },
        image: "./public/img/bullgoFrances.webp",
    },
    {
        id: "5",
        name: "simba",
        species: "Gato",
        breed: "Persa",
        age: calculateAge("2017-09-05"),
        weight: "5 kg",
        status: "Estable",
        owner: {
            nameOwner: "carlos lopez",
            ownerId: "34567890",
            contact: "+5544332211",
            email: "carloslopez@example.com",
        },
        image: "./public/img/persa.webp",
    },
    {
        id: "6",
        name: "rocky",
        species: "Perro",
        breed: "Pastor Alemán",
        age: calculateAge("2019-08-10"),
        weight: "28 kg",
        status: "Estable",
        owner: {
            nameOwner: "david lopez",
            ownerId: "89012345",
            contact: "+9876543210",
            email: "davidlopez@example.com",
        },
        image: "./public/img/pastor.webp",
    },
    {
        id: "7",
        name: "coco",
        species: "Perro",
        breed: "Chihuahua",
        age: calculateAge("2021-01-30"),
        weight: "3 kg",
        status: "Estable",
        owner: {
            nameOwner: "roberto gonzalez",
            ownerId: "23456789",
            contact: "+9988776655",
            email: "robertogonzalez@example.com",
        },
        image: "./public/img/chihuahua.webp",
    },
    {
        id: "8",
        name: "nala",
        species: "Gato",
        breed: "Maine Coon",
        age: calculateAge("2018-04-12"),
        weight: "7 kg",
        status: "Estable",
        owner: {
            nameOwner: "juan perez",
            ownerId: "12345678",
            contact: "+1234567890",
            email: "juanperez@example.com",
        },
        image: "./public/img/maine.webp",
    },
    {
        id: "9",
        name: "toby",
        species: "Perro",
        breed: "Beagle",
        age: calculateAge("2020-11-18"),
        weight: "10 kg",
        status: "Estable",
        owner: {
            nameOwner: "elena martin",
            ownerId: "45678901",
            contact: "+1234567890",
            email: "elenamartin@example.com",
        },
        image: "./public/img/beagle.webp",
    },
    {
        id: "10",
        name: "lola",
        species: "Gato",
        breed: "Bengalí",
        age: calculateAge("2019-05-07"),
        weight: "6 kg",
        status: "Estable",
        owner: {
            nameOwner: "david lopez",
            ownerId: "89012345",
            contact: "+9876543210",
            email: "davidlopez@example.com",
        },
        image: "./public/img/bengali.webp",
    },
];

//calcular edad de mascotas-------------------------------
function calculateAge(birthday) {
    let fechaBrit = new Date(birthday);
    let anioMascota = fechaBrit.getFullYear();
    let hoy = new Date();
    let edad = hoy.getFullYear() - anioMascota;
    return edad;
}
