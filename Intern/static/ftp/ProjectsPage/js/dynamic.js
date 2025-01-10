document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/Intern/static/ftp/ProjectsPage/js/intern.json');
        const data = await response.json();
        const cardsContainer = document.getElementById('internshipCards');

        data.forEach(intern => {
            const listItem = document.createElement('li');
            listItem.style.minWidth = '280px';

            listItem.innerHTML = `
                <div class="card">
                    <img src="${intern.image}" class="card__image" alt="${intern.alt}" />
                    <div class="card__overlay">
                        <div class="card__header pb-0">
                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" />
                            </svg>
                            <div class="card__header-text">
                                <h3 class="card__title">${intern.title}</h3>
                                <h5 class="card__title_1">${intern.organization}</h5>
                                <span class="card__status" style="color: #ff4747;">Deadline: ${intern.deadline}</span>
                            </div>
                        </div>
                        <p class="card__description">${intern.description}</p>
                        <div class="buttons px-2 pb-3" style="position: absolute; bottom: 0px; width: 100%;">
                            <a class="read_more px-3 py-2" href="${intern.link}" target="_blank">Apply Now</a>
                        </div>
                    </div>
                </div>
            `;

            cardsContainer.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error loading internships:', error);
    }
});