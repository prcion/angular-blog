import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/interfaces';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  private form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  public getForm(): FormGroup {
    return this.form;
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    };


  }

  public isNotTouched(value: string): boolean {
    return this.form.get(value).touched;
  }

  public isInvalid(value: string): boolean {
    return this.form.get(value).invalid;
  }

  public hasErrorsRequired(value: string): boolean {
    return this.form.get(value).errors.required;
  }

  public invalidEmail(): boolean {
    return this.form.get('email').errors.mail;
  }

  public isNotTouchedAndInvalid(value: string): boolean {
    return this.isNotTouched(value) && this.isInvalid(value);
  }

  public invalidPassword(): boolean {
    return this.form.get('password').errors.minlength;
  }
}
