//setup component main page html

import { NgModule, Component, Input, Attribute } from '@angular/core';
import 'rxjs/add/operator/map';

import {GameService} from './services/game.service';

import './three.min.js';
//import './three.module.js';

import './jquery.min.js';
import './jquery-ui.min.js';
import './jquery.layout.min.js';

@Component({
    selector: 'main-app',
    template: `
    <gameeditor></gameeditor>
    `
})
export class MainApp {
    constructor(gameservice:GameService){
        console.log(gameservice);
        this.gameservice = gameservice;
    }
}
