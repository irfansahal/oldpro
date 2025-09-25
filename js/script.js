

const photos = ['images/background2.jpg','images/backgroundimg8.jpg','images/backgroundimg14.jpg','images/img10.jpg', 'images/imgback2.jpg', 'images/backgroundimg6.jpg','images/backgroundimg3.jpg','images/backgroundimg9.jpg','images/background-img2.jpg','images/14-featured.jpeg','images/backgroundimg4.jpg'];

let imgTg = document.querySelector('.sMimg');


countElement = 0;

setInterval(()=>{
countElement++;

if(countElement>=photos.length){
  countElement = 0;
  imgTg.src = photos[ countElement];
}else{
imgTg.src = photos[countElement];
}
},2000);



const videoSources = [
 'https://res.cloudinary.com/dybdafvqn/video/upload/v1758821948/background3_uz3n2z.mp4',
 'https://res.cloudinary.com/dybdafvqn/video/upload/v1758821890/newbackground11_xbjvht.mp4',
 'https://res.cloudinary.com/dybdafvqn/video/upload/v1758822122/newbackground_ndbngb.mp4',
 'https://res.cloudinary.com/dybdafvqn/video/upload/v1758822198/newbackground7_ba2xtj.mp4',
 'https://res.cloudinary.com/dybdafvqn/video/upload/v1758822305/background5_pi8cy3.mp4',
 
 
];

const videoTg = document.querySelector('.videobg');
const sourceTg =videoTg.querySelector('source');

let index = 0;

setInterval(() => {
  index = (index + 1) % videoSources.length;
  sourceTg.src = videoSources[index];

 videoTg.load();
  videoTg.onloadeddata = () => {
     videoTg.play();
  };
  
},6000)

