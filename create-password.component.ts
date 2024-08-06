import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss']
})
export class CreatePasswordComponent implements OnInit {
  form: FormGroup;
  passwordVisibility: string = 'password';
  confirmPasswordVisibility: string = 'password';
  passwordIcon: string = 'assets/eye-icon.png';
  confirmPasswordIcon: string = 'assets/eye-icon.png';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  togglePassword() {
    this.passwordVisibility = this.passwordVisibility === 'password' ? 'text' : 'password';
    this.passwordIcon = this.passwordVisibility === 'password' ? 'assets/eye-icon.png' : 'assets/eye-off-icon.png';
  }

  toggleConfirmPassword() {
    this.confirmPasswordVisibility = this.confirmPasswordVisibility === 'password' ? 'text' : 'password';
    this.confirmPasswordIcon = this.confirmPasswordVisibility === 'password' ? 'assets/eye-icon.png' : 'assets/eye-off-icon.png';
  }

  submitForm() {
    if (this.form.valid) {
      console.log('Form submitted', this.form.value);

    }
  }
}
