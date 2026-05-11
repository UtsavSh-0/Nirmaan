// ══════════════════════ STATE ══════════════════════
const S={
  page:'home',user:null,lang:'en',dark:false,
  chatOpen:false,chatMsgs:[],chatTyping:false,
  voiceActive:false,
  notifs:[],notifId:0,
  savedIds:[],appliedIds:[],
  adminTab:'users',coTab:'post',
  fType:'all',srchQ:'',
  skills:['JavaScript','React','Python'],
  interests:['Frontend','AI/ML'],
  loc:'Bangalore',edu:'B.Tech CS',college:'IIT Delhi',yr:'3rd Year',cgpa:'8.5',
  exp:'fresher',linkedin:'',github:'',portfolio:'',
  projects:[{n:'AI Chat App',t:'React, Node.js, OpenAI',l:'github.com/demo'},{n:'E-Commerce',t:'Next.js, MongoDB, Stripe',l:'portfolio.demo'}],
  certs:[{n:'AWS Cloud Practitioner',i:'Amazon',y:'2024'},{n:'React Developer',i:'Meta',y:'2024'}],
  step:1,totalSteps:7,signupRole:'student',
  firstName:'',lastName:'',email:'',phone:'',
  otpSent:false,otpCode:'',otpInput:'',otpVerified:false,
  modal:null,
  rmFilter:'all',
  rbData:{name:'Priya Sharma',title:'Frontend Developer',email:'priya@example.com',phone:'+91 98765 43210',summary:'Passionate frontend developer with strong skills in React, TypeScript and UI design. Looking for opportunities to contribute to impactful products.',skills:['React','JavaScript','Python','CSS','Git'],exp:[{co:'Freelance Projects',role:'Frontend Dev',period:'2023–Present',desc:'Built 5+ client websites using React and Next.js'}],edu:'B.Tech Computer Science – IIT Delhi (2025)'},
  autoLoginCountdown:5,autoLoginActive:true,autoLoginRole:'student',
  nhFilter:'all',
  nhMsg:{},
  bellOpen:false,
  appNotifs:[
    {id:1,icon:'🎉',title:'New match found!',body:'Google Frontend Dev — 94% match',time:'2m ago',read:false},
    {id:2,icon:'📊',title:'Skill gap update',body:'Adding TypeScript boosts 3 matches',time:'1h ago',read:false},
    {id:3,icon:'🏢',title:'Company viewed you',body:'Razorpay HR viewed your profile',time:'3h ago',read:true},
    {id:4,icon:'🔔',title:'Application update',body:'Flipkart moved you to next round!',time:'1d ago',read:false},
    {id:5,icon:'💡',title:'Career tip',body:'Complete your LinkedIn to get 3× views',time:'2d ago',read:true},
  ],
};

// ══════════════════════ DATA ══════════════════════
const INTERNS=[
  {id:1,title:'Frontend Dev Intern',co:'Google',logo:'🔵',loc:'Bangalore',match:94,type:'Remote',pay:'₹35k/mo',dur:'3mo',skills:['React','TypeScript','CSS'],field:'Frontend',why:'Your React (90%) and JS skills are near-perfect match. Your AI Chat project shows production-level frontend work.'},
  {id:2,title:'ML Research Intern',co:'Microsoft',logo:'🟦',loc:'Hyderabad',match:88,type:'Hybrid',pay:'₹40k/mo',dur:'6mo',skills:['Python','PyTorch','NLP'],field:'AI/ML',why:'Python proficiency and AI/ML interest strongly aligns. NLP coursework adds extra weight.'},
  {id:3,title:'Full Stack Intern',co:'Flipkart',logo:'🟡',loc:'Bangalore',match:79,type:'On-site',pay:'₹28k/mo',dur:'4mo',skills:['Node.js','React','MongoDB'],field:'Full Stack',why:'React skills directly relevant. Node.js and Docker knowledge will unlock the remaining 21%.'},
  {id:4,title:'Data Science Intern',co:'Zomato',logo:'🔴',loc:'Delhi',match:75,type:'Remote',pay:'₹25k/mo',dur:'3mo',skills:['Python','Pandas','SQL'],field:'Data',why:'Python matches well. Analytical approach from your e-commerce project shows data thinking.'},
  {id:5,title:'Product Design Intern',co:'Razorpay',logo:'🟢',loc:'Bangalore',match:66,type:'Hybrid',pay:'₹30k/mo',dur:'4mo',skills:['Figma','UX Research'],field:'Design',why:'Frontend background shows UI sensibility. Adding Figma expertise will boost this match.'},
  {id:6,title:'DevOps Intern',co:'Swiggy',logo:'🟠',loc:'Bangalore',match:71,type:'On-site',pay:'₹32k/mo',dur:'3mo',skills:['Docker','Kubernetes','Linux'],field:'DevOps',why:'Project deployment experience is a good start. Linux and CI/CD will close the gap.'},
];
INTERNS.forEach(i=>i.saved=false);

const CANDS=[
  {id:1,name:'Priya Sharma',college:'IIT Delhi',match:96,skills:['React','Python'],status:'Shortlisted',ago:'2 days ago'},
  {id:2,name:'Rahul Verma',college:'NIT Trichy',match:89,skills:['JavaScript','Vue'],status:'Applied',ago:'1 day ago'},
  {id:3,name:'Ananya Singh',college:'BITS Pilani',match:84,skills:['Python','ML'],status:'Applied',ago:'3 hrs ago'},
  {id:4,name:'Karan Mehta',college:'VIT Vellore',match:77,skills:['React','Firebase'],status:'Reviewing',ago:'4 days ago'},
];

const AUSERS=[
  {id:1,name:'Priya Sharma',email:'priya@email.com',role:'Student',joined:'Jan 15',status:'Active'},
  {id:2,name:'TechCorp Inc.',email:'hr@techcorp.com',role:'Company',joined:'Jan 10',status:'Active'},
  {id:3,name:'Rahul Verma',email:'rahul@email.com',role:'Student',joined:'Feb 02',status:'Active'},
  {id:4,name:'Flipkart',email:'intern@flipkart.com',role:'Company',joined:'Feb 08',status:'Pending'},
];

const ROADMAP=[
  {id:1,title:'Build Your Foundation',sub:'Complete profile, add 5+ skills, upload resume',skills:['Resume','LinkedIn','GitHub'],status:'done',time:'Week 1'},
  {id:2,title:'Skill Assessment',sub:'Take AI skill quiz, identify top 3 gaps, start 1 course',skills:['Skill Quiz','Gap Analysis'],status:'done',time:'Week 1–2'},
  {id:3,title:'First Applications',sub:'Apply to 5 recommended internships with personalized messages',skills:['Cover Letter','ATS Optimization'],status:'active',time:'Week 2–3'},
  {id:4,title:'Interview Preparation',sub:'DSA practice, system design basics, mock interviews',skills:['LeetCode','System Design','Mock Interview'],status:'active',time:'Week 3–5'},
  {id:5,title:'Technical Skills Sprint',sub:'Complete Node.js + MongoDB courses to unlock full-stack roles',skills:['Node.js','MongoDB','Docker'],status:'locked',time:'Week 4–6'},
  {id:6,title:'Networking & Referrals',sub:'Connect with 10 professionals, get 2 referrals',skills:['LinkedIn Outreach','Referrals'],status:'locked',time:'Week 5–7'},
  {id:7,title:'Land Your Internship',sub:'Target: 1–2 offers in hand, negotiate stipend',skills:['Offer Negotiation'],status:'locked',time:'Week 6–10'},
];

const NETWORK=[
  {id:1,name:'Aditi Sharma',role:'SWE @ Google',college:'IIT Bombay',skills:['React','Python'],col:'#6366F1',online:true,mutual:3,conn:false},
  {id:2,name:'Vikram Nair',role:'ML Intern @ Microsoft',college:'BITS Pilani',skills:['PyTorch','NLP'],col:'#8B5CF6',online:false,mutual:7,conn:true},
  {id:3,name:'Shreya Patel',role:'Frontend Dev @ Razorpay',college:'NIT Trichy',skills:['React','Node.js'],col:'#EC4899',online:true,mutual:2,conn:false},
  {id:4,name:'Aryan Gupta',role:'Data Analyst @ Swiggy',college:'IIIT Hyderabad',skills:['Python','SQL'],col:'#06B6D4',online:true,mutual:5,conn:false},
  {id:5,name:'Diya Mehta',role:'Product Manager @ Flipkart',college:'IIM Ahmedabad',skills:['Product','UX'],col:'#F59E0B',online:false,mutual:1,conn:true},
  {id:6,name:'Rohan Singh',role:'DevOps @ Swiggy',college:'VIT Vellore',skills:['Docker','K8s'],col:'#10B981',online:true,mutual:4,conn:false},
];

const COURSES=[
  {skill:'Node.js',platform:'Udemy',ico:'📘',col:'#3B82F6',hrs:'24h',rt:'4.8'},
  {skill:'MongoDB',platform:'MongoDB University',ico:'🍃',col:'#10B981',hrs:'18h',rt:'4.9'},
  {skill:'TypeScript',platform:'Frontend Masters',ico:'💙',col:'#6366F1',hrs:'20h',rt:'4.7'},
  {skill:'Docker',platform:'Udemy',ico:'🐳',col:'#0EA5E9',hrs:'16h',rt:'4.8'},
];

// ══════════════════════ HELPERS ══════════════════════
function notif(msg,type='ok',dur=3400){
  const id=++S.notifId;
  S.notifs.push({id,msg,type});
  render();
  setTimeout(()=>{S.notifs=S.notifs.filter(n=>n.id!==id);render();},dur);
}
function closeN(id){S.notifs=S.notifs.filter(n=>n.id!==id);render();}
function go(page){if(page==='signup'){S.step=1;S.otpSent=false;S.otpVerified=false;S.otpCode='';S.otpInput='';S.firstName='';S.lastName='';S.email='';S.phone='';S.signupRole='student';}S.page=page;window.scrollTo(0,0);render();}
function toggleDark(){S.dark=!S.dark;document.documentElement.setAttribute('data-theme',S.dark?'dark':'');render();}

// ══════════════════════ VOICE ══════════════════════
let recog=null,synth=window.speechSynthesis;
function speak(txt){if(!synth)return;synth.cancel();const u=new SpeechSynthesisUtterance(txt);u.lang='en-IN';u.rate=1.05;synth.speak(u);}
function initRecog(){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){notif('Voice not supported in this browser','wn');return false;}
  recog=new SR();recog.continuous=false;recog.interimResults=false;
  recog.onresult=e=>{const t=e.results[0][0].transcript.toLowerCase();S.voiceActive=false;handleVoiceCmd(t);render();};
  recog.onerror=()=>{S.voiceActive=false;notif('Voice error — try again','er');render();};
  recog.onend=()=>{S.voiceActive=false;render();};
  return true;
}
function handleVoiceCmd(cmd){
  const cmds={'dashboard':()=>go('dash'),'recommend':()=>go('recs'),'skill gap':()=>go('skillgap'),'roadmap':()=>go('roadmap'),'resume':()=>go('resume'),'network':()=>go('network'),'profile':()=>go('profile'),'saved':()=>go('saved'),'home':()=>go('home'),'logout':()=>doLogout(),'dark mode':()=>{if(!S.dark)toggleDark();},'light mode':()=>{if(S.dark)toggleDark();}};
  let found=false;
  for(const[k,fn]of Object.entries(cmds)){if(cmd.includes(k)){fn();found=true;speak('Done');break;}}
  if(!found){S.chatOpen=true;S.chatMsgs.push({r:'u',t:cmd});processChat(cmd);}
}
function toggleVoice(){
  if(S.voiceActive){if(recog)recog.stop();S.voiceActive=false;render();return;}
  if(!recog&&!initRecog())return;
  S.voiceActive=true;try{recog.start();}catch(e){S.voiceActive=false;}
  render();notif('🎙️ Listening… say a command','in',4000);
}
function chatVoice(){
  if(S.voiceActive){if(recog)recog.stop();S.voiceActive=false;render();return;}
  if(!recog&&!initRecog())return;
  S.voiceActive=true;
  const orig=recog.onresult;
  recog.onresult=e=>{const t=e.results[0][0].transcript;S.voiceActive=false;S.chatMsgs.push({r:'u',t});processChat(t);};
  try{recog.start();}catch(e){S.voiceActive=false;}render();
}

// ══════════════════════ CHAT ══════════════════════
const BRAIN={
  resume:['Strong resume tips:\n\n1. Keep to 1 page\n2. Lead with skills section\n3. Use action verbs: Built, Designed, Reduced\n4. Quantify: "Improved load time by 40%"\n5. Add GitHub + project links\n\nUse the Resume Builder page for AI-assisted creation!'],
  skill:['Your skill gaps: Node.js, TypeScript, Docker.\n\nHead to Skill Gap Analyzer for personalized courses and a roadmap to close each gap!'],
  apply:['Smart application tips:\n\n• Apply within 24hrs of posting\n• Customize your intro for each company\n• Mention something specific you love about them\n• Follow up after 5 business days'],
  intern:['Your top matches:\n\n🏆 Google – Frontend Dev (94%)\n🥈 Microsoft – ML Research (88%)\n🥉 Flipkart – Full Stack (79%)\n\nHead to Recommendations to apply!'],
  salary:['2025 stipends in India:\n\n💰 FAANG-tier: ₹50k–₹2L/mo\n💵 Mid-tier: ₹15k–₹40k/mo\n💸 Startups: ₹8k–₹25k/mo\n\nYour current matches average ₹32k/mo'],
  interview:['Interview prep plan:\n\n📚 DSA: LeetCode easy+medium\n🧩 System Design: basics for intern level\n💻 Projects: walk through your code clearly\n🤝 HR: research the company deeply\n\nUse the Career Roadmap for a full plan!'],
  network:['Networking tips:\n\n• Connect with seniors in target companies\n• Join college alumni groups on LinkedIn\n• Attend hackathons and tech events\n• Ask for informational interviews\n\nCheck your Networking Hub for curated connections!'],
  roadmap:['Your career roadmap:\n\n✅ Week 1: Build foundation (done!)\n✅ Week 2: Skill assessment (done!)\n🔄 Week 3: First applications (in progress)\n🔄 Week 4: Interview prep\n🔒 Week 5+: Tech sprint & networking\n\nGo to Career Roadmap for full details!'],
  profile:['Profile completion tips:\n\n• Profile score: 74% — almost there!\n• Missing: Resume upload, LinkedIn link\n• Adding resume boosts matches by 22%\n• LinkedIn link gets 3.2× more company views\n\nGo to My Profile to complete it!'],
  google:['Google internship details:\n\n💼 Role: Frontend Dev Intern\n📍 Bangalore (Remote)\n💰 ₹35,000/month\n⏱ 3 months\n🎯 Match: 94% — You\'re in top 5%!\n\nDeadline: 4 days left. Apply now!'],
  microsoft:['Microsoft internship details:\n\n💼 Role: ML Research Intern\n📍 Hyderabad (Hybrid)\n💰 ₹40,000/month\n⏱ 6 months\n🎯 Match: 88%\n\nRequires: Python, PyTorch, NLP basics'],
  course:['Recommended courses for you:\n\n📘 Node.js – Udemy (24h, ⭐4.8)\n🍃 MongoDB – MongoDB Uni (18h, ⭐4.9)\n💙 TypeScript – Frontend Masters (20h, ⭐4.7)\n🐳 Docker – Udemy (16h, ⭐4.8)\n\nGo to Skill Gap page to enroll!'],
  cgpa:['Does CGPA matter?\n\n• FAANG: 7.5+ preferred, not strict\n• Startups: Projects > CGPA always\n• PSUs: Strict 60–65% cutoffs\n• Overall: Skills + projects > marks\n\nFocus on building strong GitHub projects!'],
  hackathon:['Hackathon strategy:\n\n🏆 Good ones: Smart India, Google Summer of Code, MLH, Devfolio\n• Build something deployable in 24–48h\n• Focus on real-world problem\n• Add to your resume and GitHub\n• Great for networking too!\n\nHackathons increase match score by ~8%'],
  dsa:['DSA preparation plan:\n\n📚 LeetCode: 50 easy + 30 medium is enough for intern\n🎯 Focus topics: Arrays, Strings, Trees, DP basics\n⏰ Timeline: 3–4 weeks consistent practice\n🔧 Languages: Python or Java preferred by most\n\nTip: Attempt at least 1 problem daily!'],
  linkedin:['LinkedIn profile tips:\n\n• Professional photo (3× more views)\n• Headline: "CSE Student | React | AI/ML"\n• About: 3–4 lines, keywords-rich\n• Add all projects with links\n• Connect with 5+ professionals/week\n\nComplete LinkedIn → unlock network boost!'],
  saved:[`Your saved internships:\n\n🔖 Manage saved internships from the Saved section.\n\nCurrently ${INTERNS.filter(x=>x.saved).length} saved. Tap any to apply!`],
  hi:['Hey there! 👋 I\'m Arya, your AI career assistant.\n\nHere\'s what I can help with:\n• 🎯 Internship matches & recommendations\n• 📄 Resume tips & building\n• 📊 Skill gap analysis\n• 🗺️ Career roadmap\n• 💰 Salary & stipend info\n• 🎙️ Interview prep & DSA\n• 🤝 Networking & LinkedIn\n• 🏆 Hackathon tips\n\nJust ask anything! I\'m here 24/7 🤖'],
  help:['Here\'s everything I can help with:\n\n🎯 "show my matches" – top internships\n📄 "resume tips" – improve your resume\n📊 "skill gap" – what to learn next\n💰 "salary info" – stipend ranges\n🎙️ "interview prep" – get ready\n🗺️ "roadmap" – weekly plan\n🤝 "networking tips" – build connections\n🏆 "hackathon tips" – compete & win\n📘 "recommend courses" – what to study\n🔍 "google internship" – specific roles\n📈 "linkedin tips" – profile boost\n\nTry any of these!'],
  default:['Hi! I\'m Arya 🤖 — your AI career assistant.\n\nI can help with internship tips, resume advice, skill gaps, interview prep, salary info, roadmap, networking, hackathons & more.\n\nTry: "help", "show my matches", or "interview prep"'],
};
function processChat(txt){
  S.chatTyping=true;render();
  const lo=txt.toLowerCase();
  let r=BRAIN.default[0];
  // order matters — check longer/more specific first
  const keys=[
    ['help',BRAIN.help[0]],
    ['hi',BRAIN.hi[0]],['hello',BRAIN.hi[0]],['hey',BRAIN.hi[0]],
    ['roadmap',BRAIN.roadmap[0]],
    ['google',BRAIN.google[0]],
    ['microsoft',BRAIN.microsoft[0]],
    ['hackathon',BRAIN.hackathon[0]],
    ['linkedin',BRAIN.linkedin[0]],
    ['dsa',BRAIN.dsa[0]],['leetcode',BRAIN.dsa[0]],
    ['cgpa',BRAIN.cgpa[0]],['grade',BRAIN.cgpa[0]],['gpa',BRAIN.cgpa[0]],
    ['course',BRAIN.course[0]],['learn',BRAIN.course[0]],['study',BRAIN.course[0]],
    ['profile',BRAIN.profile[0]],
    ['resume',BRAIN.resume[0]],
    ['skill',BRAIN.skill[0]],['gap',BRAIN.skill[0]],
    ['apply',BRAIN.apply[0]],['application',BRAIN.apply[0]],
    ['intern',BRAIN.intern[0]],['match',BRAIN.intern[0]],['recommend',BRAIN.intern[0]],
    ['salary',BRAIN.salary[0]],['stipend',BRAIN.salary[0]],['pay',BRAIN.salary[0]],
    ['interview',BRAIN.interview[0]],['prep',BRAIN.interview[0]],
    ['network',BRAIN.network[0]],['connect',BRAIN.network[0]],
    ['saved',BRAIN.saved[0]],['bookmark',BRAIN.saved[0]],
  ];
  for(const[k,resp] of keys){if(lo.includes(k)){r=resp;break;}}
  // navigate commands
  if(lo.includes('open roadmap')||lo==='roadmap'){setTimeout(()=>{S.chatTyping=false;S.chatMsgs.push({r:'b',t:'Opening Career Roadmap for you! 🗺️'});render();go('roadmap');},600);return;}
  if(lo.includes('open skill gap')||lo.includes('skill gap')){setTimeout(()=>{S.chatTyping=false;S.chatMsgs.push({r:'b',t:'Opening Skill Gap Analyzer! 📊'});render();go('skillgap');},600);return;}
  setTimeout(()=>{S.chatTyping=false;S.chatMsgs.push({r:'b',t:r});render();const cm=document.getElementById('chatmsgs');if(cm)cm.scrollTop=cm.scrollHeight;},850);
}

