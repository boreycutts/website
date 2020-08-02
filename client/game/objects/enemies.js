const SPAWN_DELAY = 10;

export const enemies = {
    active: [],
    spawnDelayCount: 0,
    playerInfo: {},

    draw: function(ctx) {
        for(const i in this.active) {
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';

            ctx.beginPath();
            ctx.moveTo(this.active[i].position.x + this.active[i].width, this.active[i].position.y);
            ctx.lineTo(this.active[i].position.x, this.active[i].position.y - this.active[i].height/2);
            ctx.lineTo(this.active[i].position.x + this.active[i].width, this.active[i].position.y - this.active[i].height);
            ctx.stroke();
        }
    },

    update: function() {
        this.spawnDelayCount++;

        if(this.spawnDelayCount >= SPAWN_DELAY) { 
            this.spawnDelayCount = 0;

            this.spawnEnemy();
        }

        this.moveEnemies();

    },

    spawnEnemy: function() {
        const newEnemy = {
            xspeed: 10,
            yspeed: 0,
            width: 50,
            height: 50,
            position: {}
        }
        newEnemy.position.x = window.innerWidth + 100;
        newEnemy.position.y = Math.floor(Math.random() * (window.innerHeight - 100 - 100)) + 100;
        newEnemy.moveUp = newEnemy.position.y < this.playerInfo.position.y;
        this.active.push(newEnemy);
    },

    moveEnemies: function() {
        for(const i in this.active) {
            const enemy = this.active[i];
            
            if(enemy.position.x <= -100) {
                this.active.splice(i, 1);
            }

            enemy.position.x -= enemy.xspeed;
            if(enemy.moveUp) {
                if(enemy.yspeed >= 5) {
                    enemy.moveUp = false;
                } else {
                    enemy.yspeed += 0.1;
                }
            } else {
                if(enemy.yspeed <= -5) {
                    enemy.moveUp = true;
                } else {
                    enemy.yspeed -= 0.1;
                }
            }

            enemy.position.y += enemy.yspeed;                
        }
    }
}