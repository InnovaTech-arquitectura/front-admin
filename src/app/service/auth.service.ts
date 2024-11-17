import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.baseApiUrl + '/login';  // La URL de tu backend
  private secretKey = 'mySecretKey12345';  // Clave secreta (debe coincidir con la del backend)

  constructor(private http: HttpClient) {}

  // Método de login
  login(email: string, password: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Ciframos la contraseña
    const encryptedPassword = this.encrypt(password);

    // Realizamos la solicitud HTTP POST con el email y la contraseña cifrada
    const body = JSON.stringify({ email, password: encryptedPassword });

    return this.http.post(this.apiUrl, body, { headers, responseType: 'text' }).pipe(
      catchError((error) => {
        console.error('Error en la solicitud:', error);
        return throwError(error);
      })
    );
  }

  // Función de cifrado XOR
  private encrypt(password: string): string {
    let encrypted = '';
    for (let i = 0; i < password.length; i++) {
      encrypted += String.fromCharCode(password.charCodeAt(i) ^ this.secretKey.charCodeAt(i % this.secretKey.length));
    }
    return btoa(encrypted);  // Convertimos a Base64 para una transmisión segura
  }

  // Método para obtener el rol desde el token (si es necesario)
  authRole(): Observable<string> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiUrl + '/role', { headers, responseType: 'text' });
  }
}
