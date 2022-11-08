import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ActualizarSolicitudComponent } from './components/actualizar-solicitud/actualizar-solicitud.component';
import { ActualizarformularioComponent } from './components/actualizarformulario/actualizarformulario.component';
import { EditarSolicitudComponent } from './components/editar-solicitud/editar-solicitud.component';
import { EditarformularioComponent } from './components/editarformulario/editarformulario.component';
import { EnviarSolicitudComponent } from './components/enviar-solicitud/enviar-solicitud.component';
import { EnviarinformeComponent } from './components/enviarinforme/enviarinforme.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormulaiotecnicoComponent } from './components/formulaiotecnico/formulaiotecnico.component';
import { FormularioexpedienteComponent } from './components/formularioexpediente/formularioexpediente.component';
import { GenerarexpedienteComponent } from './components/generarexpediente/generarexpediente.component';
import { HomeComponent } from './components/home/home.component';
import { InformetecnicoComponent } from './components/informetecnico/informetecnico.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { VerificarformularioComponent } from './components/verificarformulario/verificarformulario.component';
import { VerificarsolicitudComponent } from './components/verificarsolicitud/verificarsolicitud.component';

const routes: Routes = [

  {path:'navbar' , component:NavbarComponent},
  {path:'enviarsolicitud' , component:EnviarSolicitudComponent},
  {path:'editarsolicitud' , component:EditarSolicitudComponent},
  {path:'editarformulario' , component:EditarformularioComponent},
  {path:'actualizarsolicitud' , component:ActualizarSolicitudComponent},
  {path:'footer', component: FooterComponent},
  {path:'about' , component:AboutComponent},
  {path:'actualizarformulario' , component:ActualizarformularioComponent},
  {path:'enviarinforme' , component:EnviarinformeComponent},
  {path:'formulariotecnico' , component:FormulaiotecnicoComponent},
  {path:'formularioexpediente' , component:FormularioexpedienteComponent},
  {path:'generarexpediente' , component:GenerarexpedienteComponent},
  {path:'home' , component:HomeComponent},
  {path:'informetecnico' , component:InformetecnicoComponent},
  {path:'notificaciones' , component:NotificacionesComponent},
  {path:'verificarformulario' , component:VerificarformularioComponent},
  {path:'verificarsolicitud' , component:VerificarsolicitudComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
