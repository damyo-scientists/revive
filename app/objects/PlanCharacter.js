var Character = function (id, t, parent) {

    let self = {
        id: id,
        data: "" + Math.floor(10 * Math.random()),
        sprite: new PIXI.Sprite(t)
    }

    self.sprite.interactive = true;
    self.sprite.buttonMode = true;
    self.sprite.anchor.set(0.5);
    self.sprite.on('pointerdown', parent.onDragStart)
        .on('pointerup', parent.onDragEnd)
        .on('pointerupoutside', parent.onDragEnd)
        .on('pointermove', parent.onDragMove);

// PlanScene에서 관리하는 characterList에 등록해줌.
    parent.characterList[id] = self;
    return self;
}
