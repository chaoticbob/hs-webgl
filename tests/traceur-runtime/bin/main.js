System.registerModule("../../../src/hs/gl/Context.js", [], function() {
  "use strict";
  var __moduleName = "../../../src/hs/gl/Context.js";
  var Context = function Context(app, canvas) {
    console.log("Context");
    this.mApp = app;
    this.mCanvas = canvas;
  };
  ($traceurRuntime.createClass)(Context, {}, {});
  var $__default = Context;
  return {get default() {
      return $__default;
    }};
});
System.registerModule("../../../src/hs/App.js", [], function() {
  "use strict";
  var __moduleName = "../../../src/hs/App.js";
  var GlContext = System.get("../../../src/hs/gl/Context.js").default;
  var sEventLoopStarted = false;
  var sApps = [];
  function hsStartAppEventLoop(app) {
    if (null != app) {
      sApps.push(app);
    }
    if (!sEventLoopStarted) {
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
  var App = function App(canvas) {
    console.log("App.ctor");
    this.mGlContext = new GlContext(this, canvas);
    this.startTime = null;
    this.currentTime = 0;
    this.elapsedSeconds = 0;
    this.elapsedFrames = 0;
    this.fps = 0;
  };
  ($traceurRuntime.createClass)(App, {
    setup: function() {},
    update: function() {},
    draw: function() {},
    callUpdate: function() {
      this.update();
    },
    callDraw: function() {
      this.draw();
    },
    stepEventLoop: function(timestamp) {
      if (null == this.startTime) {
        this.startTime = timestamp;
      }
      this.currentTime = timestamp;
      this.elapsedSeconds = (this.currentTime - this.startTime) / 1000.0;
      this.callUpdate();
      this.callDraw();
      ++this.elapsedFrames;
      if (this.elapsedSeconds > 0) {
        this.fps = this.elapsedFrames / this.elapsedSeconds;
      }
    },
    run: function() {
      console.log("run");
      this.setup();
      hsStartAppEventLoop(this);
    }
  }, {});
  var $__default = App;
  return {get default() {
      return $__default;
    }};
});
System.registerModule("../../../src/hs/gl/Object.js", [], function() {
  "use strict";
  var __moduleName = "../../../src/hs/gl/Object.js";
  var Context = System.get("../../../src/hs/gl/Context.js").default;
  var Object = function Object(context) {
    console.log("gl.Object");
    this.mContext = context;
  };
  ($traceurRuntime.createClass)(Object, {}, {});
  var $__default = Object;
  return {get default() {
      return $__default;
    }};
});
System.registerModule("../../../src/hs/gl/Fbo.js", [], function() {
  "use strict";
  var __moduleName = "../../../src/hs/gl/Fbo.js";
  var Object = System.get("../../../src/hs/gl/Object.js").default;
  var Fbo = function Fbo(context) {
    $traceurRuntime.superConstructor($Fbo).call(this, context);
    console.log("gl.Fbo");
  };
  var $Fbo = Fbo;
  ($traceurRuntime.createClass)(Fbo, {}, {}, Object);
  var $__default = Fbo;
  return {get default() {
      return $__default;
    }};
});
System.registerModule("../../../src/hs/gl/GlslProg.js", [], function() {
  "use strict";
  var __moduleName = "../../../src/hs/gl/GlslProg.js";
  var Object = System.get("../../../src/hs/gl/Object.js").default;
  var GlslProg = function GlslProg(context) {
    $traceurRuntime.superConstructor($GlslProg).call(this, context);
    console.log("gl.GlslProg");
  };
  var $GlslProg = GlslProg;
  ($traceurRuntime.createClass)(GlslProg, {}, {}, Object);
  var $__default = GlslProg;
  return {get default() {
      return $__default;
    }};
});
System.registerModule("../../../src/hs/gl/Shader.js", [], function() {
  "use strict";
  var __moduleName = "../../../src/hs/gl/Shader.js";
  var Object = System.get("../../../src/hs/gl/Object.js").default;
  var Shader = function Shader(context) {
    $traceurRuntime.superConstructor($Shader).call(this, context);
    console.log("gl.Shader");
  };
  var $Shader = Shader;
  ($traceurRuntime.createClass)(Shader, {}, {}, Object);
  var $__default = Shader;
  return {get default() {
      return $__default;
    }};
});
System.registerModule("../../../src/hs/gl/Texture.js", [], function() {
  "use strict";
  var __moduleName = "../../../src/hs/gl/Texture.js";
  var Object = System.get("../../../src/hs/gl/Object.js").default;
  var Texture = function Texture(context) {
    $traceurRuntime.superConstructor($Texture).call(this, context);
    console.log("gl.Texture");
  };
  var $Texture = Texture;
  ($traceurRuntime.createClass)(Texture, {}, {}, Object);
  var $__default = Texture;
  return {get default() {
      return $__default;
    }};
});
System.registerModule("../../../src/hs/gl/Vao.js", [], function() {
  "use strict";
  var __moduleName = "../../../src/hs/gl/Vao.js";
  var Object = System.get("../../../src/hs/gl/Object.js").default;
  var Vao = function Vao(context) {
    $traceurRuntime.superConstructor($Vao).call(this, context);
    console.log("gl.Vao");
  };
  var $Vao = Vao;
  ($traceurRuntime.createClass)(Vao, {}, {}, Object);
  var $__default = Vao;
  return {get default() {
      return $__default;
    }};
});
System.registerModule("../../../src/hs/gl/Vbo.js", [], function() {
  "use strict";
  var __moduleName = "../../../src/hs/gl/Vbo.js";
  var Object = System.get("../../../src/hs/gl/Object.js").default;
  var Vbo = function Vbo(context) {
    $traceurRuntime.superConstructor($Vbo).call(this, context);
    console.log("gl.Vbo");
  };
  var $Vbo = Vbo;
  ($traceurRuntime.createClass)(Vbo, {}, {}, Object);
  var $__default = Vbo;
  return {get default() {
      return $__default;
    }};
});
System.registerModule("../../../src/hs/gl/gl.js", [], function() {
  "use strict";
  var __moduleName = "../../../src/hs/gl/gl.js";
  var Context = System.get("../../../src/hs/gl/Context.js").default;
  var Fbo = System.get("../../../src/hs/gl/Fbo.js").default;
  var GlslProg = System.get("../../../src/hs/gl/GlslProg.js").default;
  var Shader = System.get("../../../src/hs/gl/Shader.js").default;
  var Texture = System.get("../../../src/hs/gl/Texture.js").default;
  var Vao = System.get("../../../src/hs/gl/Vao.js").default;
  var Vbo = System.get("../../../src/hs/gl/Vbo.js").default;
  var gl = {
    Fbo: Fbo,
    GlslProg: GlslProg,
    Texture: Texture,
    Shader: Shader,
    Vao: Vao,
    Vbo: Vbo,
    createTexture: function() {
      console.log("createTexture");
    }
  };
  var $__default = gl;
  return {get default() {
      return $__default;
    }};
});
System.registerModule("../src/MyClass.js", [], function() {
  "use strict";
  var __moduleName = "../src/MyClass.js";
  var App = System.get("../../../src/hs/App.js").default;
  var gl = System.get("../../../src/hs/gl/gl.js").default;
  var MyClass = function MyClass() {
    $traceurRuntime.superConstructor($MyClass).call(this);
  };
  var $MyClass = MyClass;
  ($traceurRuntime.createClass)(MyClass, {
    setup: function() {
      console.log("setup");
      this.tex = new gl.createTexture();
    },
    update: function() {},
    draw: function() {}
  }, {}, App);
  var $__default = MyClass;
  return {get default() {
      return $__default;
    }};
});
System.registerModule("../src/main.js", [], function() {
  "use strict";
  var __moduleName = "../src/main.js";
  var MyClass = System.get("../src/MyClass.js").default;
  (function() {
    var a = new MyClass();
    a.run();
  })();
  return {};
});
System.get("../src/main.js" + '');
