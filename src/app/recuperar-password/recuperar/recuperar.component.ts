import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordRecoveryEmailDTO } from 'src/app/model/passwordRecoveryEmailDTO';
import { RecuperarPasswordService } from 'src/app/service/recuperar-password.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent {
  email: string = '';
  
  constructor(private recuperarPasswordService: RecuperarPasswordService, private router: Router) {}

  onSubmit() {
    const emailDTO: PasswordRecoveryEmailDTO = { email: this.email };
    this.recuperarPasswordService.requestPasswordRecovery(emailDTO).subscribe(
      (response) => {
        console.log(response); // Manejo de la respuesta
        this.router.navigate(['/recuperar-password/verificacion']);
       
        Swal.fire({
          icon: 'success',
          title: 'Código enviado',
          text: 'Se ha enviado un código de recuperación a tu correo electrónico.'
        });
    
      },
      (error) => {
        console.error('Error al enviar la solicitud de recuperación de contraseña', error);
      }
    );
  }

}
