export const player = {
    position: {
        x: 20,
        y: 20
    },
    width: 50,
    height: 50,
    speed: 10,
    acceleration: 1,
    deadzone: 1,
    buttons: {
        up: false,
        down: false,
        left: false,
        right: false
    },
    xspeed: 0,
    yspeed: 0,
    
    draw: function(ctx) {
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2;
        ctx.lineCap = "round";

        ctx.beginPath();
        ctx.moveTo(this.position.x, this.position.y);
        ctx.lineTo(this.position.x + this.width, this.position.y + this.height/2);
        ctx.lineTo(this.position.x, this.position.y + this.height);
        ctx.stroke();
    },

    update: function() {
        this.handleMovement();
    },

    handleMovement: function() {
        if(this.buttons.up) {
            this.position.yspeed = this.position.yspeed > -this.speed ? this.position.yspeed - this.acceleration : -this.speed; 
        } else if(this.buttons.down) {
            this.position.yspeed = this.position.yspeed < this.speed ? this.position.yspeed + this.acceleration : this.speed;
        } else {
            if(this.position.yspeed > 0 + this.deadzone) {
                this.position.yspeed -= this.acceleration;
            } else if(this.position.yspeed < 0 - this.deadzone) {
                this.position.yspeed += this.acceleration;
            } else {
                this.position.yspeed = 0;
            }
        }

        if(this.buttons.left && !this.buttons.right) {
            this.position.xspeed = this.position.xspeed > -this.speed ? this.position.xspeed - this.acceleration : -this.speed;
        } else if(this.buttons.right && !this.buttons.left) {
            this.position.xspeed = this.position.xspeed < this.speed ? this.position.xspeed + this.acceleration : this.speed;
        } else {
            if(this.position.xspeed > 0 + this.deadzone) {
                this.position.xspeed -= this.acceleration;
            } else if(this.position.xspeed < 0 - this.deadzone) {
                this.position.xspeed += this.acceleration;
            } else {
                this.position.xspeed = 0;
            }
        }

        if(this.position.x < 0) {
            this.position.x = 0;
        } else if (this.position.x > window.innerWidth - this.width) {
            this.position.x = window.innerWidth - this.width
        } else {
            this.position.x += this.position.xspeed;
        }

        if(this.position.y < 0) {
            this.position.y = 0;
        } else if (this.position.y > window.innerHeight - this.height) {
            this.position.y = window.innerHeight - this.height
        } else {
            this.position.y += this.position.yspeed;
        }
    },

    move: function(keycode) {
        switch(keycode) {
            case 87 :
            case 38 : {
                this.buttons.up = true;
                break;
            }
            
            case 83 :
            case 40 : {
                this.buttons.down = true;
                break;
            }

            case 65 :
            case 37 : {
                this.buttons.left = true;
                break;
            }

            case 68 :
            case 39 : {
                this.buttons.right = true;
                break;
            }

            default:
                break;
        }
    },

    stop: function(keycode) {
        switch(keycode) {
            case 87 :
            case 38 : {
                this.buttons.up = false;
                break;
            }
            case 83 :
            case 40 : {
                this.buttons.down = false;
                break;
            }

            case 65 :
            case 37 : {
                this.buttons.left = false;
                break;
            }
            case 68 :
            case 39 : {
                this.buttons.right = false;
                break;
            }

            default:
                break;
        }
    }
}