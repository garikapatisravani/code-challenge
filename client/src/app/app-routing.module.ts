import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsurancePlansComponent } from './insurance-plans/insurance-plans.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';

const routes: Routes = [
  { path: '', component: QuoteFormComponent },
  { path: 'insurancePlans', component: InsurancePlansComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
