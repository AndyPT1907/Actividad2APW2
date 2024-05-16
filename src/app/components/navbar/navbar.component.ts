import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  servicio = inject(LoginService);
  cerrar(){
    localStorage.removeItem('currentUser')
    //localStorage.setItem("token",'false')
    localStorage.removeItem('token')
    window.location.href='login'
  }


  rol = localStorage.getItem('currentUser')
  ocultar = localStorage.getItem('token')
  rol2= localStorage.getItem('rol2')
  
  


  
}
