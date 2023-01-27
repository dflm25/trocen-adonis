import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid: string

  @column()
  public brand_id: number

  @column()
  public store_id: number

  @column()
  public name: string

  @column()
  public price_in: number

  @column()
  public price_out: number

  @column()
  public stock_min: number

  @column()
  public stock_max: number

  @column()
  public description: string

  @column()
  public is_active: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static assignAvatar(product: Product) {
    product.uuid = uuid()
  }
}
