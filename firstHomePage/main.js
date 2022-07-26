
// 회원가입 체크
function joinJuge(){
	var pw1 = document.getElementById("paw1").value;
	var pw2 = document.getElementById("paw2").value;
	if(pw1 == pw2){
		alert("회원가입 되었습니다. 가입아이디 : "+document.getElementById("id").value);
		return true;
	} else{
		alert("비밀번호가 다릅니다.");
		return false;
	}
}
// 로그인 체크
function loginJuge(){
	var lId = document.getElementById("lId").value;
	var lPsw = document.getElementById("lPsw").value;
	if(lId != "admin"){
		alert("등록되지 않은 아이디입니다");
		return false;
	}
	if(lPsw != "admin"){
		alert("비밀번호가 다릅니다");
		return false;
	}
}

//제이쿼리 영역
$(document).ready(function(){

	//햄버거토글 활성화
	
		$("a.navi__toggle").click(function(){
	
			$(".navi__menu, .navi__sns").slideToggle("medium");
		});
	
	//슬라이드함수 관련 변수모음
	
		var imgLoop  = setInterval(slider, 2000);
	
		var mPointer = true;
	
		var idx = 0;
	
	//이미지 슬라이드 함수
	
		function slider(){ 
			$(".container ul").animate({
				"left":-100*idx+"vw"
			},500);

			$(".btns ul li").eq(idx).addClass("activ").siblings().removeClass("activ");		
	
			idx++;
	
			if(idx> $(".container ul li").length-1){
				$(".container ul").animate({
					"left":0
	
				},0);
	
				idx=0; 
			}
		}
	
	//슬라이드에 마우스 호버 할 때 슬라이드 중지
	
		$(".container , .btns").hover(function(){
			if(mPointer==true){
				clearInterval(imgLoop);
				mPointer=false;
			}
		},function(){
			if(mPointer==false){
				imgLoop  = setInterval(slider, 2000);
				mPointer=true;
				}
		});
	 
	
	//슬라이드 이동버튼
	
		$(".btns ul li").on('click',function(){
			$(this).addClass("activ").siblings().removeClass("activ");
			idx = $(this).index();
	
			$(".container ul").animate({
				"left":-100*idx+"vw"
			},1000);
		});
	 
	
	//추천메뉴 마우스호버 할 때 강조
		var vrecoBox = $(".recoBox")	

		vrecoBox.mouseover(function(){
			$(this).find(".boxImg img").addClass("zoom").removeClass("zoomout");
			vrecoBox.not($(this)).find(".boxImg img").removeClass("zoom");

			$(this).find(".proName, .price dt, .boxfoot").addClass("hilit").removeClass("hilitout");
			vrecoBox.not($(this)).find(".boxImg img").removeClass("hilit");

			$(this).addClass("boxShadow").removeClass("boxShadowout").siblings().removeClass("boxShadow");
		});
		vrecoBox.mouseout(function(){
			$(this).find(".boxImg img").addClass("zoomout").removeClass("zoom");
			vrecoBox.not($(this)).find(".boxImg img").removeClass("zoomout");

			$(this).find(".proName, .price dt, .boxfoot").addClass("hilitout").removeClass("hilit");
			vrecoBox.not($(this)).find(".boxImg img").removeClass("hilitout");

			$(this).addClass("boxShadowout").removeClass("boxShadow").siblings().removeClass("boxShadowout");
		});
	});
	
	 
	//반응형 메뉴 디스플레이 조절
	$(window).resize(function (){
		var windowWidth = window.innerWidth;
		  if (windowWidth > 720) {
			$(".navi__menu, .navi__sns").css("display","flex");
		}
		if (windowWidth <= 720) {
			$(".navi__menu, .navi__sns").css("display","none");
		}
	
	})