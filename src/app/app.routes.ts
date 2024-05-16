import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { GestionLComponent } from './pages/gestion-l/gestion-l.component';
import { GestionUComponent } from './pages/gestion-u/gestion-u.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { Error404Component } from './pages/error404/error404.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard  } from './guards/auth.guard';
import { EditarUserComponent } from './pages/editar-user/editar-user.component';

export const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'catalogo',component:CatalogoComponent, canActivate:[authGuard]},
    {path:'gestionL',component:GestionLComponent, canActivate: [authGuard], data: { role: 'admin' } },
    {path:'gestionU',component:GestionUComponent, canActivate: [authGuard], data: { role: 'admin' } },
    {path:'prestamos',component:PrestamosComponent,canActivate:[authGuard]},
    {path:'contactos',component:ContactosComponent,canActivate:[authGuard]},
    { path: 'editar/:idUsers', component: EditarUserComponent},
    {path:'login',component:LoginComponent},
    
    {path:'**',component:Error404Component}

    


];
