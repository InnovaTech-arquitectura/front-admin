import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { AuthGuard } from './auth.guard'; // Cambia authGuard por AuthGuard

describe('AuthGuard', () => { // Cambia 'authGuard' por 'AuthGuard'
  let guard: AuthGuard; // Declara la variable para la clase AuthGuard

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard); // Inyecta AuthGuard en el contexto de pruebas
  });

  it('should be created', () => {
    expect(guard).toBeTruthy(); // Verifica que el guard se haya creado correctamente
  });
});
