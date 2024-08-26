namespace SpriteKind {
    export const item = SpriteKind.create()
    export const sa = SpriteKind.create()
}
let turret5: Sprite = null
let shuriken: Sprite = null
let turret_live = 0
let turret4: Sprite = null
let projectile: Sprite = null
let turret3: Sprite = null
let turret1: Sprite = null
let turret2: Sprite = null
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.chestClosed, function (sprite, location) {
    let jim: Sprite = null
    tiles.setWallAt(location, false)
    jim.y += 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
})
forever(function () {
    if (turret5.overlapsWith(shuriken)) {
        sprites.destroy(turret5, effects.warmRadial, 100)
        turret_live += -1
    }
})
forever(function () {
    if (turret4.overlapsWith(shuriken)) {
        sprites.destroy(turret4, effects.warmRadial, 100)
        turret_live += -1
    }
})
forever(function () {
    if (turret_live == 1) {
        pause(2000)
        projectile = sprites.createProjectileFromSprite(assets.image`laserbeam`, turret5, 50, -3)
    }
})
forever(function () {
    if (turret3.overlapsWith(shuriken)) {
        sprites.destroy(turret3, effects.warmRadial, 100)
        turret_live += -1
    }
})
forever(function () {
    let turret: Sprite = null
    turret.setVelocity(0, 50)
    turret1.setVelocity(0, 50)
    turret2.setVelocity(0, 50)
    turret3.setVelocity(0, 50)
    turret4.setVelocity(0, 50)
    turret5.setVelocity(0, 50)
})
forever(function () {
    if (turret_live == 1) {
        pause(2000)
        projectile = sprites.createProjectileFromSprite(assets.image`laserbeam`, turret4, -50, -3)
    }
})
forever(function () {
    if (turret2.overlapsWith(shuriken)) {
        sprites.destroy(turret2, effects.warmRadial, 100)
        turret_live += -1
    }
})
forever(function () {
    if (turret1.overlapsWith(shuriken)) {
        sprites.destroy(turret1, effects.warmRadial, 100)
        turret_live += -1
    }
})
forever(function () {
    if (turret_live == 2) {
        pause(2000)
        projectile = sprites.createProjectileFromSprite(assets.image`laserbeam`, turret3, 50, -3)
    }
})
