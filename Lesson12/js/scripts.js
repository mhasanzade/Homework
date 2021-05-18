// var infoTime = 23;
// if (infoTime == 10){
//     document.write("Sa");
// } else if(infoTime == 23)  {
//     document.write("da");   
// } 

var c_t = "";
function timepicker(el,S){
    var div = document.querySelector('.timepicker_wrapper')
    function pad(n) {
        var len = 2 - (''+n).length;
        return (len > 0 ? new Array(++len).join('0') : '') + n
      }
      
    if (S == 'a'){
        html = "";
        for(i=0;i<=23;i++){
            html += '<option value="'+pad(i)+'">'+pad(i)+'</option>'
        }
        document.querySelector('.timepicker_hour').innerHTML = html

        html = "";
        for(i=0;i<=59;i++){
            html += '<option value="'+pad(i)+'">'+pad(i)+'</option>'
        }
        document.querySelector('.timepicker_minute').innerHTML = html

        c_t = "";
        c_t = el;
        document.querySelector('.timepicker_wrapper').style.display = "block";
        
    }
    if(S == 'c'){
        document.querySelector('.timepicker_hour').value = "";
        document.querySelector('.timepicker_minute').value = "";
        c_t.value = "";
    }
    if(S == 'x'){
        div.style.display = "block";
    }
    if(S == 's'){
        var hr = document.querySelector('.timepicker_hour').value;
        var min = document.querySelector('.timepicker_minute').value;
      
        if(hr != "" && min != ""){
            c_t.value = hr+":"+min;
            div.style.display = "none";
        }
        if (hr < 12 && hr >= 6){
            var text = "Good morning!";
            document.getElementById('myDIV').style.color = '#ebf4c3'; 
            document.getElementById('myDIV').style.textShadow = ' 5px -2px 10px';
            document.getElementById('myDIV').style.animation= "zoomIn 2s";
            document.getElementById("myImg").src = "../img/morning.jpg";
            document.getElementById('myImg').style.boxShadow = '#ebf4c3 0px 0px 70px 0px';
            document.getElementById('myImg').style.animation= "zoomIn 2s" ;
        }
        else if (hr >= 12 && hr < 18){
          
            var text = "Good afternoon!";
            document.getElementById('myDIV').style.color = '#f65437';  
            document.getElementById('myDIV').style.textShadow = ' 5px -2px 10px';
            document.getElementById('myDIV').style.animation= "zoomIn 3s";
            document.getElementById("myImg").src = "../img/afternoon.jpg";
            document.getElementById('myImg').style.boxShadow = 'rgb(246 84 55) 0px 0px 70px 0px';
            document.getElementById('myImg').style.animation= "zoomIn 2s";
        }
           
        else if (hr >=18 && hr <= 23){
            var text = "Good evening!";
            document.getElementById('myDIV').style.color = '#7b62a4';  
            document.getElementById('myDIV').style.textShadow = ' 5px -2px 10px';
            document.getElementById('myDIV').style.animation= "zoomIn 1s";
            document.getElementById("myImg").src = "../img/evening.png";
            document.getElementById('myImg').style.boxShadow = '#7b62a4 0px 0px 70px 0px';
            document.getElementById('myImg').style.animation= "zoomIn 2s"
            
        }
        else {
            var text = "Good night!";
            document.getElementById('myDIV').style.color = '#503131';  
            document.getElementById('myDIV').style.textShadow = ' 5px -2px 10px';
            document.getElementById('myDIV').style.animation= "zoomIn 4s";
            document.getElementById("myImg").src = "../img/night.png";
            document.getElementById('myImg').style.boxShadow = '#503131 0px 0px 70px 0px';
            document.getElementById('myImg').style.animation= "bounceInDown 2s"
        }


        document.getElementById("myDIV").innerHTML= text;
        document.getElementById("myImg").innerHTML= myImg;
            
        }
        
           
        
    }
    



function changeTimepickerheader(el ,S){
    var k = document.querySelectorAll('.timepicker_header b')
    if(S == '1'){
        k[0].innerHTML = el.value
    }
    if(S == '2'){
        k[1].innerHTML = el.value
    }
    if(S == '3'){
        k[2].innerHTML = el.value
    }
}


// } else if(infoTime == 23)  {
//     document.write("da");   
// } 