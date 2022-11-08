import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EnviarSolicitudComponent } from './components/enviar-solicitud/enviar-solicitud.component';
import { ActualizarSolicitudComponent } from './components/actualizar-solicitud/actualizar-solicitud.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditarSolicitudComponent } from './components/editar-solicitud/editar-solicitud.component';
import { EditarformularioComponent } from './components/editarformulario/editarformulario.component';
import { ActualizarformularioComponent } from './components/actualizarformulario/actualizarformulario.component';
import { GenerarexpedienteComponent } from './components/generarexpediente/generarexpediente.component';
import { FormularioexpedienteComponent } from './components/formularioexpediente/formularioexpediente.component';
import { VerificarsolicitudComponent } from './components/verificarsolicitud/verificarsolicitud.component';
import { VerificarformularioComponent } from './components/verificarformulario/verificarformulario.component';
import { InformetecnicoComponent } from './components/informetecnico/informetecnico.component';
import { FormulaiotecnicoComponent } from './components/formulaiotecnico/formulaiotecnico.component';
import { EnviarinformeComponent } from './components/enviarinforme/enviarinforme.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EnviarSolicitudComponent,
    ActualizarSolicitudComponent,
    NotificacionesComponent,
    FooterComponent,
    NavbarComponent,
    EditarSolicitudComponent,
    EditarformularioComponent,
    ActualizarformularioComponent,
    GenerarexpedienteComponent,
    FormularioexpedienteComponent,
    VerificarsolicitudComponent,
    VerificarformularioComponent,
    InformetecnicoComponent,
    FormulaiotecnicoComponent,
    EnviarinformeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
