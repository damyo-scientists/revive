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
  import Game from "../core/Game";
  import SceneManager from '../managers/SceneManager';
  import AssetManager from "../managers/AssetManager";
  import StartScene from "../scenes/StartScene";


  export default {
    name: "Game.vue",
    mounted() {
      let game = new Game();
      game.generateApplication();
      game.app.renderer = PIXI.autoDetectRenderer(1920, 1080);
      game.resize();
      window.onresize = function (event) {
        game.resize(game.app);
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
      loadSlot(slotNumber) {
        this.game.loadSlot(slotNumber);
        //start game
      },
      createSlot(slotNumber) {
        this.game.createSlot(slotNumber);
      }
    },
    created() {
    },
    computed: {
      turn: function () {
        if (typeof (this.game) !== 'undefined') {
          return this.game.currentTurn;
        }
      }
    },
    data() {
      return {
        game: new Game()
      }
    }
  }
</script>

<style scoped>

</style>
