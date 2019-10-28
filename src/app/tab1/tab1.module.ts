import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import {PurchaseItemComponent} from '../popovers/purchase-item/purchase-item.component';
import {AddressPage} from '../modals/address/address.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: Tab1Page }])
    ],
    declarations: [
        Tab1Page,
        PurchaseItemComponent,
        AddressPage
    ],
    entryComponents: [
        PurchaseItemComponent,
        AddressPage
    ]
})
export class Tab1PageModule {}
