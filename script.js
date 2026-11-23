/* ================================================================
   ✏️  EDIT YOUR PORTFOLIO HERE — everything on the page comes
   from this one object. Replace the sample text with your own.
   ================================================================ */
const PROFILE = {
  name: "Frank Njagi",
  initials: "FN",
  role: "System Administrator · Cybersecurity",
  headline: "I keep systems <em>secure</em>, reliable and running.",
  lead: "System Administrator based in Charlotte, NC, with a background in cybersecurity — vulnerability scanning, threat analysis, incident response and cloud security monitoring across AWS, Google Cloud and Azure.",
  stats: [["8+","Years in IT & security"],["60%","Cloud threats reduced"],["30%","Efficiency gained through automation"]],
  about: [
    "I'm a System Administrator at Spectrum, where I support Linux and Windows file-transfer platforms, automate routine work with Python, and harden systems against NIST best practices.",
    "Before that I monitored cloud security across AWS, GCP and Azure, migrated servers between clouds, and built anomaly-detection pipelines with Wazuh. I hold a B.S. in Information Technology from the University of North Florida, with coursework in computer security, network security, intrusion detection and cloud computing.",
    "I like work where security and reliability meet: finding the weak spot, fixing it, and documenting it so it stays fixed."
  ],
  skillGroups: [
    ["Security tools",["Wireshark","Wazuh","NMAP","SSL/TLS certs"]],
    ["Cloud platforms",["AWS","Google Cloud","Azure","GuardDuty","CloudFormation"]],
    ["Programming",["Python","Java","C","JavaScript","HTML","Bash"]],
    ["Databases",["MySQL","Oracle","MariaDB"]],
    ["Frameworks",["NIST","MITRE ATT&CK"]],
    ["Systems",["Linux","Windows","Active Directory","Apache","Firewalls"]]
  ],
  tools: ["Technical writing","Cross-functional collaboration","Incident response","Vulnerability management","Tier 1–3 support"],
  email: "franknjagi99@gmail.com",
  links: [["LinkedIn","linkedin.com/in/frank-njagi","https://www.linkedin.com/in/frank-njagi/"],["GitHub","github.com/Frankito99","https://github.com/Frankito99"],["Location","Charlotte, NC",""]],
  projects: [
    {title:"Linux Server & LAMP Stack Deployment",cat:"Linux",icon:"🐧",color:"#0369a1,#0c4a6e",summary:"Built and secured an Ubuntu 22.04 server and deployed a full Apache, PHP and MariaDB stack.",tags:["Ubuntu","Apache","MariaDB","Bash"],details:"A production-style test server, configured and secured end to end, then documented so it can be rebuilt step by step.",points:["SSH access controls, UFW firewall rules and full system updates","Users, groups and SGID-protected shared directories for secure collaboration","Menu-driven Bash utilities and file-inspection scripts with error handling","Apache virtual hosts and local DNS, verified remotely without disabling the firewall","Hardened MariaDB with restricted, least-privilege database users"]},
    {title:"Multi-Cloud Threat Monitoring",cat:"Cloud",icon:"☁️",color:"#1d4ed8,#1e3a8a",summary:"Monitored security threats across AWS, GCP and Azure, cutting threats by 60%.",tags:["GuardDuty","Azure Security Center"],details:"At Bizmpya, I watched for and responded to threats across three cloud providers using their native security tooling.",points:["Threat monitoring with AWS GuardDuty and Azure Security Center","60% reduction in cloud security threats","Customer instances provisioned on AWS with CloudFormation"]},
    {title:"GCP to AWS Server Migration",cat:"Cloud",icon:"🔁",color:"#0f766e,#134e4a",summary:"Tested and migrated servers from Google Cloud to AWS, improving latency and efficiency by 25%.",tags:["AWS","GCP","Migration"],details:"Evaluated cloud migration tools, then moved workloads from GCP to AWS.",points:["Hands-on testing of migration tooling","25% improvement in latency and efficiency","Scalable AWS instances via CloudFormation"]},
    {title:"Wazuh Anomaly Detection Pipeline",cat:"Security",icon:"🛡️",color:"#7c3aed,#4c1d95",summary:"Automated anomaly detection that cut undetected security incidents by 40%.",tags:["Wazuh","Threat analysis"],details:"At GNM Kenyan Coffee Imports, I automated detection and led regular log reviews alongside IT leadership.",points:["Automated anomaly detection with Wazuh","40% fewer undetected incidents","Weekly log reviews: 25% faster incident response, 20% more threats detected","Vulnerability scans reduced exposure by 35%","SSL/TLS on 100% of critical-platform communications"]},
    {title:"File-Transfer Platform Automation",cat:"Linux",icon:"⚙️",color:"#a16207,#713f12",summary:"Python automation and NIST-based hardening for Linux and Windows file-transfer platforms at Spectrum.",tags:["Python","NMAP","NIST","Oracle"],details:"My current role: keeping secure file-transfer services highly available and compliant.",points:["Python scripts for routine tasks and log analysis","Automated critical-alert reporting","Governance controls and account administration per NIST","Tier 1–3 support with NMAP network checks"]},
    {title:"Security Policy & Audits",cat:"Security",icon:"🔐",color:"#be123c,#881337",summary:"Firewalls, Wireshark monitoring, audits and Active Directory administration at Hunters High Tech.",tags:["Wireshark","Active Directory","Firewalls"],details:"As a part-time System Administrator, I set up systems and tightened security across the organisation.",points:["Security policies, firewall management and audits","Threat monitoring with Wireshark","Active Directory account and permission management","Scripted setup with AWS resources: 30% efficiency gain"]}
  ],
  timeline: {
    "Experience":[
      {when:"Jun 2026 — Present",title:"System Administrator",org:"Spectrum · Charlotte, NC",text:"Support and harden Linux and Windows file-transfer platforms, automate routine tasks and alerting with Python, and provide Tier 1–3 support."},
      {when:"Jan 2025 — Jun 2026",title:"Junior System Administrator (part-time)",org:"Bizmpya · Remote",text:"Monitored security across AWS, GCP and Azure (60% fewer threats) and migrated servers from GCP to AWS."},
      {when:"Mar 2021 — Dec 2024",title:"System Administrator (part-time)",org:"Hunters High Tech LLC · Remote",text:"Installed and configured systems, managed firewalls and Active Directory, and ran security audits."},
      {when:"Jun 2018 — Feb 2021",title:"Cyber Security Analyst & Website Manager",org:"GNM Kenyan Coffee Imports LLC · Indianapolis, IN",text:"Automated Wazuh anomaly detection, led log reviews and vulnerability scans, and rolled out SSL/TLS."},
      {when:"Apr 2018 — Jun 2026",title:"Customer Service Specialist",org:"Publix Super Markets",text:"Customer service in a regulated environment, with a focus on security compliance and data privacy."}
    ],
    "Education":[
      {when:"May 2021 — Dec 2024",title:"B.S. Information Technology",org:"University of North Florida · Jacksonville, FL",text:"Coursework: Computer Security, Network Security Management, Intrusion Detection, Cloud Computing, System Administration."},
      {when:"Apr 2018 — Dec 2020",title:"Associate in Arts",org:"Florida State College at Jacksonville · Jacksonville, FL",text:"Coursework: Statistics, Programming I, Microsoft Office."}
    ]
  },
  approach:[
    {title:"Secure by default",text:"I build to frameworks like NIST and MITRE ATT&CK, and apply least privilege everywhere — from firewall rules to database users."},
    {title:"Automate the routine",text:"If I do it twice, I script it. Python and Bash automation frees time for the problems that need a person."},
    {title:"Document everything",text:"Clear write-ups of commands, configs and fixes make systems reproducible and teams faster."}
  ]
};
/* ================================================================ */

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const P = PROFILE;

