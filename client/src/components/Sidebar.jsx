export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      badge: {
        variant: 'info',
        text: '%',
      },
    },
    {
      name: 'Mascotas',
      url: '/pets',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Perdidas',
          url: '/Pets/lost',
        },
        {
          name: 'Rescatadas',
          url: '/Pets/rescued',
        },
      ],
    },
    {
      name: 'Usuarios ',
      url: '/Lista',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Lista',
          url: '/Users/Users',
        },
      ],
    },
  ],
};
