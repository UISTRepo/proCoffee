import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-credit-card',
    templateUrl: './credit-card.page.html',
    styleUrls: ['./credit-card.page.scss'],
})
export class CreditCardPage implements OnInit {

    constructor(
        private modalCtrl: ModalController
    ) { }

    ngOnInit() {
    }

    closeModal(){
        this.modalCtrl.dismiss();
    }

}
