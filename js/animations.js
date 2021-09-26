import TWEEN from './lib/tween.esm.js'
import * as THREE from './lib/three.js-master/build/three.module.js';


// _________________ Camera _________________ //


const startTarget = {
        x: 0,
        y: 40,
        z: 0
    }

const endTarget = {
        x: -100,
        y: 300,
        z: -200
    }

const lastTarget = {
    x: -200,
    y: 400,
    z: 0
}

function startCameraAnimation(camera) {
    document.getElementById("End_Menu").style.display = 'none';
    document.getElementById("lose_div").style.display = 'none';
    document.getElementById("win_div").style.display = 'none';
    document.getElementById("end_div").style.display = 'none';
    const cameraTargetTween = new TWEEN.Tween(camera.position).to(startTarget, 3000);
    
    cameraTargetTween.onUpdate(function(object) {
        camera.position.set(object.x, object.y, object.z);
    }).onComplete(() => {
        document.getElementById("gameStarted").innerHTML = 'true';
    });
    cameraTargetTween.easing(TWEEN.Easing.Quadratic.Out);
    cameraTargetTween.start();
    
}

function endCameraAnimation(camera,end) {
    let cameraTargetTween;
    if(end){
        cameraTargetTween = new TWEEN.Tween(camera.position).to(lastTarget, 3000);
    }
    else{
        cameraTargetTween = new TWEEN.Tween(camera.position).to(endTarget, 3000);
    }
    
    
    cameraTargetTween.onUpdate(function(object) {
        camera.position.set(object.x, object.y, object.z);
    }).onComplete(() => {

    });
    cameraTargetTween.easing(TWEEN.Easing.Quadratic.Out);
    cameraTargetTween.start();
    
}

// _________________ Cubes _________________ //

let penality=3;
function cubeAnimation(cube,character) {

    document.getElementById("EasyDif").onclick= function(){penality=3;};
    document.getElementById("MediumDif").addEventListener("click", function(){penality=4;});
    document.getElementById("HardDif").addEventListener("click", function(){penality=5;});

    const target = new THREE.Vector3();
    character.getWorldDirection(target );
        // Target definition
    const cubeTarget = {
        x: character.position.x + (Math.random()*2-1)*20+target.x*20,
        y: 12, 
        z: character.position.z + (Math.random()*2-1)*20+target.z*20,
    };
    const duration = 4000/penality + Math.random() * 9000/penality;

    let tailFlag = true;
    let tailAngle = 0.;

    // Animation
    cube.lookAt(cubeTarget.x, cubeTarget.y, cubeTarget.z);
    const cubeTween = new TWEEN.Tween(cube.position).to(cubeTarget, duration);
    cubeTween.onUpdate(function(object) {
        // Movement animation
        cube.position.set(object.x, object.y, object.z);
        // Tail animation
        
        if (tailFlag) {
            cube.rotation.y += 0.04;
            tailAngle += 0.04;
        } else {
            cube.rotation.y -= 0.04;
            tailAngle -= 0.04;
        }
        if (tailAngle > 0.17) tailFlag = false;
        if (tailAngle < -0.17) tailFlag = true;
    }).onComplete(() => {cubeAnimation(cube,character);});
    cubeTween.easing(TWEEN.Easing.Quadratic.Out);
    cubeTween.start();

    
    return cube
    }



function characterTouchCubeAnimation(character, cubes) {
    let cubetouched;

    let touched = false;
    cubes.forEach(cube => {
        if (Math.abs(cube.position.x - character.position.x) < 8 &&
            Math.abs(cube.position.z - character.position.z) < 8) {
                touched = true;
                cubetouched = cube;
            }
    });

    if (!touched) {
        cubetouched = null;
    }
        
    return cubetouched
}

const startRun = {
    x: 0,
    y: 0,
    z: -1
}

const endRun = {
    x: 2,
    y: 1,
    z: 1
}

function runAnimation(character){
        const runTweenA = new TWEEN.Tween(startRun).to(endRun, 400);
        runTweenA.onUpdate(function(object) {
            character.traverse(function(child) {
                if (child.name == 'joint_shoulder_right'){
                    child.rotation.x=object.x;
                }
                if (child.name == 'joint_shoulder_left'){
                    //child.rotation.y+=0.1;
                    child.rotation.x=2-object.x;
                    //child.rotation.z+=0.1;
                }
                if (child.name == 'joint_right_elbow'){
                    child.rotation.z=2+object.x;
                    child.rotation.y=object.z;
                }   
                
                if (child.name == 'joint_left_elbow'){
                    child.rotation.z=4-object.x;
                    child.rotation.y=object.z;
                }
                if (child.name == 'joint_right_hip'){
                    //child.rotation.y+=0.1;
                    child.rotation.x=3.5-object.y;
                }
                if (child.name == 'joint_left_hip'){
                    //child.rotation.y+=0.1;
                    child.rotation.x=2.5+object.y;
                }
                if (child.name == 'joint_right_knee'){
                    //child.rotation.x+=0.1;
                    child.rotation.x=1-object.y;
                }
                if (child.name == 'joint_left_knee'){
                    //child.rotation.x+=0.1;
                    child.rotation.x=object.y;
                }
                if (child.name == 'joint_right_ankle'){
                    child.rotation.x=-object.z*0.5;
                }
                if (child.name == 'joint_left_ankle'){
                    child.rotation.x=object.z*0.5;
                }

                if (child.name == 'bust'){
                    child.rotation.y=-object.z*0.2;
                }
            });
            
        }).onComplete(() => {});
        runTweenA.easing(TWEEN.Easing.Quadratic.Out);
        runTweenA.yoyo(true);
        runTweenA.repeat(Infinity);
        runTweenA.start();

        return runTweenA

}

function characterMoveForwardAnimation(character,trees) {

    const target = new THREE.Vector3();
    character.getWorldDirection(target );

    let pass = true;
    trees.forEach(tree => {
        if (Math.abs(tree.position.x - character.position.x-target.x*4) < 10 &&
            Math.abs(tree.position.z - character.position.z-target.z*4) < 10 && tree.position.y>0) {
                pass=false;  
            }
        
    });
    return pass;
    
    
}

function characterMoveBackwardAnimation(character,trees) {
    const target = new THREE.Vector3();
    character.getWorldDirection(target );

    let pass = true;
    trees.forEach(tree => {
        if (Math.abs(tree.position.x - character.position.x+target.x*4) < 10 &&
            Math.abs(tree.position.z - character.position.z+target.z*4) < 10 && tree.position.y>0) {
                pass=false;  
            }
        
    });
    return pass;
}

function characterMoveLeftwardAnimation(character,deltaTime) {
    character.rotateY(0.01*  Math.round(3*deltaTime*100));
}

function characterMoveRightwardAnimation(character,deltaTime) {
    character.rotateY(-0.01*  Math.round(3*deltaTime*100));
}


export {startCameraAnimation, endCameraAnimation,
        cubeAnimation, runAnimation,
        characterTouchCubeAnimation, characterMoveForwardAnimation, characterMoveBackwardAnimation, characterMoveLeftwardAnimation, characterMoveRightwardAnimation}
