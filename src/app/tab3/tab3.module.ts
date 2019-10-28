import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import {AddressPage} from '../modals/address/address.page';
import {CreditCardPage} from '../modals/credit-card/credit-card.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: Tab3Page }])
    ],
    declarations: [
        Tab3Page,
        AddressPage,
        CreditCardPage
    ],
    entryComponents: [
        AddressPage,
        CreditCardPage
    ]
})
export class Tab3PageModule {}
