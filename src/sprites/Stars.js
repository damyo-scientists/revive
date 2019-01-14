class Stars {
    constructor(scene, x, y, step, number) {
        this.body = scene.physics.add.group({
            key: 'star',
            repeat: number,
            setXY: { x: x, y: y, stepX: step }
        });

        this.body.children.iterate(function(child) {
            child.body.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });
    }

    respawn() {
        this.body.children.iterate(function(child) {
            child.enableBody(true, child.x, 0, true, true);
        });
    }
}

export default Stars;
