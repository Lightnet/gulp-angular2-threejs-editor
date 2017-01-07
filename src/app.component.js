//setup app

import { NgModule, Component, Input, Attribute } from '@angular/core';
import 'rxjs/add/operator/map';

import './three.min.js';
//import './three.module.js';

import './jquery.min.js';
import './jquery-ui.min.js';
import './jquery.layout.min.js';

@Component({
    selector: 'main-app',
    template: `

    <div id="container" style="height:100%;width:100%;">
        <div class="ui-layout-center" style="margin  : 0;padding : 0;">
            <canvas id="renderCanvas"></canvas>
        </div>
        <div class="ui-layout-north">North {{text0}}</div>
        <div class="ui-layout-south" style="margin: 0;padding : 0;">
            <codeeditor-component style="margin: 0;padding : 0;"></codeeditor-component>
        </div>
        <div class="ui-layout-east">East</div>
        <div class="ui-layout-west">West</div>
    </div>
    `,
})
export class MainApp {
    text0 = "test text string...";
    scene = null;

    constructor(){
        var self = this;
        //console.log(this);
        //var text = "hello";
        //console.log(this);
        //console.log("main-app");
        window.addEventListener('DOMContentLoaded', ()=>{
            //console.log("loaded?");
            $('#container').layout({resizable:true});
            self.init();
        });
    }

    init(){
        var canvas = document.getElementById("renderCanvas");

        var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

		//var renderer = new THREE.WebGLRenderer();
        var renderer = new THREE.WebGLRenderer({ canvas: canvas });
		//renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setSize( 800, 600 );
		//document.body.appendChild( renderer.domElement );

		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		var cube = new THREE.Mesh( geometry, material );
		scene.add( cube );

		camera.position.z = 5;

		var render = function () {
			requestAnimationFrame( render );

			cube.rotation.x += 0.1;
			cube.rotation.y += 0.1;

			renderer.render(scene, camera);
		};

		render();
    }
}
