// const Reducer = (cart = [], action) => {
//     switch (action.type) {
//         case 'Add':
//             let tempCart = cart.filter(item => item.id === action.payload.id)
//             let index = cart.findIndex(item => item.id === action.payload.id)
//             if (tempCart < 1)
//                 return [...cart, action.payload];
//             else {
//                 alert("قبلا داریمش")
//                 return cart
//                 // const newCart = [...cart]
//                 // newCart[index].quantity += 1;
//                 // return newCart;
//             }
//         case 'Remove':
//             return cart.filter(item => item.id !== action.payload.id)
//         case 'Increase':
//            const newCard= cart.map((item) => {
//                 if (item.id === action.payload.id) {
//                     return {...item, quantity:item.quantity+1}
//                 }
//                 return item
//             }
//             )
//             return newCard
//         case 'Decrease':
//             const newcard= cart.map((item) => {
//                 if (item.id === action.payload.id) {
//                     return {...item, quantity:item.quantity - 1}
//                 }
//                 return item
//             }
//             )
//             return newcard
//         default:
//             return cart;
//     }
// }
// export default Reducer;