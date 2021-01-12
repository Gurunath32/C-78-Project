
    var pictures= ["download.jpg","sathish.jpg","amutha.jpg","guru.jpg","krish.jpg"];
    var names= ["","Sathish Kumar","Amutha Prabha","Gurunath","Krishith"];
    var i =0;
    function nextslide() {
    i++;
    document.getElementById("image").src= pictures[i];
    document.getElementById("name").innerHTML= names[i];
    if (i==4) {
        i=0;
    }
    }