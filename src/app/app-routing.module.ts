import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./paginas/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./paginas/fab/fab.module').then( m => m.FabPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./paginas/datetime/datetime.module').then( m => m.DatetimePageModule)
  },
  {
    path: 'buttons',
    loadChildren: () => import('./paginas/buttons/buttons.module').then( m => m.ButtonsPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./paginas/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./paginas/cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./paginas/slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'check',
    loadChildren: () => import('./paginas/check/check.module').then( m => m.CheckPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./paginas/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./paginas/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./paginas/toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./paginas/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'scroll',
    loadChildren: () => import('./paginas/scroll/scroll.module').then( m => m.ScrollPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./paginas/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'list-reorder',
    loadChildren: () => import('./paginas/list-reorder/list-reorder.module').then( m => m.ListReorderPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./paginas/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'pover',
    loadChildren: () => import('./paginas/pover/pover.module').then( m => m.PoverPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
