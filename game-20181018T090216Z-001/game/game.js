{


var numbers = [[1,1,1,1,1,1,1,1,1],
               [2,2,2,2,2,2,2,2,2],
               [3,3,3,3,3,3,3,3,3],
               [4,4,4,4,4,4,4,4,4],
               [5,5,5,5,5,5,5,5,5],
               [6,6,6,6,6,6,6,6,6],
               [7,7,7,7,7,7,7,7,7],
               [8,8,8,8,8,8,8,8,8],
               [9,9,9,9,9,9,9,9,9]]


var mat1 = [[1,2,3],[4,5,6],[7,8,9]];
var mat2 = [[0,0,0],[0,0,0],[0,0,0]];
var mat3 = [[0,0,0],[0,0,0],[0,0,0]];
var mat4 = [[0,0,0],[0,0,0],[0,0,0]];
var mat5 = [[0,0,0],[0,0,0],[0,0,0]];
var mat6 = [[0,0,0],[0,0,0],[0,0,0]];
var mat7 = [[0,0,0],[0,0,0],[0,0,0]];
var mat8 = [[0,0,0],[0,0,0],[0,0,0]];
var mat9 = [[0,0,0],[0,0,0],[0,0,0]];

var matAmbar = [1,2,3,4,5,6,7,8,9];





// יצירת הקובייה הראשונה

creatMat1();
function removeItem(matAmbar, place){
    for(var i in matAmbar){
        if(matAmbar[i]==place){
            matAmbar.splice(i,1);
            break;
        }
    }
}
function creatMat1 ()
{
var row = 0;
var col = 0;
var L;
var num;
var place;


for (row = 0; row < 3; row++ )
{
    for(col = 0; col < 3 ; col++)
    {
       L = matAmbar.length;
       num = Math.floor(Math.random()*L-1)+1;
       place = matAmbar[num];
       mat1[row][col] = place;
       
        

       removeItem(matAmbar, place);

    }
}

return mat1;




}



// יצירת הקוביה השניה  + השלישית
debugger;
creatMat2();


function creatMat2 ()
{


    var line1 = [mat1[0][0] , mat1[0][1],mat1[0][2]];
    line1 = _.shuffle(line1);
    mat2[1][0] = line1[0];
    mat2[1][1] = line1[1];
    mat2[1][2] = line1[2];

    var line2 = [mat2[1][0] , mat2[1][1],mat2[1][2]];
    line2 = _.shuffle(line2);
    mat3[2][0] = line2[0];
    mat3[2][1] = line2[1];
    mat3[2][2] = line2[2];


    var line3 = [mat1[1][0] , mat1[1][1],mat1[1][2]];
    line3 = _.shuffle(line3);
    mat2[2][0] = line3[0];
    mat2[2][1] = line3[1];
    mat2[2][2] = line3[2];

    var line4 = [mat2[1][0] , mat2[1][1],mat2[1][2]];
    line4 = _.shuffle(line4);
    mat3[0][0] = line4[0];
    mat3[0][1] = line4[1];
    mat3[0][2] = line4[2];


}




















// החדרת הספרות לתאים

incertion ()
function incertion ()
{      
    // קוביה ראשונה
    document.getElementById("a1").value = mat6[0][0];
    document.getElementById("a2").value = mat6[0][1];
    document.getElementById("a3").value = mat6[0][2];
    document.getElementById("b1").value = mat6[1][0];
    document.getElementById("b2").value = mat6[1][1];
    document.getElementById("b3").value = mat6[1][2];
    document.getElementById("c1").value = mat6[2][0];
    document.getElementById("c2").value = mat6[2][1];
    document.getElementById("c3").value = mat6[2][2];

     // קוביה שניה
    document.getElementById("a4").value = mat4[0][0];
    document.getElementById("a5").value = mat4[0][1];
    document.getElementById("a6").value = mat4[0][2];
    document.getElementById("b4").value = mat4[1][0];
    document.getElementById("b5").value = mat4[1][1];
    document.getElementById("b6").value = mat4[1][2];
    document.getElementById("c4").value = mat4[2][0];
    document.getElementById("c5").value = mat4[2][1];
    document.getElementById("c6").value = mat4[2][2];

     // קוביה שלישית
     document.getElementById("a7").value = mat7[0][0];
     document.getElementById("a8").value = mat7[0][1];
     document.getElementById("a9").value = mat7[0][2];
     document.getElementById("b7").value = mat7[1][0];
     document.getElementById("b8").value = mat7[1][1];
     document.getElementById("b9").value = mat7[1][2];
     document.getElementById("c7").value = mat7[2][0];
     document.getElementById("c8").value = mat7[2][1];
     document.getElementById("c9").value = mat7[2][2];

      // קוביה רביעית
    document.getElementById("d1").value = mat2[0][0];
    document.getElementById("d2").value = mat2[0][1];
    document.getElementById("d3").value = mat2[0][1];
    document.getElementById("e1").value = mat2[1][0];
    document.getElementById("e2").value = mat2[1][1];
    document.getElementById("e3").value = mat2[1][2];
    document.getElementById("f1").value = mat2[2][0];
    document.getElementById("f2").value = mat2[2][1];
    document.getElementById("f3").value = mat2[2][2];

     // קוביה חמישית
     document.getElementById("d4").value = mat1[0][0];
     document.getElementById("d5").value = mat1[0][1];
     document.getElementById("d6").value = mat1[0][2];
     document.getElementById("e4").value = mat1[1][0];
     document.getElementById("e5").value = mat1[1][1];
     document.getElementById("e6").value = mat1[1][2];
     document.getElementById("f4").value = mat1[2][0];
     document.getElementById("f5").value = mat1[2][1];
     document.getElementById("f6").value = mat1[2][2];

      // קוביה שישית
    document.getElementById("d7").value = mat3[0][0];
    document.getElementById("d8").value = mat3[0][1];
    document.getElementById("d9").value = mat3[0][2];
    document.getElementById("e7").value = mat3[1][0];
    document.getElementById("e8").value = mat3[1][1];
    document.getElementById("e9").value = mat3[1][2];
    document.getElementById("f7").value = mat3[2][0];
    document.getElementById("f8").value = mat3[2][1];
    document.getElementById("f9").value = mat3[2][2];

     // קוביה שביעית
     document.getElementById("g1").value = mat8[0][0];
     document.getElementById("g2").value = mat8[0][1];
     document.getElementById("g3").value = mat8[0][2];
     document.getElementById("h1").value = mat8[1][0];
     document.getElementById("h2").value = mat8[2][1];
     document.getElementById("h3").value = mat8[1][2];
     document.getElementById("i1").value = mat8[2][0];
     document.getElementById("i2").value = mat8[2][1];
     document.getElementById("i3").value = mat8[2][2];

      // קוביה שמינית
    document.getElementById("g4").value = mat5[0][0];
    document.getElementById("g5").value = mat5[0][1];
    document.getElementById("g6").value = mat5[0][2];
    document.getElementById("h4").value = mat5[1][0];
    document.getElementById("h5").value = mat5[1][1];
    document.getElementById("h6").value = mat5[1][2];
    document.getElementById("i4").value = mat5[2][0];
    document.getElementById("i5").value = mat5[2][1];
    document.getElementById("i6").value = mat5[2][2];

     // קוביה תשיעית
     document.getElementById("g7").value = mat9[0][0];
     document.getElementById("g8").value = mat9[0][1];
     document.getElementById("g9").value = mat9[0][2];
     document.getElementById("h7").value = mat9[1][0];
     document.getElementById("h8").value = mat9[1][1];
     document.getElementById("h9").value = mat9[1][2];
     document.getElementById("i7").value = mat9[2][0];
     document.getElementById("i8").value = mat9[2][1];
     document.getElementById("i9").value = mat9[2][2];
}






}