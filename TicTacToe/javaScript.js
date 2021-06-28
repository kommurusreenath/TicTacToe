
        let count = 0
        function fill(control){
            
            if(document.getElementById(control.id).innerHTML == "" && count%2==0){
                document.getElementById(control.id).innerHTML="X" ;
                count++;
                if(checkWin()){
                    document.getElementById("winner").innerHTML = "X's won the game";
                    reset();
                }
                if(checkDraw())
                {
                    document.getElementById("winner").innerHTML = "Match Draw";
                    reset();
                }
                if(count == 1){
                    document.getElementById("winner").innerHTML = "";
                }
            }
            else if(document.getElementById(control.id).innerHTML == ""){
                document.getElementById(control.id).innerHTML="O" ;
                count++;
                if(checkWin()){
                    document.getElementById("winner").innerHTML = "O's won the game";
                    reset();
                }
                if(checkDraw())
                {
                    document.getElementById("winner").innerHTML = "Match Draw";
                    reset();
                }
            }
            else{
                alert("Choose empty slot");
            }           
            
        }
        function reStart(){
            reset();
            document.getElementById("winner").innerHTML = "";
        }
        function checkDraw(){
            if(getData('div1')!="" && getData('div2')!="" && getData('div3')!="" && getData('div4')!="" && getData('div5')!="" && getData('div6')!="" && getData('div7')!="" && getData('div8')!="" && getData('div9')!="" ){
                return true;
            }
            else{
                return false;
            }
                
        }
        
        function reset(){
            for(var i=1;i<=9;i++){
                document.getElementById('div'+i).innerHTML="";
                count = 0;
            }
        }
        
        function checkWin(){
            if(checkCondition('div1', 'div2', 'div3') || checkCondition('div4', 'div5', 'div6') || checkCondition('div7', 'div8', 'div9') || checkCondition('div1', 'div5', 'div9') || checkCondition('div3', 'div5', 'div7') || checkCondition('div1', 'div4', 'div7') || checkCondition('div2', 'div5', 'div8') || checkCondition('div3', 'div6', 'div9')){
                return true;
            }
        }
        function checkCondition(div1, div2, div3){
            if(getData(div1)!="" &&
               getData(div2)!="" &&
               getData(div3)!="" && 
               getData(div1)==getData(div2) && getData(div2)==getData(div3)){
                    return true;
            }
        }
        function getData(div){
            return document.getElementById(div).innerHTML;
        }
    