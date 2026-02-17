/*Ejercicio 7: Clase Agenda
Realizar una clase que administre una agenda. Se debe almacenar para cada contacto el nombre,
el teléfono y el email. Además, deberá mostrar un menú con las siguientes opciones:
* Añadir contacto
* Lista de contactos
* Buscar contacto
* Editar contacto
* Cerrar agenda*/

class Contacto {
    constructor(nombre, telefono, email) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }

    mostrar() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Email: ${this.email}`);
    }
}

class Agenda {
    constructor() {
        this.contactos = [];
    }

    añadirContacto() {
        const nombre = prompt("Ingrese nombre: ");
        const telefono = prompt("Ingrese teléfono: ");
        const email = prompt("Ingrese email: ");

        const nuevo = new Contacto(nombre, telefono, email);
        this.contactos.push(nuevo);

        console.log("Contacto añadido.");
    }

    listarContactos() {
        if (this.contactos.length === 0) {
            console.log("No hay contactos.");
            return;
        }

        this.contactos.forEach(contacto => contacto.mostrar());
    }

    buscarContacto() {
        const nombre = prompt("Ingrese nombre a buscar: ");
        const encontrado = this.contactos.find(
            c => c.nombre.toLowerCase() === nombre.toLowerCase()
        );

        if (encontrado) {
            console.log("Contacto encontrado:");
            encontrado.mostrar();
        } else {
            console.log("Contacto no encontrado.");
        }
    }

    editarContacto() {
        const nombre = prompt("Ingrese el contacto: ");
        const contacto = this.contactos.find(
            c => c.nombre.toLowerCase() === nombre.toLowerCase()
        );

        if (contacto) {
            contacto.telefono = prompt("Nuevo telefono: ");
            contacto.email = prompt("Nuevo email: ");
            console.log("Contacto actualizado.");
        } else {
            console.log("Contacto no encontrado.");
        }
    }
}

const agenda = new Agenda();
let opcion;

do {
    console.log("\nmenu");
    console.log("1. Añadir contacto");
    console.log("2. Lista de contactos");
    console.log("3. Buscar contacto");
    console.log("4. Editar contacto");
    console.log("5. Cerrar agenda");

    opcion = prompt("Seleccione una opcion: ");

    switch (opcion) {
        case "1":
            agenda.añadirContacto();
            break;
        case "2":
            agenda.listarContactos();
            break;
        case "3":
            agenda.buscarContacto();
            break;
        case "4":
            agenda.editarContacto();
            break;
        case "5":
            console.log("cerrando");
            break;
        default:
            console.log("error.");
    }

} while (opcion !== "5");