import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'hotels', 
  loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule) }, 
  { path: 'booking', 
  loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) }, 
  { path: 'cabs', 
  loadChildren: () => import('./cabs/cabs.module').then(m => m.CabsModule) }, 
  { path: 'holiday-package', 
  loadChildren: () => import('./holiday-package/holiday-package.module').then(m => m.HolidayPackageModule) }, 
  { path: 'core', 
  loadChildren: () => import('./core/core.module').then(m => m.CoreModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
