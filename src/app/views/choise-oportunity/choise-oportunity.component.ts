import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/shared/services/proyectos.service';

@Component({
  selector: 'app-choise-oportunity',
  templateUrl: './choise-oportunity.component.html',
  styleUrls: ['./choise-oportunity.component.css']
})
export class ChoiseOportunityComponent implements OnInit {

  public projects: any;

  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void {

    this.proyectosService.getProjects().subscribe(res => {
      this.projects = res.map((element: any) => {
        element.avanceInversion.porcentaje = parseInt(element.avanceInversion.porcentaje, 10)
        return element
      });
      console.log(this.projects)
    }
    );

  }

}
