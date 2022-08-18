const chuckNorrisPhotos = [
    'norris-approve.gif',
    'norris-black.gif',
    'chucknorris-kick.gif'
]

var randomItem = chuckNorrisPhotos[Math.floor(Math.random()*chuckNorrisPhotos.length)];


document.getElementById('funny-norris').src='./img/'+randomItem;

fetch('/api/previous').then(res => res.json()).then(fact => {
    document.getElementsByClassName('yesterday-sentence')[0].innerHTML = `"${fact.text}."`
})