
function showSection(sectionId) {

    const sections = document.querySelectorAll('.section');


    sections.forEach(section => {
        section.classList.remove('active');
    });


    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
