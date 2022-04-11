

  
function readmore(){
    var dots = document.getElementById("dots");
    var moretext = document.getElementById('more');
    var btn = document.getElementById('btn');

    if(dots.style.display === "none"){
        dots.style.display = "inline";
        btn.innerHTML = "Read more";
        moretext.style.display = 'none';
    }else{
        dots.style.display = 'none';
        btn.innerHTML = "Read less";
        moretext.style.display = 'inline';
    }
}



function readmore1(){
    var dots = document.getElementById("dots1");
    var moretext = document.getElementById('more1');
    var btn = document.getElementById('btn1');

    if(dots.style.display === "none"){
        dots.style.display = "inline";
        btn.innerHTML = "Read more";
        moretext.style.display = 'none';
    }else{
        dots.style.display = 'none';
        btn.innerHTML = "Read less";
        moretext.style.display = 'inline';
    }
}


function readmore2(){
    var dots = document.getElementById("dots2");
    var moretext = document.getElementById('more2');
    var btn = document.getElementById('btn2');

    if(dots.style.display === "none"){
        dots.style.display = "inline";
        btn.innerHTML = "Read more";
        moretext.style.display = 'none';
    }else{
        dots.style.display = 'none';
        btn.innerHTML = "Read less";
        moretext.style.display = 'inline';
    }
}