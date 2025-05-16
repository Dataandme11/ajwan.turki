document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("lang-toggle");
  let isArabic = false;

  toggleBtn.addEventListener("click", () => {
    isArabic = !isArabic;
    toggleBtn.innerText = isArabic ? "EN" : "AR";

    // Hero
    document.querySelector(".hero-text h2 span").innerText = isArabic ? "أجوان" : "Ajwan";
    document.querySelector(".hero-text h2").childNodes[0].textContent = isArabic ? "مرحباً، أنا " : "Hello, I'm ";
    document.querySelector(".hero-text p").innerText = isArabic
      ? "محللة بيانات ومهتمة بالذكاء الاصطناعي"
      : "Data Analyst & AI Enthusiast";

    // About
    document.querySelector("#about h2").innerText = isArabic ? "عني" : "About Me";
    document.querySelector("#about p").innerText = isArabic
      ? "أنا أجوان تركي، طالبة علم بيانات أتمتع بشغف عميق تجاه الذكاء الاصطناعي وتعلم الآلة وسرد القصص باستخدام البيانات. أُحب تحويل البيانات المعقدة إلى رؤى واضحة، وتطوير حلول ذكية لها أثر. أعمل ككاتبة محتوى إبداعي في منظمة عون التقنية الخيرية، حيث أُسهم في صياغة محتوى ملهم وهادف. أؤمن بالتفاصيل، وأسعى دائمًا للتعلم والتطور لأكون جزءًا من مستقبل يُشكَّل بالبيانات والإبداع."
      : "I'm Ajwan Turki, a data science student with a deep curiosity for artificial intelligence, machine learning, and data-driven storytelling. I love transforming complex datasets into insights and building smart solutions. I'm also a creative writer at Awontech Charity, crafting content that inspires and empowers. I'm passionate, detail-oriented, and always learning to shape the future with data and creativity.";

    // Headings
    document.querySelector("#skills h2").innerText = isArabic ? "المهارات" : "Skills";
    document.querySelector("#projects h2").innerText = isArabic ? "المشاريع" : "Projects";
    document.querySelector("#certificates h2").innerText = isArabic ? "الشهادات" : "Certificates";
    document.querySelector("#experience h2").innerText = isArabic ? "الخبرات" : "Experience";
    document.querySelector("#contact h2").innerText = isArabic ? "التواصل" : "Contact Me";

    // Contact info
    document.querySelector(".contact-form h3").innerText = isArabic ? "اكتب رسالة لي" : "Write Me a Message";
    document.querySelector(".contact-form textarea").placeholder = isArabic ? "رسالتك" : "Your Message";
    document.querySelector(".contact-form button").innerText = isArabic ? "إرسال" : "Send";

    const emailText = isArabic ? "البريد الإلكتروني: " : "Email: ";
    const linkedinText = isArabic ? "لينكدإن: " : "LinkedIn: ";
    document.querySelector('#contact p:nth-of-type(1)').innerHTML = emailText + '<a href="mailto:ajwan1alturki@gmail.com">ajwan1alturki@gmail.com</a>';
    document.querySelector('#contact p:nth-of-type(2)').innerHTML = linkedinText + '<a href="https://www.linkedin.com/in/ajwan-a-turki-926253295" target="_blank">Visit My LinkedIn</a>';
  });
});