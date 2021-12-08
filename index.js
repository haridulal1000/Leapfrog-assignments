const obj=[
    {
        title: "Github",
        source:"https://github.com/haridulal1000/Leapfrog-assignments",
        host:"https://haridulal1000.github.io/Leapfrog-assignments/"

    },
  
]
let table=document.getElementById("table");
let str=table.innerHTML;
for(let i=0;i<obj.length;i++){
    str+="<tr> <td>"+ obj[i].title+"</td><td><a href=\""+obj[i].source+"\" target=\"_blank\">Link to Source</a></td><td><a href=\""+obj[i].host+"\" target=\"_blank\"/>Link to page</a></td></tr>";

}
table.innerHTML=str;




