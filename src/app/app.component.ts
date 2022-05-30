import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // template: '<h1>Welcome</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Project';
  // @Input() data: string | undefined;
  // @Output() params: string | undefined;


  showMsg = false;
  
  readMe() {
    console.log('Button cliekced');
  }
  
}
