const words = ['Beautiful', 'Gorgeous', 'Amazing', 'Lovely', 'Queen', 'Angel','Gorgeous', 'Amazing', 'Lovely', 'Queen','Gorgeous', 'Amazing', 'Lovely', 'Queen',"Humsafar", 'meri Tammana ']; // Final word = 'Tammana'
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 100;
const delayBetweenWords = 1500;

const typingTarget = document.getElementById('typing-word');

function typeWord() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    charIndex--;
    typingTarget.textContent = currentWord.substring(0, charIndex);

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex++;

      // ✅ Stop if we've finished all words
      if (wordIndex >= words.length) return;

      setTimeout(typeWord, typingSpeed);
    } else {
      setTimeout(typeWord, erasingSpeed);
    }

  } else {
    typingTarget.textContent = currentWord.substring(0, charIndex);
    charIndex++;

    if (charIndex > currentWord.length) {
      // ✅ If it's the last word, do not delete
      if (wordIndex === words.length - 1) {
        return; // Stop typing effect here
      }

      isDeleting = true;
      setTimeout(typeWord, delayBetweenWords);
    } else {
      setTimeout(typeWord, typingSpeed);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  typeWord();
});


