import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    nome: new FormControl(''),
    senha: new FormControl(''),
  })

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  taNaRota(){
    let url = this.router.url
    return url === '/' ? true : false
  }

  goCadastro(){
    this.router.navigate(['/cadastro'])
  }

  signIn(){
    // Pega os dados do form de Login
    let formData = this.formLogin.value;

    // Pega todas as chaves do localStorage
    const chaves = Object.keys(localStorage);

    // Encontra todos os usuários que tem o mesmo nome do Login
    let finds = chaves.filter((item: any)=>{
      let name = item.split('-')[0]
      return name == formData.nome;
    })

    // Encontou todos
    if(finds.length === 0){
      alert("Nome de usuário ou senha errado");
    } else {
      let user = finds.find((chave)=>{
        let temp:any = JSON.parse(localStorage.getItem(chave)!); // *!* garante que nunca vai ser NULL
        // JSON.parse(temp)
        console.log(temp)
        if( temp.senha === formData.senha) return temp;
      })
      if(!user) alert("Nome de usuário ou senha errado");
      else {
        alert("Deu bom");
        sessionStorage.setItem('userLogged', localStorage.getItem(user)!)
        this.router.navigate(['/home'])
      }


    }
  }

}