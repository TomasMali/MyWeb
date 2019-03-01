import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'temaOne';

  public isCollapsedHome = true;
  public isCollapsedResume = false;
  public isCollapsedWork = false;
  public isCollapsedContact = false;



  ngOnInit () {  }



  public isCollapsed(event, item) {

    if (item === "home") {
      this.isCollapsedHome = true
      this.isCollapsedResume = false
      this.isCollapsedWork = false
      this.isCollapsedContact = false
    }

    if (item === "resume") {
      this.isCollapsedHome = false;
      this.isCollapsedResume = true;
      this.isCollapsedWork = false
      this.isCollapsedContact = false
    }

    if (item === "work") {
      this.isCollapsedHome = false;
      this.isCollapsedResume = false
      this.isCollapsedWork = true;
      this.isCollapsedContact = false
    }

    if (item === "contact") {
      this.isCollapsedHome = false;
      this.isCollapsedResume = false
      this.isCollapsedWork = false
      this.isCollapsedContact = true
    }


  }



}
