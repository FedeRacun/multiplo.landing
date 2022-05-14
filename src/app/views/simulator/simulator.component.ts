import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {

  carouselItems: { original: string, small: string }[] = []

  howCarouselItems: { original: string, small: string }[] = []

  financiamientoItem = {
    original: "/assets/images/home/financiamiento/empresaria.png",
    small: "/assets/images/home/financiamiento/empresaria_small.png"
  }
  /* ****************** Cambios Joseph ************************ */
  lg_item1 = {
    text: 'Creemos en la <span class="font-bold">redistribución</span> de la riqueza, al desintermediar a los <span class="font-bold">participantes tradicionales</span>.',
    icon: "/assets/images/home/logramos/1.png",
  }
  lg_item2 = {
    text: 'Nuestras <span class="font-bold">oportunidades</span> de inversión son <span class="font-bold">transparentes, ágiles, eficientes y flexibles</span>.',
    icon: "/assets/images/home/logramos/2.png",
  }
  lg_item3 = {
    text: 'Nuestros <span class="font-bold">Multiplolenders</span> encuentran carteras de inversión <span class="font-bold">equilibradas, diversificadas</span> y con <span class="font-bold">rentabilidad superior</span>.',
    icon: "/assets/images/home/logramos/3.png",
  }
  lg_item4 = {
    text: 'Retribuimos a la sociedad a través de programas de <span class="font-bold">empoderamiento financiero</span> a jóvenes de escuelas públicas, quienes serán futuros <span class="font-bold">trainees</span> en las <span class="font-bold">empresas afiliadas</span>.',
    icon: "/assets/images/home/logramos/4.png",
  }
  lg_item5 = {
    text: 'Nuestros objetivos anuales incluyen el número de nuevos <span class="font-bold">empleos generados por año</span>, financiando a empresas en crecimiento con <span class="font-bold">liquidez eficiente</span>.',
    icon: "/assets/images/home/logramos/5.png",
  }
  /* ********************************************************* */
  vista_video!:Boolean;
  url_video!: String ;
  ngOnInit(): void {
    this.url_video = "/assets/video/home.mp4";
    this.vista_video=true;

    if(isMobile()?.toString() == "Android"){
      this.vista_video=false;
      this.url_video="/assets/video/home_mobile.mp4";
    }
    if(isMobile()?.toString() == "Moz"){
      this.url_video="/assets/video/home.mp4";
    }
    this.carouselItems = [
      {
        small: "/assets/images/home/carousel/small/multiplo---PORTADAS1.png",
        original: "/assets/images/home/carousel/multiplo---PORTADAS1.png",
      },
      {
        small: "/assets/images/home/carousel/small/multiplo---PORTADAS2.png",
        original: "/assets/images/home/carousel/multiplo---PORTADAS2.png",
      },
      {
        small: "/assets/images/home/carousel/small/multiplo---PORTADAS3.png",
        original: "/assets/images/home/carousel/multiplo---PORTADAS3.png",
      },
      {
        small: "/assets/images/home/carousel/small/multiplo---PORTADAS4.png",
        original: "/assets/images/home/carousel/multiplo---PORTADAS4.png",
      },
      {
        small: "/assets/images/home/carousel/small/multiplo---PORTADAS5.png",
        original: "/assets/images/home/carousel/multiplo---PORTADAS5.png",
      },
      {
        small: "/assets/images/home/carousel/small/multiplo---PORTADAS6.png",
        original: "/assets/images/home/carousel/multiplo---PORTADAS6.png",
      },
    ];

    this.howCarouselItems = [
      {
        small: "/assets/images/home/how-carousel/small/invertir-0.png",
        original: "/assets/images/home/how-carousel/invertir-0.png",
      },
      {
        small: "/assets/images/home/how-carousel/small/invertir-1.png",
        original: "/assets/images/home/how-carousel/invertir-1.png",
      },
      {
        small: "/assets/images/home/how-carousel/small/invertir-2.png",
        original: "/assets/images/home/how-carousel/invertir-2.png",
      },
      {
        small: "/assets/images/home/how-carousel/small/invertir-3.png",
        original: "/assets/images/home/how-carousel/invertir-3.png",
      },
      {
        small: "/assets/images/home/how-carousel/small/invertir-4.png",
        original: "/assets/images/home/how-carousel/invertir-4.png",
      },
    ]
  }

  /* ********************* Simulador ************************* */
  valor: number = 6;
  minimo: number = 6;
  maximo: number = 24;
  salto: number = 6;

  inversion = 500;

  minimo_inv: number = 500;
  maximo_inv: number = 100000;
  salto_inv: number = 1;

  m_rendimiento_a!: string;
  m_porcentaje_rendimiento = "10%";

  bnco_porcentaje_rendimiento = "0.275%";
  bnco_porcentaje_rend = 0.275;
  autoTicks = false;
  disabled = false;
  invert = false;
  showTicks = false;
  thumbLabel = false;
  vertical = false;
  tickInterval = 1;


  /* ********** Calculos simulador ************ */
  porc_m = 0.10;
  plazo = 360;
  interes_multiplo: number = 0;
  valor_inicial!: number;
  interes_multiplo_inicial!: number;
  inicial_one!: number;
  inicial_two!: number;
  inicial_tree!: number;
  inversion_one!: number;
  inversion_two!: number;
  interes_banco!: number;
  inversion_bco!: string;
  total_m!: string;
  total_bco!: string;
  mensaje_err!: string;
  /* ****************************************** */


  handleMinus() {
    if (this.valor > this.minimo) {
      this.valor = this.valor - 6;
      this.interes_m();
    }

  }
  handlePlus() {
    if (this.valor < this.maximo) {
      this.valor = this.valor + 6;
      this.interes_m();
    }
  }


  constructor() {
    this.interes_multiplo = ((this.inversion * this.porc_m * 30) / 360) * 6;
    this.m_rendimiento_a = this.interes_multiplo.toFixed(2);

    this.interes_banco = (((this.inversion * (this.bnco_porcentaje_rend / 100)) * 30) / 360) * this.valor;
    this.inversion_bco = this.interes_banco.toFixed(2);

    this.total_m = (this.inversion + this.interes_multiplo).toFixed(2);
    this.total_bco = (this.inversion + this.interes_banco).toFixed(2);
  }


  interes_m() {

    if (this.inversion > 499 && this.inversion <= 100000) {
      this.mensaje_err = ""
      switch (this.valor) {

        case 6:
          this.interes_multiplo = ((this.inversion * this.porc_m * 30) / 360) * this.valor;
          this.m_rendimiento_a = this.interes_multiplo.toFixed(2);
          break;
        case 12:
          this.interes_multiplo = ((this.inversion * this.porc_m * 30) / 360) * this.valor;
          this.m_rendimiento_a = this.interes_multiplo.toFixed(2);
          break;
        case 18:
          this.interes_multiplo_inicial = ((this.inversion * this.porc_m * 30) / 360) * 12;
          this.valor_inicial = this.inversion * .50;
          this.interes_multiplo = ((this.valor_inicial * this.porc_m * 30) / 360) * 6;

          this.m_rendimiento_a = (this.interes_multiplo_inicial + this.interes_multiplo).toFixed(2);
          this.interes_multiplo = this.interes_multiplo_inicial + this.interes_multiplo;
          break;
        case 24:
          this.inicial_one = ((this.inversion * this.porc_m * 30) / 360) * 12;
          this.inversion_one = this.inversion * .33;
          this.inicial_two = (((this.inversion - this.inversion_one) * this.porc_m * 30) / 360) * 6;
          this.inversion_two = this.inversion * .34;
          this.inicial_tree = ((this.inversion_two * this.porc_m * 30) / 360) * 6;
          this.interes_multiplo = this.inicial_one + this.inicial_two + this.inicial_tree;
          this.m_rendimiento_a = (this.inicial_one + this.inicial_two + this.inicial_tree).toFixed(2);
          break;

        default:
          console.log("No such day exists!");
          break;
      }


      this.interes_banco = (((this.inversion * (this.bnco_porcentaje_rend / 100)) * 30) / 360) * this.valor;
      this.inversion_bco = this.interes_banco.toFixed(2);
      this.total_m = (this.inversion + this.interes_multiplo).toFixed(2);
      this.total_bco = (this.inversion + this.interes_banco).toFixed(2);
      //alert(this.total_bco);
    }
    else {
      this.mensaje_err = "El monto mínimo de inversión es a partir de $500";
    }

    if (this.inversion > 100000) {
      this.mensaje_err = "El monto máximo de inversión es de $100,000";
    }

  }

  /* ********************************************** */
  interes_m2() {
    this.interes_m();
  }
}

function isMobile() {
  return (
    (navigator.userAgent.match(/Android/i)) ||
    (navigator.userAgent.match(/webOS/i)) ||
    (navigator.userAgent.match(/iPhone/i)) ||
    (navigator.userAgent.match(/iPod/i)) ||
    (navigator.userAgent.match(/iPad/i)) ||
    (navigator.userAgent.match(/BlackBerry/i))||
    (navigator.userAgent.match(/moz/i))
  );
}
