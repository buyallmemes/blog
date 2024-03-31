import { Component } from '@angular/core';
import {MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-navigation',
  standalone: true,
    imports: [
        MatIconButton,
        MatToolbar
    ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  openLinkInNewWindow(url: string){
    window.open(url, "_blank");
  }
}