// ══════════════════════ AUTO LOGIN ══════════════════════
let autoTimer=null;
function startAutoLogin(){
  if(!S.autoLoginActive||S.user)return;
  S.autoLoginCountdown=5;
  clearInterval(autoTimer);
  autoTimer=setInterval(()=>{
    if(S.autoLoginCountdown<=1){clearInterval(autoTimer);performDemoLogin(S.autoLoginRole);return;}
    S.autoLoginCountdown--;
    const el=document.getElementById('al-count');
    if(el)el.textContent=S.autoLoginCountdown;
  },1000);
}
function performDemoLogin(role){
  clearInterval(autoTimer);
  S.autoLoginActive=false;
  const map={student:{name:'Priya Sharma',email:'priya@test.com'},company:{name:'TechCorp Inc.',email:'hr@techcorp.com'},admin:{name:'Admin User',email:'admin@nirmaan.in'}};
  const d=map[role]||map.student;
  S.user={...d,role};
  notif(`Auto-logged in as ${d.name} 👋`);
  speak(`Welcome ${d.name.split(' ')[0]}`);
  go(role==='company'?'codash':role==='admin'?'admin':'dash');
}
function cancelAutoLogin(){clearInterval(autoTimer);S.autoLoginActive=false;render();}

// ══════════════════════ AUTH ══════════════════════
function doLogin(){
  const em=document.getElementById('lem')?.value?.trim();
  const pw=document.getElementById('lpw')?.value;
  if(!em){notif('Enter your email','wn');return;}
  clearInterval(autoTimer);
  // Use explicitly selected role, or infer from email
  let role=S.loginRole||'student';
  let name='Priya Sharma';
  if(role==='company'||em.includes('company')||em.includes('hr')){role='company';name='TechCorp Inc.';}
  else if(role==='admin'||em.includes('admin')){role='admin';name='Admin User';}
  S.user={name,email:em,role};
  notif(`Welcome, ${name.split(' ')[0]}! 👋`);
  go(role==='company'?'codash':role==='admin'?'admin':'dash');
}
function doGLogin(){
  clearInterval(autoTimer);
  S.user={name:'Priya Sharma',email:'priya@gmail.com',role:'student'};
  notif('Signed in with Google! 🎉');
  go('dash');
}
function doLogout(){
  clearInterval(autoTimer);
  S.user=null;S.appliedIds=[];S.savedIds=[];INTERNS.forEach(i=>i.saved=false);
  S.chatMsgs=[];S.chatOpen=false;S.autoLoginActive=true;S.loginRole='student';
  notif('Logged out','in');
  go('home');
}
function nextStep(){
  if(S.step===1){
    const fn=(document.getElementById('sfn')||{}).value||'';
    const ln=(document.getElementById('sln')||{}).value||'';
    const em=(document.getElementById('sem')||{}).value||S.email||'';
    const ph=(document.getElementById('sph')||{}).value||'';
    if(!fn||!em){notif('Please fill in your name and email','wn');return;}
    if(!S.otpVerified){notif('Please verify your email with OTP first 📧','wn');return;}
    S.firstName=fn;S.lastName=ln;S.email=em;S.phone=ph;
  }
  if(S.step===2){S.loc=(document.getElementById('sloc')||{}).value||S.loc;}
  if(S.step===3){
    S.edu=(document.getElementById('smaj')||{}).value||S.edu;
    S.college=(document.getElementById('scol')||{}).value||S.college;
  }
  if(S.step<S.totalSteps){S.step++;render();}
}
function completeSignup(){
  const name=`${S.firstName||'Student'} ${S.lastName||''}`.trim();
  S.user={name:name||'New Student',email:S.email||'student@test.com',role:S.signupRole};
  notif(`Welcome to Nirmaan, ${S.firstName||'friend'}! 🎉`);
  speak(`Welcome ${S.firstName||''}`);
  go(S.signupRole==='company'?'codash':'dash');
}
function sendOtp(){
  const semEl=document.getElementById('sem');
  const fnEl=document.getElementById('sfn');
  const lnEl=document.getElementById('sln');
  const phEl=document.getElementById('sph');
  // Save all step-1 field values before re-render wipes them
  if(fnEl)S.firstName=fnEl.value;
  if(lnEl)S.lastName=lnEl.value;
  if(phEl)S.phone=phEl.value;
  const em=(semEl?semEl.value.trim():'')||S.email;
  if(!em||!em.includes('@')){notif('Enter a valid email first','wn');return;}
  S.email=em;
  S.otpCode=String(Math.floor(100000+Math.random()*900000));
  S.otpSent=true;
  S.otpVerified=false;
  S.otpInput='';
  render();
  notif('OTP sent to '+em+'! Demo code: '+S.otpCode+' 📧','ok',8000);
}
function verifyOtp(){
  const otpEl=document.getElementById('otp-input');
  const inp=otpEl?otpEl.value.trim():'';
  if(!inp){notif('Enter the 6-digit OTP code','wn');return;}
  if(inp===S.otpCode){
    S.otpVerified=true;
    S.otpInput=inp;
    notif('✅ Email verified! Click Continue →','ok',4000);
    render();
  } else {
    notif('❌ Wrong OTP — check the code in the notification','er');
    if(otpEl)otpEl.style.borderColor='var(--red)';
    if(otpEl)otpEl.focus();
  }
}
function toggleBell(){S.bellOpen=!S.bellOpen;render();}
function markAllRead(){S.appNotifs.forEach(n=>n.read=true);notif('All notifications marked read','in');render();}
function dismissAppNotif(id){S.appNotifs=S.appNotifs.filter(n=>n.id!==id);render();}

// ══════════════════════ ACTIONS ══════════════════════
function applyInt(id){if(!S.appliedIds.includes(id)){S.appliedIds.push(id);notif('Application sent! 🎉 Good luck!');render();}}
function saveInt(id){const i=INTERNS.find(x=>x.id===id);if(!i)return;i.saved=!i.saved;if(i.saved){S.savedIds.push(id);notif('Saved! 🔖');}else{S.savedIds=S.savedIds.filter(x=>x!==id);notif('Removed from saved','in');}render();}
function rmSkill(s){S.skills=S.skills.filter(x=>x!==s);render();}
function addSkillKey(e){if(e.key==='Enter'){const v=e.target.value.trim();if(v&&!S.skills.includes(v)){S.skills.push(v);render();setTimeout(()=>{const inp=document.querySelector('.ti');if(inp)inp.focus();},40);}e.target.value='';e.preventDefault();}}
function toggleInt(i){if(S.interests.includes(i))S.interests=S.interests.filter(x=>x!==i);else S.interests.push(i);render();}
function toggleConn(id){const p=NETWORK.find(x=>x.id===id);if(!p)return;p.conn=!p.conn;notif(p.conn?`Connected with ${p.name.split(' ')[0]}! 🤝`:`Disconnected from ${p.name.split(' ')[0]}`,'in');render();}
function sendNHMsg(id){const inp=document.getElementById(`nhinp${id}`);if(!inp)return;const v=inp.value.trim();if(!v)return;notif(`Message sent to ${NETWORK.find(x=>x.id===id)?.name.split(' ')[0]}! 📨`);inp.value='';}
function addProject(){
  const n=document.getElementById('mpn')?.value;const t=document.getElementById('mpt')?.value;const l=document.getElementById('mpl')?.value;
  if(!n||!t){notif('Fill project name and tech','wn');return;}
  S.projects.push({n,t,l:l||''});S.modal=null;notif('Project added! ✅');render();
}
function rmProject(i){S.projects.splice(i,1);notif('Removed','in');render();}
function saveProfile(){
  const loc=document.getElementById('ploc')?.value;const edu=document.getElementById('pedu')?.value;
  if(loc)S.loc=loc;if(edu)S.edu=edu;notif('Profile saved! AI matching updated 🤖');
}
function exportResume(){notif('Downloading resume as PDF... 📄','in');}
function copyResume(){notif('Resume content copied to clipboard! 📋','in');}

// ══════════════════════ RENDER ══════════════════════
function render(){
  const active=document.activeElement;
  const savedId=active&&active.id?active.id:null;
  const savedVal=active?active.value:null;
  const savedStart=active&&active.selectionStart!=null?active.selectionStart:null;
  const savedEnd=active&&active.selectionEnd!=null?active.selectionEnd:null;

  document.getElementById('root').innerHTML=buildApp();
  attachEv();

  if(savedId){
    const el=document.getElementById(savedId);
    if(el&&(el.tagName==='INPUT'||el.tagName==='TEXTAREA')){
      el.focus();
      if(savedStart!=null){try{el.setSelectionRange(savedStart,savedEnd);}catch(e){}}
    }
  }
}
function attachEv(){
  const cm=document.getElementById('chatmsgs');if(cm)cm.scrollTop=cm.scrollHeight;
}
function buildMobNav(){
  const isDash=['dash','recs','skillgap','saved','profile','roadmap','resume','network','codash','admin'].includes(S.page)&&S.user;
  if(!isDash)return`<nav class="mob-nav">
    <button class="mob-nav-btn ${S.page==='home'?'on':''}" onclick="go('home')"><span>🏠</span><span>Home</span></button>
    <button class="mob-nav-btn ${S.page==='about'?'on':''}" onclick="go('about')"><span>ℹ️</span><span>About</span></button>
    <button class="mob-nav-btn ${S.page==='contact'?'on':''}" onclick="go('contact')"><span>✉️</span><span>Contact</span></button>
    ${S.user?`<button class="mob-nav-btn" onclick="go('dash')"><span>⚡</span><span>Dashboard</span></button>`:`<button class="mob-nav-btn ${S.page==='login'?'on':''}" onclick="go('login')"><span>🔑</span><span>Login</span></button>`}
  </nav>`;
  return`<nav class="mob-nav">
    <button class="mob-nav-btn ${S.page==='dash'?'on':''}" onclick="go('dash')"><span>⚡</span><span>Home</span></button>
    <button class="mob-nav-btn ${S.page==='recs'?'on':''}" onclick="go('recs')"><span>✨</span><span>Matches</span></button>
    <button class="mob-nav-btn ${S.page==='skillgap'?'on':''}" onclick="go('skillgap')"><span>📊</span><span>Skills</span></button>
    <button class="mob-nav-btn ${S.page==='roadmap'?'on':''}" onclick="go('roadmap')"><span>🗺️</span><span>Roadmap</span></button>
    <button class="mob-nav-btn" onclick="S.mobMenu=!S.mobMenu;render()"><span>☰</span><span>More</span></button>
  </nav>
  ${S.mobMenu?`<div class="mob-menu-drawer" onclick="S.mobMenu=false;render()"><div class="mob-menu-panel" onclick="event.stopPropagation()">
    <div class="mob-pill"></div>
    <button class="sb-item ${S.page==='resume'?'on':''}" onclick="S.mobMenu=false;go('resume')"><span class="sb-ic">📄</span>Resume Builder</button>
    <button class="sb-item ${S.page==='network'?'on':''}" onclick="S.mobMenu=false;go('network')"><span class="sb-ic">🤝</span>Networking Hub</button>
    <button class="sb-item ${S.page==='saved'?'on':''}" onclick="S.mobMenu=false;go('saved')"><span class="sb-ic">🔖</span>Saved Internships</button>
    <button class="sb-item ${S.page==='profile'?'on':''}" onclick="S.mobMenu=false;go('profile')"><span class="sb-ic">👤</span>My Profile</button>
    <button class="sb-item" onclick="S.mobMenu=false;toggleDark();"><span class="sb-ic">${S.dark?'☀️':'🌙'}</span>${S.dark?'Light':'Dark'} Mode</button>
    <button class="sb-item" onclick="S.mobMenu=false;doLogout()"><span class="sb-ic">🚪</span>Logout</button>
  </div></div>`:''}`;
}
function buildApp(){
  if(!('mobMenu' in S))S.mobMenu=false;
  return `${buildNav()}${buildBody()}${buildMobNav()}${buildChat()}${S.voiceActive?`<div class="vi"><div class="vd"></div><div class="vw">${[1,2,3,4,5].map(i=>`<div class="vb"></div>`).join('')}</div><span>Listening…</span></div>`:''}${buildNotifs()}${S.modal?buildModal():''}`;
}

// ══════════════════════ NAV ══════════════════════
function buildNav(){
  const isDash=['dash','recs','skillgap','saved','profile','roadmap','resume','network','codash','admin'].includes(S.page);
  return `<nav class="nav">
    <div class="logo" onclick="go('home')">✦ Nirmaan</div>
    ${isDash&&S.user?`<div class="nav-sr"><span class="nav-sr-ic">⌕</span><input placeholder="Search…" value="${S.srchQ}" oninput="S.srchQ=this.value;render()"/></div>`:`<div class="nav-mid">
      <div class="nav-lk ${S.page==='home'?'on':''}" onclick="go('home')">Home</div>
      <div class="nav-lk ${S.page==='about'?'on':''}" onclick="go('about')">About</div>
      <div class="nav-lk ${S.page==='contact'?'on':''}" onclick="go('contact')">Contact</div>
    </div>`}
    <div class="nav-acts">
      <div class="pill-tog"><button class="pill-btn ${S.lang==='en'?'on':''}" onclick="S.lang='en';render()">EN</button><button class="pill-btn ${S.lang==='hi'?'on':''}" onclick="S.lang='hi';render()">हि</button></div>
      <button class="btn-ic" onclick="toggleDark()" title="Theme">${S.dark?'☀️':'🌙'}</button>
      <button class="btn-ic" onclick="toggleVoice()" title="Voice" style="${S.voiceActive?'background:var(--red);color:#fff;border-color:var(--red)':''}">🎙️</button>
      ${S.user?`<div style="position:relative">
        <button class="btn-ic" onclick="toggleBell();event.stopPropagation()" title="Notifications" style="${S.bellOpen?'background:var(--p);color:#fff;border-color:var(--p)':''}">
          🔔
          ${S.appNotifs.filter(n=>!n.read).length>0?`<span style="position:absolute;top:-4px;right:-4px;width:17px;height:17px;border-radius:50%;background:var(--red);color:#fff;font-size:.6rem;font-weight:800;display:flex;align-items:center;justify-content:center;border:2px solid var(--bg2)">${S.appNotifs.filter(n=>!n.read).length}</span>`:''}
        </button>
        ${S.bellOpen?`<div style="position:absolute;top:calc(100% + 10px);right:0;width:340px;background:var(--bg2);border:1px solid var(--b);border-radius:var(--rl);box-shadow:var(--shl);z-index:9999;overflow:hidden" onclick="event.stopPropagation()">
          <div style="display:flex;align-items:center;justify-content:space-between;padding:.85rem 1rem;border-bottom:1px solid var(--b)">
            <div style="font-family:var(--fh);font-weight:700;font-size:.9rem;color:var(--t)">Notifications <span style="background:var(--red);color:#fff;border-radius:99px;font-size:.62rem;padding:.1rem .38rem;margin-left:.3rem">${S.appNotifs.filter(n=>!n.read).length}</span></div>
            <button onclick="markAllRead()" style="font-size:.73rem;color:var(--p);font-weight:700;background:none;border:none;cursor:pointer">Mark all read</button>
          </div>
          <div style="max-height:340px;overflow-y:auto">
            ${S.appNotifs.length===0?`<div style="padding:2rem;text-align:center;color:var(--t3);font-size:.83rem">All caught up! 🎉</div>`:
            S.appNotifs.map(n=>`<div style="display:flex;align-items:start;gap:.75rem;padding:.85rem 1rem;border-bottom:1px solid var(--b);background:${n.read?'transparent':'var(--pl)'};transition:background .15s;cursor:pointer" onmouseover="this.style.background='var(--bg3)'" onmouseout="this.style.background='${n.read?'transparent':'var(--pl)'}'">
              <div style="width:36px;height:36px;border-radius:9px;background:var(--bg3);border:1px solid var(--b);display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0">${n.icon}</div>
              <div style="flex:1;min-width:0">
                <div style="font-size:.8rem;font-weight:${n.read?'600':'800'};color:var(--t);margin-bottom:.18rem">${n.title}</div>
                <div style="font-size:.74rem;color:var(--t2);margin-bottom:.25rem;line-height:1.45">${n.body}</div>
                <div style="font-size:.68rem;color:var(--t3)">${n.time}</div>
              </div>
              <button onclick="dismissAppNotif(${n.id})" style="background:none;border:none;color:var(--t3);cursor:pointer;font-size:.9rem;padding:.15rem;flex-shrink:0;line-height:1" title="Dismiss">×</button>
            </div>`).join('')}
          </div>
          <div style="padding:.65rem 1rem;border-top:1px solid var(--b);text-align:center">
            <span style="font-size:.76rem;color:var(--p);font-weight:700;cursor:pointer" onclick="notif('Notification settings coming soon!','in')">⚙️ Notification Settings</span>
          </div>
        </div>`:''}
      </div>
      <div class="av" style="width:34px;height:34px;font-size:.72rem;background:var(--g1);color:#fff;cursor:pointer" onclick="go('profile')">${(S.user.name||'?').split(' ').map(x=>x[0]).join('').toUpperCase().slice(0,2)}</div>
      <button class="btn btn-ghost btn-sm" onclick="doLogout()">Logout</button>`:`
      <button class="btn btn-ghost btn-sm" onclick="go('login')">Login</button>
      <button class="btn btn-p btn-sm" onclick="go('signup')">Sign Up</button>`}
    </div>
  </nav>`;
}

