$(function(){
    // 公司简介滑动
    $(".company_item").hover(function(){
      if($(this).hasClass("on")){
        return false;
      }else{
        $(this).addClass("on");
      }
    },function(){
      $(this).removeClass("on")
    });

    // 解决方案滑动
    $(".solution_item li").hover(function(){
      if($(this).hasClass("on")){
        return false;
      }else{
        $(this).addClass("on");
      }
    },function(){
      $(this).removeClass("on")
    });

    $(".area").hover(function(){
      if($(this).hasClass("active")){
        return false;
      }else{
        $(this).addClass("active");
      }
    },function(){
      $(this).removeClass("active")
    });

    // 成功案例
    // $(".area").hover(function(){
    //   if($(this).hasClass("active")){
    //     return false;
    //   }else{
    //     $(this).addClass("active");
    //   }
    // },function(){
    //   $(this).removeClass("active")
    // });

    // $(".area ").hover(function () {
    //    $(this).addClass("active");
    //  }, function () {
    //    $(this).removeClass("active");
    //  })

     $(".case .area>div").hover(function () {
        $(this).addClass("active");
      }, function () {
        $(this).removeClass("active");
      })


    // 案例展示切换
      $(".case_tab li").click(function(){
  		$(this).addClass("on").siblings().removeClass("on");
  		var index = $(this).index();
  		$(".case_list dd").eq(index).addClass("active").show().siblings("dd").removeClass("active").hide();
  	}).eq(0).trigger('click');





    //异步加载图片
    	var oBtn = document.getElementsByTagName('button')[0];
    	var aImages = document.images;
    	loadImg(aImages);
    	window.onscroll = function(){
    	  loadImg(aImages);
    	};
    	function loadImg(arr){
    	  for( var i = 0,len = arr.length; i < len; i++){
    	    if(arr[i].getBoundingClientRect().top < document.documentElement.clientHeight && !arr[i].isLoad){
    	      arr[i].isLoad = true;
    	      arr[i].style.cssText = "transition: ''; opacity: 0;"
    	      if(arr[i].dataset){
    	        aftLoadImg(arr[i],arr[i].dataset.original);
    	      }else{
    	        aftLoadImg(arr[i],arr[i].getAttribute("data-original"));
    	      }
    	      (function(i){
    	        setTimeout(function(){
    	          arr[i].style.cssText = "transition: 1s; opacity: 1;"
    	        },16)
    	      })(i);
    	    }
    	  }
    	}
    	function aftLoadImg(obj,url){
    	  var oImg = new Image();
    	  oImg.onload = function(){
    	    obj.src = oImg.src;
    	  }
    	  oImg.src = url;
    	}



});
