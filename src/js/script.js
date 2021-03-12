// var a=$('.footer-position ul:first');
// console.log(a);

var tog = $(".tog");
var slide=$('.slide');
// console.log(slide);
// console.log(tog);
// $( ".slide" ).click(function(){
//     // x.preventDefault();
//     tog.slideToggle();
// });

slide.map((e,i)=>{

    console.log(i)
    console.log(e);
    // console.log($(allinput[i]).val())
    // $(e).html($(allinput[i]).val())
    $(i).click(function(){
        $(tog[e]).slideToggle();
    })
})

// $('rem').RemoveAttr('id','none');