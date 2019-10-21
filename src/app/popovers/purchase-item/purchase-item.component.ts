import { Component, OnInit } from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';

@Component({
    selector: 'app-purchase-item',
    templateUrl: './purchase-item.component.html',
    styleUrls: ['./purchase-item.component.scss'],
})
export class PurchaseItemComponent implements OnInit {

    item: any = {};
    quantity: number = 1;
    type: string = '0';

    constructor(
        private popoverController: PopoverController,
        private navParams: NavParams
    )
    {
        this.item = this.navParams.get('item');
    }

    ngOnInit() {}

    purchaseItem(){

        if(Number(this.type) == 0){
            console.log(this.type);
        }

        this.popoverController.dismiss();

    }

    async dismissPopover() {
        await this.popoverController.dismiss();
    }
}
