var texture_path = require('painterly-textures')(__dirname)
var create_game  = require('voxel-hello-world')

var game = create_game({
  texturePath: texture_path,
  materialFlatColor: false,
  materials: [
    ['grass', 'dirt', 'grass_dirt'],
    'obsidian',
    'brick',
    'grass',
    'plank'
  ],
  playerSkin: '/img/player.png',
  generateVoxelChunks: false,
  chunkDistance: 1
})

window.game = game
