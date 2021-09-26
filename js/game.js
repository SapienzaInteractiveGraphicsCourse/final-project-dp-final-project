"use_strict"
import * as ANIMA from './animations.js'
import * as INIT from './initialization.js'
import * as DEF from './definitions.js'

// Global variables
let level = 1;
let points = 0;
let velocity=0.0;
let speed=0.0;
let penality=3;
let run;

function restartPlay(camera, renderer, objects) {

    const character=objects.character;
    const trees=objects.trees;
    points = 0;
    document.getElementById("gameStarted").innerHTML = 'false';
    
    character.position.set(trees[0].position.x+20,DEF.characterProperties.position.y,trees[0].position.z+20);
    changeLevel(trees);
    ANIMA.endCameraAnimation(camera,false);
    INIT.initRestartListener(camera, renderer);
}

function changeLevel(trees){
    let lab;
    switch(level){
        case 1: 
            lab=DEF.lab1;
            break;
        case 2: 
            lab=DEF.lab2;
            break;
        case 3: 
            lab=DEF.lab3;
            break;
        case 4 : 
            lab=DEF.lab4;
            break;
        case 5 : 
            lab=DEF.lab5;
            break;
        case 6 : 
            lab=DEF.lab6;
            break;
        case 7 : 
            lab=DEF.lab7;
            break;
        case 8 : 
            lab=DEF.lab8;
            break;
        case 9 : 
            lab=DEF.lab9;
            break;
        case 10 : 
            lab=DEF.labEnd;
            break;
        default: lab=DEF.labEnd;
    }
    
    for (let i=0; i<lab.length; i++) {
        for (let j=0; j<lab[i].length; j++) {
            if(lab[i][j]==1){
                trees[i*17+j].position.set(20*i-200, DEF.groundThickness / 2, 20*j-200) 
            }
            else{
                trees[i*17+j].position.set(20*i-200, -50 , 20*j-200) 
            }
        }
    }    
}


function endPlay(camera, renderer, objects){
    level=11;
    document.getElementById("NextLevel_Menu").style.display = 'none';
    document.getElementById("win_div").style.display = 'none';
    document.getElementById("Start_Menu").style.display = 'none';
    document.getElementById("NextLevel_Menu").style.display = 'none';
    document.getElementById("Replay_Menu").style.display = 'none';
    document.getElementById("options_div").classList.remove("show");
    document.getElementById("instructions_div").classList.remove("show");
    document.getElementById("End_Menu").style.display = 'block';
    document.getElementById("end_div").style.display = 'block';
    const character=objects.character;
    const trees=objects.trees;
    points = 0;
    document.getElementById("gameStarted").innerHTML = 'false';
    
    character.position.set(0, DEF.characterProperties.position.y,0);
    changeLevel(trees);
    ANIMA.endCameraAnimation(camera,true);
    INIT.initRestartListener(camera, renderer);
}


