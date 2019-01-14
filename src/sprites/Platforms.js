class Platforms {
    constructor(scene, x, y) {
        this.body = scene.physics.add.staticGroup({
            defaultKey: 'ground',
            createCallback: o => o.setOrigin(0)
        });

        this.floor = this.body
            .create(x, y)
            .setScale(2)
            .refreshBody();
    }

    addPlatform(x, y) {
        this.body.create(x, y);
    }

    addPlatforms(platforms = []) {
        platforms.forEach(platform => {
            this.addPlatform(platform.x, platform.y);
        });
    }
}

export default Platforms;
