import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VacunasService } from './services/vacunas/vacunas.service';
import { EmpleadosService } from './services/empleados/empleados.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  empleadoForm: FormGroup;
  vacunas: any;

  constructor(
    public fb: FormBuilder,
    public vacunasService: VacunasService,
    public empleadosService: EmpleadosService,
  ) {
    this.empleadoForm = this.fb.group({})

  }
  ngOnInit(): void {
    this.empleadoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      mail: ['', Validators.required],
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required],
      f_nacimiento: ['', Validators.required],
      direccion: ['', Validators.required],
      e_vacuna: ['', Validators.required],
      f_vacuna: ['', Validators.required],
      n_vacuna: ['', Validators.required],
      id_vacuna: ['', Validators.required],

    });;

    this.vacunasService.getAllVacunas().subscribe(resp=>{
      this.vacunas=resp;
      console.log(resp);
    },
      error =>(console.error(error)))
  }

  guardar(): void { 
    this.empleadosService.saveEmpleados(this.empleadoForm.value).subscribe(resp=>{
      this.empleadoForm.reset();
    },
    error=>{console.error(error)}
    );
  }
}