function buildBody(){
  const map={home:buildHome,login:buildLogin,signup:buildSignup,dash:buildDash,recs:buildRecs,skillgap:buildSkillGap,saved:buildSaved,profile:buildProfile,roadmap:buildRoadmap,resume:buildResume,network:buildNetwork,codash:buildCoDash,admin:buildAdmin,about:buildAbout,contact:buildContact};
  return (map[S.page]||buildHome)();
}

// ══════════════════════ SIDEBAR ══════════════════════
function sb(role){
  const n=(S.user?.name||'User').split(' ');const ini=n.map(x=>x[0]).join('').toUpperCase().slice(0,2);
  if(role==='student') return `<div class="sb">
    <div class="sb-user" onclick="go('profile')">
      <div class="av" style="width:36px;height:36px;font-size:.72rem;background:var(--g1);color:#fff">${ini}</div>
      <div><div style="font-size:.84rem;font-weight:700;color:var(--t)">${S.user?.name||'Student'}</div><div style="font-size:.7rem;color:var(--t3)">${S.skills.slice(0,2).join(' · ')}</div></div>
    </div>
    <div class="sb-sec"><div class="sb-lbl">Main</div>
      <button class="sb-item ${S.page==='dash'?'on':''}" onclick="go('dash')"><span class="sb-ic">⚡</span>Dashboard</button>
      <button class="sb-item ${S.page==='recs'?'on':''}" onclick="go('recs')"><span class="sb-ic">✨</span>Recommendations<span class="sb-badge">${INTERNS.length}</span></button>
      <button class="sb-item ${S.page==='skillgap'?'on':''}" onclick="go('skillgap')"><span class="sb-ic">📊</span>Skill Gap</button>
      <button class="sb-item ${S.page==='saved'?'on':''}" onclick="go('saved')"><span class="sb-ic">🔖</span>Saved<span class="sb-badge ${INTERNS.filter(x=>x.saved).length===0?'r':''}">${INTERNS.filter(x=>x.saved).length}</span></button>
    </div>
    <div class="sb-sec"><div class="sb-lbl">Growth</div>
      <button class="sb-item ${S.page==='roadmap'?'on':''}" onclick="go('roadmap')"><span class="sb-ic">🗺️</span>Career Roadmap</button>
      <button class="sb-item ${S.page==='resume'?'on':''}" onclick="go('resume')"><span class="sb-ic">📄</span>Resume Builder</button>
      <button class="sb-item ${S.page==='network'?'on':''}" onclick="go('network')"><span class="sb-ic">🤝</span>Networking Hub</button>
    </div>
    <div class="sb-sec"><div class="sb-lbl">Account</div>
      <button class="sb-item ${S.page==='profile'?'on':''}" onclick="go('profile')"><span class="sb-ic">👤</span>My Profile</button>
      <button class="sb-item" onclick="toggleDark()"><span class="sb-ic">${S.dark?'☀️':'🌙'}</span>${S.dark?'Light':'Dark'} Mode</button>
      <button class="sb-item" onclick="doLogout()"><span class="sb-ic">🚪</span>Logout</button>
    </div>
  </div>`;
  if(role==='company') return `<div class="sb">
    <div class="sb-user"><div class="av" style="width:36px;height:36px;font-size:.72rem;background:var(--g4);color:#fff">${ini}</div><div><div style="font-size:.84rem;font-weight:700;color:var(--t)">${S.user?.name}</div><div style="font-size:.7rem;color:var(--t3)">Verified Partner</div></div></div>
    <div class="sb-sec"><div class="sb-lbl">Company</div>
      <button class="sb-item on"><span class="sb-ic">🏢</span>Dashboard</button>
      <button class="sb-item ${S.coTab==='post'?'on':''}" onclick="S.coTab='post';render()"><span class="sb-ic">➕</span>Post Internship</button>
      <button class="sb-item ${S.coTab==='cands'?'on':''}" onclick="S.coTab='cands';render()"><span class="sb-ic">👥</span>Candidates<span class="sb-badge">${CANDS.length}</span></button>
      <button class="sb-item" onclick="notif('Analytics report generated!','ok')"><span class="sb-ic">📈</span>Analytics</button>
    </div>
    <div class="sb-sec"><div class="sb-lbl">Account</div>
      <button class="sb-item" onclick="toggleDark()"><span class="sb-ic">${S.dark?'☀️':'🌙'}</span>Theme</button>
      <button class="sb-item" onclick="doLogout()"><span class="sb-ic">🚪</span>Logout</button>
    </div>
  </div>`;
  if(role==='admin') return `<div class="sb">
    <div class="sb-user"><div class="av" style="width:36px;height:36px;font-size:.72rem;background:var(--red);color:#fff">AD</div><div><div style="font-size:.84rem;font-weight:700;color:var(--t)">Admin Panel</div><div style="font-size:.7rem;color:var(--t3)">Super Admin</div></div></div>
    <div class="sb-sec"><div class="sb-lbl">Manage</div>
      ${['users','internships','analytics','ai'].map(t=>`<button class="sb-item ${S.adminTab===t?'on':''}" onclick="S.adminTab='${t}';render()"><span class="sb-ic">${{users:'👥',internships:'💼',analytics:'📈',ai:'🤖'}[t]}</span>${t.charAt(0).toUpperCase()+t.slice(1)}</button>`).join('')}
    </div>
    <div class="sb-sec"><div class="sb-lbl">Account</div>
      <button class="sb-item" onclick="toggleDark()"><span class="sb-ic">${S.dark?'☀️':'🌙'}</span>Theme</button>
      <button class="sb-item" onclick="doLogout()"><span class="sb-ic">🚪</span>Logout</button>
    </div>
  </div>`;
  return '';
}

// ══════════════════════ HOME ══════════════════════
function buildHome(){
  return `<div class="page"><section class="hero">
    <div class="hbg"></div>
    <div class="hfl hfl1">🏆 Google · 94% match</div>
    <div class="hfl hfl2">📊 Skill gap closed 40%</div>
    <div class="hfl hfl3">🎙️ Voice-powered</div>
    <div style="position:relative;z-index:1">
      <div class="hbadge a1">🤖 Powered by Sentence Transformers + Cosine Similarity</div>
      <h1 class="a2" style="font-family:var(--fh);font-size:clamp(2.1rem,5vw,3.6rem);font-weight:700;line-height:1.1;letter-spacing:-.04em;color:var(--t);max-width:700px;margin:0 auto 1.2rem">${S.lang==='hi'?'AI से खोजें <span style="background:var(--g1);-webkit-background-clip:text;-webkit-text-fill-color:transparent">सही इंटर्नशिप</span>':'Find Your <span style="background:var(--g1);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Perfect Internship</span><br>Powered by AI'}</h1>
      <p class="a3" style="font-size:1rem;color:var(--t2);max-width:500px;margin:0 auto 2.2rem;line-height:1.75">${S.lang==='hi'?'Nirmaan आपके कौशल को AI से शीर्ष इंटर्नशिप से जोड़ता है।':'Nirmaan uses semantic AI to match your unique skills and story with internships that truly fit — not just keywords.'}</p>
      <div class="a4" style="display:flex;gap:.8rem;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-p" style="font-size:.95rem;padding:.75rem 1.85rem" onclick="go('signup')">🚀 Get Started Free</button>
        <button class="btn btn-ghost" style="font-size:.95rem;padding:.75rem 1.65rem" onclick="go('login')">→ Sign In</button>
        <button class="btn btn-ghost" style="font-size:.95rem;padding:.75rem 1.5rem" onclick="toggleVoice()">🎙️ Try Voice</button>
      </div>
      <div style="display:flex;gap:2.75rem;justify-content:center;margin-top:3.75rem;padding-top:2.75rem;border-top:1px solid var(--b);flex-wrap:wrap">
        ${[['15k+','Internships'],['97%','AI Accuracy'],['6.2k+','Placed'],['1.1k+','Companies']].map(([v,l])=>`<div style="text-align:center"><div style="font-family:var(--fh);font-size:1.9rem;font-weight:700;background:var(--g1);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:-.03em">${v}</div><div style="font-size:.79rem;color:var(--t3);margin-top:.2rem">${l}</div></div>`).join('')}
      </div>
    </div>
  </section>
  <section class="sec alt"><h2 class="st">Why Nirmaan?</h2><p class="ss">Everything you need, in one AI-powered platform</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.1rem;max-width:1000px;margin:0 auto">
      ${[['🤖','Semantic AI','Sentence Transformers match your profile to internships via cosine similarity — 40+ dimensions.'],['📊','Skill Gap Analyzer','Compare your skills vs role requirements with curated courses to close every gap.'],['🗺️','Career Roadmap','Personalized week-by-week plan from profile building to landing your first offer.'],['📄','Resume Builder','AI-assisted resume editor with live preview and one-click PDF export.'],['🤝','Networking Hub','Connect with seniors, alumni, and professionals for referrals and advice.'],['🎙️','Voice Assistant','Navigate the entire platform with voice commands in English or Hindi.']].map(([ico,t,d])=>`<div class="card card-h" style="padding:1.6rem"><div style="font-size:1.4rem;margin-bottom:.75rem;width:42px;height:42px;border-radius:9px;background:var(--pl);display:flex;align-items:center;justify-content:center">${ico}</div><h3 style="font-family:var(--fh);font-weight:700;font-size:.92rem;color:var(--t);margin-bottom:.45rem">${t}</h3><p style="font-size:.8rem;color:var(--t2);line-height:1.6">${d}</p></div>`).join('')}
    </div>
  </section>
  <section style="background:var(--g1);padding:4rem 2rem;text-align:center">
    <h2 style="font-family:var(--fh);color:#fff;font-size:1.8rem;font-weight:700;letter-spacing:-.03em;margin-bottom:.8rem">Ready to find your internship?</h2>
    <p style="color:rgba(255,255,255,.8);margin-bottom:2rem;font-size:.95rem">Join 6,200+ students who landed internships through Nirmaan</p>
    <div style="display:flex;gap:.8rem;justify-content:center;flex-wrap:wrap">
      <button class="btn" style="background:#fff;color:var(--pd);font-weight:800;font-size:.95rem;padding:.8rem 2.1rem" onclick="go('signup')">Get Started Free →</button>
      <button class="btn" style="background:rgba(255,255,255,.15);color:#fff;border:1.5px solid rgba(255,255,255,.3);font-size:.95rem;padding:.8rem 1.85rem" onclick="go('contact')">Talk to Team</button>
    </div>
  </section>
  ${buildFooter()}</div>`;
}

// ══════════════════════ LOGIN (REDESIGNED + AUTO) ══════════════════════
function buildLogin(){
  // Start auto-login countdown when page renders
  setTimeout(()=>{if(S.autoLoginActive&&S.page==='login')startAutoLogin();},100);
  if(!S.loginRole)S.loginRole='student';
  const roleColors={student:'var(--p)',company:'var(--cyan)',admin:'var(--red)'};
  const roleDefaults={student:{em:'student@test.com',pw:'password'},company:{em:'hr@techcorp.com',pw:'password'},admin:{em:'admin@nirmaan.in',pw:'password'}};
  const rd=roleDefaults[S.loginRole];
  return `<div class="page"><div class="login-wrap">
    <div class="login-left">
      <div style="max-width:400px;margin:0 auto;width:100%">
        <div style="font-family:var(--fh);font-size:1.4rem;font-weight:700;background:var(--g1);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:2rem">✦ Nirmaan</div>
        <h2 style="font-family:var(--fh);font-size:1.6rem;font-weight:700;color:var(--t);letter-spacing:-.03em;margin-bottom:.35rem">Welcome back</h2>
        <p style="font-size:.85rem;color:var(--t2);margin-bottom:1.25rem">Sign in to continue your AI-powered internship journey</p>

        <!-- Role selector -->
        <div style="display:flex;gap:.5rem;margin-bottom:1.35rem;background:var(--bg3);border:1px solid var(--b);border-radius:10px;padding:4px">
          ${[['student','🎓','Student'],['company','🏢','Company'],['admin','🛡️','Admin']].map(([r,ico,lbl])=>`
          <button onclick="S.loginRole='${r}';S.autoLoginRole='${r}';render()" style="flex:1;padding:.42rem .5rem;border-radius:7px;border:none;font-size:.78rem;font-weight:700;cursor:pointer;font-family:var(--fb);transition:all .15s;background:${S.loginRole===r?'var(--bg2)':'transparent'};color:${S.loginRole===r?'var(--p)':'var(--t3)'};box-shadow:${S.loginRole===r?'0 1px 4px rgba(0,0,0,.08)':'none'}">${ico} ${lbl}</button>`).join('')}
        </div>

        <!-- Role context banner -->
        <div style="background:${S.loginRole==='admin'?'rgba(239,68,68,.06)':S.loginRole==='company'?'rgba(6,182,212,.06)':'var(--pl)'};border:1.5px solid ${S.loginRole==='admin'?'rgba(239,68,68,.18)':S.loginRole==='company'?'rgba(6,182,212,.18)':'rgba(99,102,241,.18)'};border-radius:9px;padding:.65rem 1rem;margin-bottom:1.2rem;font-size:.79rem;color:${S.loginRole==='admin'?'var(--red)':S.loginRole==='company'?'var(--cyan)':'var(--p)'};font-weight:600">
          ${{student:'🎓 Student login — access AI matches, roadmap & resume builder',company:'🏢 Company login — post internships & discover AI-ranked candidates',admin:'🛡️ Admin login — manage platform, users & AI engine'}[S.loginRole]}
        </div>

        ${S.autoLoginActive?`<div style="background:var(--pl);border:1.5px solid rgba(99,102,241,.2);border-radius:var(--r);padding:.75rem 1rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:.75rem;font-size:.82rem;color:var(--p)"><div style="width:22px;height:22px;border-radius:50%;border:2.5px solid rgba(99,102,241,.3);border-top-color:var(--p);animation:spin .8s linear infinite;flex-shrink:0"></div><span>Auto-logging in as ${S.loginRole.charAt(0).toUpperCase()+S.loginRole.slice(1)} in <strong id="al-count">${S.autoLoginCountdown}</strong>s…</span><button class="btn btn-o btn-xs" style="margin-left:auto" onclick="cancelAutoLogin()">Cancel</button></div>`:''}
        <div class="fg"><label class="fl">Email Address</label><input class="fi" id="lem" type="email" placeholder="you@example.com" value="${rd.em}"/></div>
        <div class="fg"><label class="fl">Password</label><input class="fi" id="lpw" type="password" placeholder="••••••••" value="${rd.pw}"/></div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.2rem">
          <label style="display:flex;align-items:center;gap:.4rem;font-size:.79rem;color:var(--t2);cursor:pointer"><input type="checkbox" style="accent-color:var(--p)" checked/> Remember me</label>
          <span style="font-size:.79rem;color:var(--p);cursor:pointer;font-weight:600" onclick="notif('Password reset email sent! 📧','in')">Forgot password?</span>
        </div>
        <button class="btn btn-p btn-full" style="padding:.72rem;font-size:.88rem" onclick="doLogin()">Sign In →</button>
        <div style="display:flex;align-items:center;gap:.7rem;margin:1.1rem 0"><div style="flex:1;height:1px;background:var(--b)"></div><span style="font-size:.71rem;color:var(--t3)">or continue with</span><div style="flex:1;height:1px;background:var(--b)"></div></div>
        <button onclick="doGLogin()" style="width:100%;padding:.62rem;border-radius:9px;border:1.5px solid var(--b);background:var(--bg2);color:var(--t);font-size:.855rem;font-weight:600;display:flex;align-items:center;justify-content:center;gap:.6rem;cursor:pointer;font-family:var(--fb);transition:all .15s" onmouseover="this.style.background='var(--bg3)'" onmouseout="this.style.background='var(--bg2)'">
          <svg width="17" height="17" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.7 2.5 30.2 0 24 0 14.7 0 6.7 5.5 2.7 13.5l7.8 6.1C12.4 13.1 17.7 9.5 24 9.5z"/><path fill="#4285F4" d="M46.5 24.5c0-1.5-.1-3-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.4 5.8c4.3-4 6.9-9.9 7.2-17z"/><path fill="#FBBC05" d="M10.5 28.4A14.9 14.9 0 0 1 9.5 24c0-1.5.3-3 .8-4.4L2.7 13.5A23.9 23.9 0 0 0 0 24c0 3.8.9 7.4 2.7 10.5l7.8-6.1z"/><path fill="#34A853" d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.4-5.8c-2.1 1.4-4.8 2.2-7.8 2.2-6.3 0-11.6-3.6-13.5-8.8l-7.8 6.1C6.7 42.5 14.7 48 24 48z"/></svg>
          Continue with Google
        </button>
        <p style="text-align:center;margin-top:1.2rem;font-size:.82rem;color:var(--t3)">No account? <span style="color:var(--p);font-weight:700;cursor:pointer" onclick="go('signup')">Sign up free</span></p>
      </div>
    </div>
    <div class="login-right">
      <div style="position:relative;z-index:1">
        <div style="font-size:.72rem;font-weight:800;color:rgba(255,255,255,.65);text-transform:uppercase;letter-spacing:.1em;margin-bottom:1rem">⚡ Quick Demo Login</div>
        <p style="font-size:.85rem;color:rgba(255,255,255,.8);line-height:1.65;margin-bottom:1.35rem">Click any role below to instantly experience the full platform — no registration needed.</p>
        ${[['student','🎓','Student View','priya@test.com','See AI matches, skill gap, roadmap'],['company','🏢','Company View','hr@techcorp.com','Post internships, view AI candidates'],['admin','🛡️','Admin Panel','admin@nirmaan.in','Manage users, internships, AI engine']].map(([r,ico,lbl,em,desc])=>`
        <div class="demo-card" onclick="S.loginRole='${r}';S.autoLoginActive=false;clearInterval(autoTimer);performDemoLogin('${r}')">
          <div class="demo-role">${ico} ${lbl}</div>
          <div class="demo-name">${em}</div>
          <div class="demo-email">${desc}</div>
        </div>`).join('')}
        <div style="margin-top:1.5rem;padding:1rem;background:rgba(255,255,255,.1);border-radius:var(--r);border:1px solid rgba(255,255,255,.2)">
          <div style="font-size:.72rem;font-weight:800;color:rgba(255,255,255,.65);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.5rem">🤖 AI-powered features</div>
          <div style="font-size:.78rem;color:rgba(255,255,255,.75);line-height:1.7">✓ Semantic skill matching<br>✓ Voice assistant (Arya)<br>✓ Career roadmap<br>✓ Resume builder<br>✓ Networking hub</div>
        </div>
      </div>
    </div>
  </div></div>`;
}

