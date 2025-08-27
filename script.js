const btn = document.getElementById('button');

function h() {
   btn.innerHTML = 'sending...';

   const serviceID = 'default_service';
   const templateID = 'template_upqlxrh';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'send email';
      alert('sent!');
    }, (err) => {
      btn.value = 'send email';
      alert(JSON.stringify(err));
    });
}