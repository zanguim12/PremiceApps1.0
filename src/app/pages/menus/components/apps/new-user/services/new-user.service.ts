import { Injectable } from '@angular/core';
import { NewUser } from './../models/new-user.model';

@Injectable()
export class NewUserService {
    getNewUserData(): NewUser[] {
        return [
            {
                id: '1025',
                code: 'nbm5mv45n',
                name: 'John Doe',
                description: 'Sample description',
                image: 'https://premiceapp.com/assets/media/logos/logo-1.1.png',
                status: 1
            },
            {
                id: '1026',
                code: 'zx23zc42c',
                name: 'Jane Doe',
                description: 'Sample description',
                image: 'https://premiceapp.com/assets/media/logos/logo-1.1.png',
                status: 2
            },
            {
                id: '1027',
                code: 'acvx872gc',
                name: 'Alice Smith',
                description: 'Sample description',
                image: 'https://premiceapp.com/assets/media/logos/logo-1.1.png',
                status: 1
            },
            {
                id: '1028',
                code: 'tx125ck42',
                name: 'Bob Johnson',
                description: 'Sample description',
                image: 'https://premiceapp.com/assets/media/logos/logo-1.1.png',
                status: 2
            },
            {
                id: '1029',
                code: 'gwuby345v',
                name: 'Charlie Brown',
                description: 'Sample description',
                image: 'charlie-brown.jpg',
                status: 1
            }
        ];
    }

    getNewUserWithOrdersData(): (NewUser & { orders: any[] })[] {
        return [
            {
                id: '1023',
                code: '5k43kkk23',
                name: 'Sam Wilson',
                description: 'Sample description',
                image: 'sam-wilson.jpg',
                status: 1,
                orders: [
                    {
                        id: '1023-0',
                        userCode: '5k43kkk23',
                        date: '2020-04-15',
                        amount: 49,
                        quantity: 1,
                        customer: 'Gladys Rim',
                        status: 'RETURNED'
                    }
                ]
            },
            {
                id: '1024',
                code: 'lm2tny2k4',
                name: 'Emily Davis',
                description: 'Sample description',
                image: 'emily-davis.jpg',
                status: 2,
                orders: []
            },
            {
                id: '1028',
                code: 'tx125ck42',
                name: 'George Clark',
                description: 'Sample description',
                image: 'george-clark.jpg',
                status: 1,
                orders: []
            }
        ];
    }

   /* getNewUsersMini(): Promise<NewUser[]> {
        return Promise.resolve(this.getNewUserData().slice(0, 5));
    }

    getNewUsersSmall(): Promise<NewUser[]> {
        return Promise.resolve(this.getNewUserData().slice(0, 10));
    }*/

    getNewUsers(): Promise<NewUser[]> {
        return Promise.resolve(this.getNewUserData());
    }
/*
    getNewUsersWithOrdersSmall(): Promise<(NewUser & { orders: any[] })[]> {
        return Promise.resolve(this.getNewUserWithOrdersData().slice(0, 10));
    }

    getNewUsersWithOrders(): Promise<(NewUser & { orders: any[] })[]> {
        return Promise.resolve(this.getNewUserWithOrdersData());
    }*/
}
