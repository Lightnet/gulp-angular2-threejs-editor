//setup app

import { NgModule, Component, Input, Attribute } from '@angular/core';
//import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
//import { ActivatedRoute, RouterModule } from '@angular/router';
import 'rxjs/add/operator/map';

import {AceEditorDirective, AceEditorComponent} from 'ng2-ace-editor';

import {CodeEditor} from './codeeditor.component';
import { MainApp } from './app.component';

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
        CodeEditor,
        //Hello,
        //Ciao,
        //Linker,
    ],
    //providers: [
        //Greeter,
        //{ provide: LocationStrategy, useClass: HashLocationStrategy },
    //],
    bootstrap: [MainApp],
})
export class AppModule {

}
