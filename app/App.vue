<template>

    <div class="stage" id="app">
        <button class="btn btn-primary">Vue UI</button>
        <button class="btn btn-secondary" v-model="turn">Turn : {{turn}}</button>
        <button class="btn btn-dark" onclick="document.querySelector('body').style.backgroundColor='gray';">Awesome
            Theme
        </button>
        <button class="btn btn-light" onclick="document.querySelector('body').style.backgroundColor='white';">Weirdo
            Theme
        </button>

    </div>


</template>

<script>

    import SM from './managers/SceneManager'
    import BriefScene from './scenes/BriefScene';
    import Game from "./core/Game";

    import SceneManager from './managers/SceneManager';
    import loadAllAssets from "./utils/AssetLoader";


    export default {
        name: "App.vue",
        mounted() {
            // this.app = new PIXI.Application({
            //
            //     antialias: true,
            // });

            var size = [screen.availWidth, screen.availHeight];
            var ratio = size[0] / size[1];
            // const pixiRenderer = this.app.renderer;
            // pixiRenderer = PIXI.autoDetectRenderer(size[0], size[1]);
            //this.app.renderer = PIXI.autoDetectRenderer(size[0], size[1]);

            var game = new Game();
            game.generateApplication();
            game.setChracterStatus();
            game.app.renderer = PIXI.autoDetectRenderer(screen.availWidth, screen.availHeight);

            function resize(app) {
                if (window.innerWidth / window.innerHeight >= ratio) {
                    var w = window.innerHeight * ratio;
                    var h = window.innerHeight;
                } else {
                    var w = window.innerWidth;
                    var h = window.innerWidth / ratio;
                }

                app.renderer.view.style.width = w + 'px';
                app.renderer.view.style.height = h + 'px';
            }

            resize(game.app);

            window.onresize = function (event) {
                resize(game.app);
            }


            this.sm = new SM();
            this.sm.app = game.app;

            let briefScene = new BriefScene();
            game.app.stage.addChild(briefScene);
            this.$el.appendChild(game.app.view);

            loadAllAssets();

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
