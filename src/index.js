import 'phaser';
import Loader from './scenes/Loader';
import Game from './scenes/Game';

const config = {
    type: Phaser.AUTO,
    parent: 'root',
    width: 800,
    height: 600,
    loader: {
        path: 'public/assets/'
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 }
        }
    },
    scene: [Loader, Game]
};

const game = new Phaser.Game(config);
