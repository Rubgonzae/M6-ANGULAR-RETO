import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from 'src/app/core/constants';
import { State } from '../../../core/state';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder);
  private usuarios: any[] = [];
  constructor(
    private router: Router,
    public state: State
  ) { }
  ngOnInit(): void {
    this.usuarios = Constants.usuarios;
  }

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(6)]]
  });
  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const usuario = this.usuarios.find(usuario => usuario.email === email && usuario.password === password);
      console.log('Usuario: ', usuario);
      if (usuario) {
        alert('Login successful');
        this.state.user = this.usuarios.find(usuario => usuario.email === email && usuario.password === password);
        console.log('Estado: ', this.state.user$);
        this.router.navigate(['/transacciones']);
      } else {
        alert('Invalid credentials');
      }
    } else {
      alert('Please fill in all fields correctly');
    }
  }
}
