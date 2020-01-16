import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './services/data-resolver.service';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'detail/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./pages/title/title.module').then( m => m.TitlePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
