// Custom Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

// Hero Role Typing
const roles = ['Software Developer','AI/ML Engineer','Full Stack Developer'];
let roleIndex = 0;
const roleEl = document.getElementById('role');
setInterval(()=> {
  roleEl.textContent = roles[roleIndex];
  roleIndex = (roleIndex + 1) % roles.length;
}, 3000);

// Development Animated Word
const actions = ['Develop','Debug','Optimize','Build'];
let actionIndex = 0;
const actionEl = document.getElementById('dev-text');
setInterval(()=> {
  actionEl.textContent = actions[actionIndex];
  actionIndex = (actionIndex + 1) % actions.length;
}, 2000);

// Scroll Reveal Animation
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:0.2});
sections.forEach(section => observer.observe(section));
