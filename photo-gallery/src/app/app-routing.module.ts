import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService} from './services/auth-guard.service';
const routes: Routes = [
  {
    path: '',
    loadChildren:'./page/tabs/tabs.module#TabsPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren:'./page/login/login.module#LoginPageModule'
  },
  {
    path: 'detail-page',
    loadChildren: () => import('./page/detail-page/detail-page.module').then( m => m.DetailPagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
