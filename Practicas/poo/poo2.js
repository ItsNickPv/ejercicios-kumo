//Ejercicio 2: Clase Contador
//Crea una clase Contador con los métodos para incrementar y decrementar el contador.
//La clase contendrá un constructor por defecto y los métodos getters y setters.

class Contador {

  constructor(valor = 0) {
    this._valor = valor;
  }

  get valor() {
    return this._valor;
  }

  set valor(nuevoValor) {
    if (nuevoValor >= 0) {
      this._valor = nuevoValor;
    } else {
      console.log("El valor no puede ser negativo.");
    }
  }

    incrementar() 
    {
    this._valor++;
    console.log(`Valor incrementado: ${this._valor}`);
    }

    decrementar()
    {
    if (this._valor > 0) {
      this._valor--;
        console.log(`Valor decrementado: ${this._valor}`);
    } else {
      console.log("El valor no puede ser negativo.");
    }
    }
}