// ══════════════════════ SIGNUP ══════════════════════
function buildSignup(){
  const steps=['Account','Verify','Role','Education','Skills','Portfolio','Review'];
  const cur=S.step;
  return `<div class="page"><div class="ob" style="padding-top:0">
    <div class="obl">
      <div style="font-family:var(--fh);font-size:1.3rem;font-weight:700;color:#fff;margin-bottom:2.5rem;z-index:1;position:relative">✦ Nirmaan</div>
      <div style="display:flex;flex-direction:column;gap:.5rem;z-index:1;position:relative;flex:1">
        ${steps.map((s,i)=>`<div style="display:flex;align-items:center;gap:.8rem;padding:.72rem .9rem;border-radius:9px;background:${cur===i+1?'rgba(255,255,255,.15)':'transparent'};transition:all .15s">
          <div style="width:26px;height:26px;border-radius:50%;border:2px solid ${cur>i+1?'rgba(255,255,255,.8)':cur===i+1?'#fff':'rgba(255,255,255,.35)'};display:flex;align-items:center;justify-content:center;font-size:.73rem;font-weight:800;color:${cur>i+1?'#fff':cur===i+1?'var(--p)':'rgba(255,255,255,.6)'};background:${cur===i+1?'#fff':cur>i+1?'rgba(255,255,255,.3)':'transparent'};flex-shrink:0">${cur>i+1?'✓':i+1}</div>
          <div style="font-size:.83rem;font-weight:${cur===i+1?'800':'500'};color:${cur===i+1?'#fff':'rgba(255,255,255,.7)'}">${s}</div>
        </div>`).join('')}
      </div>
      <div style="margin-top:auto;padding-top:2rem;z-index:1;position:relative;border-top:1px solid rgba(255,255,255,.15)">
        <div style="font-size:.8rem;color:rgba(255,255,255,.75);line-height:1.65;font-style:italic;margin-bottom:.65rem">"Nirmaan matched me with Google in under 5 mins."</div>
        <div style="font-size:.75rem;font-weight:700;color:rgba(255,255,255,.85)">— Priya Sharma, IIT Delhi → Google Intern</div>
      </div>
    </div>
    <div class="obr">
      <div class="obf">
        <div class="stpg">${steps.map((_,i)=>`<div class="spd ${cur===i+1?'on':cur>i+1?'dn':''}"></div>`).join('')}</div>
        ${buildStepContent(cur)}
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:1.65rem">
          ${cur>1?`<button class="btn btn-ghost" onclick="S.step--;render()">← Back</button>`:`<button class="btn btn-ghost" onclick="go('login')">← Login</button>`}
          <span style="font-size:.76rem;color:var(--t3)">Step ${cur} of ${S.totalSteps}</span>
          ${cur<S.totalSteps?`<button class="btn btn-p" onclick="nextStep()">Continue →</button>`:`<button class="btn btn-p" onclick="completeSignup()">🚀 Launch Dashboard</button>`}
        </div>
      </div>
    </div>
  </div></div>`;
}
function buildStepContent(n){
  const s={
1:`<h2 class="stit">Create your account</h2><p class="ssub">Start your AI internship journey</p>
<div class="fr2">
  <div class="fg"><label class="fl">First Name</label><input class="fi" id="sfn" placeholder="Priya" value="${S.firstName}"/></div>
  <div class="fg"><label class="fl">Last Name</label><input class="fi" id="sln" placeholder="Sharma" value="${S.lastName}"/></div>
</div>
<div class="fg"><label class="fl">Email</label><input class="fi" id="sem" type="email" placeholder="priya@example.com" value="${S.email}" onblur="if(this.value!==S.email){S.email=this.value;S.otpSent=false;S.otpVerified=false;render();}"/></div>
<div class="fg"><label class="fl">Phone</label><input class="fi" id="sph" type="tel" placeholder="+91 98765 43210" value="${S.phone}"/></div>
<div class="fr2">
  <div class="fg"><label class="fl">Password</label><input class="fi" type="password" placeholder="Min 8 characters"/></div>
  <div class="fg"><label class="fl">Confirm</label><input class="fi" type="password" placeholder="Repeat password"/></div>
</div>
<div style="background:var(--bg3);border:1.5px solid var(--b);border-radius:var(--r);padding:1rem 1.15rem;margin-top:.5rem">
  <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.75rem">
    <span style="font-size:1rem">📧</span>
    <span style="font-size:.82rem;font-weight:700;color:var(--t)">Email OTP Verification</span>
    ${S.otpVerified?'<span style="margin-left:auto;background:rgba(16,185,129,.12);color:var(--green);border:1px solid rgba(16,185,129,.25);border-radius:99px;padding:.18rem .65rem;font-size:.72rem;font-weight:800">✓ Verified</span>':''}
  </div>
  ${!S.otpSent?`
    <p style="font-size:.78rem;color:var(--t2);margin-bottom:.75rem">We'll send a 6-digit code to your email to confirm your identity.</p>
    <button class="btn btn-p btn-sm" style="width:100%;justify-content:center" onclick="sendOtp()">📤 Send OTP</button>
  `:`
    ${!S.otpVerified?`
    <p style="font-size:.78rem;color:var(--t2);margin-bottom:.65rem">OTP sent! Enter the 6-digit code below.</p>
    <div style="display:flex;gap:.6rem">
      <input class="fi" id="otp-input" maxlength="6" placeholder="6-digit code" style="letter-spacing:.2em;font-size:1.05rem;font-weight:700;text-align:center" oninput="this.style.borderColor='var(--b)'"/>
      <button class="btn btn-p" style="white-space:nowrap" onclick="verifyOtp()">Verify →</button>
    </div>
    <div style="display:flex;justify-content:space-between;margin-top:.5rem">
      <span style="font-size:.74rem;color:var(--t3)">Check spam if not received</span>
      <span style="font-size:.74rem;color:var(--p);cursor:pointer;font-weight:700" onclick="sendOtp()">Resend OTP</span>
    </div>
    `:`<div style="display:flex;align-items:center;gap:.55rem;padding:.6rem .9rem;background:rgba(16,185,129,.08);border:1.5px solid rgba(16,185,129,.2);border-radius:9px"><span style="font-size:1.1rem">✅</span><span style="font-size:.83rem;font-weight:600;color:var(--green)">Email verified successfully!</span></div>`}
  `}
</div>`,
2:`<h2 class="stit">Who are you?</h2><p class="ssub">We'll personalise everything based on your role</p>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:.9rem;margin-bottom:1.25rem">
  ${[['student','🎓','Student','Looking for internships'],['company','🏢','Company','Finding talent']].map(([r,ico,lbl,d])=>`<div onclick="S.signupRole='${r}';render()" style="border:2px solid ${S.signupRole===r?'var(--p)':'var(--b)'};border-radius:var(--rl);padding:1.3rem;text-align:center;cursor:pointer;background:${S.signupRole===r?'var(--pl)':'var(--bg3)'};transition:all .15s"><div style="font-size:1.8rem;margin-bottom:.6rem">${ico}</div><div style="font-family:var(--fh);font-weight:700;color:var(--t);margin-bottom:.3rem">${lbl}</div><div style="font-size:.75rem;color:var(--t3)">${d}</div>${S.signupRole===r?'<div style="margin-top:.65rem"><span class="bdg bi">✓ Selected</span></div>':''}</div>`).join('')}
</div>
<div class="fg"><label class="fl">City / Location</label><input class="fi" id="sloc" placeholder="Bangalore" value="${S.loc}"/></div>
<div class="fg"><label class="fl">Preferred Work Mode</label><select class="fs"><option>Remote</option><option>Hybrid</option><option>On-site</option><option>Any</option></select></div>`,
3:`<h2 class="stit">Academic background</h2><p class="ssub">Helps match you with right-level internships</p>
<div class="fr2">
  <div class="fg"><label class="fl">Degree</label><select class="fs"><option>B.Tech / B.E.</option><option>B.Sc</option><option>BCA</option><option>MCA</option><option>M.Tech</option><option>MBA</option></select></div>
  <div class="fg"><label class="fl">Major / Branch</label><input class="fi" id="smaj" placeholder="Computer Science" value="${S.edu}"/></div>
</div>
<div class="fg"><label class="fl">College / University</label><input class="fi" id="scol" placeholder="IIT Delhi" value="${S.college}"/></div>
<div class="fr2">
  <div class="fg"><label class="fl">Year</label><select class="fs"><option>1st</option><option>2nd</option><option selected>3rd</option><option>4th</option><option>Graduate</option></select></div>
  <div class="fg"><label class="fl">CGPA / %</label><input class="fi" placeholder="8.5" value="${S.cgpa}"/></div>
</div>
<div class="fg"><label class="fl">Experience</label><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.6rem;margin-top:.3rem">${[['fresher','🌱','Fresher'],['some','⚡','Has Projects'],['exp','🔥','Done Intern']].map(([v,ico,lbl])=>`<div onclick="S.exp='${v}';render()" style="border:1.5px solid ${S.exp===v?'var(--p)':'var(--b)'};border-radius:9px;padding:.7rem;text-align:center;cursor:pointer;background:${S.exp===v?'var(--pl)':'var(--bg3)'};transition:all .15s"><div style="font-size:1.2rem;margin-bottom:.28rem">${ico}</div><div style="font-size:.73rem;font-weight:700;color:${S.exp===v?'var(--p)':'var(--t2)'}">${lbl}</div></div>`).join('')}</div></div>`,
4:`<h2 class="stit">Skills & Interests</h2><p class="ssub">The heart of our AI matching — be thorough!</p>
<div class="fg"><label class="fl">Technical Skills <span style="color:var(--t3)">(press Enter)</span></label><div class="tw">${S.skills.map(s=>`<span class="tg">${s}<span class="tgx" onclick="rmSkill('${s}')">×</span></span>`).join('')}<input class="ti" placeholder="React, Python, Figma…" onkeydown="addSkillKey(event)"/></div><div style="font-size:.71rem;color:var(--t3);margin-top:.25rem">Add all languages, frameworks, and tools you know</div></div>
<div class="fg"><label class="fl">Areas of Interest</label><div style="display:flex;flex-wrap:wrap;gap:.45rem;margin-top:.32rem">${['Frontend','Backend','AI/ML','Data Science','DevOps','Mobile','Design','Cloud','Cybersecurity','Blockchain'].map(i=>`<div onclick="toggleInt('${i}')" style="border:1.5px solid ${S.interests.includes(i)?'var(--p)':'var(--b)'};background:${S.interests.includes(i)?'var(--pl)':'var(--bg3)'};color:${S.interests.includes(i)?'var(--p)':'var(--t2)'};border-radius:99px;padding:.32rem .8rem;font-size:.76rem;font-weight:600;cursor:pointer;transition:all .15s">${i}</div>`).join('')}</div></div>
<div class="fr2">
  <div class="fg"><label class="fl">Duration Preference</label><select class="fs"><option>Any</option><option>1–2 months</option><option>2–3 months</option><option>3–6 months</option></select></div>
  <div class="fg"><label class="fl">Min Stipend (₹/mo)</label><select class="fs"><option>Any</option><option>10k+</option><option>20k+</option><option>30k+</option><option>50k+</option></select></div>
</div>`,
5:`<h2 class="stit">Portfolio & Links</h2><p class="ssub">Showcase your work — boosts your match score!</p>
<div class="fr2">
  <div class="fg"><label class="fl">🔗 LinkedIn</label><input class="fi" placeholder="linkedin.com/in/you" value="${S.linkedin}" oninput="S.linkedin=this.value"/></div>
  <div class="fg"><label class="fl">🐙 GitHub</label><input class="fi" placeholder="github.com/you" value="${S.github}" oninput="S.github=this.value"/></div>
</div>
<div class="fg"><label class="fl">🌐 Portfolio</label><input class="fi" placeholder="yourportfolio.com" value="${S.portfolio}" oninput="S.portfolio=this.value"/></div>
<div class="fg"><label class="fl">📁 Projects (${S.projects.length})</label>
  ${S.projects.map((p,i)=>`<div style="display:flex;align-items:center;gap.7rem;gap:.7rem;padding:.6rem .8rem;border:1px solid var(--b);border-radius:9px;margin-bottom:.4rem;background:var(--bg3)"><div style="font-size:.85rem;flex:1"><div style="font-weight:700;color:var(--t)">${p.n}</div><div style="font-size:.71rem;color:var(--t3)">${p.t}</div></div><button class="btn btn-danger btn-xs" onclick="rmProject(${i})">×</button></div>`).join('')}
  <button class="btn btn-ghost btn-sm" style="width:100%;justify-content:center;margin-top:.4rem" onclick="S.modal='project';render()">+ Add Project</button>
</div>
<div class="fg"><label class="fl">📄 Resume Upload</label><div class="uzn" onclick="notif('Resume uploaded! AI analyzing skills… 🤖','ok')"><div class="uzi">📄</div><div style="font-size:.88rem;font-weight:600;color:var(--t)">Click to upload resume</div><div style="font-size:.75rem;color:var(--t3);margin-top:.25rem">PDF or DOCX · Max 5MB</div></div></div>`,
6:`<h2 class="stit">You're all set! 🎉</h2><p class="ssub">Review before we run the AI matching engine</p>
<div class="aic"><div class="aih">🤖 AI Pre-Analysis Complete</div><div style="font-size:.8rem;color:var(--t2);line-height:1.6;margin-bottom:.8rem">Found <strong style="color:var(--p)">${INTERNS.length} matching internships</strong>. Top match: <strong>Google Frontend Dev at 94%</strong>.</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:.65rem">${[['Profile Score','87%'],['Top Match','94% (Google)'],['Skills',S.skills.length+' added'],['Interests',S.interests.length+' selected']].map(([l,v])=>`<div style="background:var(--bg2);border-radius:8px;padding:.65rem .9rem;border:1px solid var(--b)"><div style="font-size:.68rem;color:var(--t3);font-weight:700;text-transform:uppercase;letter-spacing:.06em">${l}</div><div style="font-family:var(--fh);font-size:1.05rem;font-weight:700;color:var(--t);margin-top:.2rem">${v}</div></div>`).join('')}</div></div>
<div style="background:var(--bg3);border-radius:var(--r);padding:.9rem 1.1rem;border:1px solid var(--b)">
  ${[['👤',`${S.firstName||'Student'} ${S.lastName||''}`,'Name'],['📧',S.email||'—','Email (✓ verified)'],['🎓',S.edu||'CS','Education'],['🛠️',S.skills.slice(0,3).join(', ')||'—',S.skills.length+' skills'],['📁',S.projects.length+' projects, '+S.certs.length+' certs','Portfolio']].map(([ico,l,r])=>`<div style="display:flex;justify-content:space-between;font-size:.8rem;padding:.32rem 0;border-bottom:1px solid var(--b)"><span style="color:var(--t)">${ico} ${l}</span><span style="color:var(--t3)">${r}</span></div>`).join('')}
</div>
<div style="font-size:.76rem;color:var(--t3);text-align:center;margin-top:.9rem;line-height:1.6">By creating an account you agree to our Terms & Privacy Policy. Data is encrypted and never sold.</div>`
  };
  return s[n]||s[1];
}

