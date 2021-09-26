"use strict";
import * as DEF from './definitions.js'
import * as INIT from './initialization.js'
import * as UTILS from './utilities.js'
import * as GAME from './game.js'
import TWEEN from './lib/tween.esm.js'
import * as THREE from './lib/three.js-master/build/three.module.js';

var dir = new THREE.Vector3;
var a = new THREE.Vector3;
var b = new THREE.Vector3;
let goal;

var deltaTime,then=0;

function main(camera, renderer, scene, objects) {
    //
    // Initialization
    //
    const lights = INIT.initLights(scene, DEF.lightsProperties,3);
    document.getElementById("DayCon").onclick= function(){INIT.initLights(scene, DEF.lightsProperties,0);};
    document.getElementById("NightCon").addEventListener("click", function(){INIT.initLights(scene, DEF.lightsProperties,1);});
    



    
    

    //
    // 
    const keys = INIT.initKeyListener();
    camera.position.set(-100,300,-200);
    
    goal = new THREE.Object3D;
    goal.add( camera );
    //
    // Render
    //
    function render(time) {
 
        const cameraControls = INIT.initCameraFollow(goal,objects.character,dir,a,b);
        const playListener = INIT.initPlayListener(camera, renderer, cameraControls);
        
        //
        // Convert time to seconds
        //
        

        time *= 0.001;
        deltaTime = time - then;
        then = time;

        if (UTILS.resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }
        renderer.render(scene, camera);
        TWEEN.update();
        camera.lookAt(objects.character.position);
        GAME.play(scene,camera,render,keys,objects,deltaTime);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}


export {main}
