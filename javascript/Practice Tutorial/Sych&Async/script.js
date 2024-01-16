console.log("Hey here i'm going to learn Async & Await");
let stocks ={
    fruits : ["Pineapple","Mango", "Stawberry", "Watermelon"],
    liquid : ["Water","Ice"],
    holder : ["Cone", "Cup" , "Stick"],
    Topping : ["Choclate", "Cherry","Tuti-Fruty"]

}






// Icecream Order

// let order = (Fruit_name,call_production)=> {
//     setTimeout(()=>{
//         console.log(`Your ${stocks.fruits[1]} flavoured icecream order has placed `);
//         call_production();
//     },2000);
// }

// let production = () =>{
//     setTimeout(()=>{
//         console.log("Production has started.");
//         setTimeout(()=>{
//             console.log(`${stocks.fruits[1]} has chopped.`);
//             setTimeout(()=>{
//                 console.log(` ${stocks.liquid[0]} and ${stocks.liquid[1]} is added`);
//                 setTimeout(()=>{
//                     console.log(` Machine has started`);
//                     setTimeout(()=>{
//                         console.log(` ${stocks.holder[0]} container has picked`);
//                         setTimeout(()=>{
//                             console.log(` Toppings of icecream with ${stocks.Topping[1]}`);
//                             setTimeout(()=>{
//                                 console.log(` ${stocks.fruits[1]} icecream is ready, pls serve the icecream `);
                                
//                             },2000);
//                         },3000);
//                     },2000);
//                 },1000);
//             },1000);
//         },2000);
//     },0000);
// }
// order( 1,production);