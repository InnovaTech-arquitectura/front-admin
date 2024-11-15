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

    // Do not add the Authorization header for this request
    return this.http.post(url, emailDTO, { responseType: 'text' }).pipe(
      catchError(this.handleError) // Error handling
    );
  }

  verifyRecoveryCode(codeDTO: PasswordRecoveryCodeDTO): Observable<string> {
    const url = `${this.apiURL}/verify`;
    return this.http.post(url, codeDTO, { responseType: 'text' }).pipe(
      catchError(this.handleError) // Error handling
    );
  }

  setNewPassword(passwordDTO: PasswordChangeDTO): Observable<string> {
    const url = `${this.apiURL}/set-password`;
    return this.http.post(url, passwordDTO, { responseType: 'text' }).pipe(
      catchError(this.handleError) // Error handling
    );
  }

  // Generic error handling method
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An error occurred. Please try again later.';

    if (error.status === 401) {
      errorMessage = 'Unauthorized request. Please check your authentication.';
    } else if (error.status === 400) {
      errorMessage = 'Bad request. Please check your input data.';
    } else if (error.status === 500) {
      errorMessage = 'Server error. Please try again later.';
    }

    // Display the error using SweetAlert2
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: errorMessage
    });

    return throwError(() => new Error(errorMessage));
  }
}
