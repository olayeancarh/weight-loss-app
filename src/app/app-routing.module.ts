import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MeasurementComponent } from './components/measurement/measurement.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'measurement',
    component: MeasurementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
