function snowFall() {
    
    // Create element && add class
    let snow = document.createElement('div')
    snow.classList.add('snow')

    // Add styles to element
    snow.style.left = Math.random() * 100 + 'vw';
    snow.style.animationDuration = Math.random() * 3 + 3 + 's';
    snow.style.scale = Math.random() * 100 + 100 + '%';

    // Add caption and append to parent
    snow.innerText = '❄️'
    document.body.appendChild(snow);

    // Set removing in 8s
    setTimeout(() => {
        snow.remove()
    }, 8000)
}

// Set interval to create snowfall in .3s
setInterval(snowFall, 300);