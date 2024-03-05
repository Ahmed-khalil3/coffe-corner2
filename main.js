let products=[{
    id:1,
    img:'latee.webp',
    nama:'latte',
    dis:"ملعقة صغيرة ممتلئة قهوة نسكافيه جولد سريعة الذوبان ماء بحرارة٨٠ درجة مئوية حليب من اختيارك سكر حسب الرغبة ",
    price:20,
},
{
    id:2,
    img:'cpoth.webp',
    nama:'cappuccino',
    dis:"ملعقتان صغيرتان ممتلئتان قهوة نسكافيه جولد سريعة الذوبان ماء بحرارة ٨٠ درجة مئوية حليب من اختيارك سكر حسب الرغبة",
    price:25,

},
{
    id:3,
    img:'amrecano.webp',
    nama:'Amrecano',
    dis:"تتكون الأمريكانو من ماء واسبريسو. يتم تقديمها بنسب إما ٢١ و٢١     من الاسبريسو و٣/٢ من الماء حسب المقهى أو حسب اختيارك.",
    price:30,

},
{
    id:4,
    img:'spreso.webp',
    nama:'Espresso',
    dis:"  ملعقتين صغيرتين قهوة نسكافيه جولد سريعة الذوبان ماء بحرارة ٨٠ درجة مئوية",
    price:40,

},
{
    id:5,
    img:'moca.webp',
    nama:'Mocha',
    dis:" تتكون من ٣١ من الاسبريسو و٣٢ من الحليب المبخر. ويتم إضافة نكهة الشوكولاته التي يمكن أن تكون داكنة أو بالحليب. ",
    price:50,

}
,
{
    id:6,
    img:'mecato.webp',
    nama:'Mecato',
    dis:"",
    price:55,

}
,
{
    id:7,
    img:'flat.webp',
    nama:'Flat white ',
    dis:" الفلات وايت هو مزيج من الحليب الرغوي الدقيق المسكوب على عبوة او عبوتين من الاسبريسو.  ",
    price:55,

}
,
{
    id:8,
    img:'torki.jpg',
    nama:'Egyption coffe',
    dis:" قهوه تركي مطحونه و محوجه ",
    price:15,

}
,
{
    id:9,
    img:'icecoffe.webp',
    nama:'Ice-coffe',
    dis:" قهوه بارده  ",
    price:60,

}

];
let itmes='';
products.map(function (product) {

    itmes+=`
    <div class="product">
    <img src="${product.img}" alt="">
    <h3>${product.nama}</h3>
    <p>${product.dis}</p>
    <h2>${product.price} <span>ج</span></h2>
    <button>Buy Now</button>
    
        </div>
    `
    document.querySelector(".products").innerHTML=itmes;
})

let tste=[
    {

        img:'men1.jpg',
        id:'mohamed elsayed',
        comment:'حاجه ممتازه و خدمة فوق الممتازه',
        st:`<a class="s5"><i class='bx bx-star'></i></a>`
} ,

{

    img:'men2.avif',
    id:'ala ali',
    comment:'حاجه ممتازه و خدمة فوق الممتازه',
    st:`<a class="s5"><i class='bx bx-star'></i></a>`
},
{

    img:'men3.jpg',
    id:'mahmoud mohamed',
    comment:'حاجه ممتازه و خدمة فوق الممتازه',
    st:`<a class="s5"><i class='bx bx-star'></i></a>`
},
{

    img:'men4.avif',
    id:'hamada ali',
    comment:'حاجه ممتازه و خدمة فوق الممتازه',
    st:`<a class="s5"><i class='bx bx-star'></i></a>`
},
{

    img:'women1.jpg',
    id:'sawsan',
    comment:'حاجه ممتازه و خدمة فوق الممتازه',
    st:`<a class="s5"><i class='bx bx-star'></i></a>`
},
{

    img:'women2.jpg',
    id:'hapipa',
    comment:'حاجه ممتازه و خدمة فوق الممتازه',
    st:`<a class="s5"><i class='bx bx-star'></i></a>`
},
{

    img:'women3.jpg',
    id:'hanaa',
    comment:'حاجه ممتازه و خدمة فوق الممتازه',
    st:`<a class="s5"><i class='bx bx-star'></i></a>`
},{

    img:'men1.jpg',
    id:'hakem elsayed',
    comment:'حاجه ممتازه و خدمة فوق الممتازه',
    st:`<a class="s5"><i class='bx bx-star'></i></a>`
} ,
{

    img:'men2.avif',
    id:'sadek',
    comment:'حاجه ممتازه و خدمة فوق الممتازه',
    st:`<a class="s5"><i class='bx bx-star'></i></a>`
},{

    img:'men3.jpg',
    id:'ibrahem',
    comment:'حاجه ممتازه و خدمة فوق الممتازه',
    st:`<a class="s5"><i class='bx bx-star'></i></a>`
},{

    img:'men4.avif',
    id:'hosam',
    comment:'حاجه ممتازه و خدمة فوق الممتازه',
    st:`<a class="s5"><i class='bx bx-star'></i></a>`
},
{

    img:'women1.jpg',
    id:'marwa',
    comment:'حاجه ممتازه و خدمة فوق الممتازه',
    st:`<a class="s5"><i class='bx bx-star'></i></a>`
},
{

    img:'women2.jpg',
    id:'yosra',
    comment:'حاجه ممتازه و خدمة فوق الممتازه',
    st:`<a class="s5"><i class='bx bx-star'></i></a>`
},{

    img:'women3.jpg',
    id:'karma',
    comment:'حاجه ممتازه و خدمة فوق الممتازه',
    st:`<a class="s5"><i class='bx bx-star'></i></a>`
}

]
let testo='';
tste.map(function (tes){

    testo+=`
    <div class="teste">
    <img src="${tes.img}" alt="">
    <h3>${tes.id}</h3>
    <p> ${tes.comment}   </p>
    <div class="stars">
    <i class='bx bx-star' ></i>
  <i class='bx bx-star'></i>
  <i class='bx bx-star'></i>
    <i class='bx bx-star'></i>
 <i class='bx bx-star'></i>
</div>
</div>
    `
    document.querySelector(".testes").innerHTML=testo;
})

// let stars='';
// document.querySelector('.s1').onclick=function(click){
//     document.querySelector('.s1').style.backgroundColor="yellow"
// }
// document.querySelector('.s1').ondblclick=function(){
//     document.querySelector('.s1').style.backgroundColor="white"
// }
// document.querySelector('.s2').onclick=function(click){
//     document.querySelector('.s2').style.backgroundColor="yellow"
// }
// document.querySelector('.s2').ondblclick=function(){
//     document.querySelector('.s2').style.backgroundColor="white"
// }
// document.querySelector('.s3').onclick=function(click){
//     document.querySelector('.s3').style.backgroundColor="yellow"
// }
// document.querySelector('.s3').ondblclick=function(){
//     document.querySelector('.s3').style.backgroundColor="white"
// }
// document.querySelector('.s4').onclick=function(click){
//     document.querySelector('.s4').style.backgroundColor="yellow"
// }
// document.querySelector('.s4').ondblclick=function(){
//     document.querySelector('.s4').style.backgroundColor="white"
// }
// document.querySelector('.s5').onclick=function(click){
//     document.querySelector('.s5').style.backgroundColor="yellow"
// }
// document.querySelector('.s5').ondblclick=function(){
//     document.querySelector('.s5').style.backgroundColor="white"
// }