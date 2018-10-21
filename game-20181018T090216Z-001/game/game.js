{


var rowAmbar1 = [1,2,3,4,5,6,7,8,9];
var rowAmbar2 = [1,2,3,4,5,6,7,8,9];
var rowAmbar3 = [1,2,3,4,5,6,7,8,9];
var rowAmbar4 = [1,2,3,4,5,6,7,8,9];
var rowAmbar5 = [1,2,3,4,5,6,7,8,9];
var rowAmbar6 = [1,2,3,4,5,6,7,8,9];
var rowAmbar7 = [1,2,3,4,5,6,7,8,9];
var rowAmbar8 = [1,2,3,4,5,6,7,8,9];
var rowAmbar9 = [1,2,3,4,5,6,7,8,9];

var colAmbar1 = [1,2,3,4,5,6,7,8,9];
var colAmbar2 = [1,2,3,4,5,6,7,8,9];
var colAmbar3 = [1,2,3,4,5,6,7,8,9];
var colAmbar4 = [1,2,3,4,5,6,7,8,9];
var colAmbar5 = [1,2,3,4,5,6,7,8,9];
var colAmbar6 = [1,2,3,4,5,6,7,8,9];
var colAmbar7 = [1,2,3,4,5,6,7,8,9];
var colAmbar8 = [1,2,3,4,5,6,7,8,9];
var colAmbar9 = [1,2,3,4,5,6,7,8,9];

var matAmbar1 = [1,2,3,4,5,6,7,8,9];
var matAmbar2 = [1,2,3,4,5,6,7,8,9];
var matAmbar3 = [1,2,3,4,5,6,7,8,9];
var matAmbar4 = [1,2,3,4,5,6,7,8,9];
var matAmbar5 = [1,2,3,4,5,6,7,8,9];
var matAmbar6 = [1,2,3,4,5,6,7,8,9];
var matAmbar7 = [1,2,3,4,5,6,7,8,9];
var matAmbar8 = [1,2,3,4,5,6,7,8,9];
var matAmbar9 = [1,2,3,4,5,6,7,8,9];

var mat1 = [[0,0,0],[0,0,0],[0,0,0]];
var mat2 = [[0,0,0],[0,0,0],[0,0,0]];
var mat3 = [[0,0,0],[0,0,0],[0,0,0]];
var mat4 = [[0,0,0],[0,0,0],[0,0,0]];
var mat5 = [[0,0,0],[0,0,0],[0,0,0]];
var mat6 = [[0,0,0],[0,0,0],[0,0,0]];
var mat7 = [[0,0,0],[0,0,0],[0,0,0]];
var mat8 = [[0,0,0],[0,0,0],[0,0,0]];
var mat9 = [[0,0,0],[0,0,0],[0,0,0]];

debugger;
creatMat1();
// function matCutter1()
// {
//     var cutcut = matAmbar1.replace(matAmbar1.charAt(num),matAmbar1.charAt(L-1));
//     Pop(cutcut);
//     matAmbar1 = cutcut;
//     return matAmbar1;
// }

function creatMat1 ()
{
var row = 0;
var col = 0;
var L = matAmbar1.length;
var num;


for (row = 0; row < 3; row++ )
{
    for(col = 0; col < 3 ; col++)
    {
       num = Math.floor(Math.random()*L-1)+1;
       mat1[row][col] = num;
       
        

      matAmbar1= matAmbar1.slice(num,num+1);
    //    alert (matAmbar1);

    }
}

return mat1;




}

















}