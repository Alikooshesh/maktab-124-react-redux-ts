import { Routes, Route } from 'react-router';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import ProductPage from '../pages/product';
import DashboardPage from '../pages/dashboard/dashboard';
import DashboardUserPage from '../pages/dashboard/user';
import DashboardOrdersPage from '../pages/dashboard/orders';

const RoutingSystem = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='product/:id' element={<ProductPage />} />
            <Route path='dashboard'>
                <Route index element={<DashboardPage />} />
                <Route path='user' element={<DashboardUserPage />} />
                <Route path='orders' element={<DashboardOrdersPage />} />
            </Route>
        </Routes>
    )
}

export default RoutingSystem