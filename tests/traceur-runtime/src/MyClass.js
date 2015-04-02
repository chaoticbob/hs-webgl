import App from "../../../src/hs/App.js";

import gl from "../../../src/hs/gl/gl.js";

export default class MyClass extends App {
    constructor() {
        super();
    }

    setup() {
        console.log("setup");

        this.tex = new gl.createTexture();
    }

    update() {
        //console.log("update: " + this.fps );
    }

    draw() {
        //console.log("draw");
    }
}

