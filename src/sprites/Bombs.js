class Bombs {
    constructor(scene) {
        this.body = scene.physics.add.group();
    }

    spawnBomb(x) {
        let bomb = this.body.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;
    }
}

export default Bombs;
