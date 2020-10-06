$(function(){
  // 返回顶部
	$(window).scroll(function() {
						if ($(window).scrollTop() > 200) {
								$(".header").addClass("on");
								$(".h90").show();
								$(".c_nav .li1").fadeIn();
						}
						else {
							$(".header").removeClass("on");
							$(".h90").hide();
							$(".c_nav .li1").fadeOut();
						}
				});
				$(".c_nav .li1").click(function() {
						$('body,html').animate({
										scrollTop: 0
								},
								1200);
						return false;
				});

        


});
