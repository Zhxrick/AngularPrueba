import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table'; 
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { PostComponent } from '../post/post.component';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-home',
   imports: [
      ToolbarModule,
      CardModule,
      PostComponent,
      TableModule,
      DialogModule,
      ButtonModule,
      MenubarModule
    ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  items = [
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Features',
        icon: 'pi pi-star'
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
  ]
}

