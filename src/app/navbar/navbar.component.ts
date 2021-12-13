import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  
  constructor(
    private router: Router 
  ) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/login'])
    environment.foto = ''
    environment.nome = ''
    environment.token = ''
    environment.id = 0

  }

}
