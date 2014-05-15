var API_URL = "http://apis.daum.net/search/web?q= \
{query}&apikey=81f98f832fab2e5a037d48bf0f92e4402f1a38e0&\
output=json&callback={callback}&pageno={pageno}";


var pageno = 1;
$('#searchForm').on("submit",function(event){
    console.log(1);
    $("#result").empty();
    $("#pageno").val("1");
	pageView();
    return false;
});

$('#moreBtn').on("click", function(event){
    pageno++;
    $('#pageno').val(pageno);
    pageView();
});

var pageView = function(){
    var query = $('#query').val();
	var url = API_URL.replace('{query}',query).replace('{callback}','?').replace('{pageno}',pageno);

    $.ajax(url,{
		cache : true,
		dataType : 'jsonp',
		complete  :function(jqXHR, status){
			var data = jqXHR.responseJSON;
			var items = data.channel.item;
            var list = [];
			for(var i=0 ; i< items.length; i++){
				console.log(items[i].title);
                list.push("<li><a href='"+items[i].link+"'>"+items[i].title.replace(/&lt;/g , '<').replace(/&gt;/g , '>'));
			}
            $('#result').append("<ul>" + list.join("") + "</ul>");
		}
	});
	return false;
};
