import { Component, OnInit } from '@angular/core';
import { PublicidadService } from 'src/app/service/publicidad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-banners',
  templateUrl: './ver-banners.component.html',
  styleUrls: ['./ver-banners.component.css']
})
export class VerBannersComponent implements OnInit {
  banners: any[] = [];

  constructor(private publicidadService: PublicidadService, private router: Router) {}

  ngOnInit(): void {
    this.publicidadService.listBanners().subscribe(
      (data) => {
        this.banners = data;
      },
      (error) => {
        console.error('Error fetching banners:', error);
      }
    );
  }

  editBanner(id: number): void {
    this.router.navigate([`/editar-banner/${id}`]);
  }

  deleteBanner(id: number): void {
    this.publicidadService.deleteBanner(id).subscribe(
      () => {
        this.banners = this.banners.filter((banner) => banner.id !== id);
      },
      (error) => {
        console.error('Error deleting banner:', error);
      }
    );
  }
}
