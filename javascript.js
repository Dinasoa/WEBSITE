window.addEventListener("DOMContentLoaded" , function (){
    document.addEventListener("scroll" , function(){
        let header = document.getElementById("header")
        header.style.backgroundColor = "rgba(255, 255, 255, 0.842)" 
        let header = header.style.backgroundColor
        let scroll = $(window).scrollTop();
		if (scroll >= 50) {
			$("header").addClass('fixed');
		} else {
			$("header").removeClass('fixed');
		}
    })
})
