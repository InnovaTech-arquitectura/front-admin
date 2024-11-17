import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.baseApiUrl + '/login';
  private secretKey = 'mySecretKey12345'; // Clave secreta de longitud adecuada (16, 24, 32 bytes)

  constructor(private http: HttpClient) {}

  getAdminId(): string | null {
    return localStorage.getItem('adminId');
  }

  // Método login modificado para cifrar la contraseña
  async login(email: string, password: string): Promise<Observable<string>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Ciframos la contraseña y esperamos el resultado
    const encryptedPassword = await this.encryptPassword(password);

    // Enviamos el email y la contraseña cifrada
    const body = JSON.stringify({ email, password: encryptedPassword });

    return this.http.post(this.apiUrl, body, { headers, responseType: 'text' }).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  // Función para cifrar la contraseña usando SubtleCrypto
  private async encryptPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const passwordBuffer = encoder.encode(password);
    
    // Generamos la clave a partir de la clave secreta (usamos un hash SHA-256)
    const key = await window.crypto.subtle.importKey(
      'raw',
      encoder.encode(this.secretKey),
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt']
    );

    // Generamos un vector de inicialización (IV) aleatorio
    const iv = window.crypto.getRandomValues(new Uint8Array(12)); // 12 bytes para AES-GCM

    // Realizamos el cifrado
    const cipherText = await window.crypto.subtle.encrypt(
      { name: 'AES-GCM', iv: iv },
      key,
      passwordBuffer
    );

    // Convertimos el cifrado a un formato que se pueda enviar (base64 o hexadecimal)
    const buffer = new Uint8Array(cipherText);
    const cipherTextBase64 = btoa(String.fromCharCode.apply(null, buffer));
    const ivBase64 = btoa(String.fromCharCode.apply(null, iv));

    // Devuelve el texto cifrado junto con el IV en base64
    return `${ivBase64}:${cipherTextBase64}`;
  }

  authRole(): Observable<string> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(this.apiUrl + '/role', { headers, responseType: 'text' });
  }
}
