(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MainApp = undefined;

var _dec, _class; //setup component main page html

//import './three.module.js';

var _core = require('@angular/core');

require('rxjs/add/operator/map');

var _game = require('./services/game.service');

require('./three.min.js');

require('./jquery.min.js');

require('./jquery-ui.min.js');

require('./jquery.layout.min.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainApp = exports.MainApp = (_dec = (0, _core.Component)({
    selector: 'main-app',
    template: '\n    <gameeditor></gameeditor>\n    '
}), _dec(_class = function MainApp(gameservice) {
    _classCallCheck(this, MainApp);

    console.log(gameservice);
    this.gameservice = gameservice;
}) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], MainApp);

},{"./jquery-ui.min.js":1,"./jquery.layout.min.js":1,"./jquery.min.js":1,"./services/game.service":15,"./three.min.js":1,"@angular/core":"@angular/core","rxjs/add/operator/map":"rxjs/add/operator/map"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppModule = undefined;

var _dec, _class; //setup app

//import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//import { ActivatedRoute, RouterModule } from '@angular/router';


var _core = require('@angular/core');

var _forms = require('@angular/forms');

var _platformBrowser = require('@angular/platform-browser');

require('rxjs/add/operator/map');

var _ng2AceEditor = require('ng2-ace-editor');

var _app = require('./app.component');

var _assets = require('./components/assets.component');

var _scene = require('./components/scene.component');

var _objectprops = require('./components/objectprops.component');

var _gameeditor = require('./components/gameeditor.component');

var _codeeditor = require('./components/codeeditor.component');

var _scripteditorexplore = require('./components/scripteditorexplore.component');

var _scripteditorlayout = require('./components/scripteditorlayout.component');

var _scripteditormenu = require('./components/scripteditormenu.component');

var _editormenu = require('./components/editormenu.component');

var _navmenu = require('./components/navmenu.component');

var _game = require('./services/game.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//const routing = RouterModule.forRoot([
//{ path: '', component: Hello },
//{ path: 'ciao/:name', component: Ciao },
//]);

var AppModule = exports.AppModule = (_dec = (0, _core.NgModule)({
    imports: [_platformBrowser.BrowserModule //,
    //routing,
    ],
    declarations: [_app.MainApp, _ng2AceEditor.AceEditorDirective, _ng2AceEditor.AceEditorComponent, _gameeditor.GameEditor, _navmenu.NavMenu, _scripteditorlayout.ScriptEditorLayout, _scene.SceneList, _assets.AssetsList, _scripteditormenu.ScriptEditorMenu, _scripteditorexplore.ScriptEditorExplore, _codeeditor.CodeEditor, _objectprops.Objectprops, _editormenu.EditorMenu],
    providers: [_game.GameService],
    bootstrap: [_app.MainApp]
}), _dec(_class = function AppModule() {
    _classCallCheck(this, AppModule);
}) || _class);

},{"./app.component":2,"./components/assets.component":4,"./components/codeeditor.component":5,"./components/editormenu.component":6,"./components/gameeditor.component":7,"./components/navmenu.component":8,"./components/objectprops.component":9,"./components/scene.component":10,"./components/scripteditorexplore.component":11,"./components/scripteditorlayout.component":12,"./components/scripteditormenu.component":13,"./services/game.service":15,"@angular/core":"@angular/core","@angular/forms":"@angular/forms","@angular/platform-browser":"@angular/platform-browser","ng2-ace-editor":"ng2-ace-editor","rxjs/add/operator/map":"rxjs/add/operator/map"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AssetsList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AssetsList = exports.AssetsList = (_dec = (0, _core.Component)({
    selector: 'assets-list',
    template: '\n        Assets\n        <button (click)="refresh()">Refresh</button>\n        <!--\n        <div *ngIf="gameservice.scene">\n            <a *ngFor="let obj of gameservice.scene.children">\n                <label>{{obj.name}}</label>\n            </a>\n        </div>\n        -->\n    '
}), _dec(_class = function () {
    function AssetsList(gameservice) {
        _classCallCheck(this, AssetsList);

        //console.log(gameservice);
        this.gameservice = gameservice;
    }

    _createClass(AssetsList, [{
        key: 'refresh',
        value: function refresh() {
            console.log("refresh");
            console.log(this.gameservice);
            //console.log(this.gameservice.scene.children[0]);
        }
    }]);

    return AssetsList;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], AssetsList);

},{"../services/game.service":15,"@angular/core":"@angular/core"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CodeEditor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; //add "AceEditorDirective" to your modules list

var _ng2AceEditor = require('ng2-ace-editor');

var _core = require('@angular/core');

require('zone.js/dist/zone');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CodeEditor = exports.CodeEditor = (_dec = (0, _core.Component)({
    selector: 'codeeditor-component',
    template: '\n    <div ace-editor\n       [text]="text"\n       [options]="options"\n       [readOnly]="false"\n       [autoUpdateContent]="true"\n       (textChanged)="onChange($event)"\n       style="min-height: 200px; height:100%; width:100%; overflow: auto;margin: 0;padding : 0;"></div>\n    '
}), _dec(_class = function () {
    function CodeEditor() {
        _classCallCheck(this, CodeEditor);

        this.text = "Test";
        this.options = { printMargin: false };
    }
    //options:any = {maxLines: 1000, printMargin: false};


    _createClass(CodeEditor, [{
        key: 'onChange',
        value: function onChange(code) {
            console.log("new code", code);
        }
    }]);

    return CodeEditor;
}()) || _class);

},{"@angular/core":"@angular/core","ng2-ace-editor":"ng2-ace-editor","zone.js/dist/zone":"zone.js/dist/zone"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EditorMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

require('../three.min.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditorMenu = exports.EditorMenu = (_dec = (0, _core.Component)({
    selector: 'editormenu',
    styleUrls: ['./components/editormenu.component.css'],
    template: '\n    <ul>\n    <li class="dropdown" >\n    <a href="#" class="dropbtn">File</a>\n    <div class="dropdown-content" style="z-index:5">\n      <a href="#" (click)="scriptopenscene();">Open Scene</a>\n      <a href="#" (click)="scriptloadscene();">Load Scene</a>\n      <a href="#" (click)="scriptsavescene();">Save Scene</a>\n      <a href="#" (click)="scriptclearscene();">Clear Scene</a>\n      <a href="#" (click)="scriptdeletescene();">Delete Scene</a>\n    </div>\n    </li>\n    <li class="dropdown">\n    <a href="#" class="dropbtn">Edit</a>\n    <div class="dropdown-content" style="z-index:5">\n      <a href="#" (click)="scriptdeleteobject();">Delete Object</a>\n    </div>\n    </li>\n\n    <li class="dropdown">\n    <a href="#" class="dropbtn">Components</a>\n    <div class="dropdown-content" style="z-index:5">\n      <a href="#" (click)="addcube();" >Cube</a>\n      <a href="#" (click)="addspshere();">Sphere</a>\n      <a href="#" (click)="addsplane();">Plane</a>\n      <a href="#" (click)="addmesh();">Mesh</a>\n      <a href="#" (click)="addmaterial();">Material</a>\n    </div>\n    </li>\n    <li class="dropdown"><a href="#" class="dropbtn">Packages</a>\n    <div class="dropdown-content" style="z-index:5">\n      <a href="#">Scripts</a>\n      <a href="#">Mods</a>\n    </div>\n    </li>\n    <li class="dropdown"><a href="#" class="dropbtn">Help</a>\n    <div class="dropdown-content" style="z-index:5">\n      <a href="#">Docs</a>\n      <a href="#">About</a>\n    </div>\n    </li>\n    <li><a href="#" class="dropbtn" (click)="scriptbuild();">Build</a></li>\n    <li><a href="#" class="dropbtn" (click)="scriptdebug();">Debug</a></li>\n    <li><a href="#" class="dropbtn" (click)="scriptplay();">Play</a></li>\n    <li><a href="#" class="dropbtn" (click)="scriptstop();">Stop</a></li>\n    </ul>\n    '
}), _dec(_class = function () {
    function EditorMenu(gameservice) {
        _classCallCheck(this, EditorMenu);

        this.gameservice = gameservice;
    }

    _createClass(EditorMenu, [{
        key: 'scriptopenscene',
        value: function scriptopenscene() {
            console.log("scriptopenscene");
        }
    }, {
        key: 'scriptloadscene',
        value: function scriptloadscene() {
            console.log("scriptloadscene");
        }
    }, {
        key: 'scriptsavescene',
        value: function scriptsavescene() {
            console.log("scriptsavescene");
        }
    }, {
        key: 'scriptdeletescene',
        value: function scriptdeletescene() {
            console.log("scriptdeletescene");
        }
    }, {
        key: 'scriptclearscene',
        value: function scriptclearscene() {
            console.log("scriptclearscene");
            if (this.gameservice.scene != null) {
                var objscene = this.gameservice.scene;
                while (objscene.children.length) {
                    objscene.remove(objscene.children[0]);
                }
            }
        }
    }, {
        key: 'scriptdeleteobject',
        value: function scriptdeleteobject() {
            console.log('scriptdeleteobject');
        }
    }, {
        key: 'scriptbuild',
        value: function scriptbuild() {
            console.log('scriptbuild');
        }
    }, {
        key: 'scriptdebug',
        value: function scriptdebug() {
            console.log('scriptdebug');
        }
    }, {
        key: 'scriptplay',
        value: function scriptplay() {
            console.log('scriptplay');
        }
    }, {
        key: 'scriptstop',
        value: function scriptstop() {
            console.log('scriptstop');
        }
    }, {
        key: 'addcube',
        value: function addcube() {
            console.log("addcube");
            if (this.gameservice.scene != null) {
                console.log("cube");
                var geometry = new THREE.BoxGeometry(1, 1, 1);
                var material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
                var cube = new THREE.Mesh(geometry, material);
                cube.name = "cube";
                this.gameservice.scene.add(cube);
            }
        }
    }, {
        key: 'addspshere',
        value: function addspshere() {
            console.log("addspshere");
        }
    }, {
        key: 'addsplane',
        value: function addsplane() {
            console.log("addsplane");
        }
    }, {
        key: 'addmesh',
        value: function addmesh() {
            console.log("addmesh");
        }
    }, {
        key: 'addmaterial',
        value: function addmaterial() {
            console.log("addmaterial");
        }
    }]);

    return EditorMenu;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], EditorMenu);

},{"../services/game.service":15,"../three.min.js":1,"@angular/core":"@angular/core"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GameEditor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; //setup app

//import './three.module.js';

var _core = require('@angular/core');

require('rxjs/add/operator/map');

var _game = require('../services/game.service');

require('../three.min.js');

require('../jquery.min.js');

require('../jquery-ui.min.js');

require('../jquery.layout.min.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameEditor = exports.GameEditor = (_dec = (0, _core.Component)({
    selector: 'gameeditor',
    template: '\n    <editormenu></editormenu>\n    <div id="container" style="height:100%;">\n        <div class="ui-layout-center" style="margin: 0;padding : 0;">\n            <canvas id="renderCanvas"></canvas>\n        </div>\n        <div class="ui-layout-north">\n\n        </div>\n        <div class="ui-layout-south" style="margin: 0;padding : 0;">\n            <scripteditorlayout></scripteditorlayout>\n        </div>\n        <div class="ui-layout-east">\n            <scene-list></scene-list>\n            <objectprops></objectprops>\n        </div>\n        <div class="ui-layout-west">\n            <assets-list></assets-list>\n        </div>\n    </div>\n    '
}), _dec(_class = function () {
    function GameEditor(gameservice) {
        _classCallCheck(this, GameEditor);

        this.gameservice = gameservice;
        //var self = this;
        //window.addEventListener('DOMContentLoaded', ()=>{
        //console.log("loaded?");
        //self.init();
        //});
    }

    _createClass(GameEditor, [{
        key: 'ngOnInit',
        value: function ngOnInit() {
            console.log("init layout!");

            this.setup_layout();
            this.init();
        }
    }, {
        key: 'setup_layout',
        value: function setup_layout() {
            $('#container').layout({ resizable: true });
            var layout = $('#container').layout();
            layout.sizePane("south", 200);
            layout.toggle("north");
        }
    }, {
        key: 'init',
        value: function init() {
            var canvas = document.getElementById("renderCanvas");

            var scene = new THREE.Scene();
            var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

            //var renderer = new THREE.WebGLRenderer();
            var renderer = new THREE.WebGLRenderer({ canvas: canvas });
            //renderer.setSize( window.innerWidth, window.innerHeight );
            renderer.setSize(800, 600);
            //document.body.appendChild( renderer.domElement );

            var geometry = new THREE.BoxGeometry(1, 1, 1);
            var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            var cube = new THREE.Mesh(geometry, material);
            cube.name = "cube";
            scene.add(cube);
            //cube = new THREE.Mesh( geometry, material );
            //cube.name = "cube";
            //scene.add( cube );

            this.gameservice.scene = scene;

            camera.position.z = 5;

            var render = function render() {
                requestAnimationFrame(render);

                cube.rotation.x += 0.1;
                cube.rotation.y += 0.1;

                renderer.render(scene, camera);
            };

            render();
        }
    }]);

    return GameEditor;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], GameEditor);

},{"../jquery-ui.min.js":1,"../jquery.layout.min.js":1,"../jquery.min.js":1,"../services/game.service":15,"../three.min.js":1,"@angular/core":"@angular/core","rxjs/add/operator/map":"rxjs/add/operator/map"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

require('../three.min.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavMenu = exports.NavMenu = (_dec = (0, _core.Component)({
    selector: 'navmenu',
    styleUrls: ['./components/navmenu.component.css'],
    template: '\n        <ul>\n        <li class="dropdown" >\n        <a href="#" class="dropbtn">File</a>\n        <div class="dropdown-content" style="z-index:5">\n          <a href="#">Open Scene</a>\n          <a href="#">Load Scene</a>\n          <a href="#">Save Scene</a>\n          <a href="#"  (click)="clearscene();">Clear Scene</a>\n          <a href="#">Delete Scene</a>\n        </div>\n        </li>\n        <li class="dropdown">\n        <a href="#" class="dropbtn">Edit</a>\n        <div class="dropdown-content" style="z-index:5">\n          <a href="#">Delete Object</a>\n        </div>\n        </li>\n\n        <li class="dropdown">\n        <a href="#" class="dropbtn">Components</a>\n        <div class="dropdown-content" style="z-index:5">\n          <a href="#" (click)="addcube();" >Cube</a>\n          <a href="#">Sphere</a>\n          <a href="#">Plane</a>\n          <a href="#">Mesh</a>\n          <a href="#">Material</a>\n        </div>\n        </li>\n        <li class="dropdown"><a href="#" class="dropbtn">Packages</a>\n        <div class="dropdown-content" style="z-index:5">\n          <a href="#">Scripts</a>\n          <a href="#">Mods</a>\n        </div>\n        </li>\n        <li class="dropdown"><a href="#" class="dropbtn">Help</a>\n        <div class="dropdown-content" style="z-index:5">\n          <a href="#">Docs</a>\n          <a href="#">About</a>\n        </div>\n        </li>\n        <li><a href="#" class="dropbtn">Build</a></li>\n        <li><a href="#" class="dropbtn">Debug</a></li>\n        <li><a href="#" class="dropbtn">Play</a></li>\n        <li><a href="#" class="dropbtn">Stop</a></li>\n        </ul>\n    '
}), _dec(_class = function () {
    function NavMenu(gameservice) {
        _classCallCheck(this, NavMenu);

        this.gameservice = gameservice;
    }

    _createClass(NavMenu, [{
        key: 'clearscene',
        value: function clearscene() {
            if (this.gameservice.scene != null) {
                var objscene = this.gameservice.scene;
                while (objscene.children.length) {
                    objscene.remove(objscene.children[0]);
                }
            }
        }
    }, {
        key: 'addcube',
        value: function addcube() {
            if (this.gameservice.scene != null) {
                console.log("cube");
                var geometry = new THREE.BoxGeometry(1, 1, 1);
                var material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
                var cube = new THREE.Mesh(geometry, material);
                cube.name = "cube";
                this.gameservice.scene.add(cube);
            }
        }
    }]);

    return NavMenu;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], NavMenu);

},{"../services/game.service":15,"../three.min.js":1,"@angular/core":"@angular/core"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Objectprops = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Objectprops = exports.Objectprops = (_dec = (0, _core.Component)({
    selector: 'objectprops',
    template: '\n        <div style="height:50%;width:100%">\n            Object\n            <button (click)="refresh()">Refresh</button>\n        </div>\n    '
}), _dec(_class = function () {
    function Objectprops(gameservice) {
        _classCallCheck(this, Objectprops);

        //console.log(gameservice);
        this.gameservice = gameservice;
    }

    _createClass(Objectprops, [{
        key: 'refresh',
        value: function refresh() {
            //console.log("refresh");
            //console.log(this.gameservice);
            //console.log(this.gameservice.scene.children[0]);
        }
    }]);

    return Objectprops;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], Objectprops);

},{"../services/game.service":15,"@angular/core":"@angular/core"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SceneList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SceneList = exports.SceneList = (_dec = (0, _core.Component)({
    selector: 'scene-list',
    template: '\n        <div style="height:50%;width:100%">\n            Scene\n            <button (click)="refresh()">Refresh</button>\n            <div *ngIf="gameservice.scene">\n                <ul>\n                <li *ngFor="let obj of gameservice.scene.children">\n                    <label (click)="selectobject(obj)">{{obj.name}}</label>\n                </li>\n                </ul>\n            </div>\n        </div>\n    '
}), _dec(_class = function () {
    function SceneList(gameservice) {
        _classCallCheck(this, SceneList);

        //console.log(gameservice);
        this.gameservice = gameservice;
    }

    _createClass(SceneList, [{
        key: 'selectobject',
        value: function selectobject(_obj) {
            console.log("scene object selected:");
            console.log(_obj);
        }
    }, {
        key: 'refresh',
        value: function refresh() {
            console.log("refresh");
            console.log(this.gameservice);
            console.log(this.gameservice.scene.children[0]);
        }
    }]);

    return SceneList;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], SceneList);

},{"../services/game.service":15,"@angular/core":"@angular/core"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ScriptEditorExplore = undefined;

var _dec, _class;

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScriptEditorExplore = exports.ScriptEditorExplore = (_dec = (0, _core.Component)({
    selector: 'scripteditorexplore',
    template: '\n        <div style="width:100%;">\n        Panel directory folder\n        </div>\n    '
}), _dec(_class = function ScriptEditorExplore() {
    _classCallCheck(this, ScriptEditorExplore);
}) || _class);

},{"@angular/core":"@angular/core"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ScriptEditorLayout = undefined;

var _dec, _class;

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScriptEditorLayout = exports.ScriptEditorLayout = (_dec = (0, _core.Component)({
    selector: 'scripteditorlayout',
    template: '\n        <div style="height:100%;width:100%;">\n            <div style="width:20%;height:100%;float:left;margin:0;padding:0;">\n                <scripteditormenu></scripteditormenu>\n                <scripteditorexplore></scripteditorexplore>\n            </div>\n            <div style="width:80%;height:100%;float:left;">\n            <codeeditor-component style="margin:0;padding:0;"></codeeditor-component>\n            </div>\n        </div>\n    '
}), _dec(_class = function ScriptEditorLayout() {
    _classCallCheck(this, ScriptEditorLayout);
}) || _class);

},{"@angular/core":"@angular/core"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ScriptEditorMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScriptEditorMenu = exports.ScriptEditorMenu = (_dec = (0, _core.Component)({
    selector: 'scripteditormenu',
    template: '\n        Action\n        <button (click)="ScriptReload();">Reload</button>\n        <button (click)="ScriptSave();">Save</button>\n        <button (click)="ScriptRun();">Run</button>\n        <button (click)="ScriptCreate();">Create</button>\n        <button (click)="ScriptDelete();">Delete</button>\n    '
}), _dec(_class = function () {
    function ScriptEditorMenu() {
        _classCallCheck(this, ScriptEditorMenu);
    }

    _createClass(ScriptEditorMenu, [{
        key: 'ScriptReload',
        value: function ScriptReload() {
            console.log('Reload');
        }
    }, {
        key: 'ScriptSave',
        value: function ScriptSave() {
            console.log('Save');
        }
    }, {
        key: 'ScriptRun',
        value: function ScriptRun() {
            console.log('Run');
        }
    }, {
        key: 'ScriptDelete',
        value: function ScriptDelete() {
            console.log('Delete');
        }
    }, {
        key: 'ScriptCreate',
        value: function ScriptCreate() {
            console.log('Create');
        }
    }]);

    return ScriptEditorMenu;
}()) || _class);

},{"@angular/core":"@angular/core"}],14:[function(require,module,exports){
'use strict';

require('babel-polyfill');

require('zone.js/dist/zone');

var _platformBrowserDynamic = require('@angular/platform-browser-dynamic');

var _app = require('./app.module');

//main entry and setup boot

(0, _platformBrowserDynamic.platformBrowserDynamic)().bootstrapModule(_app.AppModule);

},{"./app.module":3,"@angular/platform-browser-dynamic":"@angular/platform-browser-dynamic","babel-polyfill":"babel-polyfill","zone.js/dist/zone":"zone.js/dist/zone"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GameService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameService = exports.GameService = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
    function GameService() {
        _classCallCheck(this, GameService);

        this.scene = null;
    }

    _createClass(GameService, [{
        key: 'setScene',
        value: function setScene(_scene) {
            this.scene = _scene;
        }
    }, {
        key: 'getScene',
        value: function getScene() {
            return this.scene;
        }
    }]);

    return GameService;
}()) || _class);

},{"@angular/core":"@angular/core"}]},{},[14])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwic3JjXFxhcHAuY29tcG9uZW50LmpzIiwic3JjXFxhcHAubW9kdWxlLmpzIiwic3JjXFxjb21wb25lbnRzXFxhc3NldHMuY29tcG9uZW50LmpzIiwic3JjXFxjb21wb25lbnRzXFxjb2RlZWRpdG9yLmNvbXBvbmVudC5qcyIsInNyY1xcY29tcG9uZW50c1xcZWRpdG9ybWVudS5jb21wb25lbnQuanMiLCJzcmNcXGNvbXBvbmVudHNcXGdhbWVlZGl0b3IuY29tcG9uZW50LmpzIiwic3JjXFxjb21wb25lbnRzXFxuYXZtZW51LmNvbXBvbmVudC5qcyIsInNyY1xcY29tcG9uZW50c1xcb2JqZWN0cHJvcHMuY29tcG9uZW50LmpzIiwic3JjXFxjb21wb25lbnRzXFxzY2VuZS5jb21wb25lbnQuanMiLCJzcmNcXGNvbXBvbmVudHNcXHNjcmlwdGVkaXRvcmV4cGxvcmUuY29tcG9uZW50LmpzIiwic3JjXFxjb21wb25lbnRzXFxzY3JpcHRlZGl0b3JsYXlvdXQuY29tcG9uZW50LmpzIiwic3JjXFxjb21wb25lbnRzXFxzY3JpcHRlZGl0b3JtZW51LmNvbXBvbmVudC5qcyIsInNyY1xcaW5kZXguanMiLCJzcmNcXHNlcnZpY2VzXFxnYW1lLnNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7Ozs7Ozs7O2tCQ0FBOztBQVFBOztBQU5BOztBQUNBOztBQUVBOztBQUVBOztBQUdBOztBQUNBOztBQUNBOzs7O0lBUWEsTyxXQUFBLE8sV0FOWixxQkFBVTtBQUNQLGNBQVUsVUFESDtBQUVQO0FBRk8sQ0FBVixDLGdCQU9HLGlCQUFZLFdBQVosRUFBb0M7QUFBQTs7QUFDaEMsWUFBUSxHQUFSLENBQVksV0FBWjtBQUNBLFNBQUssV0FBTCxHQUFtQixXQUFuQjtBQUNILEM7aUVBSlEsTzs7Ozs7Ozs7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Um9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIiwiLy9zZXR1cCBjb21wb25lbnQgbWFpbiBwYWdlIGh0bWxcclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIElucHV0LCBBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuaW1wb3J0IHtHYW1lU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9nYW1lLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0ICcuL3RocmVlLm1pbi5qcyc7XHJcbi8vaW1wb3J0ICcuL3RocmVlLm1vZHVsZS5qcyc7XHJcblxyXG5pbXBvcnQgJy4vanF1ZXJ5Lm1pbi5qcyc7XHJcbmltcG9ydCAnLi9qcXVlcnktdWkubWluLmpzJztcclxuaW1wb3J0ICcuL2pxdWVyeS5sYXlvdXQubWluLmpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtYWluLWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGdhbWVlZGl0b3I+PC9nYW1lZWRpdG9yPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbkFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lc2VydmljZTpHYW1lU2VydmljZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZ2FtZXNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuZ2FtZXNlcnZpY2UgPSBnYW1lc2VydmljZTtcclxuICAgIH1cclxufVxyXG4iLCIvL3NldHVwIGFwcFxyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgSW5wdXQsIEF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuLy9pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuLy9pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuaW1wb3J0IHtBY2VFZGl0b3JEaXJlY3RpdmUsIEFjZUVkaXRvckNvbXBvbmVudH0gZnJvbSAnbmcyLWFjZS1lZGl0b3InO1xyXG5cclxuaW1wb3J0IHsgTWFpbkFwcCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQge0Fzc2V0c0xpc3R9IGZyb20gJy4vY29tcG9uZW50cy9hc3NldHMuY29tcG9uZW50JztcclxuaW1wb3J0IHtTY2VuZUxpc3R9IGZyb20gJy4vY29tcG9uZW50cy9zY2VuZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge09iamVjdHByb3BzfSBmcm9tICcuL2NvbXBvbmVudHMvb2JqZWN0cHJvcHMuY29tcG9uZW50JztcclxuaW1wb3J0IHtHYW1lRWRpdG9yfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FtZWVkaXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NvZGVFZGl0b3J9IGZyb20gJy4vY29tcG9uZW50cy9jb2RlZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2NyaXB0RWRpdG9yRXhwbG9yZX0gZnJvbSAnLi9jb21wb25lbnRzL3NjcmlwdGVkaXRvcmV4cGxvcmUuY29tcG9uZW50JztcclxuaW1wb3J0IHtTY3JpcHRFZGl0b3JMYXlvdXR9IGZyb20gJy4vY29tcG9uZW50cy9zY3JpcHRlZGl0b3JsYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHtTY3JpcHRFZGl0b3JNZW51fSBmcm9tICcuL2NvbXBvbmVudHMvc2NyaXB0ZWRpdG9ybWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0VkaXRvck1lbnV9IGZyb20gJy4vY29tcG9uZW50cy9lZGl0b3JtZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TmF2TWVudX0gZnJvbSAnLi9jb21wb25lbnRzL25hdm1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHtHYW1lU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9nYW1lLnNlcnZpY2UnO1xyXG5cclxuLy9jb25zdCByb3V0aW5nID0gUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gICAgLy97IHBhdGg6ICcnLCBjb21wb25lbnQ6IEhlbGxvIH0sXHJcbiAgICAvL3sgcGF0aDogJ2NpYW8vOm5hbWUnLCBjb21wb25lbnQ6IENpYW8gfSxcclxuLy9dKTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZS8vLFxyXG4gICAgICAgIC8vcm91dGluZyxcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBNYWluQXBwLFxyXG4gICAgICAgIEFjZUVkaXRvckRpcmVjdGl2ZSxcclxuICAgICAgICBBY2VFZGl0b3JDb21wb25lbnQsXHJcbiAgICAgICAgR2FtZUVkaXRvcixcclxuICAgICAgICBOYXZNZW51LFxyXG4gICAgICAgIFNjcmlwdEVkaXRvckxheW91dCxcclxuICAgICAgICBTY2VuZUxpc3QsXHJcbiAgICAgICAgQXNzZXRzTGlzdCxcclxuICAgICAgICBTY3JpcHRFZGl0b3JNZW51LFxyXG4gICAgICAgIFNjcmlwdEVkaXRvckV4cGxvcmUsXHJcbiAgICAgICAgQ29kZUVkaXRvcixcclxuICAgICAgICBPYmplY3Rwcm9wcyxcclxuICAgICAgICBFZGl0b3JNZW51XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgR2FtZVNlcnZpY2VcclxuICAgIF0sXHJcbiAgICBib290c3RyYXA6IFtNYWluQXBwXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtHYW1lU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvZ2FtZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhc3NldHMtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIEFzc2V0c1xyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInJlZnJlc2goKVwiPlJlZnJlc2g8L2J1dHRvbj5cclxuICAgICAgICA8IS0tXHJcbiAgICAgICAgPGRpdiAqbmdJZj1cImdhbWVzZXJ2aWNlLnNjZW5lXCI+XHJcbiAgICAgICAgICAgIDxhICpuZ0Zvcj1cImxldCBvYmogb2YgZ2FtZXNlcnZpY2Uuc2NlbmUuY2hpbGRyZW5cIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD57e29iai5uYW1lfX08L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgLS0+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBc3NldHNMaXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWVzZXJ2aWNlOkdhbWVTZXJ2aWNlKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGdhbWVzZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmdhbWVzZXJ2aWNlID0gZ2FtZXNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVmcmVzaFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdhbWVzZXJ2aWNlKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZ2FtZXNlcnZpY2Uuc2NlbmUuY2hpbGRyZW5bMF0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vYWRkIFwiQWNlRWRpdG9yRGlyZWN0aXZlXCIgdG8geW91ciBtb2R1bGVzIGxpc3RcclxuXHJcbmltcG9ydCB7IEFjZUVkaXRvckRpcmVjdGl2ZSB9IGZyb20gJ25nMi1hY2UtZWRpdG9yJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAnem9uZS5qcy9kaXN0L3pvbmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NvZGVlZGl0b3ItY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGFjZS1lZGl0b3JcclxuICAgICAgIFt0ZXh0XT1cInRleHRcIlxyXG4gICAgICAgW29wdGlvbnNdPVwib3B0aW9uc1wiXHJcbiAgICAgICBbcmVhZE9ubHldPVwiZmFsc2VcIlxyXG4gICAgICAgW2F1dG9VcGRhdGVDb250ZW50XT1cInRydWVcIlxyXG4gICAgICAgKHRleHRDaGFuZ2VkKT1cIm9uQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgc3R5bGU9XCJtaW4taGVpZ2h0OiAyMDBweDsgaGVpZ2h0OjEwMCU7IHdpZHRoOjEwMCU7IG92ZXJmbG93OiBhdXRvO21hcmdpbjogMDtwYWRkaW5nIDogMDtcIj48L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIENvZGVFZGl0b3Ige1xyXG4gICAgdGV4dDpzdHJpbmcgPSBcIlRlc3RcIjtcclxuICAgIC8vb3B0aW9uczphbnkgPSB7bWF4TGluZXM6IDEwMDAsIHByaW50TWFyZ2luOiBmYWxzZX07XHJcbiAgICBvcHRpb25zOmFueSA9IHsgcHJpbnRNYXJnaW46IGZhbHNlfTtcclxuXHJcbiAgICBvbkNoYW5nZShjb2RlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXcgY29kZVwiLCBjb2RlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtHYW1lU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvZ2FtZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCAnLi4vdGhyZWUubWluLmpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdlZGl0b3JtZW51JyxcclxuICAgIHN0eWxlVXJsczogIFsnLi9jb21wb25lbnRzL2VkaXRvcm1lbnUuY29tcG9uZW50LmNzcyddLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDx1bD5cclxuICAgIDxsaSBjbGFzcz1cImRyb3Bkb3duXCIgPlxyXG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3BidG5cIj5GaWxlPC9hPlxyXG4gICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnRcIiBzdHlsZT1cInotaW5kZXg6NVwiPlxyXG4gICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJzY3JpcHRvcGVuc2NlbmUoKTtcIj5PcGVuIFNjZW5lPC9hPlxyXG4gICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJzY3JpcHRsb2Fkc2NlbmUoKTtcIj5Mb2FkIFNjZW5lPC9hPlxyXG4gICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJzY3JpcHRzYXZlc2NlbmUoKTtcIj5TYXZlIFNjZW5lPC9hPlxyXG4gICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJzY3JpcHRjbGVhcnNjZW5lKCk7XCI+Q2xlYXIgU2NlbmU8L2E+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCIgKGNsaWNrKT1cInNjcmlwdGRlbGV0ZXNjZW5lKCk7XCI+RGVsZXRlIFNjZW5lPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGNsYXNzPVwiZHJvcGRvd25cIj5cclxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wYnRuXCI+RWRpdDwvYT5cclxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCIgc3R5bGU9XCJ6LWluZGV4OjVcIj5cclxuICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwic2NyaXB0ZGVsZXRlb2JqZWN0KCk7XCI+RGVsZXRlIE9iamVjdDwvYT5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuXHJcbiAgICA8bGkgY2xhc3M9XCJkcm9wZG93blwiPlxyXG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3BidG5cIj5Db21wb25lbnRzPC9hPlxyXG4gICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnRcIiBzdHlsZT1cInotaW5kZXg6NVwiPlxyXG4gICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJhZGRjdWJlKCk7XCIgPkN1YmU8L2E+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCIgKGNsaWNrKT1cImFkZHNwc2hlcmUoKTtcIj5TcGhlcmU8L2E+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCIgKGNsaWNrKT1cImFkZHNwbGFuZSgpO1wiPlBsYW5lPC9hPlxyXG4gICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJhZGRtZXNoKCk7XCI+TWVzaDwvYT5cclxuICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwiYWRkbWF0ZXJpYWwoKTtcIj5NYXRlcmlhbDwvYT5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICAgIDxsaSBjbGFzcz1cImRyb3Bkb3duXCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3BidG5cIj5QYWNrYWdlczwvYT5cclxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCIgc3R5bGU9XCJ6LWluZGV4OjVcIj5cclxuICAgICAgPGEgaHJlZj1cIiNcIj5TY3JpcHRzPC9hPlxyXG4gICAgICA8YSBocmVmPVwiI1wiPk1vZHM8L2E+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgICA8bGkgY2xhc3M9XCJkcm9wZG93blwiPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wYnRuXCI+SGVscDwvYT5cclxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCIgc3R5bGU9XCJ6LWluZGV4OjVcIj5cclxuICAgICAgPGEgaHJlZj1cIiNcIj5Eb2NzPC9hPlxyXG4gICAgICA8YSBocmVmPVwiI1wiPkFib3V0PC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wYnRuXCIgKGNsaWNrKT1cInNjcmlwdGJ1aWxkKCk7XCI+QnVpbGQ8L2E+PC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGJ0blwiIChjbGljayk9XCJzY3JpcHRkZWJ1ZygpO1wiPkRlYnVnPC9hPjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3BidG5cIiAoY2xpY2spPVwic2NyaXB0cGxheSgpO1wiPlBsYXk8L2E+PC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGJ0blwiIChjbGljayk9XCJzY3JpcHRzdG9wKCk7XCI+U3RvcDwvYT48L2xpPlxyXG4gICAgPC91bD5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRvck1lbnUge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZXNlcnZpY2U6R2FtZVNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuZ2FtZXNlcnZpY2UgPSBnYW1lc2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JpcHRvcGVuc2NlbmUoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNjcmlwdG9wZW5zY2VuZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JpcHRsb2Fkc2NlbmUoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNjcmlwdGxvYWRzY2VuZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JpcHRzYXZlc2NlbmUoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNjcmlwdHNhdmVzY2VuZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JpcHRkZWxldGVzY2VuZSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2NyaXB0ZGVsZXRlc2NlbmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2NyaXB0Y2xlYXJzY2VuZSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2NyaXB0Y2xlYXJzY2VuZVwiKTtcclxuICAgICAgICBpZih0aGlzLmdhbWVzZXJ2aWNlLnNjZW5lICE9bnVsbCl7XHJcbiAgICAgICAgICAgIHZhciBvYmpzY2VuZSA9IHRoaXMuZ2FtZXNlcnZpY2Uuc2NlbmU7XHJcbiAgICAgICAgICAgIHdoaWxlIChvYmpzY2VuZS5jaGlsZHJlbi5sZW5ndGgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9ianNjZW5lLnJlbW92ZShvYmpzY2VuZS5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2NyaXB0ZGVsZXRlb2JqZWN0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NjcmlwdGRlbGV0ZW9iamVjdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcmlwdGJ1aWxkKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NjcmlwdGJ1aWxkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2NyaXB0ZGVidWcoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2NyaXB0ZGVidWcnKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JpcHRwbGF5KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NjcmlwdHBsYXknKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JpcHRzdG9wKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NjcmlwdHN0b3AnKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgYWRkY3ViZSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkY3ViZVwiKTtcclxuICAgICAgICBpZih0aGlzLmdhbWVzZXJ2aWNlLnNjZW5lICE9bnVsbCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3ViZVwiKTtcclxuICAgICAgICAgICAgdmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAxLCAxLCAxICk7XHJcbiAgICBcdFx0dmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAweDAwZmZmZiB9ICk7XHJcbiAgICBcdFx0dmFyIGN1YmUgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcbiAgICAgICAgICAgIGN1YmUubmFtZSA9IFwiY3ViZVwiO1xyXG4gICAgXHRcdHRoaXMuZ2FtZXNlcnZpY2Uuc2NlbmUuYWRkKCBjdWJlICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZHNwc2hlcmUoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFkZHNwc2hlcmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkc3BsYW5lKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhZGRzcGxhbmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkbWVzaCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkbWVzaFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRtYXRlcmlhbCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkbWF0ZXJpYWxcIik7XHJcbiAgICB9XHJcbn1cclxuIiwiLy9zZXR1cCBhcHBcclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIElucHV0LCBBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuaW1wb3J0IHtHYW1lU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvZ2FtZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCAnLi4vdGhyZWUubWluLmpzJztcclxuLy9pbXBvcnQgJy4vdGhyZWUubW9kdWxlLmpzJztcclxuXHJcbmltcG9ydCAnLi4vanF1ZXJ5Lm1pbi5qcyc7XHJcbmltcG9ydCAnLi4vanF1ZXJ5LXVpLm1pbi5qcyc7XHJcbmltcG9ydCAnLi4vanF1ZXJ5LmxheW91dC5taW4uanMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2dhbWVlZGl0b3InLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxlZGl0b3JtZW51PjwvZWRpdG9ybWVudT5cclxuICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiBzdHlsZT1cImhlaWdodDoxMDAlO1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1sYXlvdXQtY2VudGVyXCIgc3R5bGU9XCJtYXJnaW46IDA7cGFkZGluZyA6IDA7XCI+XHJcbiAgICAgICAgICAgIDxjYW52YXMgaWQ9XCJyZW5kZXJDYW52YXNcIj48L2NhbnZhcz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidWktbGF5b3V0LW5vcnRoXCI+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1sYXlvdXQtc291dGhcIiBzdHlsZT1cIm1hcmdpbjogMDtwYWRkaW5nIDogMDtcIj5cclxuICAgICAgICAgICAgPHNjcmlwdGVkaXRvcmxheW91dD48L3NjcmlwdGVkaXRvcmxheW91dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidWktbGF5b3V0LWVhc3RcIj5cclxuICAgICAgICAgICAgPHNjZW5lLWxpc3Q+PC9zY2VuZS1saXN0PlxyXG4gICAgICAgICAgICA8b2JqZWN0cHJvcHM+PC9vYmplY3Rwcm9wcz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidWktbGF5b3V0LXdlc3RcIj5cclxuICAgICAgICAgICAgPGFzc2V0cy1saXN0PjwvYXNzZXRzLWxpc3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbWVFZGl0b3IgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZXNlcnZpY2U6R2FtZVNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuZ2FtZXNlcnZpY2UgPSBnYW1lc2VydmljZTtcclxuICAgICAgICAvL3ZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCk9PntcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImxvYWRlZD9cIik7XHJcbiAgICAgICAgICAgIC8vc2VsZi5pbml0KCk7XHJcbiAgICAgICAgLy99KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluaXQgbGF5b3V0IVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR1cF9sYXlvdXQoKTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cF9sYXlvdXQoKXtcclxuICAgICAgICAkKCcjY29udGFpbmVyJykubGF5b3V0KHtyZXNpemFibGU6dHJ1ZX0pO1xyXG4gICAgICAgIHZhciBsYXlvdXQgPSAkKCcjY29udGFpbmVyJykubGF5b3V0KCk7XHJcbiAgICAgICAgbGF5b3V0LnNpemVQYW5lKFwic291dGhcIiwgMjAwKTtcclxuICAgICAgICBsYXlvdXQudG9nZ2xlKFwibm9ydGhcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbmRlckNhbnZhc1wiKTtcclxuXHJcbiAgICAgICAgdmFyIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblx0XHR2YXIgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCA3NSwgd2luZG93LmlubmVyV2lkdGgvd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDAgKTtcclxuXHJcblx0XHQvL3ZhciByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XHJcbiAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBjYW52YXM6IGNhbnZhcyB9KTtcclxuXHRcdC8vcmVuZGVyZXIuc2V0U2l6ZSggd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCApO1xyXG4gICAgICAgIHJlbmRlcmVyLnNldFNpemUoIDgwMCwgNjAwICk7XHJcblx0XHQvL2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIHJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcclxuXHJcblx0XHR2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDEsIDEsIDEgKTtcclxuXHRcdHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogMHgwMGZmMDAgfSApO1xyXG5cdFx0dmFyIGN1YmUgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcbiAgICAgICAgY3ViZS5uYW1lID0gXCJjdWJlXCI7XHJcblx0XHRzY2VuZS5hZGQoIGN1YmUgKTtcclxuICAgICAgICAvL2N1YmUgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcbiAgICAgICAgLy9jdWJlLm5hbWUgPSBcImN1YmVcIjtcclxuICAgICAgICAvL3NjZW5lLmFkZCggY3ViZSApO1xyXG5cclxuICAgICAgICB0aGlzLmdhbWVzZXJ2aWNlLnNjZW5lID0gc2NlbmU7XHJcblxyXG5cdFx0Y2FtZXJhLnBvc2l0aW9uLnogPSA1O1xyXG5cclxuXHRcdHZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSggcmVuZGVyICk7XHJcblxyXG5cdFx0XHRjdWJlLnJvdGF0aW9uLnggKz0gMC4xO1xyXG5cdFx0XHRjdWJlLnJvdGF0aW9uLnkgKz0gMC4xO1xyXG5cclxuXHRcdFx0cmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRyZW5kZXIoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtHYW1lU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvZ2FtZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCAnLi4vdGhyZWUubWluLmpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduYXZtZW51JyxcclxuICAgIHN0eWxlVXJsczogIFsnLi9jb21wb25lbnRzL25hdm1lbnUuY29tcG9uZW50LmNzcyddLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd25cIiA+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3BidG5cIj5GaWxlPC9hPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCIgc3R5bGU9XCJ6LWluZGV4OjVcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+T3BlbiBTY2VuZTwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+TG9hZCBTY2VuZTwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+U2F2ZSBTY2VuZTwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgIChjbGljayk9XCJjbGVhcnNjZW5lKCk7XCI+Q2xlYXIgU2NlbmU8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkRlbGV0ZSBTY2VuZTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3BidG5cIj5FZGl0PC9hPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCIgc3R5bGU9XCJ6LWluZGV4OjVcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RGVsZXRlIE9iamVjdDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICA8bGkgY2xhc3M9XCJkcm9wZG93blwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wYnRuXCI+Q29tcG9uZW50czwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiIHN0eWxlPVwiei1pbmRleDo1XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJhZGRjdWJlKCk7XCIgPkN1YmU8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlNwaGVyZTwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+UGxhbmU8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPk1lc2g8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPk1hdGVyaWFsPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd25cIj48YSBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGJ0blwiPlBhY2thZ2VzPC9hPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCIgc3R5bGU9XCJ6LWluZGV4OjVcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+U2NyaXB0czwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+TW9kczwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cImRyb3Bkb3duXCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3BidG5cIj5IZWxwPC9hPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCIgc3R5bGU9XCJ6LWluZGV4OjVcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RG9jczwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+QWJvdXQ8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3BidG5cIj5CdWlsZDwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGJ0blwiPkRlYnVnPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wYnRuXCI+UGxheTwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGJ0blwiPlN0b3A8L2E+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2TWVudSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lc2VydmljZTpHYW1lU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy5nYW1lc2VydmljZSA9IGdhbWVzZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyc2NlbmUoKXtcclxuICAgICAgICBpZih0aGlzLmdhbWVzZXJ2aWNlLnNjZW5lICE9bnVsbCl7XHJcbiAgICAgICAgICAgIHZhciBvYmpzY2VuZSA9IHRoaXMuZ2FtZXNlcnZpY2Uuc2NlbmU7XHJcbiAgICAgICAgICAgIHdoaWxlIChvYmpzY2VuZS5jaGlsZHJlbi5sZW5ndGgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9ianNjZW5lLnJlbW92ZShvYmpzY2VuZS5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkY3ViZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuZ2FtZXNlcnZpY2Uuc2NlbmUgIT1udWxsKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdWJlXCIpO1xyXG4gICAgICAgICAgICB2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDEsIDEsIDEgKTtcclxuICAgIFx0XHR2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgY29sb3I6IDB4MDBmZmZmIH0gKTtcclxuICAgIFx0XHR2YXIgY3ViZSA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuICAgICAgICAgICAgY3ViZS5uYW1lID0gXCJjdWJlXCI7XHJcbiAgICBcdFx0dGhpcy5nYW1lc2VydmljZS5zY2VuZS5hZGQoIGN1YmUgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7R2FtZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2dhbWUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnb2JqZWN0cHJvcHMnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OjUwJTt3aWR0aDoxMDAlXCI+XHJcbiAgICAgICAgICAgIE9iamVjdFxyXG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJyZWZyZXNoKClcIj5SZWZyZXNoPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPYmplY3Rwcm9wcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lc2VydmljZTpHYW1lU2VydmljZSl7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhnYW1lc2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lc2VydmljZSA9IGdhbWVzZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2goKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVmcmVzaFwiKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZ2FtZXNlcnZpY2UpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5nYW1lc2VydmljZS5zY2VuZS5jaGlsZHJlblswXSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7R2FtZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2dhbWUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2NlbmUtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6NTAlO3dpZHRoOjEwMCVcIj5cclxuICAgICAgICAgICAgU2NlbmVcclxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicmVmcmVzaCgpXCI+UmVmcmVzaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZ2FtZXNlcnZpY2Uuc2NlbmVcIj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgb2JqIG9mIGdhbWVzZXJ2aWNlLnNjZW5lLmNoaWxkcmVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIChjbGljayk9XCJzZWxlY3RvYmplY3Qob2JqKVwiPnt7b2JqLm5hbWV9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY2VuZUxpc3Qge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZXNlcnZpY2U6R2FtZVNlcnZpY2Upe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZ2FtZXNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuZ2FtZXNlcnZpY2UgPSBnYW1lc2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RvYmplY3QoX29iail7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzY2VuZSBvYmplY3Qgc2VsZWN0ZWQ6XCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKF9vYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2goKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlZnJlc2hcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nYW1lc2VydmljZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nYW1lc2VydmljZS5zY2VuZS5jaGlsZHJlblswXSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2NyaXB0ZWRpdG9yZXhwbG9yZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPlxyXG4gICAgICAgIFBhbmVsIGRpcmVjdG9yeSBmb2xkZXJcclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNjcmlwdEVkaXRvckV4cGxvcmUge1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzY3JpcHRlZGl0b3JsYXlvdXQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOjIwJTtoZWlnaHQ6MTAwJTtmbG9hdDpsZWZ0O21hcmdpbjowO3BhZGRpbmc6MDtcIj5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHRlZGl0b3JtZW51Pjwvc2NyaXB0ZWRpdG9ybWVudT5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHRlZGl0b3JleHBsb3JlPjwvc2NyaXB0ZWRpdG9yZXhwbG9yZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDo4MCU7aGVpZ2h0OjEwMCU7ZmxvYXQ6bGVmdDtcIj5cclxuICAgICAgICAgICAgPGNvZGVlZGl0b3ItY29tcG9uZW50IHN0eWxlPVwibWFyZ2luOjA7cGFkZGluZzowO1wiPjwvY29kZWVkaXRvci1jb21wb25lbnQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2NyaXB0RWRpdG9yTGF5b3V0IHtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2NyaXB0ZWRpdG9ybWVudScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIEFjdGlvblxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cIlNjcmlwdFJlbG9hZCgpO1wiPlJlbG9hZDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cIlNjcmlwdFNhdmUoKTtcIj5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiU2NyaXB0UnVuKCk7XCI+UnVuPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiU2NyaXB0Q3JlYXRlKCk7XCI+Q3JlYXRlPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiU2NyaXB0RGVsZXRlKCk7XCI+RGVsZXRlPC9idXR0b24+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY3JpcHRFZGl0b3JNZW51IHtcclxuXHJcbiAgICBTY3JpcHRSZWxvYWQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVsb2FkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgU2NyaXB0U2F2ZSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTYXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgU2NyaXB0UnVuKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1J1bicpO1xyXG4gICAgfVxyXG5cclxuICAgIFNjcmlwdERlbGV0ZSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEZWxldGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBTY3JpcHRDcmVhdGUoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRlJyk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy9tYWluIGVudHJ5IGFuZCBzZXR1cCBib290XHJcblxyXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcclxuaW1wb3J0ICd6b25lLmpzL2Rpc3Qvem9uZSc7XHJcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5cclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJztcclxuXHJcbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2FtZVNlcnZpY2Uge1xyXG4gICAgc2NlbmUgPSBudWxsO1xyXG5cclxuICAgIHNldFNjZW5lKF9zY2VuZSl7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IF9zY2VuZTtcclxuICAgIH1cclxuICAgIGdldFNjZW5lKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmU7XHJcbiAgICB9XHJcbn1cclxuIl19