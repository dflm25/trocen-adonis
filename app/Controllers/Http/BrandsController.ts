import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

import Brand from 'App/Models/Brand'

export default class BrandsController {
  public async index({ request, response }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = request.input('limit')
    const storeId = request.input('store_id')

    try {
      const brands = await Database.from('brands').where('store_id', storeId).paginate(page, limit)
      return brands
    } catch (error) {
      return response.unauthorized({ message: 'Error, trying to get brands', error })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    let brand
    try {
      brand = await Brand.create(request.body())
    } catch (error) {
      return response.unauthorized({ message: 'Error, trying to create brand', error })
    }

    return brand.$isPersisted
  }

  public async update({ request, response }: HttpContextContract) {
    const { id } = request.params()

    try {
      const brand = await Brand.findOrFail(id)
      brand.name = request.input('name')

      const response = await brand.save()
      return response.$isPersisted
    } catch (error) {
      return response.unauthorized({ message: 'Error, trying to update brand', error })
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()
    try {
      const brand = await Brand.findOrFail(id)
      await brand.delete()

      return brand.$isPersisted
    } catch (error) {
      return response.unauthorized({ message: 'Error, trying to remove brand', error })
    }
  }
}
