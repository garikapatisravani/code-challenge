import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
            title: ['', Validators.required],
            age: ['', Validators.required],
            startDate:  ['', Validators.required],
            endDate:  ['', Validators.required],
            citizenship: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
            mailingState: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
            // citizenship: ['', [Validators.required, this.noNumeric]],
            // email: ['', [Validators.required, Validators.email]],
            // password: ['', [Validators.required, Validators.minLength(6)]],
        });

  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.router.navigateByUrl('/insurancePlans');

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    
    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

onReset() {
  this.submitted = false;
  this.registerForm.reset();
}

// noNumeric(control : AbstractControl): {[key : string]: any } | null{
//   const citizenship: string = control.value;
//   let regex = /\d+/g;
//   if(citizenship === '' || !citizenship.match(regex)){
//     console.log("if",citizenship);
//     return null;
//   }else {
//     console.log("else",citizenship);
//     return { 'noNumeric' : true };
//   }
// }
}
