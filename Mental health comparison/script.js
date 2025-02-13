document.getElementById('logMoodButton').addEventListener('click', function() {
    const moodInput = document.getElementById('moodInput');
    const moodText = moodInput.value.trim();

    if (moodText) {
        const moodList = document.getElementById('moodList');
        const li = document.createElement('li');
        li.textContent = moodText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            moodList.removeChild(li);
        });

        li.appendChild(deleteButton);
        moodList.appendChild(li);
        moodInput.value = ''; // Clear the input
    } else {
        alert('Please enter your mood!');
    }
});