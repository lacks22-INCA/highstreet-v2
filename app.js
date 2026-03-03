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

    let r = 'For comforters or bulky loads, use our 50–65 lb machines for best results.';
    if(/hours|open|horario/i.test(q)) r = 'Wash & Fold hours are daily from 9:00 AM to 7:00 PM.';
    if(/price|cost|precio/i.test(q)) r = 'Wash & Fold pricing: $1.00/lb standard, $1.50/lb next-day service, 20 lb minimum.';
    if(/directions|address|ubicacion|location/i.test(q)) r = 'We are at 183 High Street, Lowell, MA 01852. Tap Get Directions for navigation.';

    add('AI Concierge', r);
  });
}
