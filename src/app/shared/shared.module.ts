import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    CoreModule
  ],

  exports: [
    CoreModule
  ],

  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
