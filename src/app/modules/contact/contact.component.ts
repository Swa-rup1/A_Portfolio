import { Component, NgModule, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/localdb/user.service';

@Component({
  selector: 'app-contact',

  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  TodoForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.TodoForm = this.fb.group({
      fullName: [
        '',
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ],
      Phone: ['', Validators.required],

      Email: ['', Validators.required, Validators.email],
      Message: [
        '',
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(200),
      ],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.TodoForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.TodoForm.valid) {
      // Perform the form submission logic here
      window.alert('Form submitted successfully!');
      // Show the alert message
    }
  }

  onReset() {
    this.submitted = false;
    this.TodoForm.reset();
  }

  // Validators

  // email = new FormControl('', [
  //   Validators.required,
  //   Validators.email
  // ])
}
