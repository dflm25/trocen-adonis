import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid: string

  @column()
  public store_id: number

  @column()
  public name: string

  @column()
  public username: string

  @column()
  public email: string

  @column()
  public phone: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public photo: string

  @column()
  public is_active: boolean

  @column()
  public is_admin: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @beforeCreate()
  public static assignAvatar(user: User) {
    user.uuid = uuid()
  }
}
