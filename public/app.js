(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MainApp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; //setup app

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
    template: '\n\n    <div id="container" style="height:100%;width:100%;">\n        <div class="ui-layout-center" style="margin  : 0;padding : 0;">\n            <canvas id="renderCanvas"></canvas>\n        </div>\n        <div class="ui-layout-north">\n            <navmenu></navmenu>\n        </div>\n        <div class="ui-layout-south" style="margin: 0;padding : 0;">\n            <scripteditorlayout></scripteditorlayout>\n        </div>\n        <div class="ui-layout-east">\n            <scene-list></scene-list>\n        </div>\n        <div class="ui-layout-west">\n            <assets-list></assets-list>\n        </div>\n    </div>\n    '
}), _dec(_class = function () {
    function MainApp(gameservice) {
        _classCallCheck(this, MainApp);

        this.text0 = "test text string...";
        this.scene = null;

        console.log(gameservice);
        this.gameservice = gameservice;
        var self = this;
        //console.log(this);
        //var text = "hello";
        //console.log(this);
        //console.log("main-app");
        window.addEventListener('DOMContentLoaded', function () {
            //console.log("loaded?");
            var layout = $('#container').layout({ resizable: true });
            //layout.toggle("north");
            layout.sizePane("south", 300);
            self.init();
        });
    }

    _createClass(MainApp, [{
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
            cube = new THREE.Mesh(geometry, material);
            cube.name = "cube";
            scene.add(cube);

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

    return MainApp;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], MainApp);

},{"./jquery-ui.min.js":1,"./jquery.layout.min.js":1,"./jquery.min.js":1,"./services/game.service":13,"./three.min.js":1,"@angular/core":"@angular/core","rxjs/add/operator/map":"rxjs/add/operator/map"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppModule = undefined;

var _dec, _class; //setup app

//import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//import { ActivatedRoute, RouterModule } from '@angular/router';


var _core = require('@angular/core');

var _platformBrowser = require('@angular/platform-browser');

require('rxjs/add/operator/map');

var _ng2AceEditor = require('ng2-ace-editor');

var _app = require('./app.component');

var _assets = require('./components/assets.component');

var _scene = require('./components/scene.component');

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
    declarations: [_app.MainApp, _ng2AceEditor.AceEditorDirective, _ng2AceEditor.AceEditorComponent, _editormenu.EditorMenu, _scripteditorlayout.ScriptEditorLayout, _scripteditormenu.ScriptEditorMenu, _scripteditorexplore.ScriptEditorExplore, _codeeditor.CodeEditor, _assets.AssetsList, _scene.SceneList, _navmenu.NavMenu],
    providers: [_game.GameService],
    bootstrap: [_app.MainApp]
}), _dec(_class = function AppModule() {
    _classCallCheck(this, AppModule);
}) || _class);

},{"./app.component":2,"./components/assets.component":4,"./components/codeeditor.component":5,"./components/editormenu.component":6,"./components/navmenu.component":7,"./components/scene.component":8,"./components/scripteditorexplore.component":9,"./components/scripteditorlayout.component":10,"./components/scripteditormenu.component":11,"./services/game.service":13,"@angular/core":"@angular/core","@angular/platform-browser":"@angular/platform-browser","ng2-ace-editor":"ng2-ace-editor","rxjs/add/operator/map":"rxjs/add/operator/map"}],4:[function(require,module,exports){
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
    template: '\n        Assets Component\n        <button (click)="refresh()">Refresh</button>\n        <!--\n        <div *ngIf="gameservice.scene">\n            <a *ngFor="let obj of gameservice.scene.children">\n                <label>{{obj.name}}</label>\n            </a>\n        </div>\n        -->\n    '
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

},{"../services/game.service":13,"@angular/core":"@angular/core"}],5:[function(require,module,exports){
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

var _dec, _class;

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditorMenu = exports.EditorMenu = (_dec = (0, _core.Component)({
    selector: 'editormenu',
    template: '\n        EditorMenu\n    '
}), _dec(_class = function EditorMenu() {
    _classCallCheck(this, EditorMenu);
}) || _class);

},{"@angular/core":"@angular/core"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavMenu = undefined;

var _dec, _class;

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavMenu = exports.NavMenu = (_dec = (0, _core.Component)({
    selector: 'navmenu',
    template: '\n        <!-- NavMenu -->\n        <a href="#">File</a>\n        <a href="#">Edit</a>\n        <a href="#">Components</a>\n        <a href="#">Packages</a>\n        <a href="#">Help</a>\n    '
}), _dec(_class = function NavMenu() {
    _classCallCheck(this, NavMenu);
}) || _class);

},{"@angular/core":"@angular/core"}],8:[function(require,module,exports){
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
    template: '\n        Scene Component\n        <button (click)="refresh()">Refresh</button>\n        <div *ngIf="gameservice.scene">\n            <a *ngFor="let obj of gameservice.scene.children">\n                <label>{{obj.name}}</label>\n            </a>\n        </div>\n    '
}), _dec(_class = function () {
    function SceneList(gameservice) {
        _classCallCheck(this, SceneList);

        //console.log(gameservice);
        this.gameservice = gameservice;
    }

    _createClass(SceneList, [{
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

},{"../services/game.service":13,"@angular/core":"@angular/core"}],9:[function(require,module,exports){
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
    template: '\n        Panel directory folder\n    '
}), _dec(_class = function ScriptEditorExplore() {
    _classCallCheck(this, ScriptEditorExplore);
}) || _class);

},{"@angular/core":"@angular/core"}],10:[function(require,module,exports){
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
    template: '\n        <div style="height:100%;width:100%;">\n            <div style="width:10%;height:100%;float:left;margin:0;padding:0;">\n                <scripteditormenu></scripteditormenu>\n                <scripteditorexplore></scripteditorexplore>\n            </div>\n            <div style="width:90%;height:100%;float:left;">\n            <codeeditor-component style="margin:0;padding:0;"></codeeditor-component>\n            </div>\n        </div>\n    '
}), _dec(_class = function ScriptEditorLayout() {
    _classCallCheck(this, ScriptEditorLayout);
}) || _class);

},{"@angular/core":"@angular/core"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ScriptEditorMenu = undefined;

var _dec, _class;

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScriptEditorMenu = exports.ScriptEditorMenu = (_dec = (0, _core.Component)({
    selector: 'scripteditormenu',
    template: '\n        Script Action\n    '
}), _dec(_class = function ScriptEditorMenu() {
    _classCallCheck(this, ScriptEditorMenu);
}) || _class);

},{"@angular/core":"@angular/core"}],12:[function(require,module,exports){
'use strict';

require('babel-polyfill');

require('zone.js/dist/zone');

var _platformBrowserDynamic = require('@angular/platform-browser-dynamic');

var _app = require('./app.module');

//main entry and setup boot

(0, _platformBrowserDynamic.platformBrowserDynamic)().bootstrapModule(_app.AppModule);

},{"./app.module":3,"@angular/platform-browser-dynamic":"@angular/platform-browser-dynamic","babel-polyfill":"babel-polyfill","zone.js/dist/zone":"zone.js/dist/zone"}],13:[function(require,module,exports){
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

},{"@angular/core":"@angular/core"}]},{},[12])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwic3JjXFxhcHAuY29tcG9uZW50LmpzIiwic3JjXFxhcHAubW9kdWxlLmpzIiwic3JjXFxjb21wb25lbnRzXFxhc3NldHMuY29tcG9uZW50LmpzIiwic3JjXFxjb21wb25lbnRzXFxjb2RlZWRpdG9yLmNvbXBvbmVudC5qcyIsInNyY1xcY29tcG9uZW50c1xcZWRpdG9ybWVudS5jb21wb25lbnQuanMiLCJzcmNcXGNvbXBvbmVudHNcXG5hdm1lbnUuY29tcG9uZW50LmpzIiwic3JjXFxjb21wb25lbnRzXFxzY2VuZS5jb21wb25lbnQuanMiLCJzcmNcXGNvbXBvbmVudHNcXHNjcmlwdGVkaXRvcmV4cGxvcmUuY29tcG9uZW50LmpzIiwic3JjXFxjb21wb25lbnRzXFxzY3JpcHRlZGl0b3JsYXlvdXQuY29tcG9uZW50LmpzIiwic3JjXFxjb21wb25lbnRzXFxzY3JpcHRlZGl0b3JtZW51LmNvbXBvbmVudC5qcyIsInNyY1xcaW5kZXguanMiLCJzcmNcXHNlcnZpY2VzXFxnYW1lLnNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7Ozs7Ozs7Ozs7a0JDQUE7O0FBUUE7O0FBTkE7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBR0E7O0FBQ0E7O0FBQ0E7Ozs7SUF5QmEsTyxXQUFBLE8sV0F2QloscUJBQVU7QUFDUCxjQUFVLFVBREg7QUFFUDtBQUZPLENBQVYsQztBQTJCRyxxQkFBWSxXQUFaLEVBQW9DO0FBQUE7O0FBQUEsYUFIcEMsS0FHb0MsR0FINUIscUJBRzRCO0FBQUEsYUFGcEMsS0FFb0MsR0FGNUIsSUFFNEI7O0FBQ2hDLGdCQUFRLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsYUFBSyxXQUFMLEdBQW1CLFdBQW5CO0FBQ0EsWUFBSSxPQUFPLElBQVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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S0FBTCxHQUFhLE1BQWI7QUFDSDs7O21DQUNTO0FBQ04sbUJBQU8sS0FBSyxLQUFaO0FBQ0giLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIiwiLy9zZXR1cCBhcHBcclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIElucHV0LCBBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuaW1wb3J0IHtHYW1lU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9nYW1lLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0ICcuL3RocmVlLm1pbi5qcyc7XHJcbi8vaW1wb3J0ICcuL3RocmVlLm1vZHVsZS5qcyc7XHJcblxyXG5pbXBvcnQgJy4vanF1ZXJ5Lm1pbi5qcyc7XHJcbmltcG9ydCAnLi9qcXVlcnktdWkubWluLmpzJztcclxuaW1wb3J0ICcuL2pxdWVyeS5sYXlvdXQubWluLmpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtYWluLWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG5cclxuICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiBzdHlsZT1cImhlaWdodDoxMDAlO3dpZHRoOjEwMCU7XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVpLWxheW91dC1jZW50ZXJcIiBzdHlsZT1cIm1hcmdpbiAgOiAwO3BhZGRpbmcgOiAwO1wiPlxyXG4gICAgICAgICAgICA8Y2FudmFzIGlkPVwicmVuZGVyQ2FudmFzXCI+PC9jYW52YXM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVpLWxheW91dC1ub3J0aFwiPlxyXG4gICAgICAgICAgICA8bmF2bWVudT48L25hdm1lbnU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVpLWxheW91dC1zb3V0aFwiIHN0eWxlPVwibWFyZ2luOiAwO3BhZGRpbmcgOiAwO1wiPlxyXG4gICAgICAgICAgICA8c2NyaXB0ZWRpdG9ybGF5b3V0Pjwvc2NyaXB0ZWRpdG9ybGF5b3V0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1sYXlvdXQtZWFzdFwiPlxyXG4gICAgICAgICAgICA8c2NlbmUtbGlzdD48L3NjZW5lLWxpc3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVpLWxheW91dC13ZXN0XCI+XHJcbiAgICAgICAgICAgIDxhc3NldHMtbGlzdD48L2Fzc2V0cy1saXN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbkFwcCB7XHJcbiAgICB0ZXh0MCA9IFwidGVzdCB0ZXh0IHN0cmluZy4uLlwiO1xyXG4gICAgc2NlbmUgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWVzZXJ2aWNlOkdhbWVTZXJ2aWNlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhnYW1lc2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lc2VydmljZSA9IGdhbWVzZXJ2aWNlO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIC8vdmFyIHRleHQgPSBcImhlbGxvXCI7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwibWFpbi1hcHBcIik7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKT0+e1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwibG9hZGVkP1wiKTtcclxuICAgICAgICAgICAgdmFyIGxheW91dCA9ICAkKCcjY29udGFpbmVyJykubGF5b3V0KHtyZXNpemFibGU6dHJ1ZX0pO1xyXG4gICAgICAgICAgICAvL2xheW91dC50b2dnbGUoXCJub3J0aFwiKTtcclxuICAgICAgICAgICAgbGF5b3V0LnNpemVQYW5lKFwic291dGhcIiwgMzAwKTtcclxuICAgICAgICAgICAgc2VsZi5pbml0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbmRlckNhbnZhc1wiKTtcclxuXHJcbiAgICAgICAgdmFyIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblx0XHR2YXIgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCA3NSwgd2luZG93LmlubmVyV2lkdGgvd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDAgKTtcclxuXHJcblx0XHQvL3ZhciByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XHJcbiAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBjYW52YXM6IGNhbnZhcyB9KTtcclxuXHRcdC8vcmVuZGVyZXIuc2V0U2l6ZSggd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCApO1xyXG4gICAgICAgIHJlbmRlcmVyLnNldFNpemUoIDgwMCwgNjAwICk7XHJcblx0XHQvL2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIHJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcclxuXHJcblx0XHR2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDEsIDEsIDEgKTtcclxuXHRcdHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogMHgwMGZmMDAgfSApO1xyXG5cdFx0dmFyIGN1YmUgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcbiAgICAgICAgY3ViZS5uYW1lID0gXCJjdWJlXCI7XHJcblx0XHRzY2VuZS5hZGQoIGN1YmUgKTtcclxuICAgICAgICBjdWJlID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG4gICAgICAgIGN1YmUubmFtZSA9IFwiY3ViZVwiO1xyXG4gICAgICAgIHNjZW5lLmFkZCggY3ViZSApO1xyXG5cclxuICAgICAgICB0aGlzLmdhbWVzZXJ2aWNlLnNjZW5lID0gc2NlbmU7XHJcblxyXG5cdFx0Y2FtZXJhLnBvc2l0aW9uLnogPSA1O1xyXG5cclxuXHRcdHZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSggcmVuZGVyICk7XHJcblxyXG5cdFx0XHRjdWJlLnJvdGF0aW9uLnggKz0gMC4xO1xyXG5cdFx0XHRjdWJlLnJvdGF0aW9uLnkgKz0gMC4xO1xyXG5cclxuXHRcdFx0cmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRyZW5kZXIoKTtcclxuICAgIH1cclxufVxyXG4iLCIvL3NldHVwIGFwcFxyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgSW5wdXQsIEF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vL2ltcG9ydCB7IExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG4vL2ltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcblxyXG5pbXBvcnQge0FjZUVkaXRvckRpcmVjdGl2ZSwgQWNlRWRpdG9yQ29tcG9uZW50fSBmcm9tICduZzItYWNlLWVkaXRvcic7XHJcblxyXG5pbXBvcnQgeyBNYWluQXBwIH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7QXNzZXRzTGlzdH0gZnJvbSAnLi9jb21wb25lbnRzL2Fzc2V0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NjZW5lTGlzdH0gZnJvbSAnLi9jb21wb25lbnRzL3NjZW5lLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQge0NvZGVFZGl0b3J9IGZyb20gJy4vY29tcG9uZW50cy9jb2RlZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2NyaXB0RWRpdG9yRXhwbG9yZX0gZnJvbSAnLi9jb21wb25lbnRzL3NjcmlwdGVkaXRvcmV4cGxvcmUuY29tcG9uZW50JztcclxuaW1wb3J0IHtTY3JpcHRFZGl0b3JMYXlvdXR9IGZyb20gJy4vY29tcG9uZW50cy9zY3JpcHRlZGl0b3JsYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHtTY3JpcHRFZGl0b3JNZW51fSBmcm9tICcuL2NvbXBvbmVudHMvc2NyaXB0ZWRpdG9ybWVudS5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHtFZGl0b3JNZW51fSBmcm9tICcuL2NvbXBvbmVudHMvZWRpdG9ybWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQge05hdk1lbnV9IGZyb20gJy4vY29tcG9uZW50cy9uYXZtZW51LmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQge0dhbWVTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2dhbWUuc2VydmljZSc7XHJcblxyXG4vL2NvbnN0IHJvdXRpbmcgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAgICAvL3sgcGF0aDogJycsIGNvbXBvbmVudDogSGVsbG8gfSxcclxuICAgIC8veyBwYXRoOiAnY2lhby86bmFtZScsIGNvbXBvbmVudDogQ2lhbyB9LFxyXG4vL10pO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLy8sXHJcbiAgICAgICAgLy9yb3V0aW5nLFxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIE1haW5BcHAsXHJcbiAgICAgICAgQWNlRWRpdG9yRGlyZWN0aXZlLFxyXG4gICAgICAgIEFjZUVkaXRvckNvbXBvbmVudCxcclxuICAgICAgICBFZGl0b3JNZW51LFxyXG4gICAgICAgIFNjcmlwdEVkaXRvckxheW91dCxcclxuICAgICAgICBTY3JpcHRFZGl0b3JNZW51LFxyXG4gICAgICAgIFNjcmlwdEVkaXRvckV4cGxvcmUsXHJcbiAgICAgICAgQ29kZUVkaXRvcixcclxuICAgICAgICBBc3NldHNMaXN0LFxyXG4gICAgICAgIFNjZW5lTGlzdCxcclxuICAgICAgICBOYXZNZW51XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgR2FtZVNlcnZpY2VcclxuICAgIF0sXHJcbiAgICBib290c3RyYXA6IFtNYWluQXBwXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtHYW1lU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvZ2FtZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhc3NldHMtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIEFzc2V0cyBDb21wb25lbnRcclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJyZWZyZXNoKClcIj5SZWZyZXNoPC9idXR0b24+XHJcbiAgICAgICAgPCEtLVxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJnYW1lc2VydmljZS5zY2VuZVwiPlxyXG4gICAgICAgICAgICA8YSAqbmdGb3I9XCJsZXQgb2JqIG9mIGdhbWVzZXJ2aWNlLnNjZW5lLmNoaWxkcmVuXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+e3tvYmoubmFtZX19PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC0tPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXNzZXRzTGlzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lc2VydmljZTpHYW1lU2VydmljZSl7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhnYW1lc2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lc2VydmljZSA9IGdhbWVzZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2goKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlZnJlc2hcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nYW1lc2VydmljZSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmdhbWVzZXJ2aWNlLnNjZW5lLmNoaWxkcmVuWzBdKTtcclxuICAgIH1cclxufVxyXG4iLCIvL2FkZCBcIkFjZUVkaXRvckRpcmVjdGl2ZVwiIHRvIHlvdXIgbW9kdWxlcyBsaXN0XHJcblxyXG5pbXBvcnQgeyBBY2VFZGl0b3JEaXJlY3RpdmUgfSBmcm9tICduZzItYWNlLWVkaXRvcic7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb2RlZWRpdG9yLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBhY2UtZWRpdG9yXHJcbiAgICAgICBbdGV4dF09XCJ0ZXh0XCJcclxuICAgICAgIFtvcHRpb25zXT1cIm9wdGlvbnNcIlxyXG4gICAgICAgW3JlYWRPbmx5XT1cImZhbHNlXCJcclxuICAgICAgIFthdXRvVXBkYXRlQ29udGVudF09XCJ0cnVlXCJcclxuICAgICAgICh0ZXh0Q2hhbmdlZCk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgIHN0eWxlPVwibWluLWhlaWdodDogMjAwcHg7IGhlaWdodDoxMDAlOyB3aWR0aDoxMDAlOyBvdmVyZmxvdzogYXV0bzttYXJnaW46IDA7cGFkZGluZyA6IDA7XCI+PC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2RlRWRpdG9yIHtcclxuICAgIHRleHQ6c3RyaW5nID0gXCJUZXN0XCI7XHJcbiAgICAvL29wdGlvbnM6YW55ID0ge21heExpbmVzOiAxMDAwLCBwcmludE1hcmdpbjogZmFsc2V9O1xyXG4gICAgb3B0aW9uczphbnkgPSB7IHByaW50TWFyZ2luOiBmYWxzZX07XHJcblxyXG4gICAgb25DaGFuZ2UoY29kZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV3IGNvZGVcIiwgY29kZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZWRpdG9ybWVudScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIEVkaXRvck1lbnVcclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRvck1lbnUge1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduYXZtZW51JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPCEtLSBOYXZNZW51IC0tPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+RmlsZTwvYT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPkVkaXQ8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5Db21wb25lbnRzPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+UGFja2FnZXM8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5IZWxwPC9hPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2TWVudSB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dhbWVTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9nYW1lLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NjZW5lLWxpc3QnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICBTY2VuZSBDb21wb25lbnRcclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJyZWZyZXNoKClcIj5SZWZyZXNoPC9idXR0b24+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cImdhbWVzZXJ2aWNlLnNjZW5lXCI+XHJcbiAgICAgICAgICAgIDxhICpuZ0Zvcj1cImxldCBvYmogb2YgZ2FtZXNlcnZpY2Uuc2NlbmUuY2hpbGRyZW5cIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD57e29iai5uYW1lfX08L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY2VuZUxpc3Qge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZXNlcnZpY2U6R2FtZVNlcnZpY2Upe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZ2FtZXNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuZ2FtZXNlcnZpY2UgPSBnYW1lc2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWZyZXNoXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2FtZXNlcnZpY2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2FtZXNlcnZpY2Uuc2NlbmUuY2hpbGRyZW5bMF0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NjcmlwdGVkaXRvcmV4cGxvcmUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICBQYW5lbCBkaXJlY3RvcnkgZm9sZGVyXHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY3JpcHRFZGl0b3JFeHBsb3JlIHtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2NyaXB0ZWRpdG9ybGF5b3V0JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDoxMDAlO3dpZHRoOjEwMCU7XCI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDoxMCU7aGVpZ2h0OjEwMCU7ZmxvYXQ6bGVmdDttYXJnaW46MDtwYWRkaW5nOjA7XCI+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0ZWRpdG9ybWVudT48L3NjcmlwdGVkaXRvcm1lbnU+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0ZWRpdG9yZXhwbG9yZT48L3NjcmlwdGVkaXRvcmV4cGxvcmU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6OTAlO2hlaWdodDoxMDAlO2Zsb2F0OmxlZnQ7XCI+XHJcbiAgICAgICAgICAgIDxjb2RlZWRpdG9yLWNvbXBvbmVudCBzdHlsZT1cIm1hcmdpbjowO3BhZGRpbmc6MDtcIj48L2NvZGVlZGl0b3ItY29tcG9uZW50PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNjcmlwdEVkaXRvckxheW91dCB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NjcmlwdGVkaXRvcm1lbnUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICBTY3JpcHQgQWN0aW9uXHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY3JpcHRFZGl0b3JNZW51IHtcclxuXHJcbn1cclxuIiwiLy9tYWluIGVudHJ5IGFuZCBzZXR1cCBib290XHJcblxyXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcclxuaW1wb3J0ICd6b25lLmpzL2Rpc3Qvem9uZSc7XHJcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5cclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJztcclxuXHJcbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2FtZVNlcnZpY2Uge1xyXG4gICAgc2NlbmUgPSBudWxsO1xyXG5cclxuICAgIHNldFNjZW5lKF9zY2VuZSl7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IF9zY2VuZTtcclxuICAgIH1cclxuICAgIGdldFNjZW5lKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmU7XHJcbiAgICB9XHJcbn1cclxuIl19