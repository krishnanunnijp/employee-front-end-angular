import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employeeCode=""
  name=""
  designation=""
  salary=""
  companyName=""
  mobileNumber=""
  userName=""
  password=""

  data:any={}
  constructor(private api:ApiService){}

  readValue=()=>{
    this.data={
      "employeeCode":this.employeeCode,
      "name":this.name,
      "companyName":this.companyName,
      "designation":this.designation,
      "salary":this.salary,
      "mobileNumber":this.mobileNumber,
      "password":this.mobileNumber
    }
    this.api.addEmployee(this.data).subscribe(
      (generated:any)=>{
        console.log(generated)
        if(generated.status=="success"){
          alert("added ")
        }

      }
    )
  }

}
