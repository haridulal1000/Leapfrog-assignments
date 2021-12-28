const obj=[
    {
        title: "GitHub",
        source:"https://github.com/haridulal1000/Leapfrog-assignments",
        host:"https://haridulal1000.github.io/Leapfrog-assignments/"

    },
    {
    title: "CSS",
        source:"https://github.com/haridulal1000/Leapfrog-Assignment-css",
        host:"https://haridulal1000.github.io/Leapfrog-Assignment-css/"
    },
    {
    title: "Design Assignment 1: 1A-home-search-responsive",
        source:"https://github.com/haridulal1000/CSS-Assignment-Responsive",
        host:"https://haridulal1000.github.io/CSS-Assignment-Responsive/"
    }
    ,
    {
    title: "Design Final Project",
        source:"https://github.com/haridulal1000/Final-Project",
        host:"https://haridulal1000.github.io/Final-Project/"
    }
    ,
    {
    title: "Image-Carousel-1",
        source:"https://github.com/haridulal1000/Image-Carousel-1",
        host:"https://haridulal1000.github.io/Image-Carousel-1/"
    }
    ,
    {
    title: "Image-Carousel-2",
        source:"https://github.com/haridulal1000/Image-carousel-2",
        host:"https://haridulal1000.github.io/Image-carousel-2/"
    }
    ,
    {
    title: "Ant-Smasher",
        source:"https://github.com/haridulal1000/AntSmasher",
        host:"https://haridulal1000.github.io/AntSmasher/"
    }
    ,
    {
    title: "Box-Collision",
        source:"https://github.com/haridulal1000/Box-Collision",
        host:"https://haridulal1000.github.io/Box-Collision/"
    }
    ,
    {
    title: "Car-Lane",
        source:"https://github.com/haridulal1000/Car-Lane",
        host:"https://haridulal1000.github.io/Car-Lane/"
    }
  
]
let table=document.getElementById("table");
let str=table.innerHTML;
for(let i=0;i<obj.length;i++){
    str+="<tr> <td>"+ obj[i].title+"</td><td><a href=\""+obj[i].source+"\" target=\"_blank\">Link to Source</a></td><td><a href=\""+obj[i].host+"\" target=\"_blank\"/>Link to page</a></td></tr>";

}
table.innerHTML=str;




