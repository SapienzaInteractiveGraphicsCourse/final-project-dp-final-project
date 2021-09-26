"use strict";
import * as DEF from './definitions.js'
import * as UTILS from './utilities.js'
import * as THREE from './lib/three.js-master/build/three.module.js';
import * as ANIMA from './animations.js'


function drawAll(LoadingManager, scene) {
    const benches = drawBenches(LoadingManager, scene, DEF.benchesProperties);
    const trees = drawTrees(LoadingManager, scene, DEF.treesProperties);
    const cubes = drawCubes(LoadingManager, scene);
    const field = drawField(LoadingManager, scene, DEF.fieldProperties);
    const sun = drawSun(LoadingManager, scene, DEF.sunProperties);
    const character = drawCharacter(LoadingManager, scene, DEF.characterProperties);
    character.position.set(trees[0].position.x+20,DEF.characterProperties.position.y,trees[0].position.z+20);
    for (let i=0; i<cubes.length; i++) { 
        ANIMA.cubeAnimation(cubes[i], character); 
        }
    return {
        benches: benches,
        trees: trees,
        cubes: cubes,
        field: field,
        sun: sun,
        character: character,
    }
}

function drawTrees(LoadingManager, scene, treesProperties) {
    const lab=DEF.lab1;
    for (let i=0; i<lab.length; i++) {
        for (let j=0; j<lab[i].length; j++) {
            if(lab[i][j]==1){
                treesProperties.push({
                    position: {x: 20*i-200, y: DEF.groundThickness / 2, z: 20*j-200},
                    rotation: {x: 0, y: 0, z: 0},
                    shadows: {cast: true, receive: true},
                    path: DEF.trees1Path
                })   
            }
            else{
                treesProperties.push({
                    position: {x: 20*i-200, y: -50, z: 20*j-200},
                    rotation: {x: 0, y: 0, z: 0},
                    shadows: {cast: true, receive: true},
                    path: DEF.trees1Path
            })
        }
    }
}      
    let trees = [];
    treesProperties.forEach(treeProperties => {
        let tree = UTILS.createObject(LoadingManager, treeProperties);
        trees.push(tree);
        scene.add(tree);
    });
    return trees
}

function drawBenches(LoadingManager, scene, benchesProperties) {
    const benches = [];
    benchesProperties.forEach(benchProperties => {
        const bench = UTILS.createObject(LoadingManager, benchProperties);
        benches.push(bench);
        scene.add(bench);
    });
    return benches
}

function drawCubes(LoadingManager, scene) {

    const cubes = [];
    for (let i=0; i<7; i++) {
        const color = Math.random()*0xdddddd
        const cubeProperties = {
            size: {width:Math.random()*4+2, height:Math.random()*4, depth:Math.random()*4+2},
            position: {x: 0,y: 0,z: 0},
            rotation: {x: 0, y: 0, z: 0},
            texture: {
                color: color,
                map: null,
            },
            shadows: {cast: true, receive: true},
            type: 'box'
        }
        const cube = new THREE.Object3D;
        const material = UTILS.createMesh(cubeProperties, null);
        cube.add( material );
        const name = 'cube' + i.toString();
        cube.name = name;
        cubes.push(cube);
        const Light = new THREE.PointLight(
            color,
            1,
            50
        )
        cube.add(Light);
        scene.add(cube);
        
        
    };
    return cubes
}
    
