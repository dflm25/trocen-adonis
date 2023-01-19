// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Store from 'App/Models/Store'

export default class AuthController {
  public async login({ auth, request, response }): Promise<object> {
    const email = request.input('email')
    const password = request.input('password')

    try {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '10 days',
      })
      const user = await User.query()
        .where('email', email)
        .select(['name', 'email', 'store_id', 'is_admin', 'is_customer', 'photo', 'username'])
      return {
        token,
        user,
      }
    } catch (error) {
      return response.unauthorized({ message: 'Invalid credentials', error })
    }
  }

  public async register({ request, response }): Promise<boolean | object> {
    let user
    try {
      const store = await Store.create({ name: request.only('store_name').store_name })

      let data = {
        ...request.only(['name', 'username', 'email', 'phone', 'password']),
        is_admin: 1,
        store_id: store.id,
      }
      user = await User.create(data)
    } catch (error) {
      return response.unauthorized({ message: 'Error, trying to create user', error })
    }

    return user.$isPersisted
  }
}
