import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { present } from '@ionic/core/dist/types/utils/overlays';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  AlertController: any;

  constructor(private alertCrtl: AlertController) { }

  ngOnInit() {
  }
  async alert(){
    const alert = await this.alertCrtl.create({
      cssClass: 'my-custom-class',
      header:'Alerta',
      subHeader:'Atenção',
      message:'Esta é uma mensagem de Alerta!!',
      buttons:['ok']
    });

      await alert.present();
  }
  async alertaMultiplosBotoes(){
    const alert = await this.alertCrtl.create({  
      cssClass: 'my-custom-class',
      header:'Alerta multiplos',
      subHeader:'Mútiplos botões',
      message:'Esta é um alerta com múltplos botões.',
      buttons:['Cancelar','Abrir','Excluir']
    });

    await alert.present();
  }
}