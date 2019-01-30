// get canvas and context

// Log successful msg for pixi
import BriefStage from "./scenes/BriefStage";
import Vue from 'vue'

Vue.config.productionTip = false

if (PIXI) console.info("PIXI.JS is successfully installed")

var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

var briefStage = new BriefStage();
app.stage.addChild(briefStage);

briefStage.x = (app.screen.width - briefStage.width) / 2;
briefStage.y = (app.screen.height - briefStage.height) / 2;
