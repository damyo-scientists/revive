// get canvas and context

// Log successful msg for pixi
import SceneManager from './scenes/SceneManager'
import BriefStage from "./scenes/brief-stage";


if (PIXI) console.info("PIXI.JS is successfully installed")

var app = new PIXI.Application(800, 600, {backgroundColor: 0x1099bb});
document.body.appendChild(app.view);
//var briefStage = new BriefStage();
var sceneManager = new SceneManager();

//app.stage.addChild(briefStage);
app.stage.addChild(sceneManager);
sceneManager.openScene(0);

//sceneManager.startBrief();
//
// sceneManager.x = (app.screen.width - sceneManager.width) / 2;
// sceneManager.y = (app.screen.height - sceneManager.height) / 2;

