<template>

    <div class="stage" id="app">
        <button class="btn btn-primary">Vue UI</button>
        <button class="btn btn-secondary" v-model="turn">Turn : {{turn}}</button>
        <br/>


        <button class="btn btn-primary">Vue UI</button>
        <br/>
        <button class="btn btn-dark" onclick="document.querySelector('body').style.backgroundColor='gray';">Awesome
            Theme
        </button>
        <button class="btn btn-light" onclick="document.querySelector('body').style.backgroundColor='white';">Weirdo
            Theme
        </button>
    </div>

</template>

<script>
    import SceneManager from './scenes/SceneManager';
    import Game from "./core/Game";

    export default {
        name: "App.vue",
        mounted() {
            this.app = new PIXI.Application({
                antialias: true,
            });

            let sceneManager = new SceneManager();
            this.app.stage.addChild(sceneManager);
            this.$el.appendChild(this.app.view);
        },
        created() {
        },
        computed: {
            turn: function () {
                return this.$store.state.turn;
            }
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>
