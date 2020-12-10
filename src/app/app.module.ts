import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID ,NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';
import { ReservasComponent } from './reservas/reservas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EncabezadoClientesComponent } from './encabezado-clientes.component';
import { CheckboxModule } from 'primeng/checkbox';
import { CuerpoTablaClientesComponent } from './cuerpo-tabla-clientes/cuerpo-tabla-clientes.component';
import { IconsModule } from './icons/icons.module';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { GenerarClienteComponent } from './generar-cliente/generar-cliente.component';
import { GenerarClienteDatosGeneralesComponent } from './generar-cliente-datos-generales/generar-cliente-datos-generales.component';
import { GenerarClienteDatosSapComponent } from './generar-cliente-datos-sap/generar-cliente-datos-sap.component';
import { GenerarClienteDatosComercialesComponent } from './generar-cliente-datos-comerciales/generar-cliente-datos-comerciales.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { GenerarClienteDatosFinancieraComponent } from './generar-cliente-datos-financiera/generar-cliente-datos-financiera.component';
import { NotificationComponent } from './notification/notification.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import  localeEs  from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ContactosClienteComponent } from './contactos-cliente/contactos-cliente.component';
registerLocaleData(localeEs, 'es');




@NgModule({
  declarations: [
    AppComponent,
    ReservasComponent,
    ClientesComponent,
    EncabezadoClientesComponent,
    CuerpoTablaClientesComponent,
    RegistrarClienteComponent,
    GenerarClienteComponent,
    GenerarClienteDatosGeneralesComponent,
    GenerarClienteDatosSapComponent,
    GenerarClienteDatosComercialesComponent,
    GenerarClienteDatosFinancieraComponent,
    NotificationComponent,
    ContactosClienteComponent,
 
    
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    AppRoutingModule,
    CalendarModule,
    HttpClientModule,
    CheckboxModule,
    IconsModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    MultiSelectModule,
    RadioButtonModule,

    
 
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
