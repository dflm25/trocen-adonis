import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.uuid('uuid')
      table.integer('brand_id', 11).unsigned().references('id').inTable('brands').nullable()
      table.string('name')
      table.float('price_in', 12, 2)
      table.float('price_out', 12, 2)
      table.float('stock_min', 12, 2)
      table.float('stock_max', 12, 2)
      table.text('description')
      table.boolean('is_active').defaultTo(true)
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
