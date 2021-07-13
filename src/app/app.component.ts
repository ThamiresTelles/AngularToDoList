import { identifierModuleUrl } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public tarefa = "";
  public itens = ['item 1'];

  addTarefa() {
    this.itens.push(this.tarefa);

  }

  removeTarefa(index: number) {
    this.itens.splice(index, 1);
  }

 
  
}      
