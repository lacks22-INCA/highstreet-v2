const log = document.getElementById('chatLog');
const input = document.getElementById('chatInput');
const send = document.getElementById('chatSend');

function add(role, text){
  const p = document.createElement('p');
  p.innerHTML = `<strong>${role}:</strong> ${text}`;
  log.appendChild(p);
  log.scrollTop = log.scrollHeight;
}

if(send && input){
  send.addEventListener('click', () => {
    const q = input.value.trim();
    if(!q) return;
    add('Visitor', q);
    input.value = '';
    let r = 'We recommend a large machine for bulky loads. Would you like directions or today\'s pricing?';
    if(/hours|open/i.test(q)) r = 'We are open today. Tap Call for exact hours confirmation.';
    if(/price|cost|how much/i.test(q)) r = 'Pricing depends on machine size. Tap “See Pricing” and ask staff for current specials.';
    if(/comforter|blanket/i.test(q)) r = 'For comforters, use 50–65 lb washers for best cleaning and drying efficiency.';
    add('AI Concierge', r);
  });
}
