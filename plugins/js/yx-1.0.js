function yxObj (){
	return {
		homepage:function(){
			// 首页banner
			var touchFirst,flag,touch=1;
			var mySwiper = new Swiper ('#banner', {
			    // direction: 'vertical',
			    loop: true,
			    autoplay:3000,
			    speed:800,
			    pagination : '.swiper-pagination',
			    autoplayDisableOnInteraction:true,
				paginationType : 'custom',
				paginationCustomRender: function (swiper, current, total) {
					$(".rsNavItem").removeClass("rsNavSelected")
					$(".rsNavItem").eq(current-1).addClass("rsNavSelected");
					switch(current){
						case 1:
				    		$(".banner_breadCrumb").removeClass("xkx yzb");
				    	break;
				    	case 2:
				    		$(".banner_breadCrumb").removeClass("yzb").addClass("xkx");
				    	break;
				    	case 3:
				    		$(".banner_breadCrumb").removeClass("xkx").addClass("yzb");
				    	break;
					}
				}
			  })
		},
	}
}
