const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload(`./sprites/Run.png`);
ASSET_MANAGER.queueDownload(`./sprites/backgroundImage.png`);
ASSET_MANAGER.queueDownload(`./sprites/RunLeft.png`);

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	gameEngine.addEntity(new Shinobi(gameEngine));
	gameEngine.addEntity(new Fighter(gameEngine));
	gameEngine.addEntity(new Background(gameEngine));
	gameEngine.init(ctx);

	gameEngine.start();
});