function drawCharacter(LoadingManager, scene, characterProperties) {

    // Define main properties
    const character = new THREE.Group();
    const characterModules = [];
    const globalProperties = [
        //head and bust
        characterProperties.parts.head.skull,
        characterProperties.parts.head.eyes.left,
        characterProperties.parts.head.eyes.right,
        characterProperties.joints.body.neck,
        characterProperties.parts.bust,
        //arms
        characterProperties.joints.arm.shoulder.left,
        characterProperties.parts.arm.low,
        characterProperties.joints.arm.elbow,
        characterProperties.parts.arm.high,
        characterProperties.parts.arm.actuator,
        characterProperties.joints.arm.shoulder.right,
        characterProperties.parts.arm.low,
        characterProperties.joints.arm.elbow,
        characterProperties.parts.arm.high,
        characterProperties.parts.arm.actuator,
        //legs
        characterProperties.joints.leg.hip.left,
        characterProperties.parts.leg.low,
        characterProperties.joints.leg.knee,
        characterProperties.parts.leg.high,
        characterProperties.joints.leg.ankle,
        characterProperties.parts.leg.feet,
        characterProperties.joints.leg.hip.right,
        characterProperties.parts.leg.low,
        characterProperties.joints.leg.knee,
        characterProperties.parts.leg.high,
        characterProperties.joints.leg.ankle,
        characterProperties.parts.leg.feet,
        
        
        
    ];
    const eyeLightProperties = characterProperties.parts.head.eyes.eyeLight;

    // Create the mesh of each part
    globalProperties.forEach(partProperties => {
        const partMesh = UTILS.createMesh(partProperties, 'phong');
        partMesh.name = partProperties.name;
        characterModules.push(partMesh);
    });
    //head and bust
    const headMesh = characterModules[0];
    const leftEyeMesh = characterModules[1];
    const rightEyeMesh = characterModules[2];
    const neckMesh = characterModules[3];
    const bustMesh = characterModules[4];
    //arms
    const leftShoulderMesh = characterModules[5];
    const leftLowArmMesh = characterModules[6];
    leftLowArmMesh.name='left_low_arm'
    const leftElbowMesh = characterModules[7];
    leftElbowMesh.name='joint_left_elbow'
    const leftHighArmMesh = characterModules[8];
    leftHighArmMesh.name='left_high_arm'
    const leftActuatorMesh = characterModules[9];
    leftActuatorMesh.name='left_actuator'
    const rightShoulderMesh = characterModules[10];
    const rightLowArmMesh = characterModules[11];
    rightLowArmMesh.name='right_low_arm'
    const rightElbowMesh = characterModules[12];
    rightElbowMesh.name='joint_right_elbow'
    const rightHighArmMesh = characterModules[13];
    rightHighArmMesh.name='right_high_arm'
    const rightActuatorMesh = characterModules[14];
    rightActuatorMesh.name='right_actuator'
    //legs
    const leftHipMesh = characterModules[15];
    const leftLowLegMesh = characterModules[16];
    const leftKneeMesh = characterModules[17];
    leftKneeMesh.name='joint_left_knee';
    const leftHighLegMesh = characterModules[18];
    const leftAnkleMesh = characterModules[19];
    leftAnkleMesh.name='joint_left_ankle';
    const leftFeetMesh = characterModules[20];
    const rightHipMesh = characterModules[21];
    const rightLowLegMesh = characterModules[22];
    const rightKneeMesh = characterModules[23];
    rightKneeMesh.name='joint_right_knee';
    const rightHighLegMesh = characterModules[24];
    const rightAnkleMesh = characterModules[25];
    rightAnkleMesh.name='joint_right_ankle';
    const rightFeetMesh = characterModules[26];
    
    
    

    /* Create the hierarchical model */
    //
    // Head hierarchy
    //leftEyeMesh.add(EyeLight);
    headMesh.add(leftEyeMesh);
    headMesh.add(rightEyeMesh);
    neckMesh.add(headMesh);
    //
    //Left Arm Hierarchy
    leftShoulderMesh.add(leftLowArmMesh);
    leftLowArmMesh.add(leftElbowMesh);
    leftElbowMesh.add(leftHighArmMesh);
    leftHighArmMesh.add(leftActuatorMesh);

    //Right Arm Hierarchy
    rightShoulderMesh.add(rightLowArmMesh);
    rightLowArmMesh.add(rightElbowMesh);
    rightElbowMesh.add(rightHighArmMesh);
    rightHighArmMesh.add(rightActuatorMesh);

    //Left Leg Hierarchy

    leftHipMesh.add(leftHighLegMesh);
    leftHighLegMesh.add(leftKneeMesh);
    leftKneeMesh.add(leftLowLegMesh);
    leftLowLegMesh.add(leftAnkleMesh);
    leftAnkleMesh.add(leftFeetMesh); 

    //Right Leg Hierarchy

    rightHipMesh.add(rightHighLegMesh);
    rightHighLegMesh.add(rightKneeMesh);
    rightKneeMesh.add(rightLowLegMesh);
    rightLowLegMesh.add(rightAnkleMesh);
    rightAnkleMesh.add(rightFeetMesh);


    //
    // Body hierarchy
    
    bustMesh.add(neckMesh, leftShoulderMesh, rightShoulderMesh, leftHipMesh, rightHipMesh );
    character.add(bustMesh);

    
    scene.add(character);
    return character
}

function drawSun(LoadingManager, scene, sunProperties) {
    const sun = UTILS.createMesh(sunProperties, 'basic');
    scene.add(sun);
    return sun
}



function drawField(LoadingManager, scene, fieldProperties) {
    const field = new THREE.Object3D();
    const largeboxMesh = UTILS.createMesh(fieldProperties, null);


    field.add(largeboxMesh);
    scene.add(field);

    return {
        field: field
    }
}



export {drawAll,drawTrees, drawBenches, drawCubes, drawSun, drawField, drawCharacter};
