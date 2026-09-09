const hearts = document.getElementById("hearts");
const sparkles = document.getElementById("sparkles");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const openBtn = document.getElementById("openBtn");

function createHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.textContent = ["❤️","💗","💕","💖","💓","💞"][Math.floor(Math.random()*6)];
  h.style.left = Math.random()*100 + "vw";
  h.style.fontSize = (12 + Math.random()*24) + "px";
  h.style.animationDuration = (6 + Math.random()*7) + "s";
  hearts.appendChild(h);
  setTimeout(()=>h.remove(),14000);
}
setInterval(createHeart, 450);

for(let i=0;i<45;i++){
  const s=document.createElement("div");
  s.className="spark";
  s.style.left=Math.random()*100+"vw";
  s.style.top=Math.random()*100+"vh";
  s.style.animationDelay=Math.random()*2+"s";
  sparkles.appendChild(s);
}

let musicOn=false;
musicBtn.addEventListener("click",()=>{
  if(musicOn){music.pause();musicOn=false;musicBtn.textContent="🎵 Music";}
  else{
    music.play().then(()=>{musicOn=true;musicBtn.textContent="🎵 Music On";}).catch(()=>{
      alert("Add your music as 'music.mp3' in the website folder, then try again.");
    });
  }
});

openBtn.addEventListener("click",()=>{
  document.querySelectorAll(".hidden-section").forEach((el,i)=>{
    setTimeout(()=>el.classList.add("show"),i*180);
  });
  document.querySelector(".reveal").scrollIntoView({behavior:"smooth"});
  music.play().then(()=>{musicOn=true;musicBtn.textContent="🎵 Music On";}).catch(()=>{});
});

const quotes=document.querySelectorAll(".quote");
const dots=document.getElementById("quoteDots");
let current=0;
quotes.forEach((_,i)=>{
  const d=document.createElement("span");
  d.className="dot"+(i===0?" active":"");
  d.onclick=()=>showQuote(i);
  dots.appendChild(d);
});
function showQuote(i){
  quotes[current].classList.remove("active");
  dots.children[current].classList.remove("active");
  current=i;
  quotes[current].classList.add("active");
  dots.children[current].classList.add("active");
}
setInterval(()=>showQuote((current+1)%quotes.length),5000);

document.getElementById("wishBtn").addEventListener("click",()=>{
  const box=document.getElementById("fireworks");
  for(let i=0;i<22;i++){
    const f=document.createElement("div");
    f.className="firework";
    f.textContent=["🎆","✨","💖","🎇"][Math.floor(Math.random()*4)];
    f.style.left=(5+Math.random()*90)+"%";
    f.style.top=(10+Math.random()*65)+"%";
    f.style.animationDelay=(Math.random()*.8)+"s";
    box.appendChild(f);
    setTimeout(()=>f.remove(),3000);
  }
});
