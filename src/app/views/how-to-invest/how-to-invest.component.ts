import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/shared/services/proyectos.service';

@Component({
  selector: 'app-how-to-invest',
  templateUrl: './how-to-invest.component.html',
  styleUrls: ['./how-to-invest.component.css']
})
export class HowToInvestComponent implements OnInit {

  constructor(private proyectService: ProyectosService) { }

  ngOnInit(): void {
    this.proyectService.getProjects().subscribe(res => console.log(res))
  }

}
