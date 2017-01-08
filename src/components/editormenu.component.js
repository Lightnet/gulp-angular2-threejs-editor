import { Component } from '@angular/core';
import {GameService} from '../services/game.service';

import '../three.min.js';

@Component({
    selector: 'editormenu',
    styleUrls:  ['./components/editormenu.component.css'],
    template: `
    <ul>
    <li class="dropdown" >
    <a href="#" class="dropbtn">File</a>
    <div class="dropdown-content" style="z-index:5">
      <a href="#" (click)="scriptopenscene();">Open Scene</a>
      <a href="#" (click)="scriptloadscene();">Load Scene</a>
      <a href="#" (click)="scriptsavescene();">Save Scene</a>
      <a href="#" (click)="scriptclearscene();">Clear Scene</a>
      <a href="#" (click)="scriptdeletescene();">Delete Scene</a>
    </div>
    </li>
    <li class="dropdown">
    <a href="#" class="dropbtn">Edit</a>
    <div class="dropdown-content" style="z-index:5">
      <a href="#" (click)="scriptdeleteobject();">Delete Object</a>
    </div>
    </li>

    <li class="dropdown">
    <a href="#" class="dropbtn">Components</a>
    <div class="dropdown-content" style="z-index:5">
      <a href="#" (click)="addcube();" >Cube</a>
      <a href="#" (click)="addspshere();">Sphere</a>
      <a href="#" (click)="addsplane();">Plane</a>
      <a href="#" (click)="addmesh();">Mesh</a>
      <a href="#" (click)="addmaterial();">Material</a>
    </div>
    </li>
    <li class="dropdown"><a href="#" class="dropbtn">Packages</a>
    <div class="dropdown-content" style="z-index:5">
      <a href="#">Scripts</a>
      <a href="#">Mods</a>
    </div>
    </li>
    <li class="dropdown"><a href="#" class="dropbtn">Help</a>
    <div class="dropdown-content" style="z-index:5">
      <a href="#">Docs</a>
      <a href="#">About</a>
    </div>
    </li>
    <li><a href="#" class="dropbtn" (click)="scriptbuild();">Build</a></li>
    <li><a href="#" class="dropbtn" (click)="scriptdebug();">Debug</a></li>
    <li><a href="#" class="dropbtn" (click)="scriptplay();">Play</a></li>
    <li><a href="#" class="dropbtn" (click)="scriptstop();">Stop</a></li>
    </ul>
    `
})
export class EditorMenu {
    constructor(gameservice:GameService){
        this.gameservice = gameservice;
    }

    scriptopenscene(){
        console.log("scriptopenscene");
    }

    scriptloadscene(){
        console.log("scriptloadscene");
    }

    scriptsavescene(){
        console.log("scriptsavescene");
    }

    scriptdeletescene(){
        console.log("scriptdeletescene");
    }

    scriptclearscene(){
        console.log("scriptclearscene");
        if(this.gameservice.scene !=null){
            var objscene = this.gameservice.scene;
            while (objscene.children.length)
            {
                objscene.remove(objscene.children[0]);
            }
        }
    }

    scriptdeleteobject(){
        console.log('scriptdeleteobject');
    }

    scriptbuild(){
        console.log('scriptbuild');
    }

    scriptdebug(){
        console.log('scriptdebug');
    }

    scriptplay(){
        console.log('scriptplay');
    }

    scriptstop(){
        console.log('scriptstop');
    }





    addcube(){
        console.log("addcube");
        if(this.gameservice.scene !=null){
            console.log("cube");
            var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    		var material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
    		var cube = new THREE.Mesh( geometry, material );
            cube.name = "cube";
    		this.gameservice.scene.add( cube );
        }
    }

    addspshere(){
        console.log("addspshere");
    }

    addsplane(){
        console.log("addsplane");
    }

    addmesh(){
        console.log("addmesh");
    }

    addmaterial(){
        console.log("addmaterial");
    }
}
