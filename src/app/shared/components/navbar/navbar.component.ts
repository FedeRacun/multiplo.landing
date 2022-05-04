import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showMenu = false

  constructor() { }

  ngOnInit(): void {
  }

  onClickMenu(isMenuOpen: any) {
    let navbar = document.getElementById('menuMobile')

    if (isMenuOpen) {
      navbar?.classList.add('show-menu')
      navbar?.classList.remove('hide-menu')
    } else {
      navbar?.classList.add('hide-menu')
      navbar?.classList.remove('show-menu')
    }
  }

}
