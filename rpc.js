let score=JSON.parse(localStorage.getItem('score'));

            if(!score){
                score={
                    wins:0,
                    ties:0,
                    loss:0
                };
            }
            updatescore();
                function updatescore(){
                    document.querySelector('.js-score')
                        .innerHTML=`wins:${score.wins} ,Losses:${score.loss},
                        Ties:${score.ties}`;
                }



                function playGame(playermove){
                const cM=compick();
                let result='';
                if(playermove==='scissors'){
                    if(cM==='rock'){
                        result='you lose';
                    }
                    else if(cM==='paper'){
                        result='you won';
                    }
                    else if(cM==='scissors'){
                        result='tie';
                    }
                }
                else if(playermove==='paper'){
                    if(cM==='rock'){
                        result='you won';
                    }
                    else if(cM==='paper'){
                        result='tie';
                    }
                    else if(cM==='scissors'){
                        result='you lose';
                    }
                }
                else if(playermove==='rock'){
                    if(cM==='rock'){
                        result='tie';
                    }
                    else if(cM==='paper'){
                        result='you lose';
                    }
                    else if(cM==='scissors'){
                        result='you won';
                    }
                }
                if(result==='you won'){
                    score.wins+=1;
                }
                else if(result==='you lose'){
                    score.loss+=1;
                }
                else if(result==='tie'){
                    score.ties+=1;
                }
                localStorage.setItem('score',JSON.stringify(score));
                updatescore();
                document.querySelector('.js-result').
                innerHTML=result;
                document.querySelector('.js-moves').innerHTML
                =`You <img src="images/${playermove}-emoji.png" alt="" class="icon">
             <img src="images/${cM}-emoji.png" alt="" class="icon"> Computer`;
                
            }
            function compick(){
                let cM='';
                const rN=Math.random();//randomnumber
                if(rN>=0 && rN<1/3){
                    cM='rock';
                }
                else if(rN>=1/3 && rN<2/3){
                    cM='paper';
                }
                else if(rN>=2/3 && rN<1){
                    cM='scissors';
                }
                return cM;

            }