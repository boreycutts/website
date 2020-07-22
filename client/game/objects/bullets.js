const BULLET = {};

export const bullets = {
    active: [],
    isFiring: false,

    update: function() {
        if(this.isFiring) {
            this.active.push(BULLET);
        }
    }
}