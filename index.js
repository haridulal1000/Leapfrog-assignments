const obj = [
  {
    title: "Sample Responsive Website",
    source: "https://github.com/haridulal1000/Final-Project",
    host: "https://haridulal1000.github.io/Final-Project/",
  },
  {
    title: "Online Image Edit",
    source: "https://github.com/haridulal1000/JS-Final",
    host: "https://haridulal1000.github.io/JS-Final/",
  },
  {
    title: "Quiz Mania Using React Js",
    source: "https://github.com/haridulal1000/quiz",
    host: "https://quiz-mania1000.herokuapp.com",
  },
  {
    title: "Hand Gestures Recognition",
    source: "https://github.com/haridulal1000/Hand-Gesture-Recognition",
    host: "#",
  },
  {
    title: "Face Recognition using One-shot Learning",
    source: "https://github.com/haridulal1000/Face-Recognition-using-One-Shot-Learning",
    host: "#",
  },

  {
    title: "Car-Lane",
    source: "https://github.com/haridulal1000/Car-Lane",
    host: "https://haridulal1000.github.io/Car-Lane/",
  },
  {
    title: "Car-Lane-with-Bullet",
    source: "https://github.com/haridulal1000/Car-Lane-with-Bullet",
    host: "https://haridulal1000.github.io/Car-Lane-with-Bullet/",
  },
  {
    title: "Flappy Bird",
    source: "https://github.com/haridulal1000/Flappy-Bird",
    host: "https://haridulal1000.github.io/Flappy-Bird/",
  },

  
  {
    title: "Ant-Smasher",
    source: "https://github.com/haridulal1000/AntSmasher",
    host: "https://haridulal1000.github.io/AntSmasher/",
  },
  {
    title: "Box-Collision",
    source: "https://github.com/haridulal1000/Box-Collision",
    host: "https://haridulal1000.github.io/Box-Collision/",
  },
];
let table = document.getElementById("table");
let str = table.innerHTML;
for (let i = 0; i < obj.length; i++) {
  str += `<tr>
     <td>${obj[i].title}</td>
     <td><a href=${obj[i].source} target="_blank">Link to Source</a></td>
     <td><a href=${obj[i].host} ${obj[i].host!=='#'?'target="_blank"':''}>${obj[i].host!=='#'?'Link to Page':'Not Available'}</a></td>
     </tr>`;
}
table.innerHTML = str;
