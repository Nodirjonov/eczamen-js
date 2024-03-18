
// 1
let a=5%2
alert(a)
console.log(Math.floor(a));

// 2
let c= Math.round(Math.random()*9+1)
alert(c)

// 3
let d=12.510
let e=Math.round(d)
alert(e)

// 4
let g="Mars IT School"
let h=g.length
alert(h)

// 6
 let p = ['a','b','c','d','e','f','g','h','i','j','k','l','o','m','o','p','q','r','s','t','u','v','w','x','y','z']
 let ismim = p[5]+p[0]+p[24]+p[25]+p[20]+p[11]+p[11]+p[12]+p[23]
 console.log(ismim);

//7
let k=+prompt("yoshingizni kiriting")
if(k<18){
    alert("ВЫ ЕЩЕ НЕ СОВЕРШЕННАЛЕТНИЙ")
}
else{
    alert("ВЫ УЖЕ СОВЕРШЕННАЛЕТНИЙ")
}

// 8
const t = prompt('ismizni kiriting');
const akromjon = t.split('').reverse().join('');
console.log(akromjon);



//10
let number=[1,2,3,4,5,6,7,8,9,10,];
let pustoy=[];
for(let i=0; i<number.length; i++){
    if(number[i]%2==0)
      pustoy.push (number[i]);
  }
  console.log(pustoy);
