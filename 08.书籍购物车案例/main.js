const cart=new Vue({
  el:"#cart",
  data:{
    list:[
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
  },
  methods:{
    // getFinalPrice(price){
    //   return '￥'+price.toFixed(2);
    // },
    increment(index){
      this.list[index].count++;
    },
    decrement(index){
      this.list[index].count--;
    },
    removeHandle(index){
      this.list.splice(index,1);
    }
  },
  computed:{
    totalPrice(){
      let totalPrice=
      this.list.reduce((total,item)=>{
        let itemPrice=item.price*item.count;
        return total+=itemPrice;
      },0);
      return totalPrice;
    }
  },
  filters:{
    showPrice(price){
      return '￥'+price.toFixed(2);
    }
  }
})