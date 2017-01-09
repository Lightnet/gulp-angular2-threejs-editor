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
    imports: [_platformBrowser.BrowserModule, _forms.FormsModule],
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
            console.log("addcube");
            if (this.gameservice.scene != null) {
                console.log("cube");
                var geometry = new THREE.SphereGeometry(1, 32, 32);
                var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
                var sphere = new THREE.Mesh(geometry, material);
                sphere.name = "sphere";
                this.gameservice.scene.add(sphere);
            }
        }
    }, {
        key: 'addsplane',
        value: function addsplane() {
            console.log("addsplane");
            if (this.gameservice.scene != null) {
                console.log("cube");
                var geometry = new THREE.PlaneBufferGeometry(5, 5, 32);
                var material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
                var plane = new THREE.Mesh(geometry, material);
                plane.name = "plane";
                this.gameservice.scene.add(plane);
            }
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
            var self = this;
            $('#container').layout({
                resizable: true,
                onresize: function onresize() {
                    //console.log("resize");
                    self.resizecanvas();
                }
            });
            var layout = $('#container').layout();
            layout.sizePane("south", 200);
            layout.toggle("north");
        }
    }, {
        key: 'resizecanvas',
        value: function resizecanvas() {
            if (this.camera != null && this.renderer != null) {
                var layout = $('#container').layout();
                var width = layout.state.center.innerWidth;
                var height = layout.state.center.innerHeight;
                this.camera.aspect = width / height;
                this.camera.updateProjectionMatrix();
                this.renderer.setSize(width, height);
                layout = null;
                width = null;
                height = null;
            }
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
            var layout = $('#container').layout();
            var width = layout.state.center.innerWidth;
            var height = layout.state.center.innerHeight;
            renderer.setSize(width, height);
            //document.body.appendChild( renderer.domElement );


            this.renderer = renderer;
            this.camera = camera;
            var geometry = new THREE.BoxGeometry(1, 1, 1);
            var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            var cube = new THREE.Mesh(geometry, material);
            cube.name = "cube";
            //cube.position.x = 5;
            //cube.position.y = -0.1;
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
    template: '\n        <div style="height:50%;width:100%">\n            Props:\n            <!--<button (click)="refresh()">Refresh</button>-->\n            <div *ngIf="gameservice.selectobject">\n                Object: {{gameservice.selectobject.uuid}}\n                <br><label>px:<input type="number" ng-model=\'val | number: 2\' [ngModel]="gameservice.selectobject.position.x" value="{{gameservice.selectobject.position.x}}" (ngModelChange)="objposx($event)" step ="0.000001" /></label>\n                <br><label>py:<input type="number" [ngModel]="gameservice.selectobject.position.y" value="{{gameservice.selectobject.position.y}}" (ngModelChange)="objposy($event)" step ="0.000001" /></label>\n                <br><label>pz:<input type="number" [ngModel]="gameservice.selectobject.position.z" value="{{gameservice.selectobject.position.z}}" (ngModelChange)="objposz($event)" step ="0.000001" /></label>\n            </div>\n        </div>\n    '
}), _dec(_class = function () {
    function Objectprops(gameservice) {
        _classCallCheck(this, Objectprops);

        this.posx = 0;

        //console.log(gameservice);
        this.gameservice = gameservice;
    }

    _createClass(Objectprops, [{
        key: 'objposx',
        value: function objposx(value) {
            console.log(value);
            console.log("pos x");
            if (this.gameservice.selectobject != null) {
                this.gameservice.selectobject.position.x = value;
            }
        }
    }, {
        key: 'objposy',
        value: function objposy(value) {
            console.log(value);
            console.log("pos y");
            if (this.gameservice.selectobject != null) {
                this.gameservice.selectobject.position.y = value;
            }
        }
    }, {
        key: 'objposz',
        value: function objposz(value) {
            console.log(value);
            console.log("pos z");
            if (this.gameservice.selectobject != null) {
                this.gameservice.selectobject.position.z = value;
            }
        }
    }, {
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
    template: '\n        <div style="height:50%;width:100%">\n            Scene\n            <!--<button (click)="refresh()">Refresh</button>-->\n            <div *ngIf="gameservice.scene">\n                <ul>\n                <li *ngFor="let obj of gameservice.scene.children">\n                    <label (click)="selectobject(obj)">{{obj.name}}</label>\n                </li>\n                </ul>\n            </div>\n        </div>\n    '
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
            this.gameservice.selectobject = _obj;
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
        this.selectobject = null;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwic3JjXFxhcHAuY29tcG9uZW50LmpzIiwic3JjXFxhcHAubW9kdWxlLmpzIiwic3JjXFxjb21wb25lbnRzXFxhc3NldHMuY29tcG9uZW50LmpzIiwic3JjXFxjb21wb25lbnRzXFxjb2RlZWRpdG9yLmNvbXBvbmVudC5qcyIsInNyY1xcY29tcG9uZW50c1xcZWRpdG9ybWVudS5jb21wb25lbnQuanMiLCJzcmNcXGNvbXBvbmVudHNcXGdhbWVlZGl0b3IuY29tcG9uZW50LmpzIiwic3JjXFxjb21wb25lbnRzXFxuYXZtZW51LmNvbXBvbmVudC5qcyIsInNyY1xcY29tcG9uZW50c1xcb2JqZWN0cHJvcHMuY29tcG9uZW50LmpzIiwic3JjXFxjb21wb25lbnRzXFxzY2VuZS5jb21wb25lbnQuanMiLCJzcmNcXGNvbXBvbmVudHNcXHNjcmlwdGVkaXRvcmV4cGxvcmUuY29tcG9uZW50LmpzIiwic3JjXFxjb21wb25lbnRzXFxzY3JpcHRlZGl0b3JsYXlvdXQuY29tcG9uZW50LmpzIiwic3JjXFxjb21wb25lbnRzXFxzY3JpcHRlZGl0b3JtZW51LmNvbXBvbmVudC5qcyIsInNyY1xcaW5kZXguanMiLCJzcmNcXHNlcnZpY2VzXFxnYW1lLnNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7Ozs7Ozs7O2tCQ0FBOztBQVFBOztBQU5BOztBQUNBOztBQUVBOztBQUVBOztBQUdBOztBQUNBOztBQUNBOzs7O0lBUWEsTyxXQUFBLE8sV0FOWixxQkFBVTtBQUNQLGNBQVUsVUFESDtBQUVQO0FBRk8sQ0FBVixDLGdCQU9HLGlCQUFZLFdBQVosRUFBb0M7QUFBQTs7QUFDaEMsWUFBUSxHQUFSLENBQVksV0FBWjtBQUNBLFNBQUssV0FBTCxHQUFtQixXQUFuQjtBQUNILEM7aUVBSlEsTzs7Ozs7Ozs7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SDs7O3VDQUVhO0FBQ1Ysb0JBQVEsR0FBUixDQUFZLFFBQVo7QUFDSDs7Ozs7Ozs7O0FDL0JMOztBQUNBOztBQUNBOztBQUVBOztBQU5BOztBQVFBLHNEQUF5QixlQUF6Qjs7Ozs7Ozs7Ozs7Ozs7QUNSQTs7OztJQUdhLFcsV0FBQSxXLFdBRFosdUI7Ozs7YUFFRyxLLEdBQVEsSTthQUNSLFksR0FBZSxJOzs7OztpQ0FFTixNLEVBQU87QUFDWixpQkFBSyxLQUFMLEdBQWEsTUFBYjtBQUNIOzs7bUNBQ1M7QUFDTixtQkFBTyxLQUFLLEtBQVo7QUFDSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIiLCIvL3NldHVwIGNvbXBvbmVudCBtYWluIHBhZ2UgaHRtbFxyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgSW5wdXQsIEF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcblxyXG5pbXBvcnQge0dhbWVTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2dhbWUuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgJy4vdGhyZWUubWluLmpzJztcclxuLy9pbXBvcnQgJy4vdGhyZWUubW9kdWxlLmpzJztcclxuXHJcbmltcG9ydCAnLi9qcXVlcnkubWluLmpzJztcclxuaW1wb3J0ICcuL2pxdWVyeS11aS5taW4uanMnO1xyXG5pbXBvcnQgJy4vanF1ZXJ5LmxheW91dC5taW4uanMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21haW4tYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8Z2FtZWVkaXRvcj48L2dhbWVlZGl0b3I+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWVzZXJ2aWNlOkdhbWVTZXJ2aWNlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhnYW1lc2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lc2VydmljZSA9IGdhbWVzZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vc2V0dXAgYXBwXHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBJbnB1dCwgQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG4vL2ltcG9ydCB7IExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG4vL2ltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcblxyXG5pbXBvcnQge0FjZUVkaXRvckRpcmVjdGl2ZSwgQWNlRWRpdG9yQ29tcG9uZW50fSBmcm9tICduZzItYWNlLWVkaXRvcic7XHJcblxyXG5pbXBvcnQgeyBNYWluQXBwIH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7QXNzZXRzTGlzdH0gZnJvbSAnLi9jb21wb25lbnRzL2Fzc2V0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NjZW5lTGlzdH0gZnJvbSAnLi9jb21wb25lbnRzL3NjZW5lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7T2JqZWN0cHJvcHN9IGZyb20gJy4vY29tcG9uZW50cy9vYmplY3Rwcm9wcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0dhbWVFZGl0b3J9IGZyb20gJy4vY29tcG9uZW50cy9nYW1lZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29kZUVkaXRvcn0gZnJvbSAnLi9jb21wb25lbnRzL2NvZGVlZGl0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHtTY3JpcHRFZGl0b3JFeHBsb3JlfSBmcm9tICcuL2NvbXBvbmVudHMvc2NyaXB0ZWRpdG9yZXhwbG9yZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NjcmlwdEVkaXRvckxheW91dH0gZnJvbSAnLi9jb21wb25lbnRzL3NjcmlwdGVkaXRvcmxheW91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NjcmlwdEVkaXRvck1lbnV9IGZyb20gJy4vY29tcG9uZW50cy9zY3JpcHRlZGl0b3JtZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RWRpdG9yTWVudX0gZnJvbSAnLi9jb21wb25lbnRzL2VkaXRvcm1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHtOYXZNZW51fSBmcm9tICcuL2NvbXBvbmVudHMvbmF2bWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0dhbWVTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2dhbWUuc2VydmljZSc7XHJcblxyXG4vL2NvbnN0IHJvdXRpbmcgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAgICAvL3sgcGF0aDogJycsIGNvbXBvbmVudDogSGVsbG8gfSxcclxuICAgIC8veyBwYXRoOiAnY2lhby86bmFtZScsIGNvbXBvbmVudDogQ2lhbyB9LFxyXG4vL10pO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTWFpbkFwcCxcclxuICAgICAgICBBY2VFZGl0b3JEaXJlY3RpdmUsXHJcbiAgICAgICAgQWNlRWRpdG9yQ29tcG9uZW50LFxyXG4gICAgICAgIEdhbWVFZGl0b3IsXHJcbiAgICAgICAgTmF2TWVudSxcclxuICAgICAgICBTY3JpcHRFZGl0b3JMYXlvdXQsXHJcbiAgICAgICAgU2NlbmVMaXN0LFxyXG4gICAgICAgIEFzc2V0c0xpc3QsXHJcbiAgICAgICAgU2NyaXB0RWRpdG9yTWVudSxcclxuICAgICAgICBTY3JpcHRFZGl0b3JFeHBsb3JlLFxyXG4gICAgICAgIENvZGVFZGl0b3IsXHJcbiAgICAgICAgT2JqZWN0cHJvcHMsXHJcbiAgICAgICAgRWRpdG9yTWVudVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEdhbWVTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgYm9vdHN0cmFwOiBbTWFpbkFwcF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7R2FtZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2dhbWUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXNzZXRzLWxpc3QnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICBBc3NldHNcclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJyZWZyZXNoKClcIj5SZWZyZXNoPC9idXR0b24+XHJcbiAgICAgICAgPCEtLVxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJnYW1lc2VydmljZS5zY2VuZVwiPlxyXG4gICAgICAgICAgICA8YSAqbmdGb3I9XCJsZXQgb2JqIG9mIGdhbWVzZXJ2aWNlLnNjZW5lLmNoaWxkcmVuXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+e3tvYmoubmFtZX19PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC0tPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXNzZXRzTGlzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lc2VydmljZTpHYW1lU2VydmljZSl7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhnYW1lc2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lc2VydmljZSA9IGdhbWVzZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2goKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlZnJlc2hcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nYW1lc2VydmljZSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmdhbWVzZXJ2aWNlLnNjZW5lLmNoaWxkcmVuWzBdKTtcclxuICAgIH1cclxufVxyXG4iLCIvL2FkZCBcIkFjZUVkaXRvckRpcmVjdGl2ZVwiIHRvIHlvdXIgbW9kdWxlcyBsaXN0XHJcblxyXG5pbXBvcnQgeyBBY2VFZGl0b3JEaXJlY3RpdmUgfSBmcm9tICduZzItYWNlLWVkaXRvcic7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb2RlZWRpdG9yLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBhY2UtZWRpdG9yXHJcbiAgICAgICBbdGV4dF09XCJ0ZXh0XCJcclxuICAgICAgIFtvcHRpb25zXT1cIm9wdGlvbnNcIlxyXG4gICAgICAgW3JlYWRPbmx5XT1cImZhbHNlXCJcclxuICAgICAgIFthdXRvVXBkYXRlQ29udGVudF09XCJ0cnVlXCJcclxuICAgICAgICh0ZXh0Q2hhbmdlZCk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgIHN0eWxlPVwibWluLWhlaWdodDogMjAwcHg7IGhlaWdodDoxMDAlOyB3aWR0aDoxMDAlOyBvdmVyZmxvdzogYXV0bzttYXJnaW46IDA7cGFkZGluZyA6IDA7XCI+PC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2RlRWRpdG9yIHtcclxuICAgIHRleHQ6c3RyaW5nID0gXCJUZXN0XCI7XHJcbiAgICAvL29wdGlvbnM6YW55ID0ge21heExpbmVzOiAxMDAwLCBwcmludE1hcmdpbjogZmFsc2V9O1xyXG4gICAgb3B0aW9uczphbnkgPSB7IHByaW50TWFyZ2luOiBmYWxzZX07XHJcblxyXG4gICAgb25DaGFuZ2UoY29kZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV3IGNvZGVcIiwgY29kZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7R2FtZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2dhbWUuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgJy4uL3RocmVlLm1pbi5qcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZWRpdG9ybWVudScsXHJcbiAgICBzdHlsZVVybHM6ICBbJy4vY29tcG9uZW50cy9lZGl0b3JtZW51LmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8dWw+XHJcbiAgICA8bGkgY2xhc3M9XCJkcm9wZG93blwiID5cclxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wYnRuXCI+RmlsZTwvYT5cclxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCIgc3R5bGU9XCJ6LWluZGV4OjVcIj5cclxuICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwic2NyaXB0b3BlbnNjZW5lKCk7XCI+T3BlbiBTY2VuZTwvYT5cclxuICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwic2NyaXB0bG9hZHNjZW5lKCk7XCI+TG9hZCBTY2VuZTwvYT5cclxuICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwic2NyaXB0c2F2ZXNjZW5lKCk7XCI+U2F2ZSBTY2VuZTwvYT5cclxuICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwic2NyaXB0Y2xlYXJzY2VuZSgpO1wiPkNsZWFyIFNjZW5lPC9hPlxyXG4gICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJzY3JpcHRkZWxldGVzY2VuZSgpO1wiPkRlbGV0ZSBTY2VuZTwvYT5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICAgIDxsaSBjbGFzcz1cImRyb3Bkb3duXCI+XHJcbiAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGJ0blwiPkVkaXQ8L2E+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiIHN0eWxlPVwiei1pbmRleDo1XCI+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCIgKGNsaWNrKT1cInNjcmlwdGRlbGV0ZW9iamVjdCgpO1wiPkRlbGV0ZSBPYmplY3Q8L2E+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcblxyXG4gICAgPGxpIGNsYXNzPVwiZHJvcGRvd25cIj5cclxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wYnRuXCI+Q29tcG9uZW50czwvYT5cclxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCIgc3R5bGU9XCJ6LWluZGV4OjVcIj5cclxuICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwiYWRkY3ViZSgpO1wiID5DdWJlPC9hPlxyXG4gICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJhZGRzcHNoZXJlKCk7XCI+U3BoZXJlPC9hPlxyXG4gICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJhZGRzcGxhbmUoKTtcIj5QbGFuZTwvYT5cclxuICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwiYWRkbWVzaCgpO1wiPk1lc2g8L2E+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCIgKGNsaWNrKT1cImFkZG1hdGVyaWFsKCk7XCI+TWF0ZXJpYWw8L2E+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgICA8bGkgY2xhc3M9XCJkcm9wZG93blwiPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wYnRuXCI+UGFja2FnZXM8L2E+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiIHN0eWxlPVwiei1pbmRleDo1XCI+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCI+U2NyaXB0czwvYT5cclxuICAgICAgPGEgaHJlZj1cIiNcIj5Nb2RzPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGNsYXNzPVwiZHJvcGRvd25cIj48YSBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGJ0blwiPkhlbHA8L2E+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiIHN0eWxlPVwiei1pbmRleDo1XCI+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCI+RG9jczwvYT5cclxuICAgICAgPGEgaHJlZj1cIiNcIj5BYm91dDwvYT5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGJ0blwiIChjbGljayk9XCJzY3JpcHRidWlsZCgpO1wiPkJ1aWxkPC9hPjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3BidG5cIiAoY2xpY2spPVwic2NyaXB0ZGVidWcoKTtcIj5EZWJ1ZzwvYT48L2xpPlxyXG4gICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wYnRuXCIgKGNsaWNrKT1cInNjcmlwdHBsYXkoKTtcIj5QbGF5PC9hPjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3BidG5cIiAoY2xpY2spPVwic2NyaXB0c3RvcCgpO1wiPlN0b3A8L2E+PC9saT5cclxuICAgIDwvdWw+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JNZW51IHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoZ2FtZXNlcnZpY2U6R2FtZVNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuZ2FtZXNlcnZpY2UgPSBnYW1lc2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JpcHRvcGVuc2NlbmUoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNjcmlwdG9wZW5zY2VuZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JpcHRsb2Fkc2NlbmUoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNjcmlwdGxvYWRzY2VuZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JpcHRzYXZlc2NlbmUoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNjcmlwdHNhdmVzY2VuZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JpcHRkZWxldGVzY2VuZSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2NyaXB0ZGVsZXRlc2NlbmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2NyaXB0Y2xlYXJzY2VuZSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2NyaXB0Y2xlYXJzY2VuZVwiKTtcclxuICAgICAgICBpZih0aGlzLmdhbWVzZXJ2aWNlLnNjZW5lICE9bnVsbCl7XHJcbiAgICAgICAgICAgIHZhciBvYmpzY2VuZSA9IHRoaXMuZ2FtZXNlcnZpY2Uuc2NlbmU7XHJcbiAgICAgICAgICAgIHdoaWxlIChvYmpzY2VuZS5jaGlsZHJlbi5sZW5ndGgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9ianNjZW5lLnJlbW92ZShvYmpzY2VuZS5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2NyaXB0ZGVsZXRlb2JqZWN0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NjcmlwdGRlbGV0ZW9iamVjdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcmlwdGJ1aWxkKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NjcmlwdGJ1aWxkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2NyaXB0ZGVidWcoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2NyaXB0ZGVidWcnKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JpcHRwbGF5KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NjcmlwdHBsYXknKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JpcHRzdG9wKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NjcmlwdHN0b3AnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRjdWJlKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhZGRjdWJlXCIpO1xyXG4gICAgICAgIGlmKHRoaXMuZ2FtZXNlcnZpY2Uuc2NlbmUgIT1udWxsKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdWJlXCIpO1xyXG4gICAgICAgICAgICB2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDEsIDEsIDEgKTtcclxuICAgIFx0XHR2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgY29sb3I6IDB4MDBmZmZmIH0gKTtcclxuICAgIFx0XHR2YXIgY3ViZSA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuICAgICAgICAgICAgY3ViZS5uYW1lID0gXCJjdWJlXCI7XHJcbiAgICBcdFx0dGhpcy5nYW1lc2VydmljZS5zY2VuZS5hZGQoIGN1YmUgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkc3BzaGVyZSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkc3BzaGVyZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFkZGN1YmVcIik7XHJcbiAgICAgICAgaWYodGhpcy5nYW1lc2VydmljZS5zY2VuZSAhPW51bGwpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImN1YmVcIik7XHJcbiAgICAgICAgICAgIHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSggMSwgMzIsIDMyICk7XHJcbiAgICBcdFx0dmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7Y29sb3I6IDB4ZmZmZjAwfSApO1xyXG4gICAgXHRcdHZhciBzcGhlcmUgID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG4gICAgICAgICAgICBzcGhlcmUubmFtZSA9IFwic3BoZXJlXCI7XHJcbiAgICBcdFx0dGhpcy5nYW1lc2VydmljZS5zY2VuZS5hZGQoIHNwaGVyZSAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkc3BsYW5lKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhZGRzcGxhbmVcIik7XHJcbiAgICAgICAgaWYodGhpcy5nYW1lc2VydmljZS5zY2VuZSAhPW51bGwpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImN1YmVcIik7XHJcbiAgICAgICAgICAgIHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KCA1LCA1LCAzMiApO1xyXG4gICAgXHRcdHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCgge2NvbG9yOiAweGZmZmYwMCwgc2lkZTogVEhSRUUuRG91YmxlU2lkZX0gKTtcclxuICAgIFx0XHR2YXIgcGxhbmUgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcbiAgICAgICAgICAgIHBsYW5lLm5hbWUgPSBcInBsYW5lXCI7XHJcbiAgICBcdFx0dGhpcy5nYW1lc2VydmljZS5zY2VuZS5hZGQoIHBsYW5lICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkbWVzaCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkbWVzaFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRtYXRlcmlhbCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkbWF0ZXJpYWxcIik7XHJcbiAgICB9XHJcbn1cclxuIiwiLy9zZXR1cCBhcHBcclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIElucHV0LCBBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuaW1wb3J0IHtHYW1lU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvZ2FtZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCAnLi4vdGhyZWUubWluLmpzJztcclxuLy9pbXBvcnQgJy4vdGhyZWUubW9kdWxlLmpzJztcclxuXHJcbmltcG9ydCAnLi4vanF1ZXJ5Lm1pbi5qcyc7XHJcbmltcG9ydCAnLi4vanF1ZXJ5LXVpLm1pbi5qcyc7XHJcbmltcG9ydCAnLi4vanF1ZXJ5LmxheW91dC5taW4uanMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2dhbWVlZGl0b3InLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxlZGl0b3JtZW51PjwvZWRpdG9ybWVudT5cclxuICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiBzdHlsZT1cImhlaWdodDoxMDAlO1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1sYXlvdXQtY2VudGVyXCIgc3R5bGU9XCJtYXJnaW46IDA7cGFkZGluZyA6IDA7XCI+XHJcbiAgICAgICAgICAgIDxjYW52YXMgaWQ9XCJyZW5kZXJDYW52YXNcIj48L2NhbnZhcz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidWktbGF5b3V0LW5vcnRoXCI+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1sYXlvdXQtc291dGhcIiBzdHlsZT1cIm1hcmdpbjogMDtwYWRkaW5nIDogMDtcIj5cclxuICAgICAgICAgICAgPHNjcmlwdGVkaXRvcmxheW91dD48L3NjcmlwdGVkaXRvcmxheW91dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidWktbGF5b3V0LWVhc3RcIj5cclxuICAgICAgICAgICAgPHNjZW5lLWxpc3Q+PC9zY2VuZS1saXN0PlxyXG4gICAgICAgICAgICA8b2JqZWN0cHJvcHM+PC9vYmplY3Rwcm9wcz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidWktbGF5b3V0LXdlc3RcIj5cclxuICAgICAgICAgICAgPGFzc2V0cy1saXN0PjwvYXNzZXRzLWxpc3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbWVFZGl0b3IgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZXNlcnZpY2U6R2FtZVNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuZ2FtZXNlcnZpY2UgPSBnYW1lc2VydmljZTtcclxuICAgICAgICAvL3ZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCk9PntcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImxvYWRlZD9cIik7XHJcbiAgICAgICAgICAgIC8vc2VsZi5pbml0KCk7XHJcbiAgICAgICAgLy99KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluaXQgbGF5b3V0IVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR1cF9sYXlvdXQoKTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cF9sYXlvdXQoKXtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgJCgnI2NvbnRhaW5lcicpLmxheW91dCh7XHJcbiAgICAgICAgICAgIHJlc2l6YWJsZTp0cnVlLFxyXG4gICAgICAgICAgICBvbnJlc2l6ZTooKT0+e1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInJlc2l6ZVwiKTtcclxuICAgICAgICAgICAgICAgIHNlbGYucmVzaXplY2FudmFzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgbGF5b3V0ID0gJCgnI2NvbnRhaW5lcicpLmxheW91dCgpO1xyXG4gICAgICAgIGxheW91dC5zaXplUGFuZShcInNvdXRoXCIsIDIwMCk7XHJcbiAgICAgICAgbGF5b3V0LnRvZ2dsZShcIm5vcnRoXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2l6ZWNhbnZhcygpe1xyXG4gICAgICAgIGlmKCh0aGlzLmNhbWVyYSAhPW51bGwpJiYodGhpcy5yZW5kZXJlciAhPSBudWxsKSl7XHJcbiAgICAgICAgICAgIHZhciBsYXlvdXQgPSAkKCcjY29udGFpbmVyJykubGF5b3V0KCk7XHJcbiAgICAgICAgICAgIHZhciB3aWR0aCAgICAgPSBsYXlvdXQuc3RhdGUuY2VudGVyLmlubmVyV2lkdGg7XHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgICAgID0gbGF5b3V0LnN0YXRlLmNlbnRlci5pbm5lckhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gd2lkdGggLyBoZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKCB3aWR0aCxoZWlnaHQgKTtcclxuICAgICAgICAgICAgbGF5b3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgd2lkdGggPSBudWxsO1xyXG4gICAgICAgICAgICBoZWlnaHQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVuZGVyQ2FudmFzXCIpO1xyXG5cclxuICAgICAgICB2YXIgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHRcdHZhciBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoIDc1LCB3aW5kb3cuaW5uZXJXaWR0aC93aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMCApO1xyXG5cclxuXHRcdC8vdmFyIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcclxuICAgICAgICB2YXIgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGNhbnZhczogY2FudmFzIH0pO1xyXG5cdFx0Ly9yZW5kZXJlci5zZXRTaXplKCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0ICk7XHJcbiAgICAgICAgdmFyIGxheW91dCA9ICQoJyNjb250YWluZXInKS5sYXlvdXQoKTtcclxuICAgICAgICB2YXIgd2lkdGggICAgID0gbGF5b3V0LnN0YXRlLmNlbnRlci5pbm5lcldpZHRoO1xyXG4gICAgICAgIHZhciBoZWlnaHQgICAgID0gbGF5b3V0LnN0YXRlLmNlbnRlci5pbm5lckhlaWdodDtcclxuICAgICAgICByZW5kZXJlci5zZXRTaXplKCB3aWR0aCwgaGVpZ2h0ICk7XHJcblx0XHQvL2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIHJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuXHRcdHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMSwgMSwgMSApO1xyXG5cdFx0dmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAweDAwZmYwMCB9ICk7XHJcblx0XHR2YXIgY3ViZSA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuICAgICAgICBjdWJlLm5hbWUgPSBcImN1YmVcIjtcclxuICAgICAgICAvL2N1YmUucG9zaXRpb24ueCA9IDU7XHJcbiAgICAgICAgLy9jdWJlLnBvc2l0aW9uLnkgPSAtMC4xO1xyXG5cdFx0c2NlbmUuYWRkKCBjdWJlICk7XHJcbiAgICAgICAgLy9jdWJlID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG4gICAgICAgIC8vY3ViZS5uYW1lID0gXCJjdWJlXCI7XHJcbiAgICAgICAgLy9zY2VuZS5hZGQoIGN1YmUgKTtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lc2VydmljZS5zY2VuZSA9IHNjZW5lO1xyXG5cclxuXHRcdGNhbWVyYS5wb3NpdGlvbi56ID0gNTtcclxuXHJcblx0XHR2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHJlbmRlciApO1xyXG5cclxuXHRcdFx0Y3ViZS5yb3RhdGlvbi54ICs9IDAuMTtcclxuXHRcdFx0Y3ViZS5yb3RhdGlvbi55ICs9IDAuMTtcclxuXHJcblx0XHRcdHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuXHRcdH07XHJcblxyXG5cdFx0cmVuZGVyKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7R2FtZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2dhbWUuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgJy4uL3RocmVlLm1pbi5qcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmF2bWVudScsXHJcbiAgICBzdHlsZVVybHM6ICBbJy4vY29tcG9uZW50cy9uYXZtZW51LmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cImRyb3Bkb3duXCIgPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wYnRuXCI+RmlsZTwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiIHN0eWxlPVwiei1pbmRleDo1XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPk9wZW4gU2NlbmU8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkxvYWQgU2NlbmU8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlNhdmUgU2NlbmU8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiICAoY2xpY2spPVwiY2xlYXJzY2VuZSgpO1wiPkNsZWFyIFNjZW5lPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5EZWxldGUgU2NlbmU8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJkcm9wZG93blwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wYnRuXCI+RWRpdDwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiIHN0eWxlPVwiei1pbmRleDo1XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkRlbGV0ZSBPYmplY3Q8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd25cIj5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGJ0blwiPkNvbXBvbmVudHM8L2E+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnRcIiBzdHlsZT1cInotaW5kZXg6NVwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwiYWRkY3ViZSgpO1wiID5DdWJlPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5TcGhlcmU8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlBsYW5lPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5NZXNoPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5NYXRlcmlhbDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cImRyb3Bkb3duXCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3BidG5cIj5QYWNrYWdlczwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiIHN0eWxlPVwiei1pbmRleDo1XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlNjcmlwdHM8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPk1vZHM8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJkcm9wZG93blwiPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wYnRuXCI+SGVscDwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiIHN0eWxlPVwiei1pbmRleDo1XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkRvY3M8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkFib3V0PC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wYnRuXCI+QnVpbGQ8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3BidG5cIj5EZWJ1ZzwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGJ0blwiPlBsYXk8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3BidG5cIj5TdG9wPC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdk1lbnUge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZXNlcnZpY2U6R2FtZVNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuZ2FtZXNlcnZpY2UgPSBnYW1lc2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcnNjZW5lKCl7XHJcbiAgICAgICAgaWYodGhpcy5nYW1lc2VydmljZS5zY2VuZSAhPW51bGwpe1xyXG4gICAgICAgICAgICB2YXIgb2Jqc2NlbmUgPSB0aGlzLmdhbWVzZXJ2aWNlLnNjZW5lO1xyXG4gICAgICAgICAgICB3aGlsZSAob2Jqc2NlbmUuY2hpbGRyZW4ubGVuZ3RoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvYmpzY2VuZS5yZW1vdmUob2Jqc2NlbmUuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZGN1YmUoKXtcclxuICAgICAgICBpZih0aGlzLmdhbWVzZXJ2aWNlLnNjZW5lICE9bnVsbCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3ViZVwiKTtcclxuICAgICAgICAgICAgdmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAxLCAxLCAxICk7XHJcbiAgICBcdFx0dmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAweDAwZmZmZiB9ICk7XHJcbiAgICBcdFx0dmFyIGN1YmUgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcbiAgICAgICAgICAgIGN1YmUubmFtZSA9IFwiY3ViZVwiO1xyXG4gICAgXHRcdHRoaXMuZ2FtZXNlcnZpY2Uuc2NlbmUuYWRkKCBjdWJlICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dhbWVTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9nYW1lLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ29iamVjdHByb3BzJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDo1MCU7d2lkdGg6MTAwJVwiPlxyXG4gICAgICAgICAgICBQcm9wczpcclxuICAgICAgICAgICAgPCEtLTxidXR0b24gKGNsaWNrKT1cInJlZnJlc2goKVwiPlJlZnJlc2g8L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImdhbWVzZXJ2aWNlLnNlbGVjdG9iamVjdFwiPlxyXG4gICAgICAgICAgICAgICAgT2JqZWN0OiB7e2dhbWVzZXJ2aWNlLnNlbGVjdG9iamVjdC51dWlkfX1cclxuICAgICAgICAgICAgICAgIDxicj48bGFiZWw+cHg6PGlucHV0IHR5cGU9XCJudW1iZXJcIiBuZy1tb2RlbD0ndmFsIHwgbnVtYmVyOiAyJyBbbmdNb2RlbF09XCJnYW1lc2VydmljZS5zZWxlY3RvYmplY3QucG9zaXRpb24ueFwiIHZhbHVlPVwie3tnYW1lc2VydmljZS5zZWxlY3RvYmplY3QucG9zaXRpb24ueH19XCIgKG5nTW9kZWxDaGFuZ2UpPVwib2JqcG9zeCgkZXZlbnQpXCIgc3RlcCA9XCIwLjAwMDAwMVwiIC8+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxicj48bGFiZWw+cHk6PGlucHV0IHR5cGU9XCJudW1iZXJcIiBbbmdNb2RlbF09XCJnYW1lc2VydmljZS5zZWxlY3RvYmplY3QucG9zaXRpb24ueVwiIHZhbHVlPVwie3tnYW1lc2VydmljZS5zZWxlY3RvYmplY3QucG9zaXRpb24ueX19XCIgKG5nTW9kZWxDaGFuZ2UpPVwib2JqcG9zeSgkZXZlbnQpXCIgc3RlcCA9XCIwLjAwMDAwMVwiIC8+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxicj48bGFiZWw+cHo6PGlucHV0IHR5cGU9XCJudW1iZXJcIiBbbmdNb2RlbF09XCJnYW1lc2VydmljZS5zZWxlY3RvYmplY3QucG9zaXRpb24uelwiIHZhbHVlPVwie3tnYW1lc2VydmljZS5zZWxlY3RvYmplY3QucG9zaXRpb24uen19XCIgKG5nTW9kZWxDaGFuZ2UpPVwib2JqcG9zeigkZXZlbnQpXCIgc3RlcCA9XCIwLjAwMDAwMVwiIC8+PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPYmplY3Rwcm9wcyB7XHJcbiAgICBwb3N4ID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lc2VydmljZTpHYW1lU2VydmljZSl7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhnYW1lc2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lc2VydmljZSA9IGdhbWVzZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9ianBvc3godmFsdWUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBvcyB4XCIpO1xyXG4gICAgICAgIGlmKHRoaXMuZ2FtZXNlcnZpY2Uuc2VsZWN0b2JqZWN0ICE9bnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZXNlcnZpY2Uuc2VsZWN0b2JqZWN0LnBvc2l0aW9uLnggPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb2JqcG9zeSh2YWx1ZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicG9zIHlcIik7XHJcbiAgICAgICAgaWYodGhpcy5nYW1lc2VydmljZS5zZWxlY3RvYmplY3QgIT1udWxsKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lc2VydmljZS5zZWxlY3RvYmplY3QucG9zaXRpb24ueSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvYmpwb3N6KHZhbHVlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwb3MgelwiKTtcclxuICAgICAgICBpZih0aGlzLmdhbWVzZXJ2aWNlLnNlbGVjdG9iamVjdCAhPW51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVzZXJ2aWNlLnNlbGVjdG9iamVjdC5wb3NpdGlvbi56ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2goKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVmcmVzaFwiKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZ2FtZXNlcnZpY2UpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5nYW1lc2VydmljZS5zY2VuZS5jaGlsZHJlblswXSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7R2FtZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2dhbWUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2NlbmUtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6NTAlO3dpZHRoOjEwMCVcIj5cclxuICAgICAgICAgICAgU2NlbmVcclxuICAgICAgICAgICAgPCEtLTxidXR0b24gKGNsaWNrKT1cInJlZnJlc2goKVwiPlJlZnJlc2g8L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImdhbWVzZXJ2aWNlLnNjZW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IG9iaiBvZiBnYW1lc2VydmljZS5zY2VuZS5jaGlsZHJlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCAoY2xpY2spPVwic2VsZWN0b2JqZWN0KG9iailcIj57e29iai5uYW1lfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2NlbmVMaXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWVzZXJ2aWNlOkdhbWVTZXJ2aWNlKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGdhbWVzZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmdhbWVzZXJ2aWNlID0gZ2FtZXNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0b2JqZWN0KF9vYmope1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2NlbmUgb2JqZWN0IHNlbGVjdGVkOlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhfb2JqKTtcclxuICAgICAgICB0aGlzLmdhbWVzZXJ2aWNlLnNlbGVjdG9iamVjdCA9IF9vYmo7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVmcmVzaFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdhbWVzZXJ2aWNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdhbWVzZXJ2aWNlLnNjZW5lLmNoaWxkcmVuWzBdKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzY3JpcHRlZGl0b3JleHBsb3JlJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+XHJcbiAgICAgICAgUGFuZWwgZGlyZWN0b3J5IGZvbGRlclxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2NyaXB0RWRpdG9yRXhwbG9yZSB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NjcmlwdGVkaXRvcmxheW91dCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO1wiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6MjAlO2hlaWdodDoxMDAlO2Zsb2F0OmxlZnQ7bWFyZ2luOjA7cGFkZGluZzowO1wiPlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdGVkaXRvcm1lbnU+PC9zY3JpcHRlZGl0b3JtZW51PlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdGVkaXRvcmV4cGxvcmU+PC9zY3JpcHRlZGl0b3JleHBsb3JlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOjgwJTtoZWlnaHQ6MTAwJTtmbG9hdDpsZWZ0O1wiPlxyXG4gICAgICAgICAgICA8Y29kZWVkaXRvci1jb21wb25lbnQgc3R5bGU9XCJtYXJnaW46MDtwYWRkaW5nOjA7XCI+PC9jb2RlZWRpdG9yLWNvbXBvbmVudD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY3JpcHRFZGl0b3JMYXlvdXQge1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzY3JpcHRlZGl0b3JtZW51JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgQWN0aW9uXHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiU2NyaXB0UmVsb2FkKCk7XCI+UmVsb2FkPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiU2NyaXB0U2F2ZSgpO1wiPlNhdmU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJTY3JpcHRSdW4oKTtcIj5SdW48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJTY3JpcHRDcmVhdGUoKTtcIj5DcmVhdGU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJTY3JpcHREZWxldGUoKTtcIj5EZWxldGU8L2J1dHRvbj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNjcmlwdEVkaXRvck1lbnUge1xyXG5cclxuICAgIFNjcmlwdFJlbG9hZCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZWxvYWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBTY3JpcHRTYXZlKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NhdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBTY3JpcHRSdW4oKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnUnVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgU2NyaXB0RGVsZXRlKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RlbGV0ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIFNjcmlwdENyZWF0ZSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGUnKTtcclxuICAgIH1cclxufVxyXG4iLCIvL21haW4gZW50cnkgYW5kIHNldHVwIGJvb3RcclxuXHJcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xyXG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJztcclxuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcblxyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xyXG5cclxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHYW1lU2VydmljZSB7XHJcbiAgICBzY2VuZSA9IG51bGw7XHJcbiAgICBzZWxlY3RvYmplY3QgPSBudWxsO1xyXG5cclxuICAgIHNldFNjZW5lKF9zY2VuZSl7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IF9zY2VuZTtcclxuICAgIH1cclxuICAgIGdldFNjZW5lKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmU7XHJcbiAgICB9XHJcbn1cclxuIl19