let list=[
  { 
    id:1,
    name:'《算法导论》',
    data:'2006-9',
    price:85.00,
    count:1
  },
  { 
    id:2,
    name:'《UNIX编程艺术》',
    data:'2006-2',
    price:59.00,
    count:1
  },
  { 
    id:3,
    name:'《计算机科学技术》',
    data:'2008-3',
    price:39.00,
    count:1
  },
  { 
    id:4,
    name:'《代码大全》',
    data:'2007-5',
    price:128.00,
    count:1
  },
]
let totalPrice=list.reduce((total,item)=>{
  return total+=item.price*item.count;
},0);
// console.log(totalPrice);

let name="      aaaaa      ";
console.log(name.trim());