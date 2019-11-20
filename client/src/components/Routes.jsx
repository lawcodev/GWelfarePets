import React from 'react';

//Mascotas
const ManagePets = React.lazy(() => import('./Pets/ManagePets')) // importas el componente a renderizar.
const AddNewPet = React.lazy(() => import('./Pets/AddNewPet'))
const ActivePets = React.lazy(() => import('./Pets/ActivePets'))
const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'))
//Razas
const ManageBreed = React.lazy(() => import('./Breed/ManageBreed'))
const NewBreed = React.lazy(() => import('./Breed/NewBreed'))
const Home = React.lazy(() => import('./Home/Home'))
const MappingPetAdmi = React.lazy(() => import('./MappingPetAdmi/MappingPetAdmi'))
//Accidentes
const Accidents = React.lazy(() => import('./Accidents/Accidents'))
const AddNewAccidentsPost = React.lazy(() => import('./Accidents/AddNewAccidentsPost'))
const UnApprovedTakenPet = React.lazy(() => import('./AdoptionIntranet/UnApprovedTakenPet'))
//Apadrinamiento
const ApproveSponsorShip = React.lazy(() => import('./Administration/view/SponsorShip/SponsorShipView'))

const routes = [
  { path: '/Home', exact: true, name: 'Home', component: Home }, // enlazas el componente de acuerdo a la ruta que se renderizará
  { path: '/Dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/Mascotas', exact: true, name: 'Administración de mascotas', component: ManagePets },
  { path: '/Mascotas/activas', exact: true,  name: 'Mascotas activas', component: ActivePets },
  { path: '/Mascotas/nuevo', exact: true, name: 'Registro de mascotas', component: AddNewPet },
  { path: '/Razas', exact: true, name: 'Administración de razas', component: ManageBreed},
  { path: '/Razas/nuevo', exact: true, name: 'Registro de razas', component: NewBreed},
  { path: '/mapeo/mascotas', exact: true, name: 'Mapeo gráfico de mascotas', component: MappingPetAdmi},
  { path: '/accidentes', exact: true, name: 'Adminsitración de accidentes', component: Accidents},
  { path: '/accidentes/nuevo', exact: true, name: 'Registro de accidentes', component: AddNewAccidentsPost},
  { path: '/adopciones/aprobar', exact: true, name: 'Administración de adopciones', component: UnApprovedTakenPet},
  { path: '/apadrinamiento/aprobar', exact: true, name: 'Administración de apadrinamiento', component: ApproveSponsorShip}
];
// Nota: Para ver más carpeta containers>defaultLayout
export default routes;
