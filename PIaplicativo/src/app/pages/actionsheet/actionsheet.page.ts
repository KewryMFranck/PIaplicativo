import { Component, ErrorHandler, OnInit } from '@angular/core';
import { actionSheetController } from '@ionic/core';

@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.page.html',
  styleUrls: ['./actionsheet.page.scss'],
})
export class ActionsheetPage implements OnInit {
  actionSheetCtrl: any;

  constructor() { }

  ngOnInit() {
    const actionSheet= await this.actionSheetCtrl.create({
      header:'Albums',
      cssClass:'my-custom-class',
      buttons:[{
        text:'delete',
        role:'destructive',
        icon:'trash',
        id:'delete-button',
        data:{
          type:'delete'
        },
        handler:() =>{
            console.log('Delete clicked'); 
          }
      }, {
        text:'share',
        icon:'Share',
        data:10,
        handler:() =>{
          console.log('share clicked');
        }
      },{
        text:'Play(open modal)',
        icon:'caret-forward-circle',
        data:'Data value',
        handler:() =>{
          console.log('Play clicked'); 
      }
      }, {
        text: 'Favorite',
        icon:'heart',
        handler:() =>{
          console.log('Favorite clicked'); 
        }
      }, {
        text:'Cancel',
        icon:'close',
        role:'cancel',
        handler:()=>{
        console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}