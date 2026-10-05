

console.log('Script loaded');

const formMessage = document.querySelector('#form-message');
const reportform = document.querySelector('.report-form');

if (reportform) {
    reportform.addEventListener('submit', (event) => {
        event.preventDefault();
        reportform.reset();
        if (formMessage) {
            formMessage.textContent = 'Meldingen din er sendt!';
            setTimeout(() => {
                formMessage.textContent = '';
            }, 3000);
        }
    });
}

const serviceSearchInput = document.querySelector('.service-search input');
if (serviceSearchInput) {
    serviceSearchInput.addEventListener('input', (event) => {
        const noResultsMessage = document.querySelector('#no-results');
        const searchTerm = event.target.value.toLowerCase();
        const serviceItems = document.querySelectorAll('.service-item');
        serviceItems.forEach((item) => {
            const serviceName = item.querySelector('.service-card').textContent.toLowerCase();
            if (serviceName.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
        if (noResultsMessage) {
            const anyVisible = Array.from(serviceItems).some(item => item.style.display !== 'none');
            noResultsMessage.style.display = anyVisible ? 'none' : 'block';
        }
    });
}

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("open");
});

const ratings = document.querySelectorAll(".rating");

ratings.forEach((rating) => {
    const stars = rating.querySelectorAll("button");

    stars.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedValue = Number(button.dataset.value);

            stars.forEach((star) => {
                const starValue = Number(star.dataset.value);

                if (starValue <= selectedValue) {
                    star.textContent = "★";
                } else {
                    star.textContent = "☆";
                }
            });
        });
    });
});
