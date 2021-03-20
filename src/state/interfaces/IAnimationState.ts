import { State } from "../State";
import { Camera } from "../../geo/Camera";
import { Transform } from "../../geo/Transform";
import { LatLonAlt } from "../../api/interfaces/LatLonAlt";
import { Node } from "../../graph/Node";

export interface IAnimationState {
    reference: LatLonAlt;
    alpha: number;
    camera: Camera;
    zoom: number;
    currentNode: Node;
    currentCamera: Camera;
    previousNode: Node;
    trajectory: Node[];
    currentIndex: number;
    lastNode: Node;
    nodesAhead: number;
    currentTransform: Transform;
    previousTransform: Transform;
    motionless: boolean;
    state: State;
}
