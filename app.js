const videoElement = document.querySelector("#video")
const startBtn = document.querySelector("#start")

async function selectMediaStream(){

    try{
        const mediaSteam = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaSteam
        videoElement.onloadedmetadata = () =>{
            videoElement.play()
        }
    }catch(err){

    }
}

startBtn.addEventListener('click', async ()=>{
    startBtn.disabled = true
    
    await videoElement.requestPictureInPicture()

    startBtn.disabled = false
})
selectMediaStream()