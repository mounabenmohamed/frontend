import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../confirmed.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup = new FormGroup({
    name: new FormControl('', Validators.minLength(2)),
    email: new FormControl('', Validators.minLength(2)),
    password: new FormControl('', Validators.minLength(2)),
    confirmPassword: new FormControl('', Validators.minLength(2)),
    
  }); 
submitted= false;
data:any;

  constructor( private formBuilder: FormBuilder, private dataService: DataService, private router:Router ,private toastr: ToastrService) { }

createForm(){
  this.form = this.formBuilder.group({
    name: [null, Validators.required],
    email: ['', [Validators.required, Validators.email]],
    num_telephone: ['', [Validators.required,]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  }, { 
      Validators: MustMatch('password', 'confirmPassword')
  
});
}

  ngOnInit(): void {
    this.createForm();
  }

  get f() {
    return this.form.controls;
  }

  submit(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
     this.dataService.registerUser(this.form.value).subscribe(res => {
     this.data = res;
      // console.log(res);
       if(this.data.status === 1){
         this.toastr.success(JSON.stringify(this.data.message), JSON.stringify(this.data.code), {
           timeOut: 2000,
           progressBar: true 
         });
         this.router.navigate(['/table']);
       } else{
        this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code), {
          timeOut: 2000,
          progressBar: true
       });
      }
       this.submitted = false ;
       this.form.get('name')?.reset();
       this.form.get('email')?.reset();
       this.form.get('num_telephone')?.reset();
       this.form.get('password')?.reset();
       this.form.get('confirmPassword')?.reset();
     } );

  }
}
