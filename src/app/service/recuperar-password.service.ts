import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PasswordRecoveryEmailDTO } from '../model/passwordRecoveryEmailDTO';
import { environment } from 'src/environments/environment';
import { PasswordRecoveryCodeDTO } from '../model/passwordRecoveryCodeDTO';
import { PasswordChangeDTO } from '../model/passwordChangeDTO';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RecuperarPasswordService {

  private apiURL = environment.baseApiUrl + '/api/password-recovery';
  
  constructor(private http: HttpClient) { }

  requestPasswordRecovery(emailDTO: PasswordRecoveryEmailDTO): Observable<string> {
    const url = `${this.apiURL}/request`;
    return this.http.post(url, emailDTO, { responseType: 'text' }).pipe(
      catchError(this.handleError.bind(this))  
    );
  }

  verifyRecoveryCode(codeDTO: PasswordRecoveryCodeDTO): Observable<string> {
    const url = `${this.apiURL}/verify`;
    return this.http.post(url, codeDTO, { responseType: 'text' }).pipe(
      catchError(this.handleError.bind(this))  
    );
  }

  setNewPassword(passwordDTO: PasswordChangeDTO): Observable<string> {
    const url = `${this.apiURL}/set-password`;
    return this.http.post(url, passwordDTO, { responseType: 'text' }).pipe(
      catchError(this.handleError.bind(this))  
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const errorMessage = this.translateError(error);

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: errorMessage,
    });

    return throwError(() => new Error(errorMessage));
  }

  private translateError(error: HttpErrorResponse): string {
    let errorMessage = 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.';

    if (error.status === 0) {
      errorMessage = 'No se pudo conectar al servidor. Verifica tu conexión a internet.';
    } else if (error.status >= 500) {
      errorMessage = 'Error del servidor. Inténtalo de nuevo más tarde.';
    } else if (error.status === 400) {
      errorMessage = 'Solicitud incorrecta. Verifica los datos ingresados.';
    } else if (error.status === 401) {
      errorMessage = 'Código no válido.';
    } else if (error.status === 403) {
      errorMessage = 'Acceso denegado. No tienes los permisos necesarios.';
    } else if (error.status === 404) {
      errorMessage = 'Recurso no encontrado. Verifica la URL o el recurso.';
    } else if (error.status === 409) {
      errorMessage = 'Conflicto. Ya existe un recurso con estos datos.';
    } else if (error.status === 422) {
      errorMessage = 'Datos inválidos. Verifica los campos ingresados.';
    } else if (error.status >= 400 && error.status < 500) {
      errorMessage = 'Error en la solicitud. Verifica los datos proporcionados.';
    }

    return errorMessage;
  }
}
