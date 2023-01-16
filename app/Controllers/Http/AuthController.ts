// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Logger from '@ioc:Adonis/Core/Logger'

import User from 'App/Models/User'
import Store from 'App/Models/Store'

export default class AuthController {
  public async login({ auth, request, response }): Promise<string> {
    const email = request.input('email')
    const password = request.input('password')

    try {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '10 days',
      })
      return token
    } catch {
      return response.unauthorized('Invalid credentials')
    }
  }

  public async register({ request, response }): Promise<boolean | object> {
    let user
    try {
      const store = await Store.create({ name: request.only('store_name') })

      let data = {
        ...request.only(['name', 'username', 'email', 'phone', 'password']),
        is_admin: 1,
        store_id: store.id,
      }
      user = await User.create(data)
    } catch (error) {
      return response.unauthorized('Error, trying to create user', error)
    }

    return user.$isPersisted
  }
}
