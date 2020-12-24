import { draggableData } from './data/draggableData.js' ;
import { Draggable } from './component/Draggable.js' ;

new Draggable ({
    selector: '#draggable',
    data: draggableData,
});