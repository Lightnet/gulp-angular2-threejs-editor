import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
    scene = null;
    selectobject = null;

    setScene(_scene){
        this.scene = _scene;
    }
    getScene(){
        return this.scene;
    }
}
