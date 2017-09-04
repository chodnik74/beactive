$( document ).ready(function() {
	$('#carousel').bind('slid.bs.carousel', function (e) {
    var index = $(e.target).find(".active").index();
    if(index === 2)
        alert('hello world');
	});
});

