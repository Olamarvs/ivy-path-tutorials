// JavaScript for navigation highlighting
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});
// Get the button and the practice questions div
const showQuestionsBtn = document.getElementById('show-questions-btn');
const practiceQuestionsDiv = document.getElementById('practice-questions');

// Add an event listener to the button
showQuestionsBtn.addEventListener('click', function() {
    // Toggle the visibility of the practice questions div
    if (practiceQuestionsDiv.style.display === 'none') {
        practiceQuestionsDiv.style.display = 'block'; // Show the practice questions
    } else {
        practiceQuestionsDiv.style.display = 'none'; // Hide the practice questions
    }
});