import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Category from 'App/Models/Color'

export default class extends BaseSeeder {
  public async run() {
    await Category.createMany([
      { name: 'Alice azul', code: '#f0f8ff' },
      { name: 'blanco antiguo', code: '#faebd7' },
      { name: 'agua', code: '#00ffff' },
      { name: 'aguamarina', code: '#7fffd4' },
      { name: 'azur', code: '#f0ffff' },
      { name: 'beige', code: '#f5f5dc' },
      { name: 'sopa de mariscos', code: '#ffe4c4' },
      { name: 'negro', code: '#000000' },
      { name: 'blanquedalmond', code: '#ffebcd' },
      { name: 'azul', code: '#0000ff' },
      { name: 'Violeta Azul', code: '#8a2be2' },
      { name: 'marrón', code: '#a52a2a' },
      { name: 'madera de encarcelamiento', code: '#deb887' },
      { name: 'cadetblue', code: '#5f9ea0' },
      { name: 'monasterio', code: '#7fff00' },
      { name: 'chocolate', code: '#d2691e' },
      { name: 'coral', code: '#ff7f50' },
      { name: 'mancha de maíz', code: '#6495ed' },
      { name: 'seda de maiz', code: '#fff8dc' },
      { name: 'carmesí', code: '#dc143c' },
      { name: 'cian', code: '#00ffff' },
      { name: 'azul oscuro', code: '#00008b' },
      { name: 'oscuro', code: '#008b8b' },
      { name: 'Darkgoldenrod', code: '#b8860b' },
      { name: 'gris oscuro', code: '#a9a9a9' },
      { name: 'verde oscuro', code: '#006400' },
      { name: 'gris oscuro', code: '#a9a9a9' },
      { name: 'Darkkhaki', code: '#bdb76b' },
      { name: 'Darkmagenta', code: '#8b008b' },
      { name: 'oscuro', code: '#556b2f' },
      { name: 'naranja oscuro', code: '#ff8c00' },
      { name: 'Darkorchid', code: '#9932cc' },
      { name: 'rojo oscuro', code: '#8b0000' },
      { name: 'Darksalmon', code: '#e9967a' },
      { name: 'Darkseagreen', code: '#8fbc8f' },
      { name: 'DarkslateBlue', code: '#483d8b' },
      { name: 'Darkslategrey', code: '#2f4f4f' },
      { name: 'Darkturquoise', code: '#00ced1' },
      { name: 'Violeta oscuro', code: '#9400d3' },
      { name: 'Rosa profundo', code: '#ff1493' },
      { name: 'profundo', code: '#00bfff' },
      { name: 'dimgrey', code: '#696969' },
      { name: 'dodgerblue', code: '#1e90ff' },
      { name: 'ladrillo refractario', code: '#b22222' },
      { name: 'floralwhite', code: '#fffaf0' },
      { name: 'bosque verde', code: '#228b22' },
      { name: 'fucsia', code: '#ff00ff' },
      { name: 'Gainsboro', code: '#dcdcdc' },
      { name: 'fantasma', code: '#f8f8ff' },
      { name: 'oro', code: '#ffd700' },
      { name: 'muelle de oro', code: '#daa520' },
      { name: 'gris', code: '#808080' },
      { name: 'verde', code: '#008000' },
      { name: 'verde amarillo', code: '#adff2f' },
      { name: 'gris', code: '#808080' },
      { name: 'gotas de miel', code: '#f0fff0' },
      { name: 'Rosa caliente', code: '#ff69b4' },
      { name: 'indio', code: '#cd5c5c' },
      { name: 'índigo', code: '#4b0082' },
      { name: 'Marfil', code: '#fffff0' },
      { name: 'caqui', code: '#f0e68c' },
      { name: 'lavanda', code: '#e6e6fa' },
      { name: 'cementerio de lavanda', code: '#fff0f5' },
      { name: 'césped', code: '#7cfc00' },
      { name: 'limón', code: '#fffacd' },
      { name: 'azul claro', code: '#add8e6' },
      { name: 'liviano', code: '#f08080' },
      { name: 'cian claro', code: '#e0ffff' },
      { name: 'LightGoldenrodyellow', code: '#fafad2' },
      { name: 'gris claro', code: '#d3d3d3' },
      { name: 'verde claro', code: '#90ee90' },
      { name: 'pez de luz', code: '#d3d3d3' },
      { name: 'Rosa claro', code: '#ffb6c1' },
      { name: 'Lucalmón', code: '#ffa07a' },
      { name: 'LUZEAGREEN', code: '#20b2aa' },
      { name: 'LUCHEKYBLUE', code: '#87cefa' },
      { name: 'LightLategrey', code: '#778899' },
      { name: 'piloto de luz', code: '#b0c4de' },
      { name: 'amarillo claro', code: '#ffffe0' },
      { name: 'Lima', code: '#00ff00' },
      { name: 'verde lima', code: '#32cd32' },
      { name: 'lino', code: '#faf0e6' },
      { name: 'magenta', code: '#ff00ff' },
      { name: 'granate', code: '#800000' },
      { name: 'mediosaquamarina', code: '#66cdaa' },
      { name: 'azul medio', code: '#0000cd' },
      { name: 'MediumOrchid', code: '#ba55d3' },
      { name: 'mediomburado', code: '#9370db' },
      { name: 'miocardio', code: '#3cb371' },
      { name: 'mediumslateBlue', code: '#7b68ee' },
      { name: 'mediumspringgreen', code: '#00fa9a' },
      { name: 'MediaTurquoise', code: '#48d1cc' },
      { name: 'mediano', code: '#c71585' },
      { name: 'MidnightBlue', code: '#191970' },
      { name: 'acuñador', code: '#f5fffa' },
      { name: 'distirose', code: '#ffe4e1' },
      { name: 'mocasín', code: '#ffe4b5' },
      { name: 'navajowhite', code: '#ffdead' },
      { name: 'Armada', code: '#000080' },
      { name: 'Oldlace', code: '#fdf5e6' },
      { name: 'aceituna', code: '#808000' },
      { name: 'verde oliva', code: '#6b8e23' },
      { name: 'naranja', code: '#ffa500' },
      { name: 'rojo naranja', code: '#ff4500' },
      { name: 'orquídea', code: '#da70d6' },
      { name: 'paleegoldenrod', code: '#eee8aa' },
      { name: 'Verde pálido', code: '#98fb98' },
      { name: 'paleturqueo', code: '#afeeee' },
      { name: 'palevioletrado', code: '#db7093' },
      { name: 'papayawhip', code: '#ffefd5' },
      { name: 'durazno', code: '#ffdab9' },
      { name: 'Perú', code: '#cd853f' },
      { name: 'rosa', code: '#ffc0cb' },
      { name: 'ciruela', code: '#dda0dd' },
      { name: 'azul pálido', code: '#b0e0e6' },
      { name: 'púrpura', code: '#800080' },
      { name: 'rojo', code: '#ff0000' },
      { name: 'rosibrown', code: '#bc8f8f' },
      { name: 'azul real', code: '#4169e1' },
      { name: 'ardilla', code: '#8b4513' },
      { name: 'salmón', code: '#fa8072' },
      { name: 'arena de arena', code: '#f4a460' },
      { name: 'Mar verde', code: '#2e8b57' },
      { name: 'concha', code: '#fff5ee' },
      { name: 'tierra de siena', code: '#a0522d' },
      { name: 'plata', code: '#c0c0c0' },
      { name: 'cielo azul', code: '#87ceeb' },
      { name: 'pizarra', code: '#6a5acd' },
      { name: 'pizarra gris', code: '#708090' },
      { name: 'nieve', code: '#fffafa' },
      { name: 'primavera verde', code: '#00ff7f' },
      { name: 'azul acero', code: '#4682b4' },
      { name: 'broncearse', code: '#d2b48c' },
      { name: 'verde azulado', code: '#008080' },
      { name: 'cardo', code: '#d8bfd8' },
      { name: 'tomate', code: '#ff6347' },
      { name: 'turquesa', code: '#40e0d0' },
      { name: 'Violeta', code: '#ee82ee' },
      { name: 'trigo', code: '#f5deb3' },
      { name: 'blanco', code: '#ffffff' },
      { name: 'humo blanco', code: '#f5f5f5' },
      { name: 'amarillo', code: '#ffff00' },
      { name: 'amarillo verde', code: '#9acd32' },
    ])
  }
}
