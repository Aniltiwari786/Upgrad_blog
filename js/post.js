var increaselike=0;

document.getElementById('showcomment').hide;

function likefunction(){

    increaselike=increaselike+1;

    if(increaselike==1){

         document.getElementById('displaylikes').innerHTML=increaselike+"  person likes this!";

    }

    else{

    document.getElementById('displaylikes').innerHTML=increaselike+"  person have likes this!";

    }

    document.getElementById('likefunction').innerHTML="Liked!";

}

var commentarray=[];

function displaycomment(){

    var b=document.getElementById('writecomment').value;

    commentarray.unshift(b);

    document.getElementById('showcomment').innerHTML="";

     document.getElementById('showcomment').style.padding="10px";

    for(var i=0;i<commentarray.length;i++){

        document.getElementById('showcomment').innerHTML+="<p>"+commentarray[i]+"</p>";

    }

   document.getElementById('writecomment').value='';

}

function editblogdetail() {



    var blogbody=document.getElementById('blogBody');

      var blogtitle=document.getElementById('blogTitleNew');

   

    if(blogbody.contentEditable=="true" && blogtitle.contentEditable=="true"){

       

        blogtitle.contentEditable="false";

        blogbody.contentEditable="false";

        document.getElementById('blogTitleNew').style.border="";

        document.getElementById('blogBody').style.border="";

       

        document.getElementById('editbutton').innerHTML="Edit";

    }else{

         

          blogbody.contentEditable="true";

          blogtitle.contentEditable="true";

       

         document.getElementById('blogTitleNew').style.border="1px solid black";

         document.getElementById('blogBody').style.border="1px solid black";

         document.getElementById('editbutton').innerHTML="Save";

    }

    

}