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
      url: '/Lista',
      icon: 'fa fa-free-code-camp',
      children: [
        {
          name: 'Gestionar adopción',
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
          // url: '/Users/list',
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
          // url: '/Users/list',
        },
      ],
    },
    {
      name: 'Mascotas perdidas ',
      url: '/Lista',
      icon: 'fa fa-map-marker',
      children: [
        {
          name: 'Gestión de mascotas perdidas',
          url: '/ubicacion/mascotas',
        },
      ],
    },
  ],
};
