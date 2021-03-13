import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.sass']

  /* Componentes inline
  template: `<p>Aquí iría un empleado</p>`,
  styles: ["p{background-color:red;}"] */
})
export class EmpleadoComponent implements OnInit {

  nombre = 'Rubén';

  apellido = 'Garzón';

  edad = 27;

  //empresa = 'Google';

  /* public getEdad() : number {
    return this.edad;
  } */

  /* llamaEmpresa(value:String){

  } */

  habilitacionCuadro = true;
  usuRegistrado = false;

  getRegistroUsuario(){
    this.usuRegistrado = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
