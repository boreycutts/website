const BULLET_DELAY = 10;

export const bullets = {
    active: [],
    isFiring: false,
    playerInfo: {},
    delayCount: 0,
    speed: 20,
    width: 25,

    draw: function(ctx) {
        for(const i in this.active) {
            ctx.strokeStyle = "#ffffff";
            ctx.lineWidth = 2;
            ctx.lineCap = "round";

            ctx.beginPath();
            ctx.moveTo(this.active[i].position.x, this.active[i].position.y);
            ctx.lineTo(this.active[i].position.x + this.width, this.active[i].position.y);
            ctx.stroke();
        }
    },

    update: function() {
        this.delayCount++;

        for(const i in this.active) {
            if(this.active[i].position.x > window.innerWidth) {
                this.active.splice(i, 1);
            } else {
                this.active[i].position.x += this.speed;
            }
        }

        if(this.delayCount >= BULLET_DELAY) {
            this.delayCount = 0;

            if(this.isFiring) {
                this.active.push({
                    position: {
                        x: this.playerInfo.position.x + this.playerInfo.width + 10,
                        y: this.playerInfo.position.y + this.playerInfo.height/2
                    },
                });
            }
        }
    },

    startFire: function() {
        this.isFiring = true;
    }, 

    stopFire: function() {
        this.isFiring = false;
        this.delayCount = 0;
    }
}