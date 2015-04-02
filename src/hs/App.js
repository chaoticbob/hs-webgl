/* 
Copyright (c) 2015, Hai Nguyen
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided
that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and
the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and
the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.
*/

import GlContext from "./gl/Context.js";

var sEventLoopStarted = false;
var sApps = [];

function hsStartAppEventLoop(app) 
{
    if (null != app) {
        sApps.push(app); 
    }

    if (! sEventLoopStarted) {
        sEventLoopStarted = true;
        hsAppEventLoopStep();
    }
}

function hsAppEventLoopStep(timestamp) {
    for (var i = 0; i < sApps.length; ++i) {
        sApps[i].stepEventLoop(timestamp);
    }

    window.requestAnimationFrame(hsAppEventLoopStep);
}

/** \class App
 *
 */
export default class App {
    constructor(canvas) {
        console.log( "App.ctor" );
        
        this.mGlContext     = new GlContext(this,canvas);

        this.startTime      = null;
        this.currentTime    = 0;
        this.elapsedSeconds = 0;
        this.elapsedFrames  = 0;
        this.fps            = 0;
    }

    setup() {}
    update() {}
    draw() {}

    callUpdate() {
        this.update();
    }

    callDraw() {
        this.draw();
    }

    stepEventLoop(timestamp) {
        if (null == this.startTime) {
            this.startTime = timestamp;
        }

        this.currentTime = timestamp;
        this.elapsedSeconds = (this.currentTime - this.startTime)/1000.0;

        this.callUpdate();
        this.callDraw();

        ++this.elapsedFrames;

        if (this.elapsedSeconds > 0) {
            this.fps = this.elapsedFrames/this.elapsedSeconds;
        }
    }

    run() {
        console.log("run");
        this.setup();
        hsStartAppEventLoop(this);
    }
}

