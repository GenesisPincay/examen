import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  correo: string = '';
  mensaje: string = '';

  constructor() {}

  // Validación del correo y mensaje
  formValido(): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(this.correo) && this.mensaje.trim() !== '';
  }

  // Método para manejar el envío del correo
  enviarCorreo() {
    if (this.formValido()) {
      alert('Correo enviado correctamente');
    } else {
      alert('Por favor, ingresa un correo válido y un mensaje.');
    }

    // Limpiar los campos después de enviar el correo
    this.correo = '';
    this.mensaje = '';
  }
}
