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
				h = $("div#section #breadcrumb .breadcrumb b a").clone();
				$("div#section #breadcrumb .breadcrumb b a").remove();
				t = $("div#section #breadcrumb .breadcrumb b").text().split(" ");
				t[1] = (parseInt(e.section_index) + 1).toString(10);
				$("div#section #breadcrumb .breadcrumb b").html(t.slice(0, 4).join(" ") + " (" + (typeof e.humanized_exercise_index !== "undefined" ? "Exercise " + e.humanized_exercise_index.toString(10) : "General Forum") + ")").prepend(h);
			}
		})
	}
}

var script = document.createElement("script");
script.textContent = "(" + forumFix.toString() + "())";
document.documentElement.appendChild(script);