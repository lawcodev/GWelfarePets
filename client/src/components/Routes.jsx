import React from 'react';

// const List = React.lazy(() => import('./Users/List'))
const ManagePets = React.lazy(() => import('./Pets/ManagePets'));
const ActivePets = React.lazy(() => import('./Pets/ActivePets'));
const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'))

const routes = [
  
  { path: '/', name: 'Home' },
  { path: '/Dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/Mascotas', exact: true, name: 'Gestión de mascotas', component: ManagePets },
  { path: '/Mascotas/activas', exact: true, name: 'Mascotas rescatadas', component: ActivePets },
  // { path: '/users/:id', exact: true, name: 'Detalle del usuario', component: User }, // Ejemplo para el paso de un parametro
  // { path: '/Users/List', exact: true, name: 'Usuarios', component: List },
];

export default routes;
