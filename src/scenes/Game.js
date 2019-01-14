import Dude from '../sprites/Dude';
import Stars from '../sprites/Stars';
import Platforms from '../sprites/Platforms';
import Bombs from '../sprites/Bombs';

class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game'
        });
        this.cursors;
        this.platforms;
        this.player;
        this.stars;
        this.scoreText;
    }

    create() {
        this.add.image(400, 300, 'sky');
        this.buildLevel();
        this.player = new Dude(this, 100, 450, 'dude');
        this.bombs = new Bombs(this);
        this.addCollision();
        this.cursors = this.input.keyboard.createCursorKeys();
        this.scoreText = this.add.text(16, 16, 'Score: 0', {
            fontSize: '30px',
            fill: '#000'
        });
    }

    buildLevel() {
        this.platforms = new Platforms(this, 400, 568);
        this.platforms.addPlatforms([
            { x: 600, y: 400 },
            { x: 50, y: 250 },
            { x: 750, y: 220 }
        ]);
        this.stars = new Stars(this, 12, 0, 70, 11);
    }

    addCollision() {
        this.physics.add.collider(this.player, this.platforms.body);
        this.physics.add.collider(this.stars.body, this.platforms.body);
        this.physics.add.overlap(
            this.player,
            this.stars.body,
            this.updateScore,
            null,
            this
        );
        this.physics.add.collider(this.bombs.body, this.platforms.body);
        this.physics.add.collider(
            this.player,
            this.bombs.body,
            this.hitBomb,
            null,
            this
        );
    }

    addPlatform(x = 0, y = 0) {
        return new Ground(this, x, y);
    }

    updateScore(player, star) {
        this.player.collectStar(player, star);
        this.scoreText.setText('Score: ' + this.player.score);
        if (this.stars.body.countActive(true) === 0) {
            this.stars.respawn();
            this.bombs.spawnBomb(
                this.player.x < 400
                    ? Phaser.Math.Between(400, 800)
                    : Phaser.Math.Between(0, 400)
            );
        }
    }

    hitBomb(player, bomb) {
        this.physics.pause();
        player.setTint(0xff0000);
        player.anims.play('turn');
        this.gameOver = true;
    }

    update() {
        if (!this.gameOver) {
            this.player.update();
        }
    }
}

export default Game;
