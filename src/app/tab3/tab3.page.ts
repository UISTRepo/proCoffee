import { Component } from '@angular/core';
import {Storage} from '@ionic/storage';
import {ModalController} from '@ionic/angular';
import {CreditCardPage} from '../modals/credit-card/credit-card.page';
import {AddressPage} from '../modals/address/address.page';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    addressInfo: any = {};
    ccInfo: any = {};

    constructor(
        private storage: Storage,
        private modalCtrl: ModalController
    ) {
        this.storage.get('proCoffee.address').then((address: any) => {
            this.addressInfo = address;
        });

        this.storage.get('proCoffee.credit_card').then((ccInfo: any) => {
            this.ccInfo = ccInfo;
        });
    }

    async openAddressModal() {
        const modal = await this.modalCtrl.create({
            component: AddressPage
        });

        await modal.present();

        const { data } = await modal.onWillDismiss();

        console.log(data);

        if(data && data.address){
            this.addressInfo = data;
        }
    }

    async openCreditCardModal() {
        const modal = await this.modalCtrl.create({
            component: CreditCardPage
        });

        await modal.present();
    }
}
