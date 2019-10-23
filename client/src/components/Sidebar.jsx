// Aquí se define una lista de todos los módulos de la aplicación | esto esta pensado sólo para la parte de administración.
export default {
  items: [
    {
      name: 'Home',
      url: '/home',
      icon: 'fa fa-home',
      badge: {
        variant: 'info',
        text: 'Home',
      },
    },
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'fa fa-tachometer',
      badge: {
        variant: 'info',
        text: '%',
      },
    },
    {
      name: 'Mascotas',
      url: '/mascotas',
      icon: 'fa fa-paw',
      children: [
        {
          name: 'Administrar mascotas ',
          url: '/mascotas',
        },
        {
          name: 'Administrar razas',
          url: '/razas',
        }       
      ],
    },
    {
      name: 'Accidentes ',
      icon: 'fa fa-free-code-camp',
      children: [
        {
          name: 'Gestionar aprobación',
          url: '/accidentes'
        },
        {
          name: 'Mapeo gráfico de accidentes',
          url: '/mapeo/mascotas',
        },
      ],
    },
    {
      name: 'Adopción ',
      url: '/Lista',
      icon: 'fa fa-heart',
      children: [
        {
          name: 'Gestionar adopción',
        },
      ],
    },
    {
      name: 'Apadrinamiento ',
      url: '/Lista',
      icon: 'fa fa-shield',
      children: [
        {
          name: 'Gestionar apadrinamiento',
        },
      ],
    },
  ],
};
