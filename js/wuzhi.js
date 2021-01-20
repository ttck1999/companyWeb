$(document).ready(function(){
	
	$('.wuzhi-send-item1').hover(function(){
		$('.wuzhi-send-item1 img').attr('src','../images/blue-an.png');
	},function(){
		$('.wuzhi-send-item1 img').attr('src','../images/gray-an.png');
	})

	$('.wuzhi-send-item2').hover(function(){
		$('.wuzhi-send-item2 img').attr('src','../images/blue-ch.png');
	},function(){
		$('.wuzhi-send-item2 img').attr('src','../images/gray-ch.png');
	})

	$('.wuzhi-send-item3').hover(function(){
		$('.wuzhi-send-item3 img').attr('src','../images/blue-ti.png');
	},function(){
		$('.wuzhi-send-item3 img').attr('src','../images/gray-ti.png');
	})

	$('.wuzhi-send-item4').hover(function(){
		$('.wuzhi-send-item4 img').attr('src','../images/blue-nei.png');
	},function(){
		$('.wuzhi-send-item4 img').attr('src','../images/gray-nei.png');
	})

	$('.wuzhi-send-item5').hover(function(){
		$('.wuzhi-send-item5 img').attr('src','../images/blue-guo.png');
	},function(){
		$('.wuzhi-send-item5 img').attr('src','../images/gray-guo.png');
	})

	$('.wuzhi-send-item6').hover(function(){
		$('.wuzhi-send-item6 img').attr('src','../images/blue-zhuan.png');
	},function(){
		$('.wuzhi-send-item6 img').attr('src','../images/gray-zhuan.png');
	})


	 var page = 2;
   var v_width = 744+50;
		
		$('.left').click(function(){
			if(page % 3 == 1){         
          $('.wuzhi-three-all').animate({left:'-='+v_width*2},1000); 
          page = 3;
      } else {
          $('.wuzhi-three-all').animate({left:'+='+v_width},1000);
          page--;
      }
		})

		$('.right').click(function(){
			if(page % 3 == 0){       
        $('.wuzhi-three-all').animate({left:"0px"},1000); 
        page = 1; 
      }else {    
        $('.wuzhi-three-all').animate({left:'-='+v_width},1000);
        page++; 
      }
		})
})