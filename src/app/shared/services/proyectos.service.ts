import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private baseURL: string = "https://multiploservicesqa.azurewebsites.net/multiplo/proyectos";


  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get(this.baseURL)
  }
}
