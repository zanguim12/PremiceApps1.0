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
          route: '/menus/articles',
        },
        {
          icon: 'assets/icons/heroicons/outline/shield-exclamation.svg',
          label: 'apps',
          route: '/apps',
          children: [
            {
              label: 'new-user',
              route: '/menus/apps/new-user'
             },
            {
               label: 'profil',
               route: '/menus/apps/profil'
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
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'service-digital',
          route: '/service-digital',
          children: [
            { label: 'inbox', route: '/composantes/service-digital/inbox' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'stock',
          route: '/stock',
          children: [
            { label: 'famille-produit', route: '/composantes/stock/famille-produit' },
            { label: 'Fournisseur', route: '/composantes/stock/fournisseur' },
            { label: 'Articles', route: '/composantes/stock/articles' },
            { label: 'Depot', route: '/composantes/stock/depot' },
            { label: 'entre-stock', route: '/composantes/stock/entre-stock' },
            { label: 'Mouvements Entre/Sortie', route: '/composantes/stock/mouvement-entre-sortie' },
            { label: 'Transfert Stock', route: '/composantes/stock/transfert-stock' },
            { label: 'Inventaires', route: '/composantes/stock/inventaire' },
            { label: 'Alert Stock', route: '/composantes/stock/alert-stock' },
            { label: 'suivie Article', route: '/composantes/stock/suivi-article'}
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'sav',
          route: '/sav',
          children: [
            { label: 'Maintenace', route: '/composantes/sav/maintenace' },
          ],

        },
        {
          icon: 'assets/icons/heroicons/outline/gift.svg',
          label: 'comptabilite',
          route: '/comptabilite',
          children: [
            { label: 'vente Employe', route: '/composantes/comptabilite/vente-employe' },
            { label: 'Achat Client', route: '/composantes/comptabilite/achat-client' },
            { label: 'Alerte facture', route: '/composantes/comptabilite/alert-facture' },
            { label: 'Annonces', route: '/composantes/comptabilite/annonce' },
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
