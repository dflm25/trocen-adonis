import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'transactions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.uuid('uuid')
      table.integer('stock_id', 11).unsigned().references('id').inTable('stockes').nullable()

      table.enu('type', ['sell', 'buy'], {
        useNative: true,
        enumName: 'transaction_type',
        existingType: false,
      })

      table.enu('payment_type', ['Cash', 'transaction', ''], {
        useNative: true,
        enumName: 'payment_type',
        existingType: false,
      })

      table.float('amount', 12, 2)
      table.float('unit_price', 12, 2)
      table.float('total', 12, 2)

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
