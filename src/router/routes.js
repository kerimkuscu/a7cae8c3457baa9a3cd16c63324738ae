import Index from '../pages/Index';
import HotelDetails from '../pages/HotelDetails';
import HotelReservation from '../pages/HotelReservation';

import NotFound from '../components/NotFound'

export default [
    {
        path: '/',
        name: 'index',
        component: Index,
    },

    {
        path: '/:id',
        name: 'hotel-details',
        component: HotelDetails,
    },

    {
        path: '/reservation',
        name: 'hotel-reservation',
        component: HotelReservation,
    },

    {path: '*', component: NotFound}
];