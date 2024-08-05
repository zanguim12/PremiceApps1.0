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
            { label: 'Règlement Ticket(TK)', route: '/composantes/commerce/reglement-ticket' },
            { label: 'Règlement Client(RC)', route: '/composantes/commerce/reglement-client' },
            { label: 'Proformat', route: '/composantes/commerce/proformat' },
            { label: 'Bon Livraison', route: '/composantes/commerce/bon-livraison' },
            { label: 'Bon Retour', route: '/composantes/commerce/bon-retour' },
            { label: 'Sortie de caisse', route: '/composantes/commerce/sortie-caisse' },
            { label: 'Entrer de caisse', route: '/composantes/commerce/entre-caisse' },
            { label: 'Ratachement Caisse', route: '/composantes/commerce/ratachement-caisse' },
            { label: 'Ratachement Banque', route: '/composantes/commerce/ratachement-banque' },
            { label: 'Situation De Caisse', route: '/composantes/commerce/situation-caisse' },
            { label: 'Rapport Dette', route: '/composantes/commerce/rapport-dette' },
            { label: 'Suivi D\'article', route: '/composantes/commerce/suivie-article' },
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
