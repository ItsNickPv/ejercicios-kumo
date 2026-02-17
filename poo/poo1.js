//Ejercicio 1: Clase Cuenta
//Crea una clase Cuenta con los métodos ingreso, reintegro y transferencia. La clase contendrá un constructor
//por defecto y los métodos getters y setters.

class Cuenta {

  constructor(titular = "Cris", saldo = 0) {
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

  ingreso(cantidad) {
    if (cantidad > 0) {
      this._saldo += cantidad;
      console.log(`Ingreso realizado. Nuevo saldo: ${this._saldo}`);
    } else {
      console.log("Cantidad inválida.");
    }
  }

  reintegro(cantidad) {
    if (cantidad > 0 && cantidad <= this._saldo) {
      this._saldo -= cantidad;
      console.log(`Reintegro realizado. Nuevo saldo: ${this._saldo}`);
    } else {
      console.log("Fondos insuficientes o cantidad inválida.");
    }
  }

  transferencia(cantidad, cuentaDestino) {
    if (cantidad > 0 && cantidad <= this._saldo) {
      this._saldo -= cantidad;
      cuentaDestino.ingreso(cantidad);
      console.log(`Transferencia realizada. Nuevo saldo: ${this._saldo}`);
    } else {
      console.log("No se pudo realizar la transferencia.");
    }
  }
}