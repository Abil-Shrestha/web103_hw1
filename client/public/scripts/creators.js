const renderCareers= async () => {
    let careers = []
    const response = await fetch('/creators')
    let data = await response.json()
    const mainContent = document.getElementById('main-content')
    const searchInput = document.querySelector("[data-search]")
    

    searchInput.addEventListener("input", e => {
        const value = e.target.value.toLowerCase()
        console.log(e.target.value)
        careers = data.filter(c => 
            c.name.toLowerCase().includes(value) || 
            c.submittedby.toLowerCase().includes(value) ||
            c.salaryrange.toLowerCase().includes(value) || 
            c.audience.toLowerCase().includes(value) || 
            c.description.toLowerCase().includes(value)
        );
        mainContent.innerHTML = '';
        if (careers.length > 0) {
            careers.map(career => {
                const card = document.createElement('article')
                card.classList.add('card')

                const topContainer = document.createElement('div')
                topContainer.classList.add('top-container')

                const bottomContainer = document.createElement('div')
                bottomContainer.classList.add('bottom-container')
                topContainer.style.backgroundImage = `url(${career.image})`

                const name = document.createElement('h3')
                name.textContent = career.name
                bottomContainer.appendChild(name)

                const salaryRange = document.createElement('p')
                salaryRange.textContent = 'Salary: ' + career.salaryrange
                bottomContainer.appendChild(salaryRange)

                const audience = document.createElement('p')
                audience.textContent = 'Great For: ' + career.audience
                bottomContainer.appendChild(audience)

                const link = document.createElement('a')
                link.textContent = 'Learn More'
                link.setAttribute('role', 'button')
                link.href = `/creators/${career.id}`
                bottomContainer.appendChild(link)

                card.appendChild(topContainer)
                card.appendChild(bottomContainer)
                mainContent.appendChild(card)

            });
        } else {
            const message = document.createElement('h2');
            message.textContent = 'Career Not Found';
            mainContent.appendChild(message);
        }
    })
    if(data){
        console.log('hi')
        data.map(career => {
            const card = document.createElement('article')
            card.classList.add('card')
            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')
            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')
            topContainer.style.backgroundImage = `url(${career.image})`
            const name = document.createElement('h3')
            name.textContent = career.name
            bottomContainer.appendChild(name)
            const salaryRange = document.createElement('p')
            salaryRange.textContent = 'Salary: ' + career.salaryrange
            bottomContainer.appendChild(salaryRange)
            const audience = document.createElement('p')
            audience.textContent = 'Great For: ' + career.audience
            bottomContainer.appendChild(audience)
            const link = document.createElement('a')
            link.textContent = 'Learn More'
            link.setAttribute('role', 'button')
            link.href = `/creators/${career.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)
            mainContent.appendChild(card)


        })
    } else {
        const message = document.createElement('h2')
        message.textContent = 'No Careers Available 😞'
        mainContent.appendChild(message)
    }
}
const renderCareer = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/creators')
    const data = await response.json()
    const creatorContent = document.getElementById('gift-content')
    let career
    career = data.find(c => c.id === requestedID)
    if (career) {
        document.getElementById('image').src = career.image
        document.getElementById('name').textContent = career.name
        document.getElementById('submittedBy').textContent = 'Submitted by: ' + career.submittedby
        document.getElementById('salaryRange').textContent = 'Salary Range: ' + career.salaryrange
        document.getElementById('audience').textContent = 'Great For: ' + career.audience
        document.getElementById('description').textContent = career.description
        document.title = `Creative - ${career.name}`
    }
    else {
        const message = document.createElement('h2')
        document.getElementById('image').src = "https://64.media.tumblr.com/75078756a0acf675edebccd6a3d8f3cf/cd9b284ddee27079-98/s500x750/ccf7c9f6cebc0b62c5a6917ffec97ef27ed1d7ca.gif"
    }
}


const knownRoutes = ['/', '/creators', /^\/creators\/\d+$/];
const currentPath = window.location.pathname;
const isKnownRoute = knownRoutes.some(route => {
    if (typeof route === 'string') {
        return route === currentPath;
    } else if (route instanceof RegExp) {
        return route.test(currentPath);
    }
});

if (currentPath === knownRoutes[0]){
    renderCareers()
}
if (!isKnownRoute) {
    window.location.href = '/404.html';
}

renderCareer()






