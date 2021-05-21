import {NgModule} from '@angular/core';


import { MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

const MaterialComp = [
    MatMenuModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDividerModule,
]


@NgModule({


    imports: [
        MaterialComp


    ],
    exports:[
        MaterialComp
    ]

})
export class MaterialModules {
}