import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LotsdataService } from '../lotsdata.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signups:boolean = false;
  sigin:boolean = true;
  newRegisteration!:FormGroup;

  constructor(public apiService: LotsdataService, public toastr: ToastrService){}

  ngOnInit(){
    this.newRegisteration = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repassword: new FormControl('', Validators.required)
    });
    this.getUserDetails();
  }

  signup(){
    this.signups = true;
    this.sigin = false;
  }

  signin(){
    this.sigin = true;
    this.signups = false;
  }

  newRegisterations(){
    console.log(this.newRegisteration.value);
    let obj = {
      username : this.newRegisteration.value.username,
      email : this.newRegisteration.value.email,
      password : this.newRegisteration.value.password,
      repassword : this.newRegisteration.value.password
    }
    this.apiService.registrationNewUser(obj).subscribe((res:any)=>{
    
        if(res.message == "User registrations Successfully"){
          console.log("Successfully registered",res);
          this.toastr.success(`Successfully Registered`);
          this.newRegisteration.reset();
        }else{
          this.toastr.warning("Error")
        }
    })
  }

  getUserDetails(){
    this.apiService.getAllUser().subscribe((res:any)=>{
      console.log(res)
    })
  }
}
