import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 

  todaydate;
  componentproperty;
  constructor() { }
  ngOnInit() {

  }
  onClickSubmit(data) {
     alert("Entered Email id : " + data.emailid + "\n Password is" + data.passwd);
  }

}
