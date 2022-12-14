import { Component  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = this.fb.group({
    email:[{value: 'listatelef@nica.contatos', disabled: true},
    [Validators.email, Validators.required],
  ],
    password:['', [Validators.required, Validators.minLength(10)]],
  })

  constructor(private fb: FormBuilder) { }

onSubmit(): void {
  if (this.form.valid) {

  }
}

}
