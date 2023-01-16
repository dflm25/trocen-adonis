/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

// Auth routes
Route.group(() => {
  Route.post('/login', 'AuthController.login')
  Route.post('/register', 'AuthController.register')
}).prefix('/auth')

// Protected routes
Route.group(() => {
  Route.resource('users', 'UserController')
  Route.resource('categories', 'CategoriesController')
  Route.resource('brands', 'BrandsController')
})
  .middleware('auth')
  .prefix('api')

// Home route
Route.get('/', async () => {
  return { hello: 'world' }
})
