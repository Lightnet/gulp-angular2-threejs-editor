import { Component } from '@angular/core';
import {GameService} from '../services/game.service';

@Component({
    selector: 'objectprops',
    template: `
        <div style="height:50%;width:100%">
            Object
            <button (click)="refresh()">Refresh</button>
        </div>
    `
})
export class Objectprops {
    constructor(gameservice:GameService){
        //console.log(gameservice);
        this.gameservice = gameservice;
    }

    refresh(){
        //console.log("refresh");
        //console.log(this.gameservice);
        //console.log(this.gameservice.scene.children[0]);
    }
}
