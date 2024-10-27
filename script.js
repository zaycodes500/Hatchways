document.getElementById('generateButton').addEventListener('click', function() {
    const imageUrl = document.getElementById('imageUrl').value;
    const topText = document.getElementById('topInput').value;
    const bottomText = document.getElementById('bottomInput').value;

    const memeImage = document.getElementById('memeImage');
    memeImage.src = imageUrl;
    memeImage.onload = function() {
        memeImage.style.display = 'block'; // Show image once it's loaded
    };
    
    document.getElementById('topText').innerText = topText;
    document.getElementById('bottomText').innerText = bottomText;
});