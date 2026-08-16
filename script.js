function toggleMenu(){
  const menu = document.getElementById('navMenu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

document.querySelectorAll('#navMenu a').forEach(a=>{
  a.addEventListener('click',()=>{
    if(window.innerWidth<=850) {
      document.getElementById('navMenu').style.display='none';
    }
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

function sendMessage(event){
  event.preventDefault();

  const whatsappNumber = '918159068408';
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  const text =
    `নমস্কার SIMA COACHING CENTRE,%0A%0A` +
    `নাম: ${encodeURIComponent(name)}%0A` +
    `মোবাইল: ${encodeURIComponent(phone)}%0A` +
    `বার্তা: ${encodeURIComponent(message)}`;

  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
}
