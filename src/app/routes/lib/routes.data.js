
import { HomePage } from '../../../pages/homePage/HomePage';
import { FavoritesPage } from '../../../pages/favoritesPage/FavoritesPage';
import { AboutAnimePage } from '../../../pages/aboutAnimePage/AboutAnimePage';

export const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/favorites',
        component: FavoritesPage,
    },
    {
        path: '/about/:title',
        component: AboutAnimePage,
    },

];
