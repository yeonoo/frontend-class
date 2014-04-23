(function(){
    var list = document.getElementById('list');
    var newsT = document.getElementById("newsT");
    var enterT = document.getElementById("enterT");
    var sportsT = document.getElementById("sportsT");
    
    function Tab(){
        console.log("많이 본 뉴스")
    }

    Tab.prototype.addClickEvent = function(){
        newsT.addEventListener("click", this.nT.bind(this));
        enterT.addEventListener("click", this.eT.bind(this));
        sportsT.addEventListener("click", this.sT.bind(this));
    }

    Tab.prototype.nT = function(){
        var n = Array();
        n = manynews[0];
        var news = [];
        for(var i = 0; i < n["news"].length; i++) { 
            news.push('<li><a href="http://media.daum.net/v/' + n["news"][i].newsId + '"><span>' + n["news"][i].title + '</span></a></li>' );
        }
        var news1 = news.splice(0,5);
        var news1String = news1.join("");
        var news2String = news.join("");
        newsT.className ="active";
        enterT.className = "";
        sportsT.className = "";
        moreBtn.className = "btn";
        list.innerHTML = "<div id='d1'><ul>" + news1String + "</ul></div> " + "<div id='d2' class='hide'><ul>" + news2String  + "</ul></div>";
        this.btn();    
    }

    Tab.prototype.eT = function(){
        var e = Array();
        e = manynews[1];
        var enter = [];
        for(var i = 0; i < e["enter"].length; i++) { 
        enter.push('<li><a href="http://media.daum.net/v/' + e["enter"][i].newsId + '"><span>' + e["enter"][i].title + '</span></a></li>');
        }
        var enter1 = enter.splice(0,5);
        var enter1String = enter1.join("");
        var enter2String = enter.join("");
        newsT.className="";
        enterT.className = "active";
        sportsT.className = "";
        moreBtn.className = "btn";
        list.innerHTML = "<div id='d1'><ul>" + enter1String + "</ul></div> " + "<div id='d2' class='hide'><ul>" + enter2String  + "</ul></div>";
        this.btn();        
    }

    Tab.prototype.sT = function(){
        var s = Array();
        s = manynews[2];
        var sports = [];
        for(var i = 0; i < s["sports"].length; i++) { 
            sports.push('<li><a href="http://media.daum.net/v/' + s["sports"][i].newsId + '"><span>' + s["sports"][i].title + '</span></a></li>');
        }
        var sports1 = sports.splice(0,5);
        var sports1String = sports1.join("");
        var sports2String = sports.join("");        
        newsT.className = "";
        enterT.className = "";
        sportsT.className = "active";
        moreBtn.className = "btn";
        list.innerHTML = "<div id='d1'><ul>" + sports1String + "</ul></div> " + "<div id='d2' class='hide'><ul>" + sports2String  + "</ul></div>";
        this.btn();
    }

    Tab.prototype.btn = function(){
        var d1 = document.getElementById("d1");
        var d2 = document.getElementById("d2");
        var moreBtn = document.getElementById("moreBtn");

        moreBtn.addEventListener("click", more);
        function more(){
           if(d2.className === "hide"){
              d2.className = "";
         }
          moreBtn.className = "hide";
    
        }   
    }
    window.Tab = Tab;
})();