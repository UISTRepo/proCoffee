import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
    selector: 'app-purchase-item',
    templateUrl: './purchase-item.component.html',
    styleUrls: ['./purchase-item.component.scss'],
})
export class PurchaseItemComponent implements OnInit {

    constructor(
        private popoverController: PopoverController
    ) { }

    ngOnInit() {}


    async dismissPopover() {
        await this.popoverController.dismiss();
    }
}
