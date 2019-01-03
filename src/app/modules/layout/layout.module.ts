import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../components/home/home.component';
import { ErrorComponent } from '../../components/error/error.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NewProductComponent } from '../../components/new-product/new-product.component';
import { MaterialModule } from '../material/material.module';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    RouterModule
  ],
  declarations: [
    HomeComponent,
    ErrorComponent,
    SidebarComponent,
    NewProductComponent],
  exports: [
    HomeComponent,
    ErrorComponent,
    SidebarComponent,
    NewProductComponent]
})
export class LayoutModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LayoutModule    }
  }
}