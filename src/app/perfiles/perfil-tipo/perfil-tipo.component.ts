import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-tipo',
  templateUrl: './perfil-tipo.component.html',
  styleUrls: ['./perfil-tipo.component.css']
})
export class PerfilTipoComponent {

  constructor(
    private route: ActivatedRoute,
  ) { }

  tipo!: number;
  tipoPerfil!: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tipo = Number(params.get('tipo'));

      if (this.tipo == 1)
        this.tipoPerfil = 'administrador';
      else if (this.tipo == 2)
        this.tipoPerfil = 'publicidad';
      else if (this.tipo == 3)
        this.tipoPerfil = 'ventas';
      else if (this.tipo == 4)
        this.tipoPerfil = 'community manager';
      else if (this.tipo == 5)
        this.tipoPerfil = 'asesorías';
    });
  }
}
