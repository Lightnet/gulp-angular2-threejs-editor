//setup app

import { NgModule, Component, Input, Attribute } from '@angular/core';
//import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
//import { ActivatedRoute, RouterModule } from '@angular/router';
import 'rxjs/add/operator/map';

import {AceEditorDirective, AceEditorComponent} from 'ng2-ace-editor';

import { MainApp } from './app.component';

import {AssetsList} from './components/assets.component';
import {SceneList} from './components/scene.component';

import {CodeEditor} from './components/codeeditor.component';
import {ScriptEditorExplore} from './components/scripteditorexplore.component';
import {ScriptEditorLayout} from './components/scripteditorlayout.component';
import {ScriptEditorMenu} from './components/scripteditormenu.component';

import {EditorMenu} from './components/editormenu.component';
import {NavMenu} from './components/navmenu.component';

import {GameService} from './services/game.service';

//const routing = RouterModule.forRoot([
    //{ path: '', component: Hello },
    //{ path: 'ciao/:name', component: Ciao },
//]);

@NgModule({
    imports: [
        BrowserModule//,
        //routing,
    ],
    declarations: [
        MainApp,
        AceEditorDirective,
        AceEditorComponent,
        EditorMenu,
        ScriptEditorLayout,
        ScriptEditorMenu,
        ScriptEditorExplore,
        CodeEditor,
        AssetsList,
        SceneList,
        NavMenu
    ],
    providers: [
        GameService
    ],
    bootstrap: [MainApp],
})
export class AppModule {

}
