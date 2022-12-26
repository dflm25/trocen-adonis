import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'product_categories'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.integer('product_id', 25).unsigned().references('id').inTable('products')
      table.integer('category_id', 25).unsigned().references('id').inTable('categories')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
