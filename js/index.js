const $video = document.querySelector('#video')
const $play = document.querySelector('#play') 
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener("click", handlePlay)
$pause.addEventListener("click", handlePause)


function handlePlay() {
    $video.play()
    console.log('play')
    $play.hidden = true
    $pause.hidden = false

    }

function handlePause() {
    $video.pause()
    console.log('pause')
    $pause.hidden = true
    $play.hidden = false

    }

$backward.addEventListener('click', handleBackward)

function handleBackward(){
    $video.currentTime = $video.currentTime - 10
    console.log('para atras 10secs uwu', $video.currentTime)
}

$forward.addEventListener('click', handleForward)

function handleForward(){
    $video.currentTime = $video.currentTime + 10
    console.log('para adelante 10secs uwu', $video.currentTime)
}

const $progress = document.querySelector('#progress')

$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded(){
    $progress.max = $video.duration
    
    console.log('ha cargado el video', $video.duration )
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime
  //  console.log('uwu', $video.currentTime)//
}

$progress.addEventListener('input', handleInput)
    function handleInput(){
        $video.currentTime = $progress.value
        console.log($progress.value)
    }