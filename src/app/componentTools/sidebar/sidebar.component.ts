import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  role: String;

  ngOnInit(): void {
    this.authService.authRole().subscribe(
      (response) => {
        this.role = response;
        console.log(response);
      }
    );
  }

  showMenuItem(roles: String[]): boolean {
    return roles.includes(this.role);
  }
}
