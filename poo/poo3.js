/*Ejercicio 3: Clase Cuenta Detallada
/Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular y cantidad (puede tener decimales).
* El titular será obligatorio y la cantidad es opcional. Crea dos constructores que cumplan lo anterior.
* Crea sus métodos get, set y toString.
* Tendrá dos métodos especiales:
* ingresar(double cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
* retirar(double cantidad): se retira una cantidad a la cuenta, si restando la cantidad actual a la que nos pasan es 
negativa, la cantidad de la cuenta pasa a ser 0.*/

class Cuenta {

    constructor(titular, saldo = 0) {
    this._titular = titular;
    this._saldo = saldo;
    }

    get saldo() {
      return this._saldo;
    }

    set saldo(nuevoSaldo) {
    if (nuevoSaldo >= 0) {
      this._saldo = nuevoSaldo;
    } else {
      console.log("El saldo no puede ser negativo.");
    }
    }

    get titular() {
    return this._titular;
    }

    set titular(nuevoTitular) {
    this._titular = nuevoTitular;
    }

    ingresar(cantidad) {
    if (cantidad > 0) {
      this._saldo += cantidad;
      console.log(`Ingreso realizado. Nuevo saldo: ${this._saldo}`);
    } else {
      console.log("Cantidad invalida.");
    }
    }

    retirar(cantidad) {
    if (cantidad > 0) {
      if (this._saldo - cantidad < 0) {
        this._saldo = 0;
      } else {
        this._saldo -= cantidad;
      }
        console.log(`Retiro realizado. Nuevo saldo: ${this._saldo}`);
    } else {
        console.log("Cantidad invalida.");
    }
    }
}