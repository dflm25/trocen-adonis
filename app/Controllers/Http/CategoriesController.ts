import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Category from 'App/Models/Category'

export default class CategoriesController {
  public async index({}: HttpContextContract) {}

  // public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    let category
    try {
      category = await Category.create(request.body())
    } catch {
      return response.unauthorized({ message: 'Error, trying to create user' })
    }

    return category.$isPersisted
  }

  // public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({ request, response }: HttpContextContract) {
    const { id } = request.params()
    let category

    try {
      const category = await Category.findOrFail(id)
      category.name = request.input('name')
      category.slug = request.input('slug')

      await category.save()
    } catch {
      return response.unauthorized({ message: 'Error, trying to update user' })
    }

    return category.$isPersisted
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()
    let category
    try {
      category = await Category.findOrFail(id)
      await category.delete()
    } catch {
      return response.unauthorized({ message: 'Error, trying to remove catgegory' })
    }

    return category.$isPersisted
  }
}
