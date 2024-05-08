import { Routes, Route } from 'react-router-dom';
import {ROUTES } from '../utils/routes'
import ExplorePage from '../pages/Auth';
import Dashboard from '../pages/Dashboard';
import Statistic from '../components/Statistic';
import Reviews from '../components/Reviews';
import Users from '../components/Users';
import Products from '../components/Products';

const AppRoutes = () => (  
  
    <Routes>
        <Route path={ROUTES.EXPLORE} element={<ExplorePage/>}/>
         <Route path={ROUTES.ADMIN} element={<Dashboard/>}>
           <Route path={ROUTES.STATISTIC}  element={<Statistic/>} />
           <Route path={ROUTES.REVIEWS} element={<Reviews/>} />
           <Route path={ROUTES.USERS} element={<Users/>} />
           <Route path={ROUTES.PRODUCTS} element={<Products/>} />
         </Route>

    </Routes>


)

export default AppRoutes;