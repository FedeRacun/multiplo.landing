import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private baseURL: string = "https://multiploservicesqa.azurewebsites.net/multiplo/proyectos";

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any> {
    return this.http.get(
        this.baseURL,
        {
          headers: {
            'Content-Type': 'application/json',
            mode: 'no-cors'
          },
        }
      );
  }
}