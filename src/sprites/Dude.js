class Dude extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key) {
        super(scene, x, y, key);
        scene.physics.world.enable(this);
        scene.add.existing(this);
        this.body.setBounce(0.2).setCollideWorldBounds(true);
        this.setAnimations(this.scene);
        this.score = 0;
    }

    setAnimations(scene) {
        scene.anims.create({
            key: 'left',
            frames: scene.anims.generateFrameNumbers('dude', {
                start: 0,
                end: 3
            }),
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });

        scene.anims.create({
            key: 'right',
            frames: scene.anims.generateFrameNumbers('dude', {
                start: 5,
                end: 8
            }),
            frameRate: 10,
            repeat: -1
        });
    }

    collectStar(player, star) {
        star.disableBody(true, true);
        this.score += 10;
    }

    update() {
        if (this.scene.cursors.left.isDown) {
            this.body.setVelocityX(-160);
            this.anims.play('left', true);
        } else if (this.scene.cursors.right.isDown) {
            this.body.setVelocityX(160);
            this.anims.play('right', true);
        } else {
            this.body.setVelocityX(0);
            this.anims.play('turn');
        }

        if (this.scene.cursors.up.isDown && this.body.touching.down) {
            this.body.setVelocityY(-330);
        }
    }
}

export default Dude;
