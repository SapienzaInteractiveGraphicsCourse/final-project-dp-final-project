import * as DEF from './definitions.js'
import * as ANIMA from './animations.js'
import * as THREE from './lib/three.js-master/build/three.module.js';


function initKeyListener(){

    let keys = {
        a: false,
        s: false,
        d: false,
        w: false,
      };
      document.body.addEventListener( 'keydown', function(e) {
        
        var key = e.code.replace('Key', '').toLowerCase();
        if ( keys[ key ] !== undefined )
          keys[ key ] = true;
        
      });
      document.body.addEventListener( 'keyup', function(e) {
        
        var key = e.code.replace('Key', '').toLowerCase();
        if ( keys[ key ] !== undefined )
          keys[ key ] = false;
        
      });
    return keys
    
}

function initPlayListener(camera, renderer) {
    document.getElementById("Play_Button").addEventListener("click", function(){ANIMA.startCameraAnimation(camera, renderer)});
    return null
}

function initRestartListener(camera, renderer) {
    document.getElementById("Restart_Button").addEventListener("click", function(){ANIMA.startCameraAnimation(camera, renderer)});
    document.getElementById("Restart_Button1").addEventListener("click", function(){ANIMA.startCameraAnimation(camera, renderer)});
    document.getElementById("Restart_Button2").addEventListener("click", function(){ANIMA.startCameraAnimation(camera, renderer)});
    return null
}

function initRenderer() {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = DEF.shadowsOn;
    document.body.appendChild(renderer.domElement);
    return renderer
}

function initCamera(cameraProperties) {
    const camera = new THREE.PerspectiveCamera(
        cameraProperties.fov, 
        cameraProperties.aspect, 
        cameraProperties.near,
        cameraProperties.far
    );
    camera.position.set(
        cameraProperties.position.x,
        cameraProperties.position.y,
        cameraProperties.position.z
    );
    return camera
}

function initScene(sceneProperties) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(
        sceneProperties.backgroundColor);
    return scene
}

function initLights(scene, lightsProperties,condition) {

    // Directional light
    const directionalLight = new THREE.DirectionalLight(
        lightsProperties.directional.color, 
        lightsProperties.directional.intensity
    );
    directionalLight.position.set(
        lightsProperties.directional.position.x,
        lightsProperties.directional.position.y,
        lightsProperties.directional.position.z
    );
    if (DEF.shadowsOn) {
        directionalLight.castShadow = lightsProperties.directional.shadows.cast;
        directionalLight.shadow.camera.left = - lightsProperties.directional.shadows.cameraSide;
        directionalLight.shadow.camera.right = lightsProperties.directional.shadows.cameraSide;
        directionalLight.shadow.camera.top = lightsProperties.directional.shadows.cameraSide;
        directionalLight.shadow.camera.bottom = - lightsProperties.directional.shadows.cameraSide;
        directionalLight.shadow.mapSize.width = lightsProperties.directional.shadows.mapWidth;
        directionalLight.shadow.mapSize.height = lightsProperties.directional.shadows.mapHeight;
        directionalLight.shadow.camera.near = lightsProperties.directional.shadows.cameraNear;
        directionalLight.shadow.camera.far = lightsProperties.directional.shadows.cameraFar;
    }
    if (lightsProperties.directional.helper == true) {
        const cameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
        scene.add(cameraHelper);
    }
    

    const moonLight = new THREE.DirectionalLight(
        lightsProperties.night.color, 
        lightsProperties.night.intensity
    );
    moonLight.position.set(
        lightsProperties.night.position.x,
        lightsProperties.night.position.y,
        lightsProperties.night.position.z
    );
    if (DEF.shadowsOn) {
        moonLight.castShadow = lightsProperties.night.shadows.cast;
        moonLight.shadow.camera.left = - lightsProperties.night.shadows.cameraSide;
        moonLight.shadow.camera.right = lightsProperties.night.shadows.cameraSide;
        moonLight.shadow.camera.top = lightsProperties.night.shadows.cameraSide;
        moonLight.shadow.camera.bottom = - lightsProperties.night.shadows.cameraSide;
        moonLight.shadow.mapSize.width = lightsProperties.night.shadows.mapWidth;
        moonLight.shadow.mapSize.height = lightsProperties.night.shadows.mapHeight;
        moonLight.shadow.camera.near = lightsProperties.night.shadows.cameraNear;
        moonLight.shadow.camera.far = lightsProperties.night.shadows.cameraFar;
    }
    
    // Ambient light
    const ambientLight = new THREE.AmbientLight(
        lightsProperties.ambient.color, 
        lightsProperties.ambient.intensity
    );
    
    // Hemisphere light
    const hemisphereLight = new THREE.HemisphereLight(
        lightsProperties.hemisphere.skyColor,
        lightsProperties.hemisphere.groundColor,
        lightsProperties.hemisphere.intensity
    );
    hemisphereLight.position.set(
        lightsProperties.hemisphere.position.x,
        lightsProperties.hemisphere.position.y,
        lightsProperties.hemisphere.position.z
    );
    directionalLight.name= 'directionalLight';
    hemisphereLight.name= 'hemisphereLight';
    ambientLight.name= 'ambientLight';
    moonLight.name= 'moonLight';
    switch(condition){
        case 0:
            if(scene.getObjectByName('directionalLight')==undefined){
                scene.add(directionalLight);
                scene.add(hemisphereLight);
                scene.add(ambientLight);
                scene.remove(scene.getObjectByName('moonLight'));
            }
            break;
        case 1:
            if(scene.getObjectByName('moonLight')==undefined){
            scene.add(moonLight);
            scene.remove(scene.getObjectByName('directionalLight'));
            scene.remove(scene.getObjectByName('hemisphereLight'));
            scene.remove(scene.getObjectByName('ambientLight'));
            }
            break;
        default:
            scene.add(directionalLight);
            scene.add(hemisphereLight);
            scene.add(ambientLight);
    }
    
    

    return {
        directional: directionalLight,
        ambient: ambientLight,
        hemisphere: hemisphereLight,
        moon: moonLight
    }
}




function initCameraFollow(goal,character,dir,a,b) {

    a.lerp(character.position, 0.05);
    b.copy(goal.position);
    dir.copy( a ).sub( b ).normalize();
    const dis = a.distanceTo( b ) - 20;
    goal.position.addScaledVector( dir, dis );
    
}


export {initRenderer, initCamera, initScene, initLights, initCameraFollow, initKeyListener, initPlayListener, initRestartListener}
