$(function(){
    //메뉴
    // $(".main > li").mouseover(function(){
    //     // $(this).children(".sub").stop().slideDown();
    //     $(this).find(".sub").stop().slideDown();
    // })//

    // $(".main > li").mouseout(function(){
    //     // $(this).children(".sub").stop().slideUp();
    //     $(".sub").stop().slideUp();
    // })//

    $(".main > li").hover(function(){
        $(this).children(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    })//



    //이미지 슬라이드 fade in out
    //포지션이 겹쳐지면서 마지막 li가 보이는 상태, 첫번째 li가 보이게 해야함.
    // $(".fade li").eq(0).show();
    // $(".fade li").eq(1).hide();
    // $(".fade li").eq(2).hide();
    
    // $(".fade li").hide();
    // $(".fade li").eq(0).show();
    
    // $(".fade li:gt(0)").hide();

    $(".fade li").eq(0).siblings().hide();

    // 0       1       2
    // out     in
    //         out     in
    //                 out
    // in

    var n=0;
    setInterval(function(){

        $(".fade li").eq(n).fadeOut();
        console.log("nn:", n); //현재 보이는 부분, out되야하는 부분
        // if(n==2){
        //     n=0;
        // }else{
        //     n++;
        // }
        
        n=(n+1)%3
        // (0+1)%3 = 1
        // (1+1)%3 = 2
        // (2+1)%3 = 0
        console.log("n:", n); //들어와야 하는 부분
        // next = n; //인아웃 변수가 동일한 n이라 헷갈리는경우에는 변수명을 변경해도 된다. 값은 동일하기 때문에..
        // $(".fade li").eq(next).fadeIn();
        $(".fade li").eq(n).fadeIn();
        
    }, 2500)


    //공지사항,갤러리 탭메뉴
    $(".title li").click(function(){
        $(".title li").removeClass("on");
        $(this).addClass("on");

        var i=$(this).index();
        console.log("i:", i);

        $(".cont_list ul").hide();
        $(".cont_list ul").eq(i).css({display:"flex"});
    })//




    //팝업
    $(".p_click").click(function(){
        $(".popup").show();  
    })

    $(".close").click(function(){
        $(".popup").hide();  
    })


})//