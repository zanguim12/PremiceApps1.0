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
         /* children: [
            { label: 'Nfts', route: '/dashboard/nfts' },
            // { label: 'Podcast', route: '/dashboard/podcast' },
          ],*/
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'articles',
          route: '/articles',
          /*children: [
            { label: 'Sign up', route: '/auth/sign-up' },
            { label: 'Sign in', route: '/auth/sign-in' },
            { label: 'Forgot Password', route: '/auth/forgot-password' },
            { label: 'New Password', route: '/auth/new-password' },
            { label: 'Two Steps', route: '/auth/two-steps' },
          ],*/
        },
        {
          icon: 'assets/icons/heroicons/outline/shield-exclamation.svg',
          label: 'apps',
          route: '/apps',
          /*children: [
            { label: '404', route: '/errors/404' },
            { label: '500', route: '/errors/500' },
          ],*/
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
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'stock',
          route: '/stock',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'service-digital',
          route: '/service-digital',
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
          label: 'sav',
          route: '/sav',
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
        /*{
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Notifications',
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Folders',
          route: '/folders',
          children: [
            { label: 'Current Files', route: '/folders/current-files' },
            { label: 'Downloads', route: '/folders/download' },
            { label: 'Trash', route: '/folders/trash' },
          ],
        },*/
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
        /*{
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Notifications',
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Folders',
          route: '/folders',
          children: [
            { label: 'Current Files', route: '/folders/current-files' },
            { label: 'Downloads', route: '/folders/download' },
            { label: 'Trash', route: '/folders/trash' },
          ],
        },*/
      ],
    },
  ];
}
