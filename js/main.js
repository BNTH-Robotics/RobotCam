function showClip(data){
    $("h2").text(data.title);
    $("#v").attr("src", data.path);
    $("#v").attr("vid", data.id);
}

function start(){
    showClip(d[0])   
    for(var i = 0; i < d.length; i++){
         var str = "<tr><td onclick='{playById("+i+")}'>"+d[i].title+"</td></tr>"
         $("#selBody > table").append(str);
    }
}

function playById(id){
    showClip(d[id])   
}

function updateTime(){
    var v = document.getElementById('v')
    //console.log(v)
    
    //Check if ended
    if(v.ended){
        var i = parseInt($("#v").attr("vid")) 
        showClip(d[i+1])
    }
    
    var p = v.currentTime / v.duration;
    //console.log(p)
    $("#progress-bar").css("width", (p*100)+"%")
}

start()
setInterval(updateTime, 200)
//updateTime()

$(window).keyup(function(event){
    if(event.keyCode == 191){
        //Pop up help modal
        $("#helpModal").modal();
    } else if (event.keyCode == 77){
        //Mute or unmute   
        document.getElementById('v').muted = !document.getElementById('v').muted;
        
    } else if (event.keyCode == 78){
        //Next video
        var i = parseInt($("#v").attr("vid")) 
        showClip(d[i+1])
    } else if (event.keyCode == 80){
        //Prev video
        var i = parseInt($("#v").attr("vid")) 
        showClip(d[i-1])
        
    } else if (event.keyCode == 70){
        //fullscreen
        
        var elem = document.getElementById('v')
        
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        }
        
    } else if (event.keyCode == 83){
        //Show choose modal
        $("#selModal").modal();
        
    }
});