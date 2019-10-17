import { Component } from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    myItems: any = [];

    constructor(
        private storage: Storage
    ) {

    }

    ionViewDidEnter(){
        this.storage.get("proCoffee.myItems").then((myItems: any) => {
            this.myItems = myItems;
        })
    }

    dismissItem(item){
        this.myItems = this.myItems.filter((jsonObject) => {
            return jsonObject.id != item.id;
        });

        this.storage.set("proCoffee.myItems", this.myItems);
    }

}
