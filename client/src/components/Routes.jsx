import React from 'react';

//Mascotas
const ManagePets = React.lazy(() => import('./Pets/ManagePets'))
const NewPet = React.lazy(() => import('./Pets/NewPet'))
const ActivePets = React.lazy(() => import('./Pets/ActivePets'))
const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'))
//Razas
const ManageBreed = React.lazy(() => import('./Breed/ManageBreed'))
const NewBreed = React.lazy(() => import('./Breed/NewBreed'))

const LostPetsMaps = React.lazy(() => import('./LostPetsMaps/LostPetsMaps'))
const routes = [
  
  { path: '/', exact: true, name: 'Home' },
  { path: '/Dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/Mascotas', exact: true, name: 'Administración de mascotas', component: ManagePets },
  { path: '/Mascotas/activas', exact: true,  name: 'Mascotas activas', component: ActivePets },
  { path: '/Mascotas/nuevo', exact: true, name: 'Registro de mascotas', component: NewPet },
  { path: '/Mascotas/editar/:id', exact: true, name: 'Editar mascota', component: NewPet }, 

  { path: '/Razas', exact: true, name: 'Administración de razas', component: ManageBreed},
  { path: '/Razas/nuevo', exact: true, name: 'Registro de razas', component: NewBreed},

  { path: '/Ubicacion/mascotas', exact: true, name: 'Adminstración de mascotas perdidas', component: LostPetsMaps}
];

export default routes;
