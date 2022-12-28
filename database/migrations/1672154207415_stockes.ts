import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'stockes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.uuid('uuid')

      table.integer('store_id', 11).unsigned().references('id').inTable('stores').nullable()
      table.integer('branch_id', 11).unsigned().references('id').inTable('branches').nullable()
      table.integer('color_id', 11).unsigned().references('id').inTable('colors').nullable()
      table.integer('sizes_id', 11).unsigned().references('id').inTable('sizes').nullable()

      table.unique(['branch_id', 'color_id', 'sizes_id'])
      table.string('sku').nullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
