import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  memberName= 'Syifa'
  language:string = 'Indonesia'
  listOfLanguage:string[] = ["English", "Arabic"]
  addLanguage = ():void=> {
    console.log(this.language)
    console.log('test 123')
    this.listOfLanguage.push(this.language)
    console.log(this.listOfLanguage)
  }
}
