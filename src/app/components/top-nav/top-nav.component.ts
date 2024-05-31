import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent implements OnInit{
onNavigateToSignup() {
throw new Error('Method not implemented.');
}
  constructor (private router: Router){}
  ngOnInit(): void {
  }
  onNavigateToLogin(){
    this.router.navigate(['/','login']);
  
  }
  }

