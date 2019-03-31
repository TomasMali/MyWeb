import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // 4.
  constructor(private router: Router) {

  }


  title = 'Resume';

  onClickSubmit(aux){

    alert(aux);
  }

  downloadResume() {

    window.open("../assets/CV-Europass-20180504-Mali-IT.pdf");
    return false;

  }

}