function play(scene, camera, renderer, keys, objects,deltaTime) {
    document.getElementById("EasyDif").onclick= function(){penality=4;};
    document.getElementById("MediumDif").addEventListener("click", function(){penality=6;});
    document.getElementById("HardDif").addEventListener("click", function(){penality=10;});
    document.getElementById("Level1").addEventListener("click", function(){
        level=1;restartPlay(camera, renderer, objects);
        document.getElementById("win_div").style.display = 'none';
        document.getElementById("lose_div").style.display = 'none';});
    document.getElementById("Level2").addEventListener("click", function(){
        level=2;restartPlay(camera, renderer, objects);
        document.getElementById("win_div").style.display = 'none';
        document.getElementById("lose_div").style.display = 'none';});
    document.getElementById("Level3").addEventListener("click", function(){
        level=3;restartPlay(camera, renderer, objects);
        document.getElementById("win_div").style.display = 'none';
        document.getElementById("lose_div").style.display = 'none';});
    document.getElementById("Level4").addEventListener("click", function(){
        level=4;restartPlay(camera, renderer, objects);
        document.getElementById("win_div").style.display = 'none';
        document.getElementById("lose_div").style.display = 'none';});
    document.getElementById("Level5").addEventListener("click", function(){
        level=5;restartPlay(camera, renderer, objects);
        document.getElementById("win_div").style.display = 'none';
        document.getElementById("lose_div").style.display = 'none';});
    document.getElementById("Level6").addEventListener("click", function(){
        level=6;restartPlay(camera, renderer, objects);
        document.getElementById("win_div").style.display = 'none';
        document.getElementById("lose_div").style.display = 'none';});
    document.getElementById("Level7").addEventListener("click", function(){
        level=7;restartPlay(camera, renderer, objects);
        document.getElementById("win_div").style.display = 'none';
        document.getElementById("lose_div").style.display = 'none';});
    document.getElementById("Level8").addEventListener("click", function(){
        level=8;restartPlay(camera, renderer, objects);
        document.getElementById("win_div").style.display = 'none';
        document.getElementById("lose_div").style.display = 'none';});
    document.getElementById("Level9").addEventListener("click", function(){
        level=9;restartPlay(camera, renderer, objects);
        document.getElementById("win_div").style.display = 'none';
        document.getElementById("lose_div").style.display = 'none';});
    document.getElementById("Level10").addEventListener("click", function(){
        level=10;restartPlay(camera, renderer, objects);
        document.getElementById("win_div").style.display = 'none';
        document.getElementById("lose_div").style.display = 'none';});
    // Get the main objects of the scene
    const character = objects.character;
    const trees = objects.trees;
    const cubes = objects.cubes

    // Select the task
    const gameStarted = document.getElementById("gameStarted").innerHTML;
    const lastTree=trees.length-1;
    if (Math.abs(trees[lastTree].position.x+20 - character.position.x) < 10 &&
            Math.abs(trees[lastTree].position.z-20 - character.position.z) < 10 && level<10){
                if(points>0){
                    console.log("YOU WIN THE LEVEL "+level);
                    document.getElementById("levelwin").innerHTML = level;
                    document.getElementById("NextLevel_Menu").style.display = 'block';
                    document.getElementById("win_div").style.display = 'block';
                    level=level+1;
                    restartPlay(camera, renderer, objects);
                }
                else{
                    console.log("YOU LOSE THE LEVEL "+level);
                    document.getElementById("level").innerHTML = level;
                    document.getElementById("Replay_Menu").style.display = 'block';
                    document.getElementById("lose_div").style.display = 'block';
                    restartPlay(camera, renderer, objects);
                }
            }
    if (gameStarted == 'true') {
        if(level==10){
            endPlay(camera, renderer, objects);
        }
        const cube = ANIMA.characterTouchCubeAnimation(character,cubes);
                    if (cube != null) {
                       if(scene.getObjectByName(cube.name)!==undefined){
                            points -= penality;
                           }
                    }
        speed=0.0;
        if(keys.w==true){
            points +=1;
            if(ANIMA.characterMoveForwardAnimation(character,trees,velocity)){
                speed=0.15*  Math.round(3*deltaTime*100);
            }
            else{speed=-0.1*  Math.round(3*deltaTime*100);}
        }
        if(keys.s==true){
            
            if(ANIMA.characterMoveBackwardAnimation(character,trees,velocity)){
                speed=-0.15*  Math.round(3*deltaTime*100);}
            else{speed=0.1*  Math.round(3*deltaTime*100);}
            
        }

        if(keys.a==true){
            
            ANIMA.characterMoveLeftwardAnimation(character,deltaTime);
        }

        if(keys.d==true){
        
        ANIMA.characterMoveRightwardAnimation(character,deltaTime);
        }
        if(keys.w || keys.a || keys.s || keys.d){
            if(run==undefined){
                run=ANIMA.runAnimation(character)
            }
            else{
                run.start();
                
            }
        }
        else{
            if(run!==undefined){
                run.stop();
                character.traverse(function(child) {
                    if (child.name == 'joint_shoulder_right'){
                        child.rotation.x=Math.PI / 2;
                    }
                    if (child.name == 'joint_shoulder_left'){
                        
                        child.rotation.x=Math.PI / 2;
                        
                    }
                    if (child.name == 'joint_right_elbow'){
                        child.rotation.z=2*Math.PI / 4;
                        child.rotation.y=0;
                    }   
                    
                    if (child.name == 'joint_left_elbow'){
                        child.rotation.z=2*Math.PI / 4;
                        child.rotation.y=0;
                    }
                    if (child.name == 'joint_right_hip'){
                        child.rotation.x=Math.PI;
                    }
                    if (child.name == 'joint_left_hip'){
                        child.rotation.x=Math.PI;
                    }
                    if (child.name == 'joint_right_knee'){
                        //child.rotation.x+=0.1;
                        child.rotation.x=0;
                    }
                    if (child.name == 'joint_left_knee'){
                        //child.rotation.x+=0.1;
                        child.rotation.x=0;
                    }
                    if (child.name == 'joint_right_ankle'){
                        child.rotation.x=0;
                    }
                    if (child.name == 'joint_left_ankle'){
                        child.rotation.x=0;
                    }
    
                    if (child.name == 'bust'){
                        child.rotation.y=0;
                    }
                });
            }
        }
        
            
        character.translateZ( velocity );
        velocity += ( speed - velocity ) * .4;

        document.getElementById("score").innerHTML = points;
            
    }
}


export {play}
