function isChrome(){
	var isChromium = window.chrome,
	winNav = window.navigator,
	vendorName = winNav.vendor,
	isOpera = winNav.userAgent.indexOf("OPR") > -1,
	isIEedge = winNav.userAgent.indexOf("Edge") > -1,
	isIOSChrome = winNav.userAgent.match("CriOS");

	if(isIOSChrome){
		return true;
	} else if(isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false) {
		return true;
	} else { 
		return false; 
	}
}


function scrollToTop(element, to, duration, id) {
	var isChr = isChrome();

	if(isChr){
		if (duration < 0) return;
		var difference = to - element.scrollTop;
		var perTick = difference / duration * 2;

		setTimeout(function() {
			element.scrollTop = element.scrollTop + perTick;
			scrollTo(element, to, duration - 2);
		}, 10);
	}
	else{
		var element = document.getElementById(id);

		element.scrollIntoView({behavior: "smooth"});
	}
}

function scrollTo(elem, pos, id){
	var isChr = isChrome();

	if(isChr){
		var y = elem.scrollTop;
		y += Math.round( ( pos - y ) * 0.3 );
		if (Math.abs(y-pos) <= 2)
		{
			elem.scrollTop = pos;
			return;
		}
		elem.scrollTop = y;
		setTimeout(scrollTo, 40, elem, pos);
	}
	else {
		var element = document.getElementById(id);

		element.scrollIntoView({behavior: "smooth"});
	}
}

function anim(n){
	var lines = document.getElementsByClassName('line-green');
	var text = document.getElementsByClassName('jump-text');

	for (var i = text.length - 1; i >= 0; i--) {
		text[i].style.opacity = (i == n-1 ? "1" : "0");
	}

	var start = "margin: 0; height: 1px; width: auto;";
	var down = "margin: 1.03em 0 -1.03em; height: 2px; width: 2.358em;";

	for (var i = lines.length - 1; i >= 0; i--) {
		lines[i].style = (i == n-1 ? down : start);
	}
}