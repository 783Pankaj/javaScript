//While  => it's check the condition then execute the code
// let counter =10;
// while(counter>=1){
//     document.write('JS')
//     counter--
// }


// Do-while => first it's execute code one time then its check the condition
//  let counter =1;
//  do{
//     document.write('js')
//     counter++
//  }while(counter<=10)

// for // first time it's execute left to rigth then remaning all codition run rigth to left
// let counter = 10;
// for(let i=1; i<=counter; i++){
//     document.write('js')
// }


//Breake =>it's  work in block ({}) element. break loop does not check the condition is true or false
// for (let counter = 1; counter <= 10; counter++) {
//     if (counter == 5) {
//         break;
//     }
//     document.write(counter)
//     document.write('<br/>')
// }

    // continue -> continue does not work for only one condition. here, 5 will not print because of continue we set the condition when counter==5 then skip the 5 and continue the remaing 
// for (let counter = 1; counter <= 10; counter++) {
//     if (counter == 5) {
//         continue;
//     }
//     document.write(counter)
//     document.write('<br/>')
// }             

     
//    Nested loop

for(let counter=1; counter<=10; counter++){
    document.write(counter)
    document.write('<br/>')
for(let counter2 = 1; counter2<3; counter2++){
    document.write('pk')
    document.write('<br/>')
}    
}