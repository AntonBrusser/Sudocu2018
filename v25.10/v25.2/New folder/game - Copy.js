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

var row = 0;
var col = 0;
var varNum = 0;

// יצירת הקובייה הראשונה

creatMat1();
function removeItem1(matAmbar1, place){
    for(var i in matAmbar1){
        if(matAmbar1[i]==place){
            matAmbar1.splice(i,1);
            break;
        }
    }
}
function creatMat1 ()
{
 row = 0;
 col = 0;
var L;
var num;
var place;


for (row = 0; row < 3; row++ )
{
    for(col = 0; col < 3 ; col++)
    {
       L = matAmbar1.length;
       num = Math.floor(Math.random()*L-1)+1;
       place = matAmbar1[num];
       mat1[row][col] = place;
       
        

       removeItem1(matAmbar1, place);
       removeNumbers2();

    }
}

return mat1;




}




// יצירת הקובייה השנייה
debugger;
creatMat2();
function removeItem2(matAmbar2, place){
    for(var i in matAmbar2){
        if(matAmbar2[i]==place){
            matAmbar2.splice(i,1);
            break;
        }
    }
}


function removeNumbers2()
{
    for(var j1 in colAmbar1){
        if(colAmbar1[j1]==mat1[0][0] || colAmbar1[j1]==mat1[0][1] || colAmbar1[j1]==mat1[0][2]){
            colAmbar1.splice(j1,1);
            break;
        }
    }
    for(var j2 in colAmbar2){
        if(colAmbar2[j2]==mat1[1][0] || colAmbar2[j2]==mat1[1][1] || colAmbar2[j2]==mat1[1][2]){
            colAmbar2.splice(j2,1);
            break;
        }
    }
    for(var j3 in colAmbar3){
        if(colAmbar3[j3]==mat1[2][0] || colAmbar3[j3]==mat1[2][1] || colAmbar3[j3]==mat1[2][2]){
            colAmbar3.splice(j3,1);
            break;
        }
    }
}


function chackIfTheNumberIsValied (varNum)
{
    if (row == 0)
    {
        while (varNum ==mat1[0][0] || varNum ==mat1[0][1] || varNum ==mat1[0][2])
        {
            varNum = Math.floor(Math.random()*colAmbar1.length-1)+1+1;
            
        }
    }
    if (row == 1)
    {
        while (varNum ==mat1[1][0] || varNum ==mat1[1][1] || varNum ==mat1[1][2] )
        {
            varNum = Math.floor(Math.random()*colAmbar2.length-1)+1+1;
            
        }
    }
    if (row == 2)
    {
        while (varNum ==mat1[2][0] || varNum ==mat1[2][1] || varNum ==mat1[2][2] )
        {
            varNum = Math.floor(Math.random()*colAmbar3.length-1)+1+1;
           
        }
    }
}



function creatMat2 ()
{
varNum = 0;
 row = 0;
 col = 0;
var L;
var num;
var place;




for (row = 0; row < 3; row++ )
{
    for(col = 0; col < 3 ; col++)
    {
        L = matAmbar2.length;
        varNum = Math.floor(Math.random()*L-1)+1+1;

        
        chackIfTheNumberIsValied (varNum);
            if (row == 0)
              {
             place = colAmbar1[varNum-1];
             }
             if (row == 1)
             {
            place = colAmbar2[varNum-1];
             }
            if (row == 2)
            {
           place = colAmbar3[varNum-1];
            }


        mat2[row][col] = place;

        removeItem2(matAmbar2, place);
        removeNumbers2()
       

    }
}

return mat2;


}






// יצירת הקובייה השלישית

creatMat3();
function removeItem3(matAmbar3, place){
    for(var i in matAmbar3){
        if(matAmbar3[i]==place){
            matAmbar3.splice(i,1);
            break;
        }
    }
}
function creatMat3 ()
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
       L = matAmbar3.length;
       num = Math.floor(Math.random()*L-1)+1;
       place = matAmbar3[num];
       mat3[row][col] = place;
       
        

       removeItem3(matAmbar3, place);

    }
}

return mat3;




}





// יצירת הקובייה הרביעית
creatMat4();
function removeItem4(matAmbar4, place){
    for(var i in matAmbar4){
        if(matAmbar4[i]==place){
            matAmbar4.splice(i,1);
            break;
        }
    }
}
function creatMat4 ()
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
       L = matAmbar4.length;
       num = Math.floor(Math.random()*L-1)+1;
       place = matAmbar4[num];
       mat4[row][col] = place;
       
        

       removeItem4(matAmbar4, place);

    }
}

return mat4;




}


// יצירת הקובייה החמישית
creatMat5();
function removeItem5(matAmbar5, place){
    for(var i in matAmbar5){
        if(matAmbar5[i]==place){
            matAmbar5.splice(i,1);
            break;
        }
    }
}
function creatMat5 ()
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
       L = matAmbar5.length;
       num = Math.floor(Math.random()*L-1)+1;
       place = matAmbar5[num];
       mat5[row][col] = place;
       
        

       removeItem5(matAmbar5, place);

    }
}

return mat5;




}


// יצירת הקובייה השישית
creatMat6();
function removeItem6(matAmbar6, place){
    for(var i in matAmbar6){
        if(matAmbar6[i]==place){
            matAmbar6.splice(i,1);
            break;
        }
    }
}
function creatMat6 ()
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
       L = matAmbar6.length;
       num = Math.floor(Math.random()*L-1)+1;
       place = matAmbar6[num];
       mat6[row][col] = place;
       
        

       removeItem6(matAmbar6, place);

    }
}

return mat6;




}


