import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Menu',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Tableau de bord',
          route: '/dashbord',
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'articles',
          route: '/articles',
        },
        {
          icon: 'assets/icons/heroicons/outline/shield-exclamation.svg',
          label: 'apps',
          route: '/apps',
          children: [
            {
              label: 'new-user',
              route: '/new-user'
             },
            {
               label: 'profil',
               route: '/profil'
              },
          ],
        },
      ],
    },
    {
      group: 'Composante',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/gift.svg',
          label: 'comptabilite',
          route: '/comptabilite',
          children: [
            { label: 'Sign up', route: '/auth/sign-up' },
            { label: 'Sign in', route: '/auth/sign-in' },
            { label: 'Forgot Password', route: '/auth/forgot-password' },
            { label: 'New Password', route: '/auth/new-password' },
            { label: 'Two Steps', route: '/auth/two-steps' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'stock',
          route: '/stock',
          children: [
            { label: 'Sign up', route: '/auth/sign-up' },
            { label: 'Sign in', route: '/auth/sign-in' },
            { label: 'Forgot Password', route: '/auth/forgot-password' },
            { label: 'New Password', route: '/auth/new-password' },
            { label: 'Two Steps', route: '/auth/two-steps' },
            { label: 'Sign in', route: '/auth/sign-in' },
            { label: 'Forgot Password', route: '/auth/forgot-password' },
            { label: 'New Password', route: '/auth/new-password' },
            { label: 'Two Steps', route: '/auth/two-steps' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'service-digital',
          route: '/service-digital',
          children: [
            { label: 'Sign up', route: '/auth/sign-up' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'sav',
          route: '/sav',
          children: [
            { label: 'Sign up', route: '/auth/sign-up' },
          ],

        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'commerce',
          route: '/commerce',
          children: [
            { label: 'Sign up', route: '/auth/sign-up' },
            { label: 'Sign in', route: '/auth/sign-in' },
            { label: 'Forgot Password', route: '/auth/forgot-password' },
            { label: 'New Password', route: '/auth/new-password' },
            { label: 'Two Steps', route: '/auth/two-steps' },
            { label: 'Sign in', route: '/auth/sign-in' },
            { label: 'Forgot Password', route: '/auth/forgot-password' },
            { label: 'New Password', route: '/auth/new-password' },
            { label: 'Two Steps', route: '/auth/two-steps' },
          ],
        },
      ],
    },
    {
      group: 'Autres',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'clients',
          route: '/clients',
        },
      ],
    },
    {
      group: 'Configuration',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'Settings',
          route: '/settings',
        },
      ],
    },
  ];
}