// ══════════════════════ DASHBOARD ══════════════════════
function buildDash(){
  const pct=74;
  return `<div class="page dw">${sb('student')}<div class="dm">
    <!-- Header -->
    <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:1.35rem;gap:.75rem">
      <div>
        <h1 style="font-family:var(--fh);font-size:clamp(1.2rem,4vw,1.55rem);font-weight:700;color:var(--t);letter-spacing:-.03em">Good morning, ${(S.user?.name||'Student').split(' ')[0]} 👋</h1>
        <p style="color:var(--t3);font-size:.82rem;margin-top:.2rem">AI found <strong style="color:var(--p)">3 new matches</strong> since yesterday</p>
      </div>
      <button class="btn btn-p btn-sm" style="flex-shrink:0" onclick="go('recs')">Matches →</button>
    </div>

    <!-- Metrics: horizontal scroll on mobile -->
    <div style="display:flex;gap:.65rem;overflow-x:auto;padding-bottom:.5rem;margin-bottom:1.35rem;-webkit-overflow-scrolling:touch;scrollbar-width:none" class="dash-metrics">
      ${[['⚡',INTERNS.length,'AI Matches','↑ 3 today','var(--p)'],['📝',S.appliedIds.length,'Applied','Track all','var(--cyan)'],['🔖',INTERNS.filter(x=>x.saved).length,'Saved','Bookmarks','var(--amber)'],['🏆','94%','Top Match','Google','var(--green)'],['📊','74%','Profile','Completion','var(--p2)']].map(([ico,v,l,s,c])=>`
      <div style="background:var(--bg2);border:1px solid var(--b);border-radius:var(--rl);padding:1rem 1.1rem;min-width:120px;flex-shrink:0;cursor:pointer;position:relative;overflow:hidden;transition:all .15s" onclick="go('recs')">
        <div style="position:absolute;top:-12px;right:-12px;width:50px;height:50px;border-radius:50%;background:${c};opacity:.07"></div>
        <div style="font-size:1.15rem;margin-bottom:.35rem">${ico}</div>
        <div style="font-family:var(--fh);font-size:1.55rem;font-weight:700;color:var(--t);letter-spacing:-.03em;line-height:1">${v}</div>
        <div style="font-size:.72rem;color:var(--t3);margin:.22rem 0">${l}</div>
        <div style="font-size:.68rem;font-weight:700;color:${c}">${s}</div>
      </div>`).join('')}
    </div>

    <!-- Main grid: stacks on mobile -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem" class="dash-grid-2">
      <!-- Profile strength -->
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.9rem">
          <h3 style="font-family:var(--fh);font-weight:700;font-size:.88rem;color:var(--t)">Profile</h3>
          <span class="bdg bi">${pct}%</span>
        </div>
        <div class="pb tk"><div class="pf" style="width:${pct}%"></div></div>
        <div style="margin-top:.85rem;display:flex;flex-direction:column;gap:.42rem">
          ${[['✅','Basic Info','Done'],['✅','Skills',`${S.skills.length} added`],['⚠️','Resume','Pending'],['❌','LinkedIn','Missing']].map(([ico,l,v])=>`<div style="display:flex;justify-content:space-between;font-size:.75rem"><span style="color:var(--t2)">${ico} ${l}</span><span style="color:var(--t3)">${v}</span></div>`).join('')}
        </div>
        <button class="btn btn-o btn-sm" style="margin-top:.9rem;width:100%" onclick="go('profile')">Complete →</button>
      </div>

      <!-- Top matches -->
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.9rem">
          <h3 style="font-family:var(--fh);font-weight:700;font-size:.88rem;color:var(--t)">Top Matches</h3>
          <span style="font-size:.73rem;color:var(--p);cursor:pointer;font-weight:700" onclick="go('recs')">All →</span>
        </div>
        ${INTERNS.slice(0,4).map(i=>`
        <div style="display:flex;align-items:center;gap:.55rem;padding:.45rem 0;border-bottom:1px solid var(--b);cursor:pointer" onclick="go('recs')">
          <div style="font-size:1.1rem;width:24px;text-align:center;flex-shrink:0">${i.logo}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:.76rem;font-weight:700;color:var(--t);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${i.co}</div>
            <div style="font-size:.67rem;color:var(--t3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${i.title}</div>
          </div>
          <div style="font-size:.7rem;font-weight:800;color:${i.match>=85?'var(--green)':'var(--amber)'};background:${i.match>=85?'rgba(16,185,129,.1)':'rgba(245,158,11,.1)'};padding:.15rem .45rem;border-radius:99px;flex-shrink:0">${i.match}%</div>
        </div>`).join('')}
      </div>
    </div>

    <!-- Activity + Quick Actions: stacks on mobile -->
    <div style="display:grid;grid-template-columns:1.6fr 1fr;gap:1rem;margin-bottom:1rem" class="dash-grid-act">
      <div class="card">
        <h3 style="font-family:var(--fh);font-weight:700;font-size:.88rem;color:var(--t);margin-bottom:1rem">Weekly Activity</h3>
        <div class="bch">${[{l:'Mon',v:45,h:38},{l:'Tue',v:82,h:68},{l:'Wed',v:60,h:50},{l:'Thu',v:95,h:79},{l:'Fri',v:75,h:62},{l:'Sat',v:110,h:91},{l:'Sun',v:88,h:73}].map(d=>`<div class="bc"><div class="bv">${d.v}</div><div class="bb" style="height:${d.h}px"></div><div class="bl">${d.l}</div></div>`).join('')}</div>
        <div style="font-size:.69rem;color:var(--t3);margin-top:.55rem">Profile views · this week</div>
      </div>
      <div class="card">
        <h3 style="font-family:var(--fh);font-weight:700;font-size:.88rem;color:var(--t);margin-bottom:.8rem">Quick Actions</h3>
        ${[['🗺️','Roadmap','roadmap'],['📄','Resume','resume'],['🤝','Network','network'],['📊','Skill Gap','skillgap']].map(([ico,lbl,pg])=>`<button class="btn btn-ghost btn-sm" style="width:100%;justify-content:flex-start;margin-bottom:.38rem;font-size:.79rem" onclick="go('${pg}')">${ico} ${lbl}</button>`).join('')}
      </div>
    </div>

    <!-- AI Insights -->
    <div class="aic">
      <div class="aih">🤖 AI Insights</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(175px,1fr));gap:.75rem">
        ${[['📈','Trending','React Native & TypeScript are the most requested skills this week.'],['🎯','Tip','Adding GitHub increases recruiter views 3.2× for tech roles.'],['⚡','Apply Now!','Google Frontend closes in 4 days. Your 94% score = top 5%.']].map(([ico,t,d])=>`<div style="background:var(--bg2);border-radius:var(--r);padding:.8rem .9rem;border:1px solid var(--b)"><div style="font-size:1.1rem;margin-bottom:.4rem">${ico}</div><div style="font-size:.78rem;font-weight:700;color:var(--t);margin-bottom:.28rem">${t}</div><div style="font-size:.72rem;color:var(--t2);line-height:1.5">${d}</div></div>`).join('')}
      </div>
    </div>
  </div></div>`;
}

// ══════════════════════ RECS ══════════════════════
function buildRecs(){
  let shown=INTERNS;
  if(S.fType!=='all')shown=INTERNS.filter(i=>i.type===S.fType);
  if(S.srchQ)shown=shown.filter(i=>i.title.toLowerCase().includes(S.srchQ.toLowerCase())||i.co.toLowerCase().includes(S.srchQ.toLowerCase()));
  const perfect=shown.filter(i=>i.match>=85).slice(0,4);
  const others=shown.filter(i=>i.match<85);

  function bigCard(i){
    const col=i.match>=90?'var(--green)':i.match>=85?'var(--cyan)':'var(--amber)';
    const colBg=i.match>=90?'rgba(16,185,129,.1)':i.match>=85?'rgba(6,182,212,.1)':'rgba(245,158,11,.1)';
    return `<div class="ic" style="padding:1.75rem;display:flex;flex-direction:column;gap:1.1rem;position:relative;overflow:hidden">
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:${i.match>=90?'var(--g1)':i.match>=85?'var(--g4)':'var(--g3)'}"></div>
      <div style="display:flex;align-items:start;justify-content:space-between;gap:.75rem">
        <div style="display:flex;align-items:center;gap:.85rem">
          <div class="il" style="width:58px;height:58px;border-radius:14px;font-size:1.7rem">${i.logo}</div>
          <div>
            <div style="font-family:var(--fh);font-size:1.05rem;font-weight:700;color:var(--t);margin-bottom:.18rem">${i.title}</div>
            <div style="font-size:.84rem;color:var(--t3);font-weight:600">${i.co}</div>
            ${i.match>=90?'<span style="display:inline-flex;align-items:center;gap:.25rem;background:rgba(99,102,241,.1);color:var(--p);border:1px solid rgba(99,102,241,.2);border-radius:99px;padding:.14rem .58rem;font-size:.68rem;font-weight:800;margin-top:.3rem">⭐ Perfect Match</span>':''}
          </div>
        </div>
        <div style="text-align:center;flex-shrink:0">
          <div style="width:68px;height:68px;border-radius:50%;background:conic-gradient(${col} ${i.match*3.6}deg,var(--bg3) 0);display:flex;align-items:center;justify-content:center">
            <div style="width:52px;height:52px;border-radius:50%;background:var(--bg2);display:flex;align-items:center;justify-content:center;font-family:var(--fh);font-size:.88rem;font-weight:800;color:${col}">${i.match}%</div>
          </div>
          <div style="font-size:.67rem;color:var(--t3);margin-top:.3rem;font-weight:700">AI Match</div>
        </div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:.45rem">
        <span style="display:inline-flex;align-items:center;gap:.3rem;background:var(--bg3);border:1px solid var(--b);border-radius:99px;padding:.3rem .75rem;font-size:.76rem;color:var(--t2)">📍 ${i.loc}</span>
        <span style="display:inline-flex;align-items:center;gap:.3rem;background:var(--bg3);border:1px solid var(--b);border-radius:99px;padding:.3rem .75rem;font-size:.76rem;color:var(--t2)">💻 ${i.type}</span>
        <span style="display:inline-flex;align-items:center;gap:.3rem;background:rgba(16,185,129,.08);border:1px solid rgba(16,185,129,.2);border-radius:99px;padding:.3rem .75rem;font-size:.76rem;color:var(--green);font-weight:700">💰 ${i.pay}</span>
        <span style="display:inline-flex;align-items:center;gap:.3rem;background:var(--bg3);border:1px solid var(--b);border-radius:99px;padding:.3rem .75rem;font-size:.76rem;color:var(--t2)">⏱ ${i.dur}</span>
      </div>
      <div style="display:flex;gap:.3rem;flex-wrap:wrap">${i.skills.map(s=>`<span class="bdg bi" style="font-size:.74rem;padding:.22rem .7rem">${s}</span>`).join('')}</div>
      <div style="background:rgba(99,102,241,.05);border:1px solid rgba(99,102,241,.12);border-radius:10px;padding:.75rem 1rem;font-size:.8rem;color:var(--t2);line-height:1.6">🧠 <strong style="color:var(--p)">Why you?</strong> ${i.why}</div>
      <div style="display:flex;gap:.5rem;flex-wrap:wrap;padding-top:.25rem;border-top:1px solid var(--b)">
        <button class="btn btn-p" style="flex:1;justify-content:center;padding:.6rem" onclick="applyInt(${i.id})" ${S.appliedIds.includes(i.id)?'disabled style="opacity:.55;cursor:default;flex:1;justify-content:center;padding:.6rem"':''}>${S.appliedIds.includes(i.id)?'✅ Applied':'🚀 Apply Now'}</button>
        <button class="btn ${i.saved?'btn-success':'btn-ghost'} btn-sm" onclick="saveInt(${i.id})">${i.saved?'🔖':'🔖 Save'}</button>
        <button class="btn btn-ghost btn-sm" onclick="go('skillgap')">📊 Gap</button>
        <button class="btn btn-ghost btn-sm" onclick="notif('Opening ${i.co} profile…','in')">🏢</button>
      </div>
    </div>`;
  }

  function smallCard(i){
    const col=i.match>=75?'var(--amber)':'var(--t3)';
    return `<div class="ic" style="padding:1.35rem">
      <div style="display:flex;gap:.85rem;align-items:start;margin-bottom:.9rem">
        <div class="il" style="width:48px;height:48px;border-radius:11px;font-size:1.4rem">${i.logo}</div>
        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:start;justify-content:space-between;gap:.5rem">
            <div>
              <div style="font-family:var(--fh);font-size:.95rem;font-weight:700;color:var(--t)">${i.title}</div>
              <div style="font-size:.79rem;color:var(--t3)">${i.co}</div>
            </div>
            <span style="background:rgba(245,158,11,.1);color:var(--amber);border-radius:99px;padding:.2rem .6rem;font-size:.74rem;font-weight:800;white-space:nowrap;flex-shrink:0">${i.match}%</span>
          </div>
        </div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:.7rem">
        <span class="ipill">📍 ${i.loc}</span><span class="ipill">💻 ${i.type}</span><span class="ipill">💰 ${i.pay}</span>
      </div>
      <div style="display:flex;gap:.3rem;flex-wrap:wrap;margin-bottom:.75rem">${i.skills.map(s=>`<span class="bdg bi">${s}</span>`).join('')}</div>
      <div style="font-size:.76rem;color:var(--t2);line-height:1.5;background:var(--bg3);border-radius:8px;padding:.55rem .75rem;margin-bottom:.85rem">🧠 ${i.why.split('.')[0]}.</div>
      <div style="display:flex;gap:.4rem">
        <button class="btn btn-p btn-sm" style="flex:1;justify-content:center" onclick="applyInt(${i.id})" ${S.appliedIds.includes(i.id)?'disabled style="opacity:.55;cursor:default"':''}>${S.appliedIds.includes(i.id)?'✅ Applied':'Apply Now'}</button>
        <button class="btn ${i.saved?'btn-success':'btn-ghost'} btn-sm" onclick="saveInt(${i.id})">${i.saved?'🔖 Saved':'🔖 Save'}</button>
        <button class="btn btn-ghost btn-sm" onclick="go('skillgap')">📊</button>
      </div>
    </div>`;
  }

  return `<div class="page dw">${sb('student')}<div class="dm">
    <div style="margin-bottom:1.5rem">
      <h1 style="font-family:var(--fh);font-size:1.55rem;font-weight:700;color:var(--t);letter-spacing:-.03em">✨ AI Recommendations</h1>
      <p style="color:var(--t3);font-size:.845rem;margin-top:.2rem">Ranked by semantic similarity · Updated just now · <strong style="color:var(--p)">${shown.length} matches</strong></p>
    </div>
    <div style="display:flex;gap:.9rem;align-items:center;margin-bottom:1.5rem;flex-wrap:wrap">
      <div class="pill-tog">${['all','Remote','Hybrid','On-site'].map(t=>`<button class="pill-btn ${S.fType===t?'on':''}" onclick="S.fType='${t}';render()">${t.charAt(0).toUpperCase()+t.slice(1)}</button>`).join('')}</div>
      <button class="btn btn-ghost btn-sm" style="margin-left:auto" onclick="notif('Sorted by match score ↓','in')">Sort: Match ↓</button>
    </div>
    ${shown.length===0?`<div class="card" style="text-align:center;padding:3rem"><div style="font-size:2.5rem;margin-bottom:.75rem">🔍</div><p style="font-weight:700;color:var(--t)">No results found</p><button class="btn btn-p btn-sm" style="margin-top:1rem" onclick="S.fType='all';S.srchQ='';render()">Clear Filters</button></div>`:`
    ${perfect.length>0?`
      <div style="display:flex;align-items:center;gap:.65rem;margin-bottom:1rem">
        <div style="font-family:var(--fh);font-size:.82rem;font-weight:800;color:var(--t);text-transform:uppercase;letter-spacing:.06em">⭐ Perfect Matches</div>
        <span class="bdg bi">${perfect.length} found</span>
        <div style="flex:1;height:1px;background:var(--b)"></div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(420px,1fr));gap:1.1rem;margin-bottom:2rem">
        ${perfect.map(i=>bigCard(i)).join('')}
      </div>`:''}
    ${others.length>0?`
      <div style="display:flex;align-items:center;gap:.65rem;margin-bottom:1rem">
        <div style="font-family:var(--fh);font-size:.82rem;font-weight:800;color:var(--t);text-transform:uppercase;letter-spacing:.06em">🔍 Other Matches</div>
        <span class="bdg bgr">${others.length} more</span>
        <div style="flex:1;height:1px;background:var(--b)"></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:.85rem">
        ${others.map(i=>smallCard(i)).join('')}
      </div>`:''}
    `}
  </div></div>`;
}

