(function(window) {
	function Main() {
		if (window.addEventListener) {
			window.addEventListener("load", onLoad);
		} else {
			window.attachEvent("onload", onLoad);
		}

	}

	function onLoad() {
		
		social.url = getParam('url');
		if (getParam('facebookWidth'))
			social.facebookWidth = getParam('facebookWidth');
		if (getParam('facebookHeight'))
			social.facebookHeight = getParam('facebookHeight');
		if (getParam('twitterHeight'))
			social.twitterHeight = getParam('twitterHeight');
		if (getParam('twitterWidth'))
			social.twitterWidth = getParam('twitterWidth');
		if (getParam('googleSize'))
			social.googleSize = getParam('googleSize');

		var fb = social.buildFacebook();
		document.body.appendChild(fb);
		
		var tw = social.buildTwitter();
		document.body.appendChild(tw);
		
		if (!getParam('googleplus') || getParam('googleplus') && getParam('googleplus') != "false") {
			var g = social.buildGoogle();
			document.body.appendChild(g);

		}
	}

	function getParam(name) {
		name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
		var regexS = "[\\?&]" + name + "=([^&#]*)";
		var regex = new RegExp(regexS);
		var results = regex.exec(window.location.href);
		if (results == null)
			return null;
		else
			return results[1];
	}

	Main();
}
)(window);
