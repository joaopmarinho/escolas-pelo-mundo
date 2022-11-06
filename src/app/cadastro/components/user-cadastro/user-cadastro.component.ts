import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-cadastro',
  templateUrl: './user-cadastro.component.html',
  styleUrls: ['./user-cadastro.component.css']
})
export class UserCadastroComponent implements OnInit {
  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    emailConf: new FormControl('', [Validators.required]),
    cargo: new FormControl('', [Validators.required]),
    instituicao: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    senhaConf: new FormControl('', [Validators.required])
  })

  get nome(){
    return this.formCadastro.get('nome')!;
  }

  get email(){
    return this.formCadastro.get('email')!;
  }

  get emailConf(){
    return this.formCadastro.get('emailConf')!;
  }

  get cargo(){
    return this.formCadastro.get('cargo')!;
  }

  get instituicao(){
    return this.formCadastro.get('instituicao')!;
  }

  get senha(){
    return this.formCadastro.get('senha')!;
  }

  get senhaConf(){
    return this.formCadastro.get('senhaConf')!;
  }

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
    if(this.nome.valid && this.email.valid && this.emailConf.valid &&
      this.instituicao.valid && this.cargo.valid && this.senha.valid &&
      this.senhaConf.valid && (this.email.value == this.emailConf.value) &&
      (this.senha.value == this.senhaConf.value)){
        alert("Usuário Cadastrado com sucesso!");
        this.router.navigate(['/']);
      } 
  }

}
