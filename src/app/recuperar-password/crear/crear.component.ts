import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordChangeDTO } from 'src/app/model/passwordChangeDTO';
import { RecuperarPasswordService } from 'src/app/service/recuperar-password.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  newPassword: string = '';
  confirmNewPassword: string = '';

  constructor(private recuperarPasswordService: RecuperarPasswordService, private router: Router) {}

  onSubmit() {
    const passwordDTO: PasswordChangeDTO = { newPassword: this.newPassword, confirmNewPassword: this.confirmNewPassword };
    this.recuperarPasswordService.setNewPassword(passwordDTO).subscribe(
      (response) => {
        //console.log(response); 
        this.router.navigate(['/login']);
        Swal.fire({
          icon: 'success',
          title: 'Contraseña establecida',
          text: 'Su contraseña ha sido establecida correctamente. Inicie sesión.'
        });
      },
      (error) => {
        //console.error('Error al establecer la nueva contraseña', error);
      }
    );
  }

}
