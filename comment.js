let button=document.getElementById("commentcount");
let commentcount=0;
let commentlist=[];

button.addEventListener('click',function(){
    commentcount++;

    let newcomment=document.getElementById("newcomment").value;
    if(newcomment==""||newcomment==" "||commentlist.includes(newcomment)==1){
        return ;
    }
    commentlist.push(newcomment);
    
    let content="<br>"+commentcount+": "+newcomment;
    let comment=document.getElementById("comment");
    comment.innerHTML+=content;
    document.getElementById("newcomment").value="";
    
})