// ══════════════════════ SKILL GAP ══════════════════════
function buildSkillGap(){
  const mine=[{n:'React',v:90},{n:'JavaScript',v:85},{n:'Python',v:70},{n:'CSS',v:80}];
  const req=[{n:'React',v:85,h:true},{n:'Node.js',v:80,h:false},{n:'MongoDB',v:70,h:false},{n:'TypeScript',v:70,h:false},{n:'Docker',v:55,h:false},{n:'Python',v:60,h:true}];
  const miss=req.filter(r=>!r.h);
  return `<div class="page dw">${sb('student')}<div class="dm">
    <div style="margin-bottom:1.65rem"><h1 style="font-family:var(--fh);font-size:1.55rem;font-weight:700;color:var(--t);letter-spacing:-.03em">📊 Skill Gap Analyzer</h1><p style="color:var(--t3);font-size:.845rem;margin-top:.2rem">vs Full Stack Intern – Flipkart (79% match)</p></div>
    <div class="card" style="background:var(--g1);border:none;margin-bottom:1.35rem"><div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap.9rem;gap:.9rem"><div><div style="font-family:var(--fh);font-size:1rem;font-weight:700;color:#fff">Current Match Score</div><div style="color:rgba(255,255,255,.7);font-size:.79rem;margin-top:.2rem">Close the gap to reach 95%</div></div><div style="text-align:center"><div style="font-family:var(--fh);font-size:2.8rem;font-weight:700;color:#fff;letter-spacing:-.05em;line-height:1">79%</div><div style="color:rgba(255,255,255,.6);font-size:.72rem">Match</div></div></div><div style="margin-top:1.1rem;height:9px;background:rgba(255,255,255,.2);border-radius:99px;overflow:hidden"><div style="height:100%;width:79%;background:rgba(255,255,255,.9);border-radius:99px"></div></div></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;margin-bottom:1.35rem">
      <div class="card"><h3 style="font-family:var(--fh);font-weight:700;font-size:.9rem;color:var(--t);margin-bottom:.95rem">✅ Your Skills</h3>${mine.map(s=>`<div style="display:flex;align-items:center;gap.65rem;gap:.65rem;margin-bottom:.78rem"><div style="font-size:.8rem;font-weight:600;min-width:95px;color:var(--t2)">${s.n}</div><div style="flex:1;height:7px;background:var(--bg3);border-radius:99px;overflow:hidden"><div style="height:100%;width:${s.v}%;background:var(--g1);border-radius:99px"></div></div><div style="font-size:.71rem;font-weight:700;min-width:32px;text-align:right;color:var(--t3)">${s.v}%</div></div>`).join('')}</div>
      <div class="card"><h3 style="font-family:var(--fh);font-weight:700;font-size:.9rem;color:var(--t);margin-bottom:.95rem">🎯 Required</h3>${req.map(s=>`<div style="display:flex;align-items:center;gap.65rem;gap:.65rem;margin-bottom:.78rem"><div style="font-size:.8rem;font-weight:600;min-width:95px;color:${s.h?'var(--green)':'var(--red)'}">${s.h?'✅':'❌'} ${s.n}</div><div style="flex:1;height:7px;background:var(--bg3);border-radius:99px;overflow:hidden"><div style="height:100%;width:${s.v}%;background:${s.h?'var(--g1)':'linear-gradient(135deg,var(--red),var(--orange))'};border-radius:99px"></div></div><div style="font-size:.71rem;font-weight:700;min-width:32px;text-align:right;color:var(--t3)">${s.v}%</div></div>`).join('')}</div>
    </div>
    <div class="card" style="margin-bottom:1.35rem"><h3 style="font-family:var(--fh);font-weight:700;font-size:.9rem;color:var(--t);margin-bottom:.75rem">⚠️ Missing Skills</h3><div style="display:flex;flex-wrap:wrap;gap:.35rem;margin-bottom:.9rem">${miss.map(s=>`<span style="display:inline-flex;align-items:center;gap:.3rem;background:rgba(239,68,68,.08);color:var(--red);border:1px solid rgba(239,68,68,.2);border-radius:99px;padding:.28rem .75rem;font-size:.73rem;font-weight:700">❌ ${s.n}</span>`).join('')}</div><div class="aic" style="margin:0"><div class="aih">🤖 AI Recommendation</div><p style="font-size:.78rem;color:var(--t2);line-height:1.6">Acquiring <strong>Node.js + MongoDB</strong> will be highest-impact — covers 2 of ${miss.length} gaps and appears in 73% of full-stack listings. Est. time: 4–6 weeks.</p></div></div>
    <div class="card"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.1rem"><h3 style="font-family:var(--fh);font-weight:700;font-size:.9rem;color:var(--t)">📚 Curated Courses</h3><span class="bdg bp">AI Selected</span></div>${COURSES.map(c=>`<div style="display:flex;align-items:center;gap.8rem;gap:.8rem;padding:.8rem .9rem;border:1px solid var(--b);border-radius:var(--r);margin-bottom:.55rem;background:var(--bg3);transition:all .15s;cursor:pointer" onmouseover="this.style.borderColor='var(--p)';this.style.background='var(--bg2)'" onmouseout="this.style.borderColor='var(--b)';this.style.background='var(--bg3)'" onclick="notif('Opening ${c.skill} course…','in')"><div style="width:36px;height:36px;border-radius:8px;background:${c.col}22;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0">${c.ico}</div><div style="flex:1"><div style="font-size:.83rem;font-weight:700;color:var(--t)">${c.skill} – Complete Course</div><div style="font-size:.71rem;color:var(--t3)">${c.platform} · ${c.hrs} · ⭐ ${c.rt}</div></div><button class="btn btn-o btn-sm" onclick="event.stopPropagation();notif('Enrolled in ${c.skill}! 🎓','ok')">Enroll →</button></div>`).join('')}</div>
  </div></div>`;
}

// ══════════════════════ SAVED ══════════════════════
function buildSaved(){
  const sv=INTERNS.filter(i=>i.saved);
  return `<div class="page dw">${sb('student')}<div class="dm">
    <div style="margin-bottom:1.65rem"><h1 style="font-family:var(--fh);font-size:1.55rem;font-weight:700;color:var(--t);letter-spacing:-.03em">🔖 Saved Internships</h1><p style="color:var(--t3);font-size:.845rem;margin-top:.2rem">${sv.length} saved · Apply before they close</p></div>
    ${sv.length===0?`<div class="card" style="text-align:center;padding:3.5rem"><div style="font-size:2.8rem;margin-bottom:.75rem">🔖</div><p style="font-family:var(--fh);font-weight:700;font-size:1.05rem;color:var(--t)">Nothing saved yet</p><p style="font-size:.83rem;color:var(--t3);margin:.38rem 0 1.4rem">Browse recommendations and save the ones you like</p><button class="btn btn-p" onclick="go('recs')">Browse Recommendations →</button></div>`:
    `<div style="display:flex;flex-direction:column;gap:.9rem">${sv.map(i=>`<div class="ic" style="display:flex;align-items:center;gap.9rem;gap:.9rem"><div class="il">${i.logo}</div><div style="flex:1"><div class="it">${i.title}</div><div class="ico">${i.co}</div><div class="ip"><span class="ipill">📍 ${i.loc}</span><span class="ipill">💰 ${i.pay}</span><span class="ipill">⏱ ${i.dur}</span></div></div><div style="display:flex;flex-direction:column;gap.45rem;gap:.45rem;align-items:flex-end"><div style="font-size:.77rem;font-weight:800;color:${i.match>=85?'var(--green)':'var(--amber)'};background:${i.match>=85?'rgba(16,185,129,.1)':'rgba(245,158,11,.1)'};padding:.25rem .65rem;border-radius:99px">${i.match}%</div><div style="display:flex;gap:.38rem"><button class="btn btn-p btn-sm" onclick="applyInt(${i.id})" ${S.appliedIds.includes(i.id)?'disabled style="opacity:.55"':''}>${S.appliedIds.includes(i.id)?'✅':'Apply'}</button><button class="btn btn-danger btn-sm" onclick="saveInt(${i.id})">Remove</button></div></div></div>`).join('')}</div>`}
  </div></div>`;
}

// ══════════════════════ PROFILE ══════════════════════
function buildProfile(){
  return `<div class="page dw">${sb('student')}<div class="dm">
    <div style="margin-bottom:1.65rem"><h1 style="font-family:var(--fh);font-size:1.55rem;font-weight:700;color:var(--t);letter-spacing:-.03em">👤 My Profile</h1><p style="color:var(--t3);font-size:.845rem;margin-top:.2rem">Keep updated for better AI matching</p></div>
    <div style="display:grid;grid-template-columns:1fr 2fr;gap:1.35rem">
      <div style="display:flex;flex-direction:column;gap:1rem">
        <div class="card" style="text-align:center">
          <div style="width:72px;height:72px;border-radius:50%;background:var(--g1);display:flex;align-items:center;justify-content:center;font-family:var(--fh);font-size:1.35rem;font-weight:700;color:#fff;margin:0 auto .9rem">${(S.user?.name||'S').split(' ').map(x=>x[0]).join('').toUpperCase().slice(0,2)}</div>
          <div style="font-family:var(--fh);font-size:1rem;font-weight:700;color:var(--t)">${S.user?.name||'Student'}</div>
          <div style="font-size:.77rem;color:var(--t3);margin:.18rem 0">${S.user?.email||''}</div>
          <span class="bdg bi" style="margin-top:.3rem">Student</span>
          <div style="margin-top:.9rem"><div class="pb"><div class="pf" style="width:74%"></div></div><div style="font-size:.71rem;color:var(--t3);margin-top:.28rem">74% Complete</div></div>
          <button class="btn btn-ghost btn-sm" style="margin-top:.8rem;width:100%" onclick="notif('Photo upload coming soon!','in')">📷 Change Photo</button>
        </div>
        <div class="card"><h3 style="font-family:var(--fh);font-weight:700;font-size:.88rem;color:var(--t);margin-bottom.8rem;margin-bottom:.8rem">🔗 Social Links</h3>
          ${[['🔗','LinkedIn',S.linkedin||'Not linked'],['🐙','GitHub',S.github||'Not linked'],['🌐','Portfolio',S.portfolio||'Not set']].map(([ico,l,v])=>`<div style="display:flex;align-items:center;gap.6rem;gap:.6rem;padding:.45rem 0;border-bottom:1px solid var(--b)"><span style="font-size:.9rem">${ico}</span><div style="flex:1"><div style="font-size:.68rem;color:var(--t3);text-transform:uppercase;font-weight:700;letter-spacing:.06em">${l}</div><div style="font-size:.78rem;color:var(--t);font-weight:600">${v}</div></div><button class="btn btn-ghost btn-xs" onclick="notif('Edit ${l}','in')">Edit</button></div>`).join('')}
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:1rem">
        <div class="card"><h3 style="font-family:var(--fh);font-weight:700;font-size:.93rem;color:var(--t);margin-bottom:1.1rem">Basic Information</h3>
          <div class="fr2">
            <div class="fg"><label class="fl">Full Name</label><input class="fi" value="${S.user?.name||''}"/></div>
            <div class="fg"><label class="fl">Location</label><input class="fi" id="ploc" value="${S.loc}"/></div>
            <div class="fg"><label class="fl">Education</label><input class="fi" id="pedu" value="${S.edu}"/></div>
            <div class="fg"><label class="fl">College</label><input class="fi" value="${S.college}"/></div>
            <div class="fg ff"><label class="fl">Skills</label><div class="tw">${S.skills.map(s=>`<span class="tg">${s}<span class="tgx" onclick="rmSkill('${s}')">×</span></span>`).join('')}<input class="ti" placeholder="Add skill…" onkeydown="addSkillKey(event)"/></div></div>
          </div>
        </div>
        <div class="card"><h3 style="font-family:var(--fh);font-weight:700;font-size:.93rem;color:var(--t);margin-bottom:1.1rem">📁 Projects</h3>
          ${S.projects.map((p,i)=>`<div style="display:flex;align-items:center;gap.75rem;gap:.75rem;padding:.72rem .9rem;border:1px solid var(--b);border-radius:var(--r);margin-bottom:.45rem;background:var(--bg3)"><div style="flex:1"><div style="font-size:.84rem;font-weight:700;color:var(--t)">${p.n}</div><div style="font-size:.71rem;color:var(--t3)">${p.t}${p.l?` · 🔗 ${p.l}`:''}</div></div><button class="btn btn-ghost btn-xs" onclick="notif('Editing project…','in')">Edit</button><button class="btn btn-danger btn-xs" onclick="rmProject(${i})">×</button></div>`).join('')}
          <button class="btn btn-o btn-sm" style="margin-top:.4rem" onclick="S.modal='project';render()">+ Add Project</button>
        </div>
        <div class="card"><h3 style="font-family:var(--fh);font-weight:700;font-size:.93rem;color:var(--t);margin-bottom:1.1rem">📄 Resume</h3><div class="uzn" onclick="notif('Resume uploaded! AI analysis complete 🤖','ok')"><div class="uzi">📄</div><div style="font-size:.86rem;font-weight:600;color:var(--t)">Upload / Update Resume</div><div style="font-size:.73rem;color:var(--t3);margin-top:.22rem">PDF or DOCX · Max 5MB · AI extracts skills automatically</div></div></div>
        <button class="btn btn-p" style="justify-content:center" onclick="saveProfile()">Save All Changes →</button>
      </div>
    </div>
  </div></div>`;
}

// ══════════════════════ CAREER ROADMAP ══════════════════════
function buildRoadmap(){
  const filters=['all','done','active','locked'];
  let shown=ROADMAP;
  if(S.rmFilter!=='all')shown=ROADMAP.filter(r=>r.status===S.rmFilter);
  const done=ROADMAP.filter(r=>r.status==='done').length;
  const pct=Math.round((done/ROADMAP.length)*100);
  return `<div class="page dw">${sb('student')}<div class="dm">
    <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:1.65rem;flex-wrap:wrap;gap.9rem;gap:.9rem">
      <div><h1 style="font-family:var(--fh);font-size:1.55rem;font-weight:700;color:var(--t);letter-spacing:-.03em">🗺️ Career Roadmap</h1><p style="color:var(--t3);font-size:.845rem;margin-top:.2rem">Your personalised week-by-week plan to land an internship</p></div>
      <button class="btn btn-ghost btn-sm" onclick="notif('Roadmap PDF exported! 📄','ok')">↓ Export PDF</button>
    </div>
    <div class="aic" style="margin-bottom:1.5rem"><div class="aih">🤖 AI Progress Analysis</div><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:.9rem">
      ${[['Progress',`${pct}%`],['Completed',`${done}/${ROADMAP.length} steps`],['Est. Time Left','4–6 weeks'],['Match Boost','+15% after roadmap']].map(([l,v])=>`<div style="background:var(--bg2);border-radius:var(--r);padding:.78rem .9rem;border:1px solid var(--b)"><div style="font-size:.68rem;color:var(--t3);font-weight:700;text-transform:uppercase;letter-spacing:.07em">${l}</div><div style="font-family:var(--fh);font-size:1.1rem;font-weight:700;color:var(--t);margin-top:.22rem">${v}</div></div>`).join('')}
      <div style="background:var(--bg2);border-radius:var(--r);padding:.78rem .9rem;border:1px solid var(--b);grid-column:1/-1"><div style="font-size:.69rem;color:var(--t3);font-weight:700;text-transform:uppercase;letter-spacing:.07em;margin-bottom:.45rem">Overall Progress</div><div class="pb tk"><div class="pf" style="width:${pct}%"></div></div></div>
    </div></div>
    <div style="display:flex;gap:.5rem;margin-bottom:1.35rem;flex-wrap:wrap">
      ${filters.map(f=>`<button class="btn ${S.rmFilter===f?'btn-p':'btn-ghost'} btn-sm" onclick="S.rmFilter='${f}';render()">${f==='all'?'All Steps':f.charAt(0).toUpperCase()+f.slice(1)}</button>`).join('')}
    </div>
    <div class="rm-track">
      ${shown.map(node=>`
      <div class="rm-node ${node.status}">
        <div class="rm-card">
          <div style="display:flex;align-items:start;justify-content:space-between;flex-wrap:wrap;gap.65rem;gap:.65rem;margin-bottom:.5rem">
            <div>
              <div style="display:flex;align-items:center;gap.55rem;gap:.55rem;margin-bottom:.22rem">
                <span class="bdg ${node.status==='done'?'bg':node.status==='active'?'bi':'bgr'}">${node.status==='done'?'✅ Done':node.status==='active'?'🔵 In Progress':'🔒 Locked'}</span>
                <span style="font-size:.7rem;color:var(--t3);font-weight:600">${node.time}</span>
              </div>
              <div class="rm-title">${node.title}</div>
              <div class="rm-sub">${node.sub}</div>
            </div>
            <div style="display:flex;gap.38rem;gap:.38rem;flex-shrink:0">
              ${node.status==='active'?`<button class="btn btn-p btn-sm" onclick="notif('Marked ${node.title} complete! 🎉','ok')">Mark Done</button>`:''}
              ${node.status==='locked'?`<button class="btn btn-ghost btn-sm" onclick="notif('Unlock this step by completing previous steps first','wn')">🔒 Locked</button>`:''}
              ${node.status==='done'?`<button class="btn btn-success btn-sm" onclick="notif('Reviewing ${node.title}…','in')">Review</button>`:''}
            </div>
          </div>
          <div class="rm-skills">${node.skills.map(s=>`<span class="bdg bi">${s}</span>`).join('')}</div>
          ${node.status==='active'?`<div style="margin-top:.85rem"><div class="pb sl"><div class="pf" style="width:45%"></div></div><div style="font-size:.7rem;color:var(--t3);margin-top:.25rem">45% complete</div></div>`:''}
        </div>
      </div>`).join('')}
    </div>
  </div></div>`;
}

