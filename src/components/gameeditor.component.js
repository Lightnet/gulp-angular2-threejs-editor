//setup app

import { NgModule, Component, Input, Attribute } from '@angular/core';
import 'rxjs/add/operator/map';

import {GameService} from '../services/game.service';

import '../three.min.js';
//import './three.module.js';

import '../jquery.min.js';
import '../jquery-ui.min.js';
import '../jquery.layout.min.js';

@Component({
    selector: 'gameeditor',
    template: `
    <editormenu></editormenu>
    <div id="container" style="height:100%;">
        <div class="ui-layout-center" style="margin: 0;padding : 0;">
            <canvas id="renderCanvas"></canvas>
        </div>
        <div class="ui-layout-north">

        </div>
        <div class="ui-layout-south" style="margin: 0;padding : 0;">
            <scripteditorlayout></scripteditorlayout>
        </div>
        <div class="ui-layout-east">
            <scene-list></scene-list>
            <objectprops></objectprops>
        </div>
        <div class="ui-layout-west">
            <assets-list></assets-list>
        </div>
    </div>
    `
})
export class GameEditor implements OnInit{

    constructor(gameservice:GameService){
        this.gameservice = gameservice;
        //var self = this;
        //window.addEventListener('DOMContentLoaded', ()=>{
            //console.log("loaded?");
            //self.init();
        //});
    }

    ngOnInit(): void {
        console.log("init layout!");

        this.setup_layout();
        this.init();
    }

    setup_layout(){
        var self = this;
        $('#container').layout({
            resizable:true,
            onresize:()=>{
                //console.log("resize");
                self.resizecanvas();
            }
        });
        var layout = $('#container').layout();
        layout.sizePane("south", 200);
        layout.toggle("north");
    }

    resizecanvas(){
        if((this.camera !=null)&&(this.renderer != null)){
            var layout = $('#container').layout();
            var width     = layout.state.center.innerWidth;
            var height     = layout.state.center.innerHeight;
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize( width,height );
            layout = null;
            width = null;
            height = null;
        }
    }

    init(){
        var canvas = document.getElementById("renderCanvas");

        var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

		//var renderer = new THREE.WebGLRenderer();
        var renderer = new THREE.WebGLRenderer({ canvas: canvas });
		//renderer.setSize( window.innerWidth, window.innerHeight );
        var layout = $('#container').layout();
        var width     = layout.state.center.innerWidth;
        var height     = layout.state.center.innerHeight;
        renderer.setSize( width, height );
		//document.body.appendChild( renderer.domElement );


        this.renderer = renderer;
        this.camera = camera;
		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		var cube = new THREE.Mesh( geometry, material );
        cube.name = "cube";
        //cube.position.x = 5;
        //cube.position.y = -0.1;
		scene.add( cube );
        //cube = new THREE.Mesh( geometry, material );
        //cube.name = "cube";
        //scene.add( cube );

        this.gameservice.scene = scene;

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
