/* ----------------------------------------- Constants ----------------------------------------- */
//
// Here are some common values shared between more elements of the program
//
const shadowsOn = true;
const skyColor = 0x86f7f7;
const skyColorNight = 0x86f7f7;
const groundThickness = 20;
const groundColor = 0xbfea4f;

/* ---------------------------------------- Properties ---------------------------------------- */
//
// Properties of all elements in the program
//

/* ------------------ Levels ------------------ */

const lab1=  [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
                    [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
                    [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                    [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
                    [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
                    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
                    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
                    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
                    [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                    [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
                    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
                    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
                    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
                    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
                    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]]

const lab2= [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
                [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
                [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
                [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]]

const lab3=	[[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
[1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
[1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
[1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]]

const lab4=	[[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
[1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]]

const lab5=       [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
[1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
[1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
[1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]]

const lab6=[[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
[1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
[1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
[1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]]

const lab7=[[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
[1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]]

const lab8=[[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1],
[1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]]

const lab9=[[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
[1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]]


const labEnd=[[0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0],
[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
[0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
[0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
[0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0],
[0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
[0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
[0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0],
[0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
[0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
[1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0]]


/* ------------------ Scene ------------------ */

const sceneProperties = {
    backgroundColor: skyColor
};

/* ----------------- Viewing ----------------- */

const cameraProperties = {
    fov: 75,
    aspect: 2,
    near: 0.1,
    far: 1000,
    position: {
        x: 108, 
        y: 150, 
        z: 115
    },
    target: {
        x: 30,
        y: 20,
        z: -10
    }
};

/* ----------------- Lights ----------------- */

const sunProperties = {
    texture: {
        color: 0xfffcb9,
        map: null
    },
    size: {
        radius: 2,
        widthDivisions: 32,
        heightDivisions: 16
    },
    position: {
        x: -65, 
        y: 150, 
        z: 75
    },
    rotation: {
        x: 0, 
        y: 0, 
        z: 0
    },
    shadows: {
        cast: false,
        receive: false
    },
    type: 'sphere'
};

const lightsProperties = {
    directional: { 
        color: 0xfffddc,
        intensity: 0.6,
        position: sunProperties.position,
        helper: false,
        shadows: {
            cast: true,
            receive: false,
            mapWidth: 2048,
            mapHeight: 2048,
            cameraSide: 300,
            cameraNear: 0.5, 
            cameraFar: 350
        }
    },
    night: {
        color: 0xeefdff,
        intensity: 0.3,
        position: sunProperties.position,
        shadows: {
            cast: true, 
            receive: false,
            mapWidth: 2048,
            mapHeight: 2048,
            cameraSide: 300,
            cameraNear: 0.5, 
            cameraFar: 350
        }
    },
    ambient: {
        color: 0xffffff,
        intensity: 0.3,
        position: {
            x: 0, 
            y: 0, 
            z: 0
        },
        shadows: {
            cast: false, 
            receive: false
        }
    },
    hemisphere: {
        skyColor: skyColor,
        groundColor: groundColor,
        intensity: 0.1,
        position: sunProperties.position,
        shadows: {
            cast: false, 
            receive: false
        }
    }
};

/* ------------------ Field ------------------ */

const fieldMap = './js/lib/three.js-master/examples/textures/terrain/grasslight-big.jpg';
const fieldNormalMap = './js/lib/three.js-master/examples/textures/terrain/grasslight-big-nm.jpg';
const fieldProperties = {
    size: {
        width: 2500, 
        height: groundThickness, 
        depth: 2000
    },
    position: {
        x: -100, 
        y: 0, 
        z: 0
    },
    rotation: {
        x: 0, 
        y: 0, 
        z: 0
    },
    texture: {
        color: groundColor,
        map: fieldMap,
        normalMap: fieldNormalMap,
        repeat: {
            x: 40,
            y: 40
        },
        anisotropy: 16
    },
    shadows: {cast: false, receive: true},
    type: 'box'
}
            

/* ------------------ Trees ------------------ */

const trees1Path = {
    mtl: './objects/trees/Voxel_Tree_1.mtl',
    obj: './objects/trees/Voxel_Tree_1.obj'
};
let treesProperties = []

/* ----------------- Benches ----------------- */

const benchPath = {
    mtl: './objects/benches/bench.mtl',
    obj: './objects/benches/bench.obj'
};
const benchesProperties = [
    {
        position: {x: 25, y: groundThickness / 2, z: -10},
        rotation: {x: 0, y: Math.PI * 0.5, z: 0},
        shadows: {cast: true, receive: true},
        path: benchPath
    },
    {
        position: {x: 95, y: groundThickness / 2, z: -150},
        rotation: {x: 0, y: 0, z: 0},
        shadows: {cast: true, receive: true},
        path: benchPath
    },
    {
        position: {x: 130, y: groundThickness / 2, z: -150},
        rotation: {x: 0, y: 0, z: 0},
        shadows: {cast: true, receive: true},
        path: benchPath
    },
    {
        position: {x: 95, y: groundThickness / 2, z: 150},
        rotation: {x: 0, y: Math.PI, z: 0},
        shadows: {cast: true, receive: true},
        path: benchPath
    },
    {
        position: {x: 130, y: groundThickness / 2, z: 150},
        rotation: {x: 0, y: Math.PI, z: 0},
        shadows: {cast: true, receive: true},
        path: benchPath
    },
    {
        position: {x: 20, y: groundThickness / 2, z: -190},
        rotation: {x: 0, y: 0, z: 0},
        shadows: {cast: true, receive: true},
        path: benchPath
    },
    {
        position: {x: 60, y: groundThickness / 2, z: -150},
        rotation: {x: 0, y: 0, z: 0},
        shadows: {cast: true, receive: true},
        path: benchPath
    },
    {
        position: {x: 20, y: groundThickness / 2, z: 150},
        rotation: {x: 0, y: Math.PI, z: 0},
        shadows: {cast: true, receive: true},
        path: benchPath
    },
    {
        position: {x: 60, y: groundThickness / 2, z: 110},
        rotation: {x: 0, y: Math.PI, z: 0},
        shadows: {cast: true, receive: true},
        path: benchPath
    },
    {
        position: {x: -95, y: groundThickness / 2, z: -190},
        rotation: {x: 0, y: 0, z: 0},
        shadows: {cast: true, receive: true},
        path: benchPath
    },
    {
        position: {x: -130, y: groundThickness / 2, z: -150},
        rotation: {x: 0, y: 0, z: 0},
        shadows: {cast: true, receive: true},
        path: benchPath
    },
    {
        position: {x: -95, y: groundThickness / 2, z: 110},
        rotation: {x: 0, y: Math.PI, z: 0},
        shadows: {cast: true, receive: true},
        path: benchPath
    },
    {
        position: {x: 130, y: groundThickness / 2, z: 150},
        rotation: {x: 0, y: Math.PI, z: 0},
        shadows: {cast: true, receive: true},
        path: benchPath
    },
    {
        position: {x: -20, y: groundThickness / 2, z: -150},
        rotation: {x: 0, y: 0, z: 0},
        shadows: {cast: true, receive: true},
        path: benchPath
    },
    {
        position: {x: -60, y: groundThickness / 2, z: -190},
        rotation: {x: 0, y: 0, z: 0},
        shadows: {cast: true, receive: true},
        path: benchPath
    },
    {
        position: {x: -20, y: groundThickness / 2, z: 110},
        rotation: {x: 0, y: Math.PI, z: 0},
        shadows: {cast: true, receive: true},
        path: benchPath
    },
    {
        position: {x: -60, y: groundThickness / 2, z: 150},
        rotation: {x: 0, y: Math.PI, z: 0},
        shadows: {cast: true, receive: true},
        path: benchPath
    },
];

/* ----------------- cubes ----------------- */

const cubeProperties = {
                position: {
                    x: 0, 
                    y: 0, 
                    z: 0
                },
                rotation: {
                    x: 0, 
                    y: 0, 
                    z: 0
                },
                texture: {
                    color: 0x00000,
                    map: null,
                },
                shadows: {cast: false, receive: true},
                type: 'box'
            }

/* ------------------ Character ------------------ */

// General
const shirtColor = 0x96492f;
const pantsColor = 0x464f80;
const feetColor = 0x804a16;
const skinColor = 0xe7c699;

// Head
const headSize = 1.7;
const eyeSide = 0.3;
const eyeColor = 0xdddddd;
const headProperties = {
    skull: {
        size: {
            //width: headSize,
            //height: headSize,
            //depth: headSize
            radius: headSize,
            widthDivisions: 32,
            heightDivisions: 16
        },
        position: {
            x: 0,
            y: headSize / 3,
            z: 0
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0
        },
        texture: {
            color: skinColor,
            map: null
        },
        shadows: {
            cast: true,
            receive: true
        },
        name: 'head',
        type: 'sphere'
    },
    eyes: {
        left: {
            size: {
                radius: eyeSide,
                widthDivisions: 32,
                heightDivisions: 16
            },
            position: {
                x: -0.6,
                y: headSize / 4,
                z: headSize / 1.2
            },
            rotation: {
                x: 0,
                y: 0,
                z: 0
            },
            texture: {
                color: eyeColor,
                map: null
            },
            shadows: {
                cast: true,
                receive: false
            },
            name: 'leftEye',
            type: 'sphere'
        },
        right: {
            size: {
                radius: eyeSide,
                widthDivisions: 32,
                heightDivisions: 16
            },
            position: {
                x:  0.6,
                y: headSize / 4,
                z: headSize / 1.2
            },
            rotation: {
                x: 0,
                y: 0,
                z: 0
            },
            texture: {
                color: eyeColor,
                map: null
            },
            shadows: {
                cast: true,
                receive: false
            },
            name: 'leftEye',
            type: 'sphere'
        },
        eyeLight: {
            color: 0xffffff,
            intensity: 3,
            distance: 40,
            position: {x: eyeSide, y: 0, z: 0},
            helper: false,
            shadows: {
                cast: false,
                receive: false,
            }
        }
    }
};

// Bust
const bustHeight = 6;
const bustProperties = {
    size: {
        width: bustHeight /1.5,
        height: bustHeight,
        depth: bustHeight / 4
    },
    position: {
        x: 0,
        y: bustHeight / 2,
        z: 0
    },
    rotation: {
        x: 0,
        y: 0,
        z: 0
    },
    texture: {
        color: shirtColor,
        map: null
    },
    shadows: {
        cast: true,
        receive: true
    },
    name: 'bust',
    type: 'box'
};

// Arm
const armRadius = 0.5;
const armLenght = 2.2;
const actuatorSide = 1.5;
const armProperties = {
    low: {
        size: {
            radiusTop: armRadius,
            radiusBottom: armRadius,
            height: armLenght,
            radialDivisions: 32,
            heightDivisions: 16
        },
        position: {
            x: armLenght / 2,
            y: 0,
            z: 0
        },
        rotation: {
            x: 0,
            y: 0,
            z: - Math.PI / 2
        },
        texture: {
            color: shirtColor,
            map: null
        },
        shadows: {
            cast: true,
            receive: true
        },
        name: 'low_arm',
        type: 'cylinder'
    },
    high: {
        size: {
            radiusTop: armRadius,
            radiusBottom: armRadius,
            height: armLenght,
            radialDivisions: 32,
            heightDivisions: 16
        },
        position: {
            x: armLenght / 2,
            y: 0,
            z: 0
        },
        rotation: {
            x: 0,
            y: 0,
            z: - Math.PI / 2
        },
        texture: {
            color: skinColor,
            map: null
        },
        shadows: {
            cast: true,
            receive: true
        },
        name: 'high_arm',
        type: 'cylinder'
    },
    actuator: {
        size: {
            width: actuatorSide,
            height: actuatorSide,
            depth: actuatorSide
        },
        position: {
            x: 0,
            y: armLenght / 2,
            z: 0
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0
        },
        texture: {
            color: skinColor,
            map: null
        },
        shadows: {
            cast: true,
            receive: true
        },
        name: 'actuator',
        type: 'box'
    }
}

// Leg
const legHeight = 2;
const baseHeight = 1.5;
const legProperties = {
    low: {
        size: {
            width: 2 * legHeight / 3,
            height: legHeight,
            depth: 2 * legHeight / 3
        },
        position: {
            x: 0,
            y: baseHeight / 2 + legHeight / 2,
            z: 0
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0
        },
        texture: {
            color: pantsColor,
            map: null
        },
        shadows: {
            cast: true,
            receive: true
        },
        name: 'bustLow',
        type: 'box'
    },
    high: {
        size: {
            width: 2 * legHeight / 3,
            height: 3 * legHeight / 2,
            depth: 2 * legHeight / 3
        },
        position: {
            x: 0,
            y: 3 * legHeight / 4,
            z: 0
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0
        },
        texture: {
            color: pantsColor,
            map: null
        },
        shadows: {
            cast: true,
            receive: true
        },
        name: 'bustLow',
        type: 'box'
    },
    feet : {
        size: {
            width: baseHeight,
            height: baseHeight,
            depth: baseHeight * 2
        },
        position: {
            x: 0,
            y: baseHeight / 2,
            z: -baseHeight*0.3
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0
        },
        texture: {
            color: feetColor,
            map: null
        },
        shadows: {
            cast: true,
            receive: true
        },
        name: 'feet',
        type: 'box'
    }

};

// Joints
const shpereJointRadius = 1.3;
const cylinderJointRadius = 0.7;
const jointsProperties = {
    leg: {
        ankle: {
            constraints: {
                x: [0, 0], 
                y: [-Math.PI/2.6, Math.PI/2.6],                    
                z: [-0.13, -Math.PI/3]
            },
            size: {
                radius: shpereJointRadius* 0.8,
                widthDivisions: 32,
                heightDivisions: 16
            },
            position: {
                x: 0,
                y: shpereJointRadius / 2,
                z: 0
            },
            rotation: {
                x: 0,
                y: 0,
                z: - 0.13
            },
            texture: {
                color: feetColor,
                map: null
            },
            shadows: {
                cast: true,
                receive: true
            },
            name: 'joint_ankle',
            type: 'sphere'
        },
        knee: {
            constraints: {
                x: [0, 0], 
                y: [0, 0],
                z: [2.07, 0]
            },
            size: {
                radius: shpereJointRadius * 0.8,
                widthDivisions: 32,
                heightDivisions: 16
            },
            position: {
                x: 0,
                y: legHeight / 2 + shpereJointRadius / 3,
                z: 0
            },
            rotation: {
                x: 0,
                y: 0,
                z: 0
            },
            texture: {
                color: pantsColor,
                map: null
            },
            shadows: {
                cast: true,
                receive: true
            },
            name: 'joint_knee',
            type: 'sphere'
        },
        hip: {
            left: {
                constraints: {
                    x: [0, 0], 
                    y: [0, 0],
                    z: [-3*Math.PI/5, 0]
                },
                size: {
                    radius: shpereJointRadius,
                    widthDivisions: 32,
                    heightDivisions: 16
                },
                position: {
                    x: bustHeight / 4,
                    y: - (bustHeight / 2),
                    z: 0
                },
                rotation: {
                    x: Math.PI,
                    y: 0,
                    z: 0
                },
                texture: {
                    color: pantsColor,
                    map: null
                },
                shadows: {
                    cast: true,
                    receive: true
                },
                name: 'joint_left_hip',
                type: 'sphere'
            },
            right: {
                constraints: {
                    x: [0, 0], 
                    y: [0, 0],
                    z: [-3*Math.PI/5, 0]
                },
                size: {
                    radius: shpereJointRadius,
                    widthDivisions: 32,
                    heightDivisions: 16
                },
                position: {
                    x: -bustHeight / 4,
                    y: - (bustHeight / 2),
                    z: 0
                },
                rotation: {
                    x: Math.PI,
                    y: 0,
                    z: 0
                },
                texture: {
                    color: pantsColor,
                    map: null
                },
                shadows: {
                    cast: true,
                    receive: true
                },
                name: 'joint_right_hip',
                type: 'sphere'
            }   
        }
    },
    body: {
        neck: {
            constraints: {
                x: [-Math.PI/2, Math.PI/2], 
                y: [-Math.PI/2, Math.PI/2],
                z: [0, Math.PI/4]
            },
            size: {
                radius: shpereJointRadius * 0.9,
                widthDivisions: 32,
                heightDivisions: 16
            },
            position: {
                x: 0,
                y: bustHeight / 2 + shpereJointRadius / 2,
                z: 0
            },
            rotation: {
                x: 0,
                y: 0,
                z: 0
            },
            texture: {
                color: skinColor,
                map: null
            },
            shadows: {
                cast: true,
                receive: true
            },
            name: 'joint_neck',
            type: 'sphere'
        }
    },
    arm: {
        shoulder: {
            left:{
                constraints: {
                    x: [0, 0],
                    y: [Math.PI/3, Math.PI/2.8],
                    z: [-Math.PI/2, Math.PI/2]
                },
                size: {
                    radius: cylinderJointRadius*1.5,
                    widthDivisions: 32,
                    heightDivisions: 16
                },
                position: {
                    x: bustHeight / 3 + cylinderJointRadius / 2,
                    y: bustHeight / 3.5 + cylinderJointRadius / 2,
                    z: 0
                },
                rotation: {
                    x: Math.PI / 2,
                    y: -Math.PI / 2.6,
                    z: 0
                },
                texture: {
                    color: shirtColor,
                    map: null
                },
                shadows: {
                    cast: true,
                    receive: true
                },
                name: 'joint_shoulder_left',
                type: 'sphere'
            },
            right:{
                constraints: {
                    x: [0, 0],
                    y: [Math.PI/3, Math.PI/2.8],
                    z: [-Math.PI/2, Math.PI/2]
                },
                size: {
                    radius: cylinderJointRadius*1.5,
                    widthDivisions: 32,
                    heightDivisions: 16
                },
                position: {
                    x: -(bustHeight / 3 + cylinderJointRadius / 2),
                    y: bustHeight / 3.5 + cylinderJointRadius / 2,
                    z: 0
                },
                rotation: {
                    x: Math.PI / 2,
                    y: -(Math.PI - Math.PI / 2.6),
                    z: 0
                },
                texture: {
                    color: shirtColor,
                    map: null
                },
                shadows: {
                    cast: true,
                    receive: true
                },
                name: 'joint_shoulder_right',
                type: 'sphere'
            }
        },
        elbow: {
            constraints: {
                x: [-Math.PI/3, 0],
                y: [0, 0],
                z: [-3*Math.PI/2, 0]
            },
            size: {
                radius: cylinderJointRadius,
                widthDivisions: 32,
                heightDivisions: 16
            },
            position: {
                x: 0,
                y: armLenght / 2,
                z: 0
            },
            rotation: {
                x: 0,
                y: 0,
                z: Math.PI / 2
            },
            texture: {
                color: skinColor,
                map: null
            },
            shadows: {
                cast: true,
                receive: true
            },
            name: 'joint_elbow',
            type: 'sphere'
        }
    }
};

const characterPosition = {
    x: 50,
    y: groundThickness / 2+3 * legHeight / 2+legHeight+baseHeight,
    z: 50
};

// Character
const characterProperties = {
    position: characterPosition,
    parts: {
        leg: legProperties,
        bust: bustProperties,
        arm: armProperties,
        head: headProperties,
    },
    joints: jointsProperties
};

export {
    lab1,lab2,lab3,lab4,lab5,lab6,lab7,lab8,lab9,labEnd,
    shadowsOn, skyColor, groundThickness, groundColor,
    sceneProperties, cameraProperties,
    sunProperties, lightsProperties,
    cubeProperties,
    fieldProperties,
    treesProperties,
    benchesProperties,
    characterProperties,
    trees1Path
};