// יצירת הקובייה השביעית
creatMat7();
function removeItem7(matAmbar7, place){
    for(var i in matAmbar7){
        if(matAmbar7[i]==place){
            matAmbar7.splice(i,1);
            break;
        }
    }
}
function creatMat7 ()
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
       L = matAmbar7.length;
       num = Math.floor(Math.random()*L-1)+1;
       place = matAmbar7[num];
       mat7[row][col] = place;
       
        

       removeItem7(matAmbar7, place);

    }
}

return mat7;




}




// יצירת הקובייה השמינית


creatMat8();
function removeItem8(matAmbar8, place){
    for(var i in matAmbar8){
        if(matAmbar8[i]==place){
            matAmbar8.splice(i,1);
            break;
        }
    }
}
function creatMat8 ()
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
       L = matAmbar8.length;
       num = Math.floor(Math.random()*L-1)+1;
       place = matAmbar8[num];
       mat8[row][col] = place;
       
        

       removeItem8(matAmbar8, place);

    }
}

return mat8;




}


// יצירת הקוביה התשיעית
creatMat9();
function removeItem9(matAmbar9, place){
    for(var i in matAmbar9){
        if(matAmbar9[i]==place){
            matAmbar9.splice(i,1);
            break;
        }
    }
}
function creatMat9 ()
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
       L = matAmbar9.length;
       num = Math.floor(Math.random()*L-1)+1;
       place = matAmbar9[num];
       mat9[row][col] = place;
       
        

       removeItem9(matAmbar9, place);

    }
}

return mat9;




}
















// החדרת הספרות לתאים

incertion ()
function incertion ()
{      
    // קוביה ראשונה
    document.getElementById("a1").value = mat1[0][0];
    document.getElementById("a2").value = mat1[0][1];
    document.getElementById("a3").value = mat1[0][2];
    document.getElementById("b1").value = mat1[1][0];
    document.getElementById("b2").value = mat1[1][1];
    document.getElementById("b3").value = mat1[1][2];
    document.getElementById("c1").value = mat1[2][0];
    document.getElementById("c2").value = mat1[2][1];
    document.getElementById("c3").value = mat1[2][2];

     // קוביה שניה
    document.getElementById("a4").value = mat2[0][0];
    document.getElementById("a5").value = mat2[0][1];
    document.getElementById("a6").value = mat2[0][2];
    document.getElementById("b4").value = mat2[1][0];
    document.getElementById("b5").value = mat2[1][1];
    document.getElementById("b6").value = mat2[1][2];
    document.getElementById("c4").value = mat2[2][0];
    document.getElementById("c5").value = mat2[2][1];
    document.getElementById("c6").value = mat2[2][2];

     // קוביה שלישית
     document.getElementById("a7").value = mat1[0][0];
     document.getElementById("a8").value = mat1[0][1];
     document.getElementById("a9").value = mat1[0][2];
     document.getElementById("b7").value = mat1[1][0];
     document.getElementById("b8").value = mat1[1][1];
     document.getElementById("b9").value = mat1[1][2];
     document.getElementById("c7").value = mat1[2][0];
     document.getElementById("c8").value = mat1[2][1];
     document.getElementById("c9").value = mat1[2][2];

      // קוביה רביעית
    document.getElementById("d1").value = mat1[0][0];
    document.getElementById("d2").value = mat1[0][1];
    document.getElementById("d3").value = mat1[0][1];
    document.getElementById("e1").value = mat1[1][0];
    document.getElementById("e2").value = mat1[1][1];
    document.getElementById("e3").value = mat1[1][2];
    document.getElementById("f1").value = mat1[2][0];
    document.getElementById("f2").value = mat1[2][1];
    document.getElementById("f3").value = mat1[2][2];

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
    document.getElementById("d7").value = mat1[0][0];
    document.getElementById("d8").value = mat1[0][1];
    document.getElementById("d9").value = mat1[0][2];
    document.getElementById("e7").value = mat1[1][0];
    document.getElementById("e8").value = mat1[1][1];
    document.getElementById("e9").value = mat1[1][2];
    document.getElementById("f7").value = mat1[2][0];
    document.getElementById("f8").value = mat1[2][1];
    document.getElementById("f9").value = mat1[2][2];

     // קוביה שביעית
     document.getElementById("g1").value = mat1[0][0];
     document.getElementById("g2").value = mat1[0][1];
     document.getElementById("g3").value = mat1[0][2];
     document.getElementById("h1").value = mat1[1][0];
     document.getElementById("h2").value = mat1[2][1];
     document.getElementById("h3").value = mat1[1][2];
     document.getElementById("i1").value = mat1[2][0];
     document.getElementById("i2").value = mat1[2][1];
     document.getElementById("i3").value = mat1[2][2];

      // קוביה שמינית
    document.getElementById("g4").value = mat1[0][0];
    document.getElementById("g5").value = mat1[0][1];
    document.getElementById("g6").value = mat1[0][2];
    document.getElementById("h4").value = mat1[1][0];
    document.getElementById("h5").value = mat1[1][1];
    document.getElementById("h6").value = mat1[1][2];
    document.getElementById("i4").value = mat1[2][0];
    document.getElementById("i5").value = mat1[2][1];
    document.getElementById("i6").value = mat1[2][2];

     // קוביה תשיעית
     document.getElementById("g7").value = mat1[0][0];
     document.getElementById("g8").value = mat1[0][1];
     document.getElementById("g9").value = mat1[0][2];
     document.getElementById("h7").value = mat1[1][0];
     document.getElementById("h8").value = mat1[1][1];
     document.getElementById("h9").value = mat1[1][2];
     document.getElementById("i7").value = mat1[2][0];
     document.getElementById("i8").value = mat1[2][1];
     document.getElementById("i9").value = mat1[2][2];
}






}