// ══════════════════════ RESUME BUILDER ══════════════════════
function buildResume(){
  const rb=S.rbData;
  return `<div class="page dw">${sb('student')}<div class="dm">
    <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:1.5rem;flex-wrap:wrap;gap.9rem;gap:.9rem">
      <div><h1 style="font-family:var(--fh);font-size:1.55rem;font-weight:700;color:var(--t);letter-spacing:-.03em">📄 Resume Builder</h1><p style="color:var(--t3);font-size:.845rem;margin-top:.2rem">AI-assisted resume with live preview</p></div>
      <div style="display:flex;gap.5rem;gap:.5rem">
        <button class="btn btn-ghost btn-sm" onclick="notif('ATS score: 87/100 — Great! 🎯','ok')">🤖 ATS Score</button>
        <button class="btn btn-ghost btn-sm" onclick="copyResume()">📋 Copy</button>
        <button class="btn btn-p btn-sm" onclick="exportResume()">↓ Export PDF</button>
      </div>
    </div>
    <div class="rb-wrap">
      <div class="rb-left">
        <div class="rb-sec"><div class="rb-sec-hd"><div class="rb-sec-t">👤 Personal Info</div></div>
          <div class="fg"><label class="fl">Full Name</label><input class="fi" value="${rb.name}" oninput="S.rbData.name=this.value;render()"/></div>
          <div class="fr2">
            <div class="fg"><label class="fl">Title / Role</label><input class="fi" value="${rb.title}" oninput="S.rbData.title=this.value;render()"/></div>
            <div class="fg"><label class="fl">Email</label><input class="fi" type="email" value="${rb.email}" oninput="S.rbData.email=this.value;render()"/></div>
          </div>
          <div class="fg"><label class="fl">Phone</label><input class="fi" value="${rb.phone}" oninput="S.rbData.phone=this.value;render()"/></div>
          <div class="fg"><label class="fl">LinkedIn / GitHub URL</label><input class="fi" value="${S.linkedin||'linkedin.com/in/yourname'}" oninput="S.linkedin=this.value;render()"/></div>
        </div>
        <div class="rb-sec"><div class="rb-sec-hd"><div class="rb-sec-t">📝 Summary</div><button class="btn btn-p btn-xs" onclick="notif('AI generating summary… 🤖','in')">🤖 AI Write</button></div>
          <textarea class="fta" rows="4" oninput="S.rbData.summary=this.value;render()">${rb.summary}</textarea>
        </div>
        <div class="rb-sec"><div class="rb-sec-hd"><div class="rb-sec-t">🛠️ Skills</div></div>
          <div class="tw" style="margin-bottom.5rem;margin-bottom:.5rem">${rb.skills.map(s=>`<span class="tg">${s}<span class="tgx" onclick="S.rbData.skills=S.rbData.skills.filter(x=>x!=='${s}');render()">×</span></span>`).join('')}<input class="ti" placeholder="Add skill…" onkeydown="if(event.key==='Enter'){const v=this.value.trim();if(v&&!S.rbData.skills.includes(v)){S.rbData.skills.push(v);render();}this.value='';event.preventDefault();}"/></div>
        </div>
        <div class="rb-sec"><div class="rb-sec-hd"><div class="rb-sec-t">💼 Experience</div><button class="btn btn-ghost btn-xs" onclick="S.rbData.exp.push({co:'Company Name',role:'Role Title',period:'2024–Present',desc:'Describe your contributions and impact here.'});render()">+ Add</button></div>
          ${rb.exp.map((e,i)=>`<div style="border:1px solid var(--b);border-radius:var(--r);padding:.9rem;margin-bottom.6rem;margin-bottom:.6rem;background:var(--bg3)"><div class="fr2" style="margin-bottom:.55rem"><input class="fi" value="${e.co}" placeholder="Company" oninput="S.rbData.exp[${i}].co=this.value;render()" style="font-weight:700"/><input class="fi" value="${e.role}" placeholder="Role"/></div><input class="fi" value="${e.period}" placeholder="2023–Present" style="margin-bottom:.5rem"/><textarea class="fta" rows="2" oninput="S.rbData.exp[${i}].desc=this.value;render()">${e.desc}</textarea><button class="btn btn-danger btn-xs" style="margin-top:.4rem" onclick="S.rbData.exp.splice(${i},1);render()">Remove</button></div>`).join('')}
        </div>
        <div class="rb-sec"><div class="rb-sec-hd"><div class="rb-sec-t">🎓 Education</div></div><input class="fi" value="${rb.edu}" oninput="S.rbData.edu=this.value;render()"/></div>
        <div class="rb-sec"><div class="rb-sec-hd"><div class="rb-sec-t">📁 Projects</div><button class="btn btn-ghost btn-xs" onclick="S.modal='project';render()">+ Add</button></div>
          ${S.projects.map(p=>`<div style="border:1px solid var(--b);border-radius:var(--r);padding:.8rem;margin-bottom:.5rem;background:var(--bg3)"><div style="font-size:.84rem;font-weight:700;color:var(--t)">${p.n}</div><div style="font-size:.72rem;color:var(--t3)">${p.t}</div></div>`).join('')}
        </div>
      </div>
      <div class="rb-right">
        <div style="background:var(--g1);padding:.75rem 1.1rem;display:flex;align-items:center;justify-content:space-between">
          <span style="font-size:.79rem;font-weight:700;color:#fff">Live Preview</span>
          <div style="display:flex;gap.4rem;gap:.4rem">
            <button class="btn btn-xs" style="background:rgba(255,255,255,.2);color:#fff;border:none" onclick="notif('Template: Modern selected','in')">Modern</button>
            <button class="btn btn-xs" style="background:rgba(255,255,255,.15);color:#fff;border:none" onclick="notif('Template: Classic selected','in')">Classic</button>
          </div>
        </div>
        <div class="rb-preview">
          <div style="display:flex;align-items:start;justify-content:space-between;margin-bottom:1rem;padding-bottom:.75rem;border-bottom:3px solid var(--p)">
            <div><h1>${rb.name}</h1><div style="font-size:.85rem;color:var(--p);font-weight:600;margin:.1rem 0">${rb.title}</div></div>
            <div style="text-align:right;font-size:.72rem;color:#555">${rb.email}<br>${rb.phone}<br>${S.linkedin||'linkedin.com/in/you'}</div>
          </div>
          <h2>Summary</h2><p>${rb.summary}</p>
          <h2>Skills</h2><p>${rb.skills.join(' · ')}</p>
          <h2>Experience</h2>${rb.exp.map(e=>`<div style="margin-bottom:.65rem"><h3>${e.role} @ ${e.co} <span style="font-weight:400;color:#666;font-size:.74rem">${e.period}</span></h3><p>${e.desc}</p></div>`).join('')}
          <h2>Projects</h2>${S.projects.map(p=>`<div style="margin-bottom:.5rem"><h3>${p.n}</h3><p>${p.t}${p.l?' · '+p.l:''}</p></div>`).join('')}
          <h2>Education</h2><p>${rb.edu}</p>
          <h2>Certifications</h2>${S.certs.map(c=>`<p>• ${c.n} — ${c.i} (${c.y})</p>`).join('')}
        </div>
      </div>
    </div>
  </div></div>`;
}

// ══════════════════════ NETWORKING HUB ══════════════════════
function buildNetwork(){
  const filters=['all','connected','online'];
  let shown=NETWORK;
  if(S.nhFilter==='connected')shown=NETWORK.filter(p=>p.conn);
  if(S.nhFilter==='online')shown=NETWORK.filter(p=>p.online);
  return `<div class="page dw">${sb('student')}<div class="dm">
    <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:1.65rem;flex-wrap:wrap;gap.9rem;gap:.9rem">
      <div><h1 style="font-family:var(--fh);font-size:1.55rem;font-weight:700;color:var(--t);letter-spacing:-.03em">🤝 Networking Hub</h1><p style="color:var(--t3);font-size:.845rem;margin-top:.2rem">Connect with seniors, alumni, and professionals for referrals</p></div>
      <button class="btn btn-p btn-sm" onclick="notif('Posting in Feed…','in')">+ Share Update</button>
    </div>
    <div class="aic" style="margin-bottom:1.5rem"><div class="aih">🤖 AI Networking Suggestions</div><div style="font-size:.8rem;color:var(--t2);line-height:1.65">Connect with <strong>${NETWORK.filter(p=>!p.conn).length} recommended professionals</strong> in your field. Professionals with ${NETWORK[0].mutual}+ mutual connections are 4x more likely to refer you. <span style="color:var(--p);cursor:pointer;font-weight:700" onclick="notif('AI sending personalized connection requests…','ok')">Auto-connect to all →</span></div></div>
    <div style="display:grid;grid-template-columns:1fr 2fr;gap:1.35rem">
      <div style="display:flex;flex-direction:column;gap:.9rem">
        <div class="card"><h3 style="font-family:var(--fh);font-weight:700;font-size:.9rem;color:var(--t);margin-bottom:1rem">Your Network</h3>
          ${[['👥','Connections',NETWORK.filter(p=>p.conn).length],['👁️','Profile Views','142'],['📩','Messages','3 unread'],['🔔','Requests','2 pending']].map(([ico,l,v])=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:.52rem 0;border-bottom:1px solid var(--b);font-size:.83rem"><span style="color:var(--t2)">${ico} ${l}</span><span style="font-weight:700;color:var(--t)">${v}</span></div>`).join('')}
        </div>
        <div class="card"><h3 style="font-family:var(--fh);font-weight:700;font-size:.9rem;color:var(--t);margin-bottom.85rem;margin-bottom:.85rem">Filter</h3>
          ${filters.map(f=>`<button class="btn ${S.nhFilter===f?'btn-p':'btn-ghost'} btn-sm" style="width:100%;justify-content:flex-start;margin-bottom:.4rem" onclick="S.nhFilter='${f}';render()">${{all:'👥 All People',connected:'✅ Connected',online:'🟢 Online Now'}[f]}</button>`).join('')}
        </div>
        <div class="card"><h3 style="font-family:var(--fh);font-weight:700;font-size:.9rem;color:var(--t);margin-bottom:.85rem">Companies Hiring</h3>
          ${[['🔵','Google','SWE Intern open'],['🟦','Microsoft','ML Intern open'],['🟡','Flipkart','Full Stack open']].map(([ico,co,role])=>`<div style="display:flex;align-items:center;gap.65rem;gap:.65rem;padding:.5rem 0;border-bottom:1px solid var(--b)"><span style="font-size:1.2rem">${ico}</span><div style="flex:1"><div style="font-size:.82rem;font-weight:700;color:var(--t)">${co}</div><div style="font-size:.71rem;color:var(--green)">${role}</div></div><button class="btn btn-ghost btn-xs" onclick="go('recs')">View</button></div>`).join('')}
        </div>
      </div>
      <div>
        <div class="nh-grid">
          ${shown.map(p=>`<div class="ncard">
            <div class="ncard-av" style="background:${p.col}">${p.name.split(' ').map(x=>x[0]).join('')}${p.online?'<div class="online-dot"></div>':''}</div>
            <div style="font-family:var(--fh);font-weight:700;font-size:.88rem;color:var(--t);margin-bottom:.18rem">${p.name}</div>
            <div style="font-size:.73rem;color:var(--p);font-weight:600;margin-bottom:.2rem">${p.role}</div>
            <div style="font-size:.7rem;color:var(--t3);margin-bottom:.6rem">${p.college}</div>
            <div style="display:flex;flex-wrap:wrap;gap:.28rem;justify-content:center;margin-bottom:.75rem">${p.skills.map(s=>`<span class="bdg bi">${s}</span>`).join('')}</div>
            <div style="font-size:.7rem;color:var(--t3);margin-bottom:.75rem">${p.mutual} mutual connections</div>
            <div style="display:flex;gap.4rem;gap:.4rem;width:100%">
              <button class="btn ${p.conn?'btn-success':'btn-p'} btn-sm" style="flex:1;justify-content:center" onclick="toggleConn(${p.id})">${p.conn?'✓ Connected':'Connect'}</button>
              <button class="btn btn-ghost btn-sm" style="flex:1;justify-content:center" onclick="S.modal='msg_${p.id}';render()">Message</button>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </div></div>`;
}

// ══════════════════════ COMPANY DASH ══════════════════════
function buildCoDash(){
  return `<div class="page dw">${sb('company')}<div class="dm">
    <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:1.65rem;flex-wrap:wrap;gap.9rem;gap:.9rem"><div><h1 style="font-family:var(--fh);font-size:1.55rem;font-weight:700;color:var(--t);letter-spacing:-.03em">🏢 Company Dashboard</h1><p style="color:var(--t3);font-size:.845rem;margin-top:.2rem">${S.user?.name||'TechCorp'} · ✅ Verified Partner</p></div><button class="btn btn-p btn-sm" onclick="S.coTab='post';render()">+ Post Internship</button></div>
    <div class="mg">${[['💼','3','Active Postings'],['👥',CANDS.length,'Matches'],['✅','2','Shortlisted'],['📊','89%','Avg Match']].map(([ico,v,l])=>`<div class="mc"><div class="mi">${ico}</div><div class="mv">${v}</div><div class="ml">${l}</div></div>`).join('')}</div>
    <div class="tabs"><div class="tab ${S.coTab==='post'?'on':''}" onclick="S.coTab='post';render()">Post Internship</div><div class="tab ${S.coTab==='cands'?'on':''}" onclick="S.coTab='cands';render()">AI Candidates</div><div class="tab" onclick="notif('Analytics PDF generated!','ok')">Analytics</div></div>
    ${S.coTab==='cands'?`<div class="card" style="padding:0;overflow:hidden"><div style="padding:1.1rem;border-bottom:1px solid var(--b);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap.65rem;gap:.65rem"><h3 style="font-family:var(--fh);font-weight:700;font-size:.93rem;color:var(--t)">AI-Ranked Candidates</h3><div style="display:flex;gap.4rem;gap:.4rem"><select class="fs" style="width:auto;padding:.38rem .7rem;font-size:.79rem"><option>All Roles</option><option>Frontend Dev</option><option>ML Intern</option></select><button class="btn btn-ghost btn-sm" onclick="notif('Exported to CSV!','ok')">↓ Export</button></div></div><div style="overflow-x:auto"><table class="dt"><thead><tr><th>Candidate</th><th>College</th><th>Skills</th><th>AI Match</th><th>Applied</th><th>Status</th><th>Action</th></tr></thead><tbody>${CANDS.map(c=>`<tr><td><div style="display:flex;align-items:center;gap.6rem;gap:.6rem"><div class="av" style="width:30px;height:30px;font-size:.63rem;background:var(--g1);color:#fff">${c.name.split(' ').map(x=>x[0]).join('')}</div><span style="font-weight:700">${c.name}</span></div></td><td style="color:var(--t3)">${c.college}</td><td>${c.skills.map(s=>`<span class="bdg bi" style="margin:.08rem">${s}</span>`).join('')}</td><td><span style="font-weight:800;color:${c.match>=85?'var(--green)':'var(--amber)'}">${c.match}%</span></td><td style="color:var(--t3);font-size:.8rem">${c.ago}</td><td><span class="bdg ${c.status==='Shortlisted'?'bg':c.status==='Applied'?'bi':'ba'}">${c.status}</span></td><td><div style="display:flex;gap.32rem;gap:.32rem"><button class="btn btn-o btn-xs" onclick="notif('Viewing ${c.name} profile…','in')">View</button><button class="btn btn-success btn-xs" onclick="notif('${c.name} shortlisted! ✅','ok')">✓ Short</button><button class="btn btn-danger btn-xs" onclick="notif('${c.name} rejected','in')">✗</button></div></td></tr>`).join('')}</tbody></table></div></div>`:
    `<div class="card"><h3 style="font-family:var(--fh);font-weight:700;font-size:.93rem;color:var(--t);margin-bottom:1.35rem">Post New Internship</h3><div class="fr2"><div class="fg"><label class="fl">Role Title</label><input class="fi" placeholder="Frontend Developer Intern"/></div><div class="fg"><label class="fl">Department</label><select class="fs"><option>Engineering</option><option>Design</option><option>Data</option><option>Marketing</option><option>Product</option></select></div><div class="fg"><label class="fl">Location</label><input class="fi" placeholder="Bangalore or Remote"/></div><div class="fg"><label class="fl">Work Mode</label><select class="fs"><option>Remote</option><option>Hybrid</option><option>On-site</option></select></div><div class="fg"><label class="fl">Duration</label><select class="fs"><option>2 months</option><option>3 months</option><option>4 months</option><option>6 months</option></select></div><div class="fg"><label class="fl">Stipend (₹/mo)</label><input class="fi" type="number" placeholder="25000"/></div><div class="fg"><label class="fl">Openings</label><input class="fi" type="number" placeholder="5"/></div><div class="fg"><label class="fl">Deadline</label><input class="fi" type="date"/></div><div class="fg ff"><label class="fl">Required Skills</label><input class="fi" placeholder="React, Node.js, MongoDB, TypeScript"/></div><div class="fg ff"><label class="fl">Job Description</label><textarea class="fta" rows="4" placeholder="Describe the role, responsibilities, and what you're looking for…"></textarea></div><div class="fg ff"><label class="fl">Perks & Benefits</label><div style="display:flex;flex-wrap:wrap;gap.4rem;gap:.4rem;margin-top:.3rem">${['Certificate','Recommendation Letter','PPO Opportunity','Flexible Hours','Work from Anywhere'].map(p=>`<div onclick="this.classList.toggle('sel');this.style.borderColor=this.classList.contains('sel')?'var(--p)':'var(--b)';this.style.background=this.classList.contains('sel')?'var(--pl)':'var(--bg3)';this.style.color=this.classList.contains('sel')?'var(--p)':'var(--t2)';" style="border:1.5px solid var(--b);border-radius:99px;padding:.3rem .78rem;font-size:.75rem;font-weight:600;color:var(--t2);background:var(--bg3);cursor:pointer;transition:all .15s">${p}</div>`).join('')}</div></div></div><div style="display:flex;gap.65rem;gap:.65rem;margin-top:1.2rem"><button class="btn btn-p" onclick="notif('Internship posted! AI matching running 🤖','ok')">Publish →</button><button class="btn btn-ghost" onclick="notif('Saved as draft','in')">Save Draft</button><button class="btn btn-ghost" onclick="notif('Previewing posting…','in')">Preview</button></div></div>`}
  </div></div>`;
}

// ══════════════════════ ADMIN ══════════════════════
function buildAdmin(){
  return `<div class="page dw">${sb('admin')}<div class="dm">
    <div style="margin-bottom:1.65rem"><h1 style="font-family:var(--fh);font-size:1.55rem;font-weight:700;color:var(--t);letter-spacing:-.03em">🛡️ Admin Panel</h1><p style="color:var(--t3);font-size:.845rem;margin-top:.2rem">Nirmaan v3.0 · <span style="color:var(--green)">● All systems operational</span></p></div>
    <div class="mg">${[['👥','6,241','Users','↑ 12%'],['💼','15k+','Internships','↑ 8%'],['🏢','1,100','Companies','↑ 5 new'],['🤖','97%','AI Accuracy','↑ 2%'],['💰','₹2.4Cr','MRR','↑ 34%']].map(([ico,v,l,c])=>`<div class="mc"><div class="mi">${ico}</div><div class="mv">${v}</div><div class="ml">${l}</div><div class="mch up">${c}</div></div>`).join('')}</div>
    <div class="tabs">${['users','internships','analytics','ai'].map(t=>`<div class="tab ${S.adminTab===t?'on':''}" onclick="S.adminTab='${t}';render()">${{users:'👥 Users',internships:'💼 Internships',analytics:'📈 Analytics',ai:'🤖 AI Engine'}[t]}</div>`).join('')}</div>
    ${S.adminTab==='users'?`<div class="card" style="padding:0;overflow:hidden"><div style="padding:1.1rem;border-bottom:1px solid var(--b);display:flex;justify-content:space-between;align-items:center"><h3 style="font-family:var(--fh);font-weight:700;font-size:.93rem;color:var(--t)">User Management</h3><div style="display:flex;gap.4rem;gap:.4rem"><input class="fi" style="width:175px" placeholder="Search users…"/><button class="btn btn-ghost btn-sm" onclick="notif('Users exported!','ok')">↓ Export</button><button class="btn btn-p btn-sm" onclick="notif('Invite sent!','ok')">+ Invite</button></div></div><div style="overflow-x:auto"><table class="dt"><thead><tr><th>User</th><th>Role</th><th>Joined</th><th>Status</th><th>Actions</th></tr></thead><tbody>${AUSERS.map(u=>`<tr><td><div style="display:flex;align-items:center;gap.6rem;gap:.6rem"><div class="av" style="width:29px;height:29px;font-size:.63rem;background:var(--g1);color:#fff">${u.name.split(' ').map(x=>x[0]).join('').slice(0,2)}</div><div><div style="font-weight:700;font-size:.84rem">${u.name}</div><div style="font-size:.7rem;color:var(--t3)">${u.email}</div></div></div></td><td><span class="bdg ${u.role==='Admin'?'bp':u.role==='Company'?'bc':'bi'}">${u.role}</span></td><td style="color:var(--t3);font-size:.8rem">${u.joined}</td><td><span class="bdg ${u.status==='Active'?'bg':'ba'}">${u.status}</span></td><td><div style="display:flex;gap.3rem;gap:.3rem"><button class="btn btn-ghost btn-xs" onclick="notif('Editing ${u.name}…','in')">Edit</button><button class="btn btn-danger btn-xs" onclick="notif('${u.name} suspended','in')">Suspend</button><button class="btn btn-ghost btn-xs" onclick="notif('Logged in as ${u.name}','in')">Login As</button></div></td></tr>`).join('')}</tbody></table></div></div>`:
    S.adminTab==='internships'?`<div class="card" style="padding:0;overflow:hidden"><div style="padding:1.1rem;border-bottom:1px solid var(--b)"><h3 style="font-family:var(--fh);font-weight:700;font-size:.93rem;color:var(--t)">Internship Management</h3></div><div style="overflow-x:auto"><table class="dt"><thead><tr><th>Title</th><th>Company</th><th>Type</th><th>Match</th><th>Status</th><th>Actions</th></tr></thead><tbody>${INTERNS.map(i=>`<tr><td style="font-weight:700">${i.title}</td><td>${i.co}</td><td><span class="bdg bgr">${i.type}</span></td><td style="font-weight:800;color:${i.match>=85?'var(--green)':'var(--amber)'}">${i.match}%</td><td><span class="bdg bg">Active</span></td><td><div style="display:flex;gap.3rem;gap:.3rem"><button class="btn btn-ghost btn-xs" onclick="notif('Editing internship…','in')">Edit</button><button class="btn btn-danger btn-xs" onclick="notif('Internship removed','in')">Remove</button></div></td></tr>`).join('')}</tbody></table></div></div>`:
    S.adminTab==='ai'?`<div class="aic"><div class="aih">🤖 AI Engine Status</div><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(175px,1fr));gap:.85rem;margin-top:.65rem">${[['Embedding Model','Sentence-BERT v3','✅'],['Algorithm','Cosine + BM25','✅'],['Vector DB','Pinecone 16M','✅'],['Latency','<120ms avg','✅'],['Daily Queries','48,320','✅'],['Accuracy','97.2%','↑ +2.1%']].map(([l,v,s])=>`<div style="background:var(--bg2);border-radius:var(--r);padding:.75rem .9rem;border:1px solid var(--b)"><div style="font-size:.67rem;color:var(--t3);font-weight:700;text-transform:uppercase;letter-spacing.07em;letter-spacing:.07em">${l}</div><div style="font-family:var(--fh);font-size:.93rem;font-weight:700;color:var(--t);margin:.22rem 0">${v}</div><div style="font-size:.7rem;color:var(--green);font-weight:700">${s}</div></div>`).join('')}</div></div>`:
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem"><div class="card"><h3 style="font-family:var(--fh);font-weight:700;font-size:.9rem;color:var(--t);margin-bottom:1.25rem">Weekly Signups</h3><div class="bch">${[{l:'M',v:45,h:38},{l:'T',v:82,h:68},{l:'W',v:60,h:50},{l:'T',v:95,h:79},{l:'F',v:75,h:62},{l:'S',v:110,h:91},{l:'S',v:88,h:73}].map(d=>`<div class="bc"><div class="bv">${d.v}</div><div class="bb" style="height:${d.h}px"></div><div class="bl">${d.l}</div></div>`).join('')}</div></div><div class="card"><h3 style="font-family:var(--fh);font-weight:700;font-size:.9rem;color:var(--t);margin-bottom:.9rem">Platform KPIs</h3>${[['Applications','24,832'],['Placements','6,241'],['Avg Match','89%'],['Courses Enrolled','16,400'],['MAU','18,200'],['API / day','2.3M']].map(([l,v])=>`<div style="display:flex;justify-content:space-between;padding:.52rem 0;border-bottom:1px solid var(--b);font-size:.82rem"><span style="color:var(--t2)">${l}</span><span style="font-weight:800;color:var(--t)">${v}</span></div>`).join('')}</div></div>`}
  </div></div>`;
}

// ══════════════════════ ABOUT ══════════════════════
function buildAbout(){
  return `<div class="page"><div style="background:var(--g1);padding:5rem 2rem 4rem;text-align:center"><h1 style="font-family:var(--fh);font-size:2.6rem;font-weight:700;color:#fff;letter-spacing:-.04em;margin-bottom:.9rem">Built to democratize<br>internship access</h1><p style="color:rgba(255,255,255,.8);font-size:1rem;max-width:540px;margin:0 auto;line-height:1.75">Nirmaan uses AI to evaluate skills and projects — not college pedigree.</p></div>
  <section class="sec alt"><div style="max-width:750px;margin:0 auto"><h2 style="font-family:var(--fh);font-size:1.55rem;font-weight:700;color:var(--t);letter-spacing:-.03em;margin-bottom:.9rem">Our Story</h2><p style="color:var(--t2);line-height:1.85;font-size:.93rem;margin-bottom:.9rem">We noticed students from tier-2 colleges with strong skills missed great opportunities due to lack of visibility. Nirmaan was built to fix that — using Sentence Transformers and cosine similarity to evaluate skills, projects, and potential across 40+ dimensions.</p><p style="color:var(--t2);line-height:1.85;font-size:.93rem">Beyond matching, we built a complete career OS — roadmaps, resume builder, skill gap analyzer, and networking hub — because landing an internship takes more than just a good profile.</p></div></section>
  <section class="sec"><h2 class="st">The Team</h2><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(185px,1fr));gap:1.35rem;max-width:900px;margin:2rem auto 0">${[['AM','Arjun Mehta','CEO & Co-founder','#6366F1'],['SG','Sneha Gupta','CTO & AI Lead','#8B5CF6'],['RD','Rohan Das','Head of Product','#10B981'],['PI','Priya Iyer','Design Lead','#F59E0B']].map(([i,n,r,c])=>`<div style="text-align:center;padding:1.4rem"><div style="width:68px;height:68px;border-radius:50%;background:${c};color:#fff;display:flex;align-items:center;justify-content:center;font-family:var(--fh);font-size:1rem;font-weight:700;margin:0 auto .9rem">${i}</div><div style="font-family:var(--fh);font-weight:700;color:var(--t);font-size:.93rem">${n}</div><div style="font-size:.76rem;color:var(--t3);margin-top:.18rem">${r}</div></div>`).join('')}</div></section>
  ${buildFooter()}</div>`;
}

// ══════════════════════ CONTACT ══════════════════════
function buildContact(){
  return `<div class="page"><div style="background:var(--g1);padding:4rem 2rem;text-align:center"><h1 style="font-family:var(--fh);font-size:2.3rem;font-weight:700;color:#fff;letter-spacing:-.04em;margin-bottom:.75rem">Get in Touch</h1><p style="color:rgba(255,255,255,.8);font-size:.93rem">We reply within 24 hours · Mon–Fri, 9am–6pm IST</p></div>
  <div style="display:grid;grid-template-columns:1fr 1.6fr;gap:2.25rem;max-width:880px;margin:0 auto;padding:3.5rem 2rem" class="contact-grid">
    <div><h2 style="font-family:var(--fh);font-size:1.3rem;font-weight:700;color:var(--t);margin-bottom:.7rem">Contact Us</h2><p style="color:var(--t2);font-size:.86rem;line-height:1.75;margin-bottom:1.35rem">Questions about Nirmaan? We're here for students, companies, and institutions.</p>
      ${[['📧','Email','hello@nirmaan.in'],['📞','Phone','+91 98765 43210'],['📍','Office','Bangalore, Karnataka'],['🕐','Hours','Mon–Fri, 9am–6pm IST']].map(([ico,l,v])=>`<div style="display:flex;align-items:center;gap.8rem;gap:.8rem;margin-bottom:.9rem"><div style="width:36px;height:36px;border-radius:8px;background:var(--pl);display:flex;align-items:center;justify-content:center;font-size:.95rem;flex-shrink:0">${ico}</div><div><div style="font-size:.7rem;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:.07em">${l}</div><div style="font-size:.85rem;color:var(--t);font-weight:600">${v}</div></div></div>`).join('')}
    </div>
    <div class="card"><h3 style="font-family:var(--fh);font-weight:700;font-size:.93rem;color:var(--t);margin-bottom:1.1rem">Send a Message</h3>
      <div class="fr2"><div class="fg"><label class="fl">Name</label><input class="fi" id="cn" placeholder="Your name"/></div><div class="fg"><label class="fl">Email</label><input class="fi" id="ce" type="email" placeholder="your@email.com"/></div></div>
      <div class="fg"><label class="fl">I am a…</label><select class="fs"><option>Student</option><option>Company</option><option>Institution</option><option>Investor</option><option>Other</option></select></div>
      <div class="fg"><label class="fl">Subject</label><input class="fi" placeholder="What's this about?"/></div>
      <div class="fg"><label class="fl">Message</label><textarea class="fta" rows="4" placeholder="How can we help?"></textarea></div>
      <button class="btn btn-p btn-full" style="padding:.72rem" onclick="const n=document.getElementById('cn')?.value;const e=document.getElementById('ce')?.value;if(!n||!e){notif('Fill name and email first','wn');return;}notif('Message sent! We\'ll reply within 24h 📧','ok')">Send Message →</button>
    </div>
  </div>${buildFooter()}</div>`;
}

// ══════════════════════ CHAT ══════════════════════
function buildChat(){
  const msgs=S.chatMsgs.length===0?[{r:'b',t:'Hi! I\'m Arya 🤖 — your AI career assistant.\n\nI can help with:\n• Internship matches & recommendations\n• Resume tips & skill gap analysis\n• Interview prep, DSA & hackathons\n• Salary info, roadmap & networking\n• LinkedIn tips, course recommendations\n\nTry "help" to see all commands!'}]:S.chatMsgs;
  return `<button class="cfab ${S.voiceActive?'rec':''}" onclick="S.chatOpen=!S.chatOpen;render()">${S.voiceActive?'🔴':'💬'}</button>
  ${S.chatOpen?`<div class="cw"><div class="ch"><div style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-size:1.1rem">🤖</div><div style="flex:1"><div style="color:#fff;font-weight:700;font-size:.88rem;font-family:var(--fh)">Arya AI</div><div style="color:rgba(255,255,255,.7);font-size:.68rem">● Online · Voice enabled</div></div><button onclick="S.chatOpen=false;render()" style="background:rgba(255,255,255,.15);border:none;color:#fff;border-radius:50%;width:25px;height:25px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:.85rem">×</button></div>
  <div class="cms" id="chatmsgs">${msgs.map(m=>`<div class="msg ${m.r==='b'?'bot':'usr'}">${m.t.replace(/\n/g,'<br>')}</div>`).join('')}${S.chatTyping?`<div class="msg bot"><div class="td"><div class="tdb"></div><div class="tdb"></div><div class="tdb"></div></div></div>`:''}</div>
  <div class="cqb">${['Show matches','Resume tips','Skill gap','Interview prep','Salary info','Hackathon tips','LinkedIn tips','DSA prep','Roadmap','Help'].map(q=>`<div class="cq" onclick="S.chatMsgs.push({r:'u',t:'${q}'});processChat('${q.toLowerCase()}')">${q}</div>`).join('')}</div>
  <div class="cir"><button class="cvb ${S.voiceActive?'on':''}" onclick="chatVoice()" title="Voice input">🎙️</button><input class="cinp" id="chatinp" placeholder="Ask anything…" onkeydown="if(event.key==='Enter'){const v=this.value.trim();if(v&&!S.chatTyping){S.chatMsgs.push({r:'u',t:v});this.value='';processChat(v);}}"/><button class="csnd" onclick="const v=document.getElementById('chatinp')?.value?.trim();if(v&&!S.chatTyping){S.chatMsgs.push({r:'u',t:v});document.getElementById('chatinp').value='';processChat(v);}">➤</button></div>
  </div>`:''}`;
}

// ══════════════════════ NOTIFS ══════════════════════
function buildNotifs(){
  return `<div class="nstack">${S.notifs.map(n=>`<div class="notif ${n.type}"><span>${{ok:'✅',in:'💡',wn:'⚠️',er:'❌'}[n.type]}</span>${n.msg}<span class="nx" onclick="closeN(${n.id})">×</span></div>`).join('')}</div>`;
}

// ══════════════════════ MODAL ══════════════════════
function buildModal(){
  if(S.modal==='project') return `<div class="mbg" onclick="if(event.target===this){S.modal=null;render()}"><div class="modal"><button class="mcl" onclick="S.modal=null;render()">×</button><div class="mh">Add Project</div><p style="font-size:.82rem;color:var(--t3);margin-bottom:1.35rem">Showcase your work to boost AI match score</p><div class="fg"><label class="fl">Project Name</label><input class="fi" id="mpn" placeholder="AI Chat App"/></div><div class="fg"><label class="fl">Technologies Used</label><input class="fi" id="mpt" placeholder="React, Node.js, OpenAI"/></div><div class="fg"><label class="fl">Project Link</label><input class="fi" id="mpl" placeholder="github.com/you/project"/></div><div class="fg"><label class="fl">Description</label><textarea class="fta" rows="3" placeholder="What does it do? What did you build?"></textarea></div><div style="display:flex;gap.65rem;gap:.65rem;margin-top:1.2rem"><button class="btn btn-p" onclick="addProject()">Add Project ✓</button><button class="btn btn-ghost" onclick="S.modal=null;render()">Cancel</button></div></div></div>`;
  if(S.modal&&S.modal.startsWith('msg_')){
    const id=parseInt(S.modal.split('_')[1]);const p=NETWORK.find(x=>x.id===id);
    return `<div class="mbg" onclick="if(event.target===this){S.modal=null;render()}"><div class="modal"><button class="mcl" onclick="S.modal=null;render()">×</button><div class="mh">Message ${p?.name?.split(' ')[0]||'User'}</div><div style="display:flex;align-items:center;gap.75rem;gap:.75rem;padding:.75rem;background:var(--bg3);border-radius:var(--r);margin-bottom:1.25rem;border:1px solid var(--b)"><div class="av" style="width:42px;height:42px;font-size:.9rem;background:${p?.col||'var(--p)'};color:#fff">${p?.name?.split(' ').map(x=>x[0]).join('')}</div><div><div style="font-weight:700;color:var(--t)">${p?.name}</div><div style="font-size:.75rem;color:var(--green)">${p?.online?'● Online':'○ Offline'}</div></div></div><div class="fg"><label class="fl">Message</label><textarea class="fta" id="nhinp${id}" rows="4" placeholder="Hi ${p?.name?.split(' ')[0]}, I noticed you work at ${p?.role?.split('@')[1]?.trim()||'your company'}. I'm a student interested in internships there. Would you be open to a quick chat?"></textarea></div><div style="display:flex;gap.6rem;gap:.6rem;margin-top:1rem"><button class="btn btn-p" onclick="sendNHMsg(${id});S.modal=null;render()">Send Message →</button><button class="btn btn-ghost" onclick="S.modal=null;render()">Cancel</button></div></div></div>`;
  }
  return '';
}

// ══════════════════════ FOOTER ══════════════════════
function buildFooter(){
  return `<footer class="footer"><div class="fg3"><div><div class="fbr">✦ Nirmaan</div><div style="font-size:.81rem;color:var(--t3);line-height:1.65;max-width:260px">AI-powered internship matching for every student in India.</div><div style="display:flex;gap.6rem;gap:.6rem;margin-top:.9rem">${['🐦','💼','🐙','💬'].map(ic=>`<span onclick="notif('Follow us!','in')" style="cursor:pointer;font-size:1.05rem">${ic}</span>`).join('')}</div></div><div class="fco"><h4>Platform</h4><a onclick="go('recs')">AI Matching</a><a onclick="go('skillgap')">Skill Gap</a><a onclick="go('roadmap')">Roadmap</a><a onclick="go('resume')">Resume Builder</a><a onclick="go('network')">Networking</a></div><div class="fco"><h4>Company</h4><a onclick="go('about')">About</a><a onclick="notif('Blog coming soon!','in')">Blog</a><a onclick="go('contact')">Contact</a><a onclick="notif('Careers page!','in')">Careers</a></div><div class="fco"><h4>Support</h4><a onclick="notif('Help center!','in')">Help Center</a><a onclick="notif('Privacy Policy','in')">Privacy</a><a onclick="notif('Terms of Service','in')">Terms</a><a onclick="notif('API docs!','in')">API Docs</a></div></div><div class="fbot"><div>© 2025 Nirmaan Technologies Pvt. Ltd. · Made with ❤️ in India 🇮🇳</div><div style="font-size:.73rem">v3.0 · All systems ✅</div></div></footer>`;
}

// ══════════════════════ INIT ══════════════════════
window.go=go;window.toggleDark=toggleDark;window.toggleVoice=toggleVoice;window.doLogout=doLogout;window.doLogin=doLogin;window.doGLogin=doGLogin;window.nextStep=nextStep;window.completeSignup=completeSignup;window.applyInt=applyInt;window.saveInt=saveInt;window.rmSkill=rmSkill;window.addSkillKey=addSkillKey;window.toggleInt=toggleInt;window.toggleConn=toggleConn;window.sendNHMsg=sendNHMsg;window.addProject=addProject;window.rmProject=rmProject;window.saveProfile=saveProfile;window.exportResume=exportResume;window.copyResume=copyResume;window.closeN=closeN;window.performDemoLogin=performDemoLogin;window.cancelAutoLogin=cancelAutoLogin;window.processChat=processChat;window.S=S;window.sendOtp=sendOtp;window.verifyOtp=verifyOtp;window.toggleBell=toggleBell;window.markAllRead=markAllRead;window.dismissAppNotif=dismissAppNotif;
if(!S.loginRole)S.loginRole='student';

document.addEventListener('click',()=>{if(S.bellOpen){S.bellOpen=false;render();}});

synth&&synth.getVoices();
render();
