import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'lecture1',
    loadChildren: () =>
    import('./features/lecture1/lecture1.module').then(
      m => m.LectureOneModule
    ),
  },
  {
    path: 'lecture2',
    loadChildren: () =>
    import('./features/lecture2/lecture2.module').then(
        m => m.LectureTwoModule
    ),
  },
  {
    path: 'lecture3',
    loadChildren: () =>
    import('./features/lecture3/lecture3.module').then(
      m => m.LectureThreeModule
    ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
