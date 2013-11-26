var forumFix = function(){
	if (typeof CCDATA.forum != "undefined" && window.location.pathname.split("/")[window.location.pathname.split("/").length - 2] === "forum_questions") {
		id = window.location.pathname.split("/")[window.location.pathname.split("/").length - 1];
		$.ajax({
			url: "http://www.codecademy.com/forum_questions/" + id,
			dataType: "json",
			type: "GET",
			beforeSend: function (e) {
				e.setRequestHeader("X-Requested-With", "XMLHttpRequest");
				e.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.0")
			},
			success: function (e) {
				console.log(e)
			}
		})
	}
}

var script = document.createElement("script");
script.textContent = "(" + forumFix.toString() + "())";
document.documentElement.appendChild(script);