import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'

export default class Brand extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public store_id: number

  @column()
  public uuid: string

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static assignAvatar(brand: Brand) {
    brand.uuid = uuid()
  }
}
