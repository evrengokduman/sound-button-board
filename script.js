const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach((sound) => {
  //loop through each sound in the array
  const btn = document.createElement('button') // create a button element

  btn.classList.add('btn') // add btn class to the button element

  btn.innerText = sound // add the sound name to the button

  btn.addEventListener('click', () => {
    stopSongs() // click event starts by stopping all the sounds, so if something is playing, it will stop. By clicking something we also start another audio file.

    document.getElementById(sound).play() // play the sound when the button is clicked
  })
  document.getElementById('buttons').appendChild(btn) // appendChild() adds a node to the end of the list of children of a specified parent node.
})

function stopSongs() {
  // stop the sound when the button is clicked
  sounds.forEach((sound) => {
    const song = document.getElementById(sound)

    song.pause()
    song.currentTime = 0
  })
}
