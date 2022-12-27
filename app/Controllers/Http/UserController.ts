import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {
  public async store({ request, response }: HttpContextContract) {
    let user
    try {
      user = await User.create(request.body())
    } catch {
      return response.unauthorized('Error, trying to create user')
    }

    return user.$isPersisted
  }

  public async update({ request, response }: HttpContextContract) {
    const { id } = request.params()
    let user

    try {
      const user = await User.findOrFail(id)
      user.phone = request.input('phone')

      await user.save()
    } catch (error) {
      return response.unauthorized('Error, trying to update user', error)
    }

    return true
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()
    let user
    try {
      user = await User.findOrFail(id)
      await user.delete()
    } catch {
      return response.unauthorized('Error, trying to remove user')
    }

    return user.$isPersisted
  }
}
