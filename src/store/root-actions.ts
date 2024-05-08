import * as userActions from '../services/user/user.actions'
import * as productActions from '../services/product/product.actions'

export const rootActions = {
    ...userActions, 
    ...productActions
}