<template>
    <div class="stage">
        <button class="btn btn-primary">Vue UI</button><br/>
    </div>
</template>

<script>
    import SceneManager from './scenes/SceneManager';

    export default {
        name: "App.vue",
        mounted() {
            this.app = new PIXI.Application({
                antialias: true,
            });
            let sceneManager = new SceneManager();

            this.app.stage.addChild(sceneManager);
            this.$el.appendChild(this.app.view);
        }
    }
</script>

<style scoped>

</style>