let button=document.getElementById("commentcount");
let commentcount=0;

button.addEventListener('click',function(){
    commentcount++;

    let newcomment=document.getElementById("newcomment").value;
    if(newcomment==""||newcomment==" "){
        return ;
    }
    let content="<br>"+commentcount+": "+newcomment;
    let comment=document.getElementById("comment");
    comment.innerHTML+=content;
    document.getElementById("newcomment").value="";
    
})