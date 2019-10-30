import { Component, OnInit } from '@angular/core';
import {ModalController, ToastController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {debug} from 'util';

@Component({
    selector: 'app-credit-card',
    templateUrl: './credit-card.page.html',
    styleUrls: ['./credit-card.page.scss'],
})
export class CreditCardPage implements OnInit {

    cardInfo: any = {};

    constructor(
        private modalCtrl: ModalController,
        private storage: Storage,
        private toastController: ToastController
    ) { }

    ngOnInit() {
        this.storage.get('proCoffee.ccInfo').then((ccInfo: any) => {
            if(ccInfo)
                this.cardInfo = ccInfo;
        });

    }

    closeModal(){
        this.modalCtrl.dismiss();
    }

    storeCCInfo(){

        if(!this.cardInfo.CardName){
            this.showErrorMsg("Enter your name!");
            return;
        }

        if(!this.cardInfo.CardNo){
            this.showErrorMsg("Enter your card number");
            return;
        }

        if(!this.cardInfo.ExpMonth){
            this.showErrorMsg("Enter the expiration month");
            return;
        }

        if(!this.cardInfo.ExpYear){
            this.showErrorMsg("Enter the expiration year");
            return;
        }

        if(!this.cardInfo.CVC){
            this.showErrorMsg("Enter your CVC code (usually the three digit code on the back of the card)");
            return;
        }

        if (!this.cardInfo.CardNo.match(/^\d{16}$/)){
            this.showErrorMsg("Invalid card number");
            return;
        }

        if (!this.cardInfo.ExpMonth.match(/^\d{2}$/)){
            this.showErrorMsg("Invalid month");
            return;
        }

        if (!this.cardInfo.ExpYear.match(/^\d{2}$/)){
            this.showErrorMsg("Invalid year");
            return;
        }

        if (!this.cardInfo.CVC.match(/^\d{3}$/)){
            this.showErrorMsg("Invalid CVC Code");
            return;
        }

        if (this.cardInfo.ExpMonth>12 || this.cardInfo.ExpMonth<1){
            this.showErrorMsg("Wrong month");
            return;
        }

        if (this.cardInfo.ExpYear<18){
            this.showErrorMsg("Your card has expired");
            return;
        }

        this.storage.set('proCoffee.ccInfo', this.cardInfo);

        this.modalCtrl.dismiss(this.cardInfo);

    }

    async showErrorMsg(message) {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000
        });
        toast.present();
    }

}
