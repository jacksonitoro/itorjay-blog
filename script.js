document.addEventListener('DOMContentLoaded', () => {
    // Navigation handling
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked link and target section
            link.classList.add('active');
            document.querySelector(targetId).classList.add('active');
        });
    });

    // Comment form handling
    const commentForms = document.querySelectorAll('.comment-form');
    commentForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.querySelector('input').value;
            const comment = form.querySelector('textarea').value;
            const commentsList = form.previousElementSibling;
            
            const newComment = document.createElement('div');
            newComment.innerHTML = `
                <div class="comment">
                    <strong>${name}</strong>
                    <p>${comment}</p>
                </div>
            `;
            
            commentsList.appendChild(newComment);
            form.reset();
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

    // Category filtering
    const categoryLinks = document.querySelectorAll('.category-link');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedCategory = link.textContent;
            // Implement category filtering logic here
            alert(`Showing posts in category: ${selectedCategory}`);
        });
    });
});