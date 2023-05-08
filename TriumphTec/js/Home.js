var videoStorage = [ 
    '//media.w3.org/2010/05/sintel/trailer',
    '//techslides.com/demos/sample-videos/small',
    '//fat.gfycat.com/DazzlingCompleteAnkole',
    '//zippy.gfycat.com/HeavyPlumpIvorybilledwoodpecker'
],
    video = document.querySelector('video'),
    // choose one random url from our storage as the active video
    activeVideoUrl = videoStorage[Math.round(Math.random() * (videoStorage.length - 1))];        
        
// check which file extension your browser can play and set the video source accordingly
// if(video.canPlayType('video/webm')) {
//     video.setAttribute('src', activeVideoUrl + '.webm');
// } else if(video.canPlayType('video/mp4')) {
//     video.setAttribute('src', activeVideoUrl + '.mp4');
// }