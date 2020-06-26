import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  authForm: FormGroup;
  configs = {
    //objetos javaScript
    isSignIn: true, //indica se está tentando fazer login, ou isSignIn
    action: "Login", //action atual é login
    actionChange: "Create account", //ação que posso alternar a visualização da pág.QUANDO estiver realizando login, outra alternancia é criar conta
  };

  //criar campos para uma nova conta.Adicionando de forma dinâmica
  private nameControl = new FormControl("", [
    Validators.required,
    Validators.minLength(3),
  ]);

  constructor(private fb: FormBuilder) {}

  // ngOnIni: executa o metodo assim que a instancia for criada
  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.authForm = this.fb.group({
      //validando campo obrigatorio e validando o email
      email: ["", [Validators.required, Validators.email]],
      //validando campo obrigatorio e validando senha com minimo 6 caracteres
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  //exibir menssagem
  get email(): FormControl {
    return <FormControl>this.authForm.get("email");
  }

  get password(): FormControl {
    return <FormControl>this.authForm.get("password");
  }

  get name(): FormControl {
    return <FormControl>this.authForm.get("name");
  }

  //método para fazer a alternancia da interface da pág.
  changeAuthAction(): void {
    //trocar ação que está atualmente
    this.configs.isSignIn = !this.configs.isSignIn; //negação de isSignIn(criar conta)
    const { isSignIn } = this.configs; //definindo const
    this.configs.action = isSignIn ? "Login" : "Sign Up"; //ternario de condição.Se for true está tentando realizar login, se for false está tentando criando conta
    this.configs.actionChange = isSignIn
      ? "Create account"
      : "Already have an account"; //ternario de condição.Se for true está atualmente realizando o login, ação que possa fazer a contrário da acão atual é criar conta("Create account).Se for false está atualmente realizando uma conta,ação que possa fazer a contrário da acão atual é fazer login(Already have an account).

    //verificar se está realizando login ou criar conta para adicionar ou remover o nameControl
    !isSignIn //se não estiver em criar conta
      ? this.authForm.addControl("name", this.nameControl) //adiciona dinamicamente o nameControl
      : this.authForm.removeControl("name"); // se estiver em login, remover o nameControl
  }

  //será executado quando o evento de click no botao acontecer
  //acessando os valores do campos
  onSubmit(): void {
    console.log("AuthForm: ", this.authForm.value);
  }
}
