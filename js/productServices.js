$(document).ready(function(){
	
	$('.productServices-send-item1').hover(function(){
		$('.productServices-send-item1 img').attr('src','../images/blue-an.png');
	},function(){
		$('.productServices-send-item1 img').attr('src','../images/gray-an.png');
	})

	$('.productServices-send-item2').hover(function(){
		$('.productServices-send-item2 img').attr('src','../images/blue-ch.png');
	},function(){
		$('.productServices-send-item2 img').attr('src','../images/gray-ch.png');
	})

	$('.productServices-send-item3').hover(function(){
		$('.productServices-send-item3 img').attr('src','../images/blue-ti.png');
	},function(){
		$('.productServices-send-item3 img').attr('src','../images/gray-ti.png');
	})

	$('.productServices-send-item4').hover(function(){
		$('.productServices-send-item4 img').attr('src','../images/blue-nei.png');
	},function(){
		$('.productServices-send-item4 img').attr('src','../images/gray-nei.png');
	})

	$('.productServices-send-item5').hover(function(){
		$('.productServices-send-item5 img').attr('src','../images/blue-guo.png');
	},function(){
		$('.productServices-send-item5 img').attr('src','../images/gray-guo.png');
	})

	$('.productServices-send-item6').hover(function(){
		$('.productServices-send-item6 img').attr('src','../images/blue-zhuan.png');
	},function(){
		$('.productServices-send-item6 img').attr('src','../images/gray-zhuan.png');
	})


	 var page = 2;
   var v_width = 744+50;
		
		$('.left').click(function(){
			if(page % 3 == 1){         
          $('.productServices-three-all').animate({left:'-='+v_width*2},1000); 
          page = 3;
      } else {
          $('.productServices-three-all').animate({left:'+='+v_width},1000);
          page--;
      }
		})

		$('.right').click(function(){
			if(page % 3 == 0){       
        $('.productServices-three-all').animate({left:"0px"},1000); 
        page = 1; 
      }else {    
        $('.productServices-three-all').animate({left:'-='+v_width},1000);
        page++; 
      }
		})
})