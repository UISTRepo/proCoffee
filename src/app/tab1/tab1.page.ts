import { Component } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {PurchaseItemComponent} from '../popovers/purchase-item/purchase-item.component';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    items: any = [];

    constructor(
        public popoverController: PopoverController,
        private storage: Storage
    ) {

        let item: any = {
            id: 1,
            title: "Medium Coffee",
            price: 1.99,
            extraInfo: "Low caffeine",
            picture: "assets/images/coffee1.jpeg"
        };

        this.items.push(item);

        let item1: any = {
            id: 2,
            title: "Large Coffee",
            price: 3.99,
            picture: "assets/images/coffee2.jpg"
        };

        this.items.push(item1);

        let item2: any = {
            id: 3,
            title: "Something",
            price: 13.99,
            picture: "assets/images/coffee2.jpg",
            extraInfo: "Some new info of the item",
        };

        this.items.push(item2);

    }

    addItemToCart(item){

        item.quantity = 1;

        this.storage.get("proCoffee.myItems").then((data: any) => {
            if(!data || data.length == 0){

                let myItems: any = [
                    item
                ];

                this.storage.set("proCoffee.myItems", myItems);
            }
            else{
                let foundIndex: number = -1;

                for(let i=0; i<data.length; i++){
                    if(item.id == data[i].id){
                        foundIndex = i;
                        break;
                    }
                }

                if(foundIndex > -1){
                    data[foundIndex].quantity++;
                }
                else{
                    data.push(item);
                }

                this.storage.set("proCoffee.myItems", data);

            }

            this.storage.get("proCoffee.myItems").then((data: any) => {
                console.log(data);
            });
        });

    }

    async showOptions(item) {
        const popover = await this.popoverController.create({
            component: PurchaseItemComponent,
            componentProps: { item: item }
        });

        return await popover.present();
    };
}
