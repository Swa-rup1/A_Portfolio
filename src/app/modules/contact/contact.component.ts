import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { UserService } from '../../services/localdb/user.service';

// Custom Validator
// export function atLeastOneCheckboxCheckedValidator(): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } | null => {
//     const checkboxes = control.value;
//     const isAtLeastOneChecked = Object.values(checkboxes).some(
//       (checked) => checked === true
//     );
//     return isAtLeastOneChecked ? null : { atLeastOneCheckboxChecked: true };
//   };
// }

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
      fullName: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
      Phone: this.fb.control('', Validators.required),
      Email: this.fb.control('', [Validators.required, Validators.email]),
      Message: this.fb.control('', Validators.required),

      // services: this.fb.group(
      //   {
      //     webDesign: this.fb.control(false),
      //     uiUx: this.fb.control(false),
      //     productDesign: this.fb.control(false),
      //   },
      //   { validators: atLeastOneCheckboxCheckedValidator() }
      // ),
    });
  }

  // Getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.TodoForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.TodoForm.valid) {
      this.userService.addUser(this.TodoForm.value).subscribe(() => {
        alert('User added successfully');
        console.log('User added successfully');
        console.log(this.TodoForm.value);
        this.TodoForm.reset();
      });
    }
  }

  onReset() {
    this.submitted = false;
    this.TodoForm.reset();
  }
}
