function chatbotAnswer(type) {
  const reply = document.getElementById("chatbot-reply");
  if (type === 'projects') {
    reply.innerHTML = 'You can check my projects <a href="#projects">here</a>.';
  } else if (type === 'contact') {
    reply.innerHTML = 'Feel free to <a href="mailto:ajwan1alturki@gmail.com">email me</a> or visit the <a href="#contact">contact section</a>.';
  } else if (type === 'cv') {
    reply.innerHTML = 'Download my CV <a href="Ajwan_CV.pdf" target="_blank">here</a>.';
  }
}