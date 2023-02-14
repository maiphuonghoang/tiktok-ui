import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';

const publicRoutes = [
    //không cần đăng nhập

    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
];
const privateRoutes = [
    //nếu chưa đăng nhập thì chuyển sang login
];
export { publicRoutes, privateRoutes };
