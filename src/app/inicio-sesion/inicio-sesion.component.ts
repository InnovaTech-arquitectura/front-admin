import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], // Validación de correo
      password: ['', [Validators.required, Validators.minLength(6)]] // Validación de contraseña
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      
      // Manejar los datos, enviarlos a un servicio o API
      console.log('Correo:', email);
      console.log('Contraseña:', password);

      // Ejemplo de cómo enviar los datos a un servicio (requiere un servicio HTTP):
      // this.authService.login(email, password).subscribe(response => {
      //   console.log('Respuesta del servidor:', response);
      // });

    } else {
      console.log('Formulario inválido');
    }
  }
}
