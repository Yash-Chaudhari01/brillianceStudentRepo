// var a=10;
// var b=20;
// if(a>=b){
//     console.log("yes")
// }
// else {
//     console.log("no")
// }

// if(!((a>=b) || (a<=b))){
//  console.log("vsuvs")
// }
// else{
//     console.log("nnnn")
// }





// for(var a=1; a<=10; a++){
//     console.log("hello world")
// }
// for(var a=1 ; a<=10 ; a++){
//   console.log("12*"+a+"="+12*a);
// }
// for(let i=0; i<3; i++)
//   { let str="";
//   for(let j=0; j<4; j++){
    
//     str= str+"*"
//   }
//   console.log(str);
// }




// for(let i=0; i<4; i++){
//   let str=""
//   for(let j=0; j<=i; j++){
//     str=str+"*"
//   }
//   console.log(str)
// }



// for(i=1; i<5; i++){
//   let str=""
//   for(let j=1; j<=i; j++){
//   str=str+i
//   }
//   console.log(str)
// }



// for(let i=0; i<4; i++){
//   let str=""
//   for(let j=0; j<4-i; j++){
//    str=str+" "
//   }

//   for(let k=0; k<i*2+1; k++){
//     str=str+"*"
//   }
//    console.log(str)
// }





// for(let i=1; i<=4; i++){
//   let str=" "
//   for(j=1; j<=i*2+1; j++){
//     str=str+"*"
//   }
//   for(k=1; k<=4-i; k++){
//     str=str+" "
//   }
//   console.log(str)
// }


// for(let i=4; i>=0; i--){
//   let str="";
//   for(let j=0; j<4-i; j++){
//    str=str+" ";
//   }

//   for(let k=0; k<i*2+1; k++){
//     str=str+"*";
//   }
//    console.log(str);
// }



// for(let i=0; i<4; i++){
//   let str="";
//   for(let j=0; j<4-i; j++){
//    str=str+" ";
//   }

//   for(let k=0; k<i*2+1; k++){
//     str=str+"*"
//   }
//    console.log(str);
// }



for( let i=1; i<=5; i++){
  let str="";
  for(let j=1; j<=i; j++){
    str=str+"*";
  }
  for(let k=1; k<=2*5-i; k++){
    str=str+" ";
  }
  console.log(str)
}
  for( let i=5; i>=1; i--){
  let str="";
  for(let j=1; j<=i; j++){
    str=str+"*";
  }
  for(let k=1; k<=2*5-i; k++){
    str=str+" ";
  }

  console.log(str);
}
//------------------------------------------
for(let i=1; i<=5; i++){
  let str=str+" ";
}