
class Libro {
  constructor(titulo, autor, anio) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.disponible = true;
  }

  prestar() {
    if (this.disponible) {
      this.disponible = false;
      console.log(`El libro "${this.titulo}" ha sido prestado.`);
    } else {
      console.log(`El libro "${this.titulo}" no está disponible.`);
    }
  }

  devolver() {
    this.disponible = true;
    console.log(`El libro "${this.titulo}" ha sido devuelto.`);
  }

  info() {
    console.log(`
    Título: ${this.titulo}
    Autor: ${this.autor}
    Año: ${this.anio}
    Disponible: ${this.disponible ? "Sí" : "No"}
    `);
  }
}

class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
    this.librosPrestados = [];
  }

  prestarLibro(libro) {
    if (libro.disponible) {
      libro.prestar();
      this.librosPrestados.push(libro);
      console.log(`${this.nombre} ahora tiene "${libro.titulo}"`);
    } else {
      console.log(`No se puede prestar "${libro.titulo}" porque no está disponible.`);
    }
  }

  devolverLibro(libro) {
    const indice = this.librosPrestados.indexOf(libro);

    if (indice !== -1) {
      this.librosPrestados.splice(indice, 1);
      libro.devolver();
      console.log(`${this.nombre} devolvio "${libro.titulo}"`);
    } else {
      console.log(`${this.nombre} no tiene ese libro prestado.`);
    }
  }

  mostrarLibros() {
    console.log(`\nLibros prestados por ${this.nombre}:`);

    if (this.librosPrestados.length === 0) {
      console.log("No tiene libros prestados.");
      return;
    }

    this.librosPrestados.forEach(libro => {
      console.log(`- ${libro.titulo}`);
    });
  }
}

class Biblioteca {
  constructor() {
    this.libros = [];
  }

  agregarLibro(libro) {
    this.libros.push(libro);
  }

  listarDisponibles() {
    console.log("\nLibros disponibles:");
    this.libros
      .filter(libro => libro.disponible)
      .forEach(libro => console.log(`- ${libro.titulo}`));
  }

  buscarPorTitulo(titulo) {
    const libro = this.libros.find(l => l.titulo === titulo);

    if (libro) {
      console.log("\nLibro encontrado:");
      libro.info();
    } else {
      console.log("Libro no encontrado.");
    }
  }
}

