import { Component } from '@angular/core';
import {GameService} from '../services/game.service';

@Component({
    selector: 'objectprops',
    template: `
        <div style="height:50%;width:100%">
            Props:
            <!--<button (click)="refresh()">Refresh</button>-->
            <div *ngIf="gameservice.selectobject">
                Object: {{gameservice.selectobject.uuid}}
                <br><label>px:<input type="number" ng-model='val | number: 2' [ngModel]="gameservice.selectobject.position.x" value="{{gameservice.selectobject.position.x}}" (ngModelChange)="objposx($event)" step ="0.000001" /></label>
                <br><label>py:<input type="number" [ngModel]="gameservice.selectobject.position.y" value="{{gameservice.selectobject.position.y}}" (ngModelChange)="objposy($event)" step ="0.000001" /></label>
                <br><label>pz:<input type="number" [ngModel]="gameservice.selectobject.position.z" value="{{gameservice.selectobject.position.z}}" (ngModelChange)="objposz($event)" step ="0.000001" /></label>
            </div>
        </div>
    `
})
export class Objectprops {
    posx = 0;

    constructor(gameservice:GameService){
        //console.log(gameservice);
        this.gameservice = gameservice;
    }

    objposx(value){
        console.log(value);
        console.log("pos x");
        if(this.gameservice.selectobject !=null){
            this.gameservice.selectobject.position.x = value;
        }
    }

    objposy(value){
        console.log(value);
        console.log("pos y");
        if(this.gameservice.selectobject !=null){
            this.gameservice.selectobject.position.y = value;
        }
    }

    objposz(value){
        console.log(value);
        console.log("pos z");
        if(this.gameservice.selectobject !=null){
            this.gameservice.selectobject.position.z = value;
        }
    }

    refresh(){
        //console.log("refresh");
        //console.log(this.gameservice);
        //console.log(this.gameservice.scene.children[0]);
    }
}
