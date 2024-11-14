import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordRecoveryCodeDTO } from 'src/app/model/passwordRecoveryCodeDTO';
import { RecuperarPasswordService } from 'src/app/service/recuperar-password.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.component.html',
  styleUrls: ['./verificacion.component.css']
})
export class VerificacionComponent {
  code: string = '';

  constructor(private recuperarPasswordService: RecuperarPasswordService, private router: Router) {}

  onSubmit() {
    const codeDTO: PasswordRecoveryCodeDTO = { code: this.code };
    this.recuperarPasswordService.verifyRecoveryCode(codeDTO).subscribe(
      (response) => {
        //console.log(response);
        this.router.navigate(['/recuperar-password/crear']);
        
      },
      (error) => {
        //console.error('Error al verificar el código de recuperación', error);
      }
    );
  }
}
