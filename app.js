const btns = document.querySelectorAll('.btn')
const allAudios = document.querySelectorAll('.btn audio')
let samples = []

allAudios.forEach(audio => {
    samples.push(audio.src)
})

function playAudio (audioSource, audioPosition) {
    audioSource.src = ''
    audioSource.src = samples[audioPosition]
    audioSource.play()
}

btns.forEach((item, index) => {
    item.addEventListener('click', function () {
        const audio = item.querySelector('audio')
        playAudio(audio, index)
    })
})

window.addEventListener('keypress', function (evt) {
    if (evt.code === 'KeyA') {
        playAudio(allAudios[0], 0)
    } else if (evt.code === 'KeyS') {
        playAudio(allAudios[1], 1)
    } else if (evt.code === 'KeyD') {
        playAudio(allAudios[2], 2)
    } else if (evt.code === 'KeyF') {
        playAudio(allAudios[3], 3)
    } else if (evt.code === 'KeyG') {
        playAudio(allAudios[4], 4)
    } else if (evt.code === 'KeyH') {
        playAudio(allAudios[5], 5)
    } else if (evt.code === 'KeyJ') {
        playAudio(allAudios[6], 6)
    } else if (evt.code === 'KeyK') {
        playAudio(allAudios[7], 7)
    } else if (evt.code === 'KeyL') {
        playAudio(allAudios[8], 8)
    }
})