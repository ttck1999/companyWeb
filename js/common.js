$(document).ready(function(){
  $(document).scroll(function(){
		//获取当前滚动栏scroll的高度并赋值
		var scrTop = $(window).scrollTop();
		
		//开始判断如果导航栏距离顶部的高度等于当前滚动栏的高度则开启悬浮
		if(scrTop >= 107){
			
			$('.common-nav').css({'position':'fixed','top':'27px'});

			$('.common-nav-wwwlogo').css({'display':'block'});
			$('.common-nav-wwwlogo').css({'position':'fixed','top':'27px'});

			$('.common-nav').addClass("is-being-scrolled")
			$('.common-nav-logo-text').addClass("common-nav-logo-textactive")
			
		}else{//否则清空悬浮
			$('.common-nav').css({'position':'','top':''});

			$('.common-nav').removeClass("is-being-scrolled")
			$('.common-nav-wwwlogo').css({'display':'none'});

		}

	})

	$('.common-nav-wwwlogo').click(function(){
			$('.common-nav').css({'position':'fixed','top':'27px'});

			$('.common-nav').removeClass("is-being-scrolled")
			$('.common-nav-logo-text').removeClass("common-nav-logo-textactive")
			$('.common-nav-wwwlogo').css({'display':'none'});
	})
})

function navClick(code){
	if(code == 1){
		window.location.href="../html/index.html"
	}else if(code == 2){
		//window.location.href="../html/index.html"
		$('.productServices-list1').css({'display':'block'});
		$('.productServices-list2').css({'display':'none'});
	}else if(code == 3){
		//window.location.href="../html/index.html"
		$('.productServices-list2').css({'display':'block'});
		$('.productServices-list1').css({'display':'none'});
		
	}else if(code == 4){
		window.location.href="../html/recruit.html"
	}else if(code == 5){
		window.location.href="../html/aboutUs.html"
	}else if(code == 21){
		window.location.href="../html/productServices.html"
	}else if(code == 22){
		window.location.href="../html/wuzhi.html"
	}
	
}
