import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Size from 'App/Models/Size'

export default class extends BaseSeeder {
  public async run() {
    await Size.createMany([
      { name: 'XS' },
      { name: 'S' },
      { name: 'M' },
      { name: 'L' },
      { name: 'XL' },
      { name: 'XXL' },
      { name: '28' },
      { name: '30' },
      { name: '32' },
      { name: '34' },
      { name: '36' },
      { name: '38' },
      { name: '2' },
      { name: '4' },
      { name: '6' },
      { name: '8' },
      { name: '10' },
      { name: '12' },
      { name: '14' },
      { name: '16' },
    ])
  }
}
