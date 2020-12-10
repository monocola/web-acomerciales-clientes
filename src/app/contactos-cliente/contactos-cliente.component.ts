import { Component, Injectable, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { GlobalClient } from '../commons/Clienteglobal';
import { Contacto } from '../model/contactos';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-contactos-cliente',
  templateUrl: './contactos-cliente.component.html',
  styleUrls: ['./contactos-cliente.component.scss']
})
 
export class ContactosClienteComponent implements OnInit {
 
  constructor(private formBuilder: FormBuilder,
              public config: GlobalClient) { }

  
  get telefonos(){
    return this.registerForm.get('telefonos') as FormArray;
  }

  registerForm = this.formBuilder.group({
    telefonos: this.formBuilder.array([])
  });

  
  ngOnInit() {
    const telefonoFormGroup  = this.formBuilder.group({
      nombre: '',
      cargo: '',
      correo: '',
      telefono:''
    });
    this.telefonos.push(telefonoFormGroup);
  }

  agregarTelefono(){
    const telefonoFormGroup  = this.formBuilder.group({
      nombre: '',
      cargo: '',
      correo: '',
      telefono:''
    });
    this.telefonos.push(telefonoFormGroup);
  }

  removerTelefono(indice: number) {
    this.telefonos.removeAt(indice);
  }

  submit() {
    this.config.setGlobalContactos(this.registerForm.value);
  }

  
}
