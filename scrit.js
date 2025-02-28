function calculateScore() {
    const correctAnswers = {
        q1: "Joyful",
        q21: "Option A",
        q41: "5 hours"
        // Add the correct answers for the other questions here.
    };
    
    let score = 0;
    let totalQuestions = 50;
    
    for (const [key, answer] of Object.entries(correctAnswers)) {
        const selectedOption = document.querySelector(`input[name="${key}"]:checked`);
        if (selectedOption && selectedOption.value === answer) {
            score++;
        }
    }
    
    document.getElementById("result").textContent = `Your score: ${score}/${totalQuestions}`;
}
