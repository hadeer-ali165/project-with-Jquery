$(".open").on("click",function(){
    $(".lists").addClass("active");
    $(".open").css("margin-left","250px");
    $(".title").css("margin-left" , "120px")
})
$(".close").on("click",function(){
    $(".lists").removeClass("active");
    $(".open").css("margin-left","0px");
    $(".title").css("margin-left" , "0px")
});


$(".titleBox").on("click",function(e){
    $(".box").removeClass("active");
    $(this).parent().addClass("active");
    $(this).toggleClass("active");
})


let countDays = new Date("oct 10, 2026 00:00:00").getTime();
//console.log(countDays);
let x = setInterval(function(){
    let now = new Date().getTime();
    let newDate = countDays - now;
    let days = Math.floor(newDate / (1000 * 60 * 60 *24));
    let hours = Math.floor((newDate % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    let minutes = Math.floor((newDate % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((newDate % (1000 * 60)) / 1000);
    document.querySelector(".days").innerHTML = `${days} D`;
    document.querySelector(".hour").innerHTML = `${hours} H`;
    document.querySelector(".menit").innerHTML = `${minutes} M`;
    document.querySelector(".second").innerHTML = `${second} S`;
},1000)



let num = 100;
$(".num").text(num);
$("textarea").on("input",function(e){
    let valueArea = $(e.target).val().length;
    let minNum = num - valueArea;
    console.log(minNum);
    $('.num').html(`${minNum < 0 ? "your available character finished": minNum}`)
})


$("ul li a").on("click",function(e){

})