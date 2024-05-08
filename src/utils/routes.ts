export const ROUTES = {
    HOME: '/admin/statistic',
    EXPLORE: '/explore', 
    ADMIN: 'admin', 
    STATISTIC: 'statistic', 
    REVIEWS: 'reviews', 
    USERS :'users', 
    PRODUCTS :'products'

}

export const sidebarItems = [
    { to: ROUTES.HOME, label: 'Statistic' },
    { to: `/admin/${ROUTES.REVIEWS}`, label: 'Reviews' },
    { to: `/admin/${ROUTES.USERS}`, label: 'Users' },
    { to: `/admin/${ROUTES.PRODUCTS}`, label: 'Products' },
];