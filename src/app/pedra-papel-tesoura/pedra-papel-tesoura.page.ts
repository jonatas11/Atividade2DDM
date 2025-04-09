import { Component, OnInit } from '@angular/core';
import { IonHeader, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-pedra-papel-tesoura',
  templateUrl: './pedra-papel-tesoura.page.html',
  styleUrls: ['./pedra-papel-tesoura.page.scss'],
  standalone:false
})

export class PedraPapelTesouraPage {
  escolhaUsuario: number = 0;
  numeroComputador: number = 0;
  resultado: string = '';
  escolhaComputador: string = '';
  contadorUsuario: number = 0;
  contadorPC: number = 0;
  placar: string = '';

  jogar() {
    this.numeroComputador = Math.floor(Math.random() * 3) + 1;

    switch (this.numeroComputador) {
      case 1:
        this.escolhaComputador = 'Pedra';
        break;
      case 2:
        this.escolhaComputador = 'Papel';
        break;
      case 3:
        this.escolhaComputador = 'Tesoura';
        break;
      default:
        this.escolhaComputador = 'Opção inválida';
    }
    const escolha = +this.escolhaUsuario; // força conversão para número

    if (escolha === 1 && this.numeroComputador === 3) {
      this.resultado = `🎉 Parabéns!! Você ganhou! Minha escolha era ${this.escolhaComputador} e a sua Pedra`;
      this.contadorUsuario++;
    } 
    else if (escolha === 1 && this.numeroComputador === 2) {
      this.resultado = `😢 Você perdeu! Minha escolha era ${this.escolhaComputador} e a sua Pedra`;
      this.contadorPC++;
    }
    else if (escolha === 1 && this.numeroComputador === 1) {
      this.resultado = `😯 Ops... Empatamos! Minha escolha era ${this.escolhaComputador} e a sua Pedra`;
    }
    else if (escolha === 2 && this.numeroComputador === 3) {
      this.resultado = `😢 Você perdeu! Minha escolha era ${this.escolhaComputador} e a sua Papel`;
      this.contadorPC++;
    } 
    else if (escolha === 2 && this.numeroComputador === 2) {
      this.resultado = `😯 Ops... Empatamos! Minha escolha era ${this.escolhaComputador} e a sua Papel`;
    }
    else if (escolha === 2 && this.numeroComputador === 1) {
      this.resultado = `🎉 Parabéns!! Você ganhou! Minha escolha era ${this.escolhaComputador} e a sua Papel`;
      this.contadorUsuario++;
    }
    else if (escolha === 3 && this.numeroComputador === 3) {
      this.resultado = `😯 Ops... Empatamos! Minha escolha era ${this.escolhaComputador} e a sua Tesoura`;
    } 
    else if (escolha === 3 && this.numeroComputador === 2) {
      this.resultado = `🎉 Parabéns!! Você ganhou! Minha escolha era ${this.escolhaComputador} e a sua Tesoura`;
      this.contadorUsuario++;
    }
    else if (escolha === 3 && this.numeroComputador === 1){
      this.resultado = `😢 Você perdeu! Minha escolha era ${this.escolhaComputador} e a sua Tesoura`;
      this.contadorPC++;
    }
    else {
      this.resultado = `⚠️ Escolha inválida! Selecione uma das opções.`;
    }

    this.placar = `Placar: Usuário ${this.contadorUsuario} X ${this.contadorPC} Computador`
    
  }

}
