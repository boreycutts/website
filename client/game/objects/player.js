export const player = {
    x: 20,
    y: 20,
    w: 50,
    h: 50,
    speed: 10,
    xspeed: 0,
    yspeed: 0,
    
    draw: function(ctx) {
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2;
        ctx.lineCap = "round";

        ctx.beginPath();
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x + this.w, this.y + this.h/2)
        ctx.lineTo(this.x, this.y + this.h)
        ctx.stroke();
    },

    update: function() {
        this.handleMovement();
    },

    handleMovement: function() {
        if(this.x < 0) {
            this.x = 0;
        } else if (this.x > window.innerWidth - this.w) {
            this.x = window.innerWidth - this.w
        } else {
            this.x += this.xspeed;
        }

        if(this.y < 0) {
            this.y = 0;
        } else if (this.y > window.innerHeight - this.h) {
            this.y = window.innerHeight - this.h
        } else {
            this.y += this.yspeed;
        }
    },

    move: function(keycode) {
        console.log('DOWN: ' + keycode)
        switch(keycode) {
            case 87 :
            case 38 : {
                this.yspeed = -this.speed;
                break;
            }
            
            case 83 :
            case 40 : {
                this.yspeed = this.speed;
                break;
            }

            case 65 :
            case 37 : {
                this.xspeed = -this.speed;
                break;
            }

            case 68 :
            case 39 : {
                this.xspeed = this.speed;
                break;
            }

            default:
                break;
        }
    },

    stop: function(keycode) {
        console.log('UP: ' + keycode)
        switch(keycode) {
            case 87 :
            case 38 : {
                this.yspeed = this.yspeed === -this.speed ? 0 : this.yspeed;
                break;
            }
            case 83 :
            case 40 : {
                this.yspeed = this.yspeed === this.speed ? 0 : this.yspeed;
                break;
            }

            case 65 :
            case 37 : {
                this.xspeed = this.xspeed === -this.speed ? 0 : this.xspeed;
                break;
            }
            case 68 :
            case 39 : {
                this.xspeed = this.xspeed === this.speed ? 0 : this.xspeed;
                break;
            }

            default:
                break;
        }
    }
}