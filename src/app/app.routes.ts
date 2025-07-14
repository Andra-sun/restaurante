import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login').then((m) => m.LoginComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/layout/main/main').then((m) => m.MainLayoutComponent),
    children: [
      //pedidos
      {
        path: 'novo',
        loadComponent: () =>
          import('./features/pedidos/novo-pedido/novo-pedido').then(
            (m) => m.NovoPedido
          ),
      },
      {
        path: 'ativos',
        loadComponent: () =>
          import('./features/pedidos/ativos/ativos').then((m) => m.Ativos),
      },
      {
        path: 'historico',
        loadComponent: () =>
          import('./features/pedidos/historico/historico').then(
            (m) => m.Historico
          ),
      },
      //geral
      {
        path: 'funcionarios',
        loadComponent: () =>
          import('./features/geral/funcionarios/funcionarios').then(
            (m) => m.Funcionarios
          ),
      },
      {
        path: 'restaurante',
        loadComponent: () =>
          import('./features/geral/restaurante/restaurante').then(
            (m) => m.Restaurante
          ),
        children: [
          {
            path: 'cardapio',
            loadComponent: () =>
              import('./features/geral/restaurante/cardapio/cardapio').then(
                (m) => m.Cardapio
              ),
          },
          {
            path: 'mesas',
            loadComponent: () =>
              import('./features/geral/restaurante/mesas/mesas').then(
                (m) => m.Mesas
              ),
          },
          {
            path: 'informacoes',
            loadComponent: () =>
              import(
                './features/geral/restaurante/informacoes/informacoes'
              ).then((m) => m.Informacoes),
          },
        ],
      },
    ],
  },
  {
    path: 'encerramento',
    loadComponent: () =>
      import('./features/encerramento/encerramento').then(
        (m) => m.Encerramento
      ),
  },
];
