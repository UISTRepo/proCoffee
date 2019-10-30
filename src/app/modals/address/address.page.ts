import { Component, OnInit } from '@angular/core';
import {ModalController, ToastController} from '@ionic/angular';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-address',
    templateUrl: './address.page.html',
    styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

    addressInfo: any = {};

    constructor(
        private modalCtrl: ModalController,
        private storage: Storage,
        private toastController: ToastController
    ) { }

    ngOnInit() {
        this.storage.get('proCoffee.address').then((address: any) => {
            if(address)
                this.addressInfo = address;
        });
    }

    closeModal(){
        this.modalCtrl.dismiss();
    }

    storeAddress(){

        if(!this.addressInfo.address){
            this.showErrorMsg("Enter your address");
            return;
        }

        if(!this.addressInfo.city){
            this.showErrorMsg("Enter your city");
            return;
        }

        if(!this.addressInfo.zip){
            this.showErrorMsg("Enter your zip code");
            return;
        }

        this.storage.set('proCoffee.address', this.addressInfo);

        this.modalCtrl.dismiss(this.addressInfo);
    }

    async showErrorMsg(message) {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000
        });
        toast.present();
    }


}
