class Shinobi {
    constructor(game) {

        this.animator =
            new Animator(ASSET_MANAGER.getAsset('./sprites/Run.png'),
                0, 0, 128, 128, 8, .20);
        this.x = 0;
        this.y = 300;
        this.game = game;
        this.velocity = { x: 200, y: 0 };

    };
    update() {

        this.x += this.velocity.x * this.game.clockTick;
        if (this.x >= this.game.ctx.canvas.width) {
            this.x = 0;
        }
    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
};