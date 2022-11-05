import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-cadastro',
  templateUrl: './user-cadastro.component.html',
  styleUrls: ['./user-cadastro.component.css']
})
export class UserCadastroComponent implements OnInit {
  formCadastro = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    cargo: new FormControl(''),
    instituicao: new FormControl(''),
    senha: new FormControl(''),
  })

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  taNaRota(){
    let url = this.router.url
    return url === '/cadastro' ? true : false
  }

  goLogin(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    let formData = this.formCadastro.value;

    localStorage.setItem(`${formData.nome}-${new Date()}`, JSON.stringify(formData))
    // ir para página de login
    this.router.navigate(['/']);
  }

}
