<template>

  <div class="stage">
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

  import '@babel/polyfill';
  import BriefScene from '../scenes/BriefScene';
  import Game from "../core/Game";
  import SceneManager from '../managers/SceneManager';
  import AssetManager from "../managers/AssetManager";
  import StartScene from "../scenes/StartScene";


  export default {
    name: "Game.vue",
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
      game.app.renderer = PIXI.autoDetectRenderer(screen.availWidth, screen.availHeight);

      var w, h;

      function resize(app) {
        if (window.innerWidth / window.innerHeight >= ratio) {
          w = window.innerHeight * ratio;
          h = window.innerHeight;
        } else {
          w = window.innerWidth;
          h = window.innerWidth / ratio;
        }

        app.renderer.view.style.width = w + 'px';
        app.renderer.view.style.height = h + 'px';
      }

      resize(game.app);

      window.onresize = function (event) {
        resize(game.app);
      };


      this.sceneManager = new SceneManager();
      this.sceneManager.app = game.app;

      let assetManager = new AssetManager();
      assetManager.loadAllAssets(() => {
        let startScene = new StartScene();
        game.app.stage.addChild(startScene);
        this.$el.appendChild(game.app.view);
      });
    },
    methods: {
      async loadGameData() {
        let game = axios
      }
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