document.title = `${P.name} — E-Portfolio`;
$("#logo").innerHTML = `${esc(P.initials)}<span>.</span>`;
$("#h-role").textContent = P.role;
$("#h-title").innerHTML = P.headline;
$("#h-lead").textContent = P.lead;
$("#stats").innerHTML = P.stats.map(([n,l])=>`<div class="stat"><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join("");
$("#about-text").innerHTML = P.about.map(p=>`<p>${esc(p)}</p>`).join("");
$("#skills").innerHTML = P.skillGroups.map(([g,items])=>`<div style="margin-bottom:14px"><div class="note" style="font-weight:600;margin-bottom:6px">${esc(g)}</div><div class="chips">${items.map(t=>`<span class="chip">${esc(t)}</span>`).join("")}</div></div>`).join("");
$("#tools").innerHTML = P.tools.map(t=>`<span class="chip">${esc(t)}</span>`).join("");
$("#foot-name").textContent = `© ${new Date().getFullYear()} ${P.name}`;
$("#contact-list").innerHTML =
  `<li><span>Email</span><a href="mailto:${esc(P.email)}">${esc(P.email)}</a></li>` +
  P.links.map(([k,v,u])=>`<li><span>${esc(k)}</span>${u?`<a href="${esc(u)}" target="_blank" rel="noopener">${esc(v)}</a>`:esc(v)}</li>`).join("");

/* Projects + filters */
const cats = ["All", ...new Set(P.projects.map(p=>p.cat))];
let cat = "All";
const grad = c => `background:linear-gradient(135deg,${c})`;
function renderProjects(){
  $("#filters").innerHTML = cats.map(c=>`<button class="${c===cat?'on':''}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
  $("#projects").innerHTML = P.projects.map((p,i)=>({p,i})).filter(({p})=>cat==="All"||p.cat===cat).map(({p,i})=>`
    <article class="proj" data-i="${i}" tabindex="0">
      <div class="thumb" style="${grad(p.color)}">${p.icon}</div>
      <div class="body"><small>${esc(p.cat)}</small><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p>
      <div class="chips">${p.tags.map(t=>`<span class="chip">${esc(t)}</span>`).join("")}</div></div>
    </article>`).join("");
}
$("#filters").addEventListener("click",e=>{const b=e.target.closest("button");if(b){cat=b.dataset.c;renderProjects();}});
function openProj(i){
  const p=P.projects[i];
  $("#m-body").innerHTML=`<div class="thumb" style="${grad(p.color)}">${p.icon}</div><div class="inner"><small style="color:var(--accent);font-weight:600;text-transform:uppercase;font-size:.75rem;letter-spacing:.06em">${esc(p.cat)}</small><h3>${esc(p.title)}</h3><p>${esc(p.details)}</p><ul>${p.points.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><div class="chips" style="margin-top:18px">${p.tags.map(t=>`<span class="chip">${esc(t)}</span>`).join("")}</div></div>`;
  $("#modal").classList.add("open");
}
$("#projects").addEventListener("click",e=>{const c=e.target.closest(".proj");if(c)openProj(c.dataset.i);});
$("#projects").addEventListener("keydown",e=>{const c=e.target.closest(".proj");if(c&&e.key==="Enter")openProj(c.dataset.i);});
const closeM=()=>$("#modal").classList.remove("open");
$("#m-close").onclick=closeM;
$("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeM();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeM();});
renderProjects();

/* Timeline */
function renderTL(t){
  $("#timeline").innerHTML=P.timeline[t].map(x=>`<div class="tl-item"><time>${esc(x.when)}</time><h3>${esc(x.title)}</h3><div class="org">${esc(x.org)}</div><p>${esc(x.text)}</p></div>`).join("");
  document.querySelectorAll("#tl-tabs button").forEach(b=>b.classList.toggle("on",b.dataset.t===t));
}
$("#tl-tabs").innerHTML=Object.keys(P.timeline).map(k=>`<button data-t="${esc(k)}">${esc(k)}</button>`).join("");
$("#tl-tabs").addEventListener("click",e=>{const b=e.target.closest("button");if(b)renderTL(b.dataset.t);});
renderTL(Object.keys(P.timeline)[0]);

/* Reflections */
$("#refl").innerHTML=P.approach.map(a=>`<div class="card"><h3>${esc(a.title)}</h3><p style="color:var(--muted)">${esc(a.text)}</p></div>`).join("");

/* Theme */
const store={get:k=>{try{return localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}}};
const setTheme=t=>{document.documentElement.dataset.theme=t;store.set("theme",t);};
setTheme(store.get("theme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"));
$("#theme").onclick=()=>setTheme(document.documentElement.dataset.theme==="dark"?"light":"dark");

/* Mobile menu */
$("#menu").onclick=()=>$("#links").classList.toggle("open");
$("#links").addEventListener("click",e=>{if(e.target.tagName==="A")$("#links").classList.remove("open");});

/* Contact form: builds the message for the visitor to copy */
$("#form").addEventListener("submit",async e=>{
  e.preventDefault();
  const text=`Hi ${P.name.split(" ")[0]},\n\n${$("#f-msg").value}\n\n— ${$("#f-name").value} (${$("#f-email").value})`;
  let copied=false;
  try{await navigator.clipboard.writeText(text);copied=true;}catch(err){}
  const ok=$("#ok");
  ok.style.display="block";
  ok.innerHTML=(copied?"<b>Message copied to your clipboard.</b> ":"<b>Your message is ready.</b> ")+
    `Paste it into an email to <b>${esc(P.email)}</b> — or <a href="mailto:${esc(P.email)}?subject=${encodeURIComponent("Hello from your portfolio")}&body=${encodeURIComponent(text)}">open your mail app</a>.`;
});

/* Active nav + reveal */
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add("in");}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
const secs=[...document.querySelectorAll("section[id]")];
addEventListener("scroll",()=>{
  const y=scrollY+120; let cur="";
  secs.forEach(s=>{if(s.offsetTop<=y)cur=s.id;});
  document.querySelectorAll(".links a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+cur));
},{passive:true});
