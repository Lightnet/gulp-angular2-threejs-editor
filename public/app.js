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

require('./three.min.js');

require('./jquery.min.js');

require('./jquery-ui.min.js');

require('./jquery.layout.min.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainApp = exports.MainApp = (_dec = (0, _core.Component)({
    selector: 'main-app',
    template: '\n\n    <div id="container" style="height:100%;width:100%;">\n        <div class="ui-layout-center" style="margin  : 0;padding : 0;">\n            <canvas id="renderCanvas"></canvas>\n        </div>\n        <div class="ui-layout-north">North {{text0}}</div>\n        <div class="ui-layout-south" style="margin: 0;padding : 0;">\n            <codeeditor-component style="margin: 0;padding : 0;"></codeeditor-component>\n        </div>\n        <div class="ui-layout-east">East</div>\n        <div class="ui-layout-west">West</div>\n    </div>\n    '
}), _dec(_class = function () {
    function MainApp() {
        _classCallCheck(this, MainApp);

        this.text0 = "test text string...";
        this.scene = null;

        var self = this;
        //console.log(this);
        //var text = "hello";
        //console.log(this);
        //console.log("main-app");
        window.addEventListener('DOMContentLoaded', function () {
            //console.log("loaded?");
            $('#container').layout({ resizable: true });
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
            scene.add(cube);

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

},{"./jquery-ui.min.js":1,"./jquery.layout.min.js":1,"./jquery.min.js":1,"./three.min.js":1,"@angular/core":"@angular/core","rxjs/add/operator/map":"rxjs/add/operator/map"}],3:[function(require,module,exports){
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

var _codeeditor = require('./codeeditor.component');

var _app = require('./app.component');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//const routing = RouterModule.forRoot([
//{ path: '', component: Hello },
//{ path: 'ciao/:name', component: Ciao },
//]);

var AppModule = exports.AppModule = (_dec = (0, _core.NgModule)({
    imports: [_platformBrowser.BrowserModule //,
    //routing,
    ],
    declarations: [_app.MainApp, _ng2AceEditor.AceEditorDirective, _ng2AceEditor.AceEditorComponent, _codeeditor.CodeEditor],
    //providers: [
    //Greeter,
    //{ provide: LocationStrategy, useClass: HashLocationStrategy },
    //],
    bootstrap: [_app.MainApp]
}), _dec(_class = function AppModule() {
    _classCallCheck(this, AppModule);
}) || _class);

},{"./app.component":2,"./codeeditor.component":4,"@angular/core":"@angular/core","@angular/platform-browser":"@angular/platform-browser","ng2-ace-editor":"ng2-ace-editor","rxjs/add/operator/map":"rxjs/add/operator/map"}],4:[function(require,module,exports){
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
        this.options = { maxLines: 1000, printMargin: false };
    }

    _createClass(CodeEditor, [{
        key: 'onChange',
        value: function onChange(code) {
            console.log("new code", code);
        }
    }]);

    return CodeEditor;
}()) || _class);

},{"@angular/core":"@angular/core","ng2-ace-editor":"ng2-ace-editor","zone.js/dist/zone":"zone.js/dist/zone"}],5:[function(require,module,exports){
'use strict';

require('babel-polyfill');

require('zone.js/dist/zone');

var _platformBrowserDynamic = require('@angular/platform-browser-dynamic');

var _app = require('./app.module');

//main entry and setup boot

(0, _platformBrowserDynamic.platformBrowserDynamic)().bootstrapModule(_app.AppModule);

},{"./app.module":3,"@angular/platform-browser-dynamic":"@angular/platform-browser-dynamic","babel-polyfill":"babel-polyfill","zone.js/dist/zone":"zone.js/dist/zone"}]},{},[5])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwic3JjXFxhcHAuY29tcG9uZW50LmpzIiwic3JjXFxhcHAubW9kdWxlLmpzIiwic3JjXFxjb2RlZWRpdG9yLmNvbXBvbmVudC5qcyIsInNyY1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7Ozs7Ozs7Ozs7a0JDQUE7O0FBTUE7O0FBSkE7O0FBQ0E7O0FBRUE7O0FBR0E7O0FBQ0E7O0FBQ0E7Ozs7SUFtQmEsTyxXQUFBLE8sV0FqQloscUJBQVU7QUFDUCxjQUFVLFVBREg7QUFFUDtBQUZPLENBQVYsQztBQXFCRyx1QkFBYTtBQUFBOztBQUFBLGFBSGIsS0FHYSxHQUhMLHFCQUdLO0FBQUEsYUFGYixLQUVhLEdBRkwsSUFFSzs7QUFDVCxZQUFJLE9BQU8sSUFBWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBTyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBSTtBQUM1QztBQUNBLGNBQUUsWUFBRixFQUFnQixNQUFoQixDQUF1QixFQUFDLFdBQVUsSUFBWCxFQUF2QjtBQUNBLGlCQUFLLElBQUw7QUFDSCxTQUpEO0FBS0g7Ozs7K0JBRUs7QUFDRixnQkFBSSxTQUFTLFNBQVMsY0FBVCxDQUF3QixjQUF4QixDQUFiOztBQUVBLGdCQUFJLFFBQVEsSUFBSSxNQUFNLEtBQVYsRUFBWjtBQUNOLGdCQUFJLFNBQVMsSUFBSSxNQUFNLGlCQUFWLENBQTZCLEVBQTdCLEVBQWlDLE9BQU8sVUFBUCxHQUFrQixPQUFPLFdBQTFELEVBQXVFLEdBQXZFLEVBQTRFLElBQTVFLENBQWI7O0FBRUE7QUFDTSxnQkFBSSxXQUFXLElBQUksTUFBTSxhQUFWLENBQXdCLEVBQUUsUUFBUSxNQUFWLEVBQXhCLENBQWY7QUFDTjtBQUNNLHFCQUFTLE9BQVQsQ0FBa0IsR0FBbEIsRUFBdUIsR0FBdkI7QUFDTjs7QUFFQSxnQkFBSSxXQUFXLElBQUksTUFBTSxXQUFWLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCLENBQWY7QUFDQSxnQkFBSSxXQUFXLElBQUksTUFBTSxpQkFBVixDQUE2QixFQUFFLE9BQU8sUUFBVCxFQUE3QixDQUFmO0FBQ0EsZ0JBQUksT0FBTyxJQUFJLE1BQU0sSUFBVixDQUFnQixRQUFoQixFQUEwQixRQUExQixDQUFYO0FBQ0Esa0JBQU0sR0FBTixDQUFXLElBQVg7O0FBRUEsbUJBQU8sUUFBUCxDQUFnQixDQUFoQixHQUFvQixDQUFwQjs7QUFFQSxnQkFBSSxTQUFTLFNBQVQsTUFBUyxHQUFZO0FBQ3hCLHNDQUF1QixNQUF2Qjs7QUFFQSxxQkFBSyxRQUFMLENBQWMsQ0FBZCxJQUFtQixHQUFuQjtBQUNBLHFCQUFLLFFBQUwsQ0FBYyxDQUFkLElBQW1CLEdBQW5COztBQUVBLHlCQUFTLE1BQVQsQ0FBZ0IsS0FBaEIsRUFBdUIsTUFBdkI7QUFDQSxhQVBEOztBQVNBO0FBQ0c7Ozs7Ozs7Ozs7Ozs7O2tCQzNFTDs7QUFHQTs7QUFFQTs7O0FBSEE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7QUFFQTtBQUNJO0FBQ0E7QUFDSjs7SUFzQmEsUyxXQUFBLFMsV0FwQlosb0JBQVM7QUFDTixhQUFTLGdDQUNRO0FBQ2I7QUFGSyxLQURIO0FBS04sa0JBQWMsMEdBTFI7QUFjTjtBQUNJO0FBQ0E7QUFDSjtBQUNBLGVBQVc7QUFsQkwsQ0FBVCxDOzs7Ozs7Ozs7Ozs7OztrQkNsQkQ7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7SUFjYSxVLFdBQUEsVSxXQVpaLHFCQUFVO0FBQ1AsY0FBVSxzQkFESDtBQUVQO0FBRk8sQ0FBVixDOzs7O2FBYUcsSSxHQUFjLE07YUFDZCxPLEdBQWMsRUFBQyxVQUFVLElBQVgsRUFBaUIsYUFBYSxLQUE5QixFOzs7OztpQ0FFTCxJLEVBQU07QUFDWCxvQkFBUSxHQUFSLENBQVksVUFBWixFQUF3QixJQUF4QjtBQUNIOzs7Ozs7Ozs7QUN0Qkw7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBTkE7O0FBUUEsc0RBQXlCLGVBQXpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiIsIi8vc2V0dXAgYXBwXHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBJbnB1dCwgQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuXHJcbmltcG9ydCAnLi90aHJlZS5taW4uanMnO1xyXG4vL2ltcG9ydCAnLi90aHJlZS5tb2R1bGUuanMnO1xyXG5cclxuaW1wb3J0ICcuL2pxdWVyeS5taW4uanMnO1xyXG5pbXBvcnQgJy4vanF1ZXJ5LXVpLm1pbi5qcyc7XHJcbmltcG9ydCAnLi9qcXVlcnkubGF5b3V0Lm1pbi5qcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbWFpbi1hcHAnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuXHJcbiAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgc3R5bGU9XCJoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1sYXlvdXQtY2VudGVyXCIgc3R5bGU9XCJtYXJnaW4gIDogMDtwYWRkaW5nIDogMDtcIj5cclxuICAgICAgICAgICAgPGNhbnZhcyBpZD1cInJlbmRlckNhbnZhc1wiPjwvY2FudmFzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1sYXlvdXQtbm9ydGhcIj5Ob3J0aCB7e3RleHQwfX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidWktbGF5b3V0LXNvdXRoXCIgc3R5bGU9XCJtYXJnaW46IDA7cGFkZGluZyA6IDA7XCI+XHJcbiAgICAgICAgICAgIDxjb2RlZWRpdG9yLWNvbXBvbmVudCBzdHlsZT1cIm1hcmdpbjogMDtwYWRkaW5nIDogMDtcIj48L2NvZGVlZGl0b3ItY29tcG9uZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1sYXlvdXQtZWFzdFwiPkVhc3Q8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidWktbGF5b3V0LXdlc3RcIj5XZXN0PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluQXBwIHtcclxuICAgIHRleHQwID0gXCJ0ZXN0IHRleHQgc3RyaW5nLi4uXCI7XHJcbiAgICBzY2VuZSA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICAvL3ZhciB0ZXh0ID0gXCJoZWxsb1wiO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIm1haW4tYXBwXCIpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCk9PntcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImxvYWRlZD9cIik7XHJcbiAgICAgICAgICAgICQoJyNjb250YWluZXInKS5sYXlvdXQoe3Jlc2l6YWJsZTp0cnVlfSk7XHJcbiAgICAgICAgICAgIHNlbGYuaW5pdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW5kZXJDYW52YXNcIik7XHJcblxyXG4gICAgICAgIHZhciBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cdFx0dmFyIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNzUsIHdpbmRvdy5pbm5lcldpZHRoL3dpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwICk7XHJcblxyXG5cdFx0Ly92YXIgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xyXG4gICAgICAgIHZhciByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgY2FudmFzOiBjYW52YXMgfSk7XHJcblx0XHQvL3JlbmRlcmVyLnNldFNpemUoIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcclxuICAgICAgICByZW5kZXJlci5zZXRTaXplKCA4MDAsIDYwMCApO1xyXG5cdFx0Ly9kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCByZW5kZXJlci5kb21FbGVtZW50ICk7XHJcblxyXG5cdFx0dmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAxLCAxLCAxICk7XHJcblx0XHR2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgY29sb3I6IDB4MDBmZjAwIH0gKTtcclxuXHRcdHZhciBjdWJlID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cdFx0c2NlbmUuYWRkKCBjdWJlICk7XHJcblxyXG5cdFx0Y2FtZXJhLnBvc2l0aW9uLnogPSA1O1xyXG5cclxuXHRcdHZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSggcmVuZGVyICk7XHJcblxyXG5cdFx0XHRjdWJlLnJvdGF0aW9uLnggKz0gMC4xO1xyXG5cdFx0XHRjdWJlLnJvdGF0aW9uLnkgKz0gMC4xO1xyXG5cclxuXHRcdFx0cmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRyZW5kZXIoKTtcclxuICAgIH1cclxufVxyXG4iLCIvL3NldHVwIGFwcFxyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgSW5wdXQsIEF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vL2ltcG9ydCB7IExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG4vL2ltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcblxyXG5pbXBvcnQge0FjZUVkaXRvckRpcmVjdGl2ZSwgQWNlRWRpdG9yQ29tcG9uZW50fSBmcm9tICduZzItYWNlLWVkaXRvcic7XHJcblxyXG5pbXBvcnQge0NvZGVFZGl0b3J9IGZyb20gJy4vY29kZWVkaXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYWluQXBwIH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuXHJcbi8vY29uc3Qgcm91dGluZyA9IFJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICAgIC8veyBwYXRoOiAnJywgY29tcG9uZW50OiBIZWxsbyB9LFxyXG4gICAgLy97IHBhdGg6ICdjaWFvLzpuYW1lJywgY29tcG9uZW50OiBDaWFvIH0sXHJcbi8vXSk7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUvLyxcclxuICAgICAgICAvL3JvdXRpbmcsXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTWFpbkFwcCxcclxuICAgICAgICBBY2VFZGl0b3JEaXJlY3RpdmUsXHJcbiAgICAgICAgQWNlRWRpdG9yQ29tcG9uZW50LFxyXG4gICAgICAgIENvZGVFZGl0b3IsXHJcbiAgICAgICAgLy9IZWxsbyxcclxuICAgICAgICAvL0NpYW8sXHJcbiAgICAgICAgLy9MaW5rZXIsXHJcbiAgICBdLFxyXG4gICAgLy9wcm92aWRlcnM6IFtcclxuICAgICAgICAvL0dyZWV0ZXIsXHJcbiAgICAgICAgLy97IHByb3ZpZGU6IExvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneSB9LFxyXG4gICAgLy9dLFxyXG4gICAgYm9vdHN0cmFwOiBbTWFpbkFwcF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG5cclxufVxyXG4iLCIvL2FkZCBcIkFjZUVkaXRvckRpcmVjdGl2ZVwiIHRvIHlvdXIgbW9kdWxlcyBsaXN0XHJcblxyXG5pbXBvcnQgeyBBY2VFZGl0b3JEaXJlY3RpdmUgfSBmcm9tICduZzItYWNlLWVkaXRvcic7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb2RlZWRpdG9yLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBhY2UtZWRpdG9yXHJcbiAgICAgICBbdGV4dF09XCJ0ZXh0XCJcclxuICAgICAgIFtvcHRpb25zXT1cIm9wdGlvbnNcIlxyXG4gICAgICAgW3JlYWRPbmx5XT1cImZhbHNlXCJcclxuICAgICAgIFthdXRvVXBkYXRlQ29udGVudF09XCJ0cnVlXCJcclxuICAgICAgICh0ZXh0Q2hhbmdlZCk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgIHN0eWxlPVwibWluLWhlaWdodDogMjAwcHg7IGhlaWdodDoxMDAlOyB3aWR0aDoxMDAlOyBvdmVyZmxvdzogYXV0bzttYXJnaW46IDA7cGFkZGluZyA6IDA7XCI+PC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2RlRWRpdG9yIHtcclxuICAgIHRleHQ6c3RyaW5nID0gXCJUZXN0XCI7XHJcbiAgICBvcHRpb25zOmFueSA9IHttYXhMaW5lczogMTAwMCwgcHJpbnRNYXJnaW46IGZhbHNlfTtcclxuXHJcbiAgICBvbkNoYW5nZShjb2RlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXcgY29kZVwiLCBjb2RlKTtcclxuICAgIH1cclxufVxyXG4iLCIvL21haW4gZW50cnkgYW5kIHNldHVwIGJvb3RcclxuXHJcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xyXG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJztcclxuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcblxyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xyXG5cclxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xyXG4iXX0=