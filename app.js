var API_URL = "http://apis.daum.net/search/web?q={query}&apikey=81f98f832fab2e5a037d48bf0f92e4402f1a38e0&output=JSON&callback={callback}";
var num = 0;
var items;
var searchR;
$(document).ready(function(){
    $('#search').click(function(){
        $("#result").empty();
        $("#pageno").val("1");
        var query = $('#query').val();
        var url = API_URL.replace('{query}',query).replace('{callback}','?');
        $.ajax(url,{
            cache : true,
            dataType : 'jsonp',
            complete  :function(jqXHR, status){
                var data = jqXHR.responseJSON;
                items = data.channel.item;
                for(var i = num; i < (num+5); i++) {
                var searchR="<li><a href='"+items[i].link+"'>"+items[i].title+"</li>";
 			    $('#result').append(searchR);
                }
                num = num+5;
            }
        });
        return false;
    });

    $('#moreBtn').click(function(){
        $('#pageno').val(parseInt($('#pageno').val())+1);
        var query = $('#query').val();
        var url = API_URL.replace('{query}',query).replace('{callback}','?');
        $.ajax(url,{
            cache : true,
            dataType : 'jsonp',
            complete  :function(jqXHR, status){
                var data = jqXHR.responseJSON;
                items = data.channel.item;
                for(var i = num; i < (num+5); i++) {
                var searchR="<li><a href='"+items[i].link+"'>"+items[i].title+"</li>";
 			    $('#result').append(searchR);
                }
                num = num+5;
            }
        });
        return false;
    });
});
