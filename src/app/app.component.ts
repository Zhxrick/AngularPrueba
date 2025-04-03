import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';  
import { ButtonModule } from 'primeng/button';  




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule,DialogModule,ButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}


