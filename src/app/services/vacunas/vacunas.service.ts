import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacunasService {

  private API_SERVE="http://localhost:8080/t_vacuna/";

  constructor(
    private httpClient:HttpClient
  ) { }

  public getAllVacunas(){
    return this.httpClient.get(this.API_SERVE);
  }
}
