import 'phaser';
import Loader from './scenes/Loader';
import Brief from './scenes/Brief';
import Test from './scenes/Test';
import Start from './scenes/Start';



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
    scene: [Loader, Start, Brief, Test]
};

const game = new Phaser.Game(config);
