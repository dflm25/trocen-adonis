import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Category.createMany([
      {
        name: 'Accesorios para Vehículos',
        slug: 'accesorios-para-vehículos',
      },
      {
        name: 'Alimentos y Bebidas',
        slug: 'alimentos-y-bebidas',
      },
      {
        name: 'Animales y Mascotas',
        slug: 'animales-y-mascotas',
      },
    ])
  }
}
