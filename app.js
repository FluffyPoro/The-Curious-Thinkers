function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.remove('hide');
    sidebar.classList.add('show');
    sidebar.style.display = 'flex';
    return;
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.remove('show'); 
    sidebar.classList.add('hide'); 
    return;
}

const typewriterElements = document.querySelectorAll('.typewriter');

typewriterElements.forEach((element) => {
  const text = element.textContent.trim();

  if (text) {
    const textArray = text.split('');
    let index = 0;

    const originalText = text; 
    element.innerHTML = ''; 

    function typeWriter() {
      if (index < textArray.length) {
        element.innerHTML += textArray[index];
        index++;
        setTimeout(typeWriter, 50);
      }
    }

    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        typeWriter(); 
      }
    }, { threshold: 1.0 });

    
    observer.observe(element);
  }
});

const titleElements = document.querySelectorAll('.first h2, .second h2, .third h2, .fourth h2');

titleElements.forEach((title) => {
  const text = title.textContent;
  title.innerHTML = '';

  const textArray = text.split('');
  textArray.forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.animationDelay = `${index * 0.1}s`;
    title.appendChild(span);
  });
});