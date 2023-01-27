import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({ request, response }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = request.input('limit')
    const storeId = request.input('store_id')

    try {
      const products = await Database.from('products')
        .where('store_id', storeId)
        .paginate(page, limit)
      return products
    } catch (error) {
      return response.unauthorized({ message: 'Error, trying to get products', error })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    let product
    try {
      product = await Product.create(request.body())
    } catch (error) {
      return response.unauthorized({ message: 'Error, trying to create product', error })
    }

    return product.$isPersisted
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({ request, response }: HttpContextContract) {
    const { id } = request.params()

    try {
      const product = await Product.findOrFail(id)
      product.brand_id = request.input('brand_id')
      product.name = request.input('name')
      product.price_in = request.input('price_in')
      product.price_out = request.input('price_out')
      product.stock_min = request.input('stock_min')
      product.stock_max = request.input('stock_max')
      product.description = request.input('description')

      // save photos and categories

      const response = await product.save()
      return response.$isPersisted
    } catch (error) {
      return response.unauthorized({ message: 'Error, trying to update product', error })
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()
    try {
      const product = await Product.findOrFail(id)
      await product.delete()

      return product.$isPersisted
    } catch (error) {
      return response.unauthorized({ message: 'Error, trying to remove product', error })
    }
  }
}
