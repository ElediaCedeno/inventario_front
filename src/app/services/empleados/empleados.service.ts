import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private API_SERVE="http://localhost:8080/empleado/";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllEmpleados():Observable<any>{
    return this.httpClient.get(this.API_SERVE);
  }
  public saveEmpleados(empleados:any):Observable<any>{
    return this.httpClient.post(this.API_SERVE, empleados);
  }
}
