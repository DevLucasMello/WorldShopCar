import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-off',
  templateUrl: './menu-off.component.html',
  styleUrls: ['./menu-off.component.css']
})
export class MenuOffComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  registro(){
    this.router.navigate(['identidade/registro']);
  }

  login(){
    this.router.navigate(['identidade/login']);
  }

}
