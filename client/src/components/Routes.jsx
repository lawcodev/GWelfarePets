import React from 'react';

const Users = React.lazy(() => import('./Users/Users'))
const LostPets = React.lazy(() => import('./Pets/LostPets'));
const RescuedPets = React.lazy(() => import('./Pets/RescuedPets'));
const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'))

const routes = [
  
  { path: '/', exact: true, name: 'Home' },
  { path: '/Dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/Pets/Lost', exact: true, name: 'Mascotas perdidas', component: LostPets },
  { path: '/Pets/Rescued', exact: true, name: 'Mascotas rescatadas', component: RescuedPets },
  // { path: '/users/:id', exact: true, name: 'Detalle del usuario', component: User }, // Ejemplo para el paso de un parametro
  { path: '/Users/Users', exact: true, name: 'Usuarios', component: Users },
];

export default routes;
