import { Component } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../app.component.css'],
})
export class LoginComponent {
  constructor( private router: Router) {}
  ngOnInit(): void{
  }
  onButtonClick(): void {
    this.router.navigate(['/create-acount']);
    console.log('Botão clicado!');
  }
}
