// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

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
      user = await User.create(request.body())
    } catch {
      return response.unauthorized('Error, trying to create user')
    }

    return user.$isPersisted
  }
}
