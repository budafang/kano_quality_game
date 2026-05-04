const TYPES = {
  basic: "基本品質",
  performance: "一元品質",
  excitement: "魅力品質",
  indifferent: "無差異品質",
  reverse: "反轉品質"
};

const stages = [
  {
    label: "第 1 關｜Kano 分類快問快答",
    title: "先分清楚五種品質屬性",
    mode: "sort",
    prompt: "請判斷下列功能比較接近哪一種 Kano 品質類型。",
    concept: "Kano 模型的重點是：不同功能對滿意度的影響不同。先分類，才能知道哪些是底線、哪些是加分、哪些可能扣分。",
    items: [
      {name:"活動資訊不能錯", desc:"時間、地點、報名連結都正確。", answer:"basic", why:"資訊正確是基本品質，沒有做到會直接不滿。"},
      {name:"排隊時間越短越好", desc:"等待越短，使用者越滿意。", answer:"performance", why:"這是一元品質，做得越好，滿意度越高。"},
      {name:"報名後收到個人化學習建議", desc:"系統依照興趣推薦活動前閱讀。", answer:"excitement", why:"沒有不會抱怨，但有了會帶來驚喜。"},
      {name:"報名頁背景音樂", desc:"打開報名表會自動播放音樂。", answer:"indifferent", why:"多數人可能不在意，甚至有些情境會覺得干擾。"},
      {name:"每天寄三封提醒信", desc:"活動前密集提醒。", answer:"reverse", why:"提醒太多可能反感，變成反轉品質。"}
    ]
  },
  {
    label: "第 2 關｜桃園機場服務品質",
    title: "機場服務不是都越多越好",
    mode: "sort",
    prompt: "桃園機場想改善旅客服務。請判斷每個服務項目比較接近哪一種 Kano 品質類型。",
    concept: "服務品質常同時包含基本品質、一元品質與魅力品質。機場案例能幫助學生理解：旅客不是只要驚喜，而是先要求安全、清楚、準時與順暢。",
    items: [
      {name:"航班與登機門資訊正確", desc:"看板、App、廣播資訊一致。", answer:"basic", why:"這是機場基本品質，錯了會造成焦慮與重大不滿。"},
      {name:"入境通關等待時間縮短", desc:"排隊越短，旅客越滿意。", answer:"performance", why:"等待時間越短越好，是典型一元品質。"},
      {name:"行李轉盤旁有即時等待時間預估", desc:"旅客知道還要等多久。", answer:"excitement", why:"沒有不一定抱怨，但有了會讓等待更安心，產生驚喜感。"},
      {name:"候機區大型藝術裝置", desc:"美化空間，但與動線和服務無直接關聯。", answer:"indifferent", why:"對部分旅客有加分，但對趕時間旅客可能影響不大。"},
      {name:"強迫旅客下載 App 才能看 Wi-Fi 密碼", desc:"沒有 App 就很難使用網路。", answer:"reverse", why:"把便利服務變成負擔，可能造成反感。"},
      {name:"廁所乾淨且標示清楚", desc:"旅客能快速找到並安心使用。", answer:"basic", why:"清潔與標示是基本服務品質。"}
    ]
  },
  {
    label: "第 3 關｜設計校園 AI 素養體驗日",
    title: "從功能分類到體驗設計",
    mode: "sort",
    prompt: "你要設計一場『AI 素養體驗日』。請判斷這些設計比較像哪一種品質屬性。",
    concept: "同一個功能在不同情境可能分類不同。傳播管理要看受眾、目的、平台與使用情境，不能只憑創意判斷品質。",
    items: [
      {name:"報名成功後收到確認信", desc:"含時間、地點、注意事項。", answer:"basic", why:"這是活動基本品質，沒有會讓參與者不安。"},
      {name:"現場動線清楚", desc:"入口、報到、攤位、洗手間都有標示。", answer:"basic", why:"動線清楚是基本體驗。"},
      {name:"AI 小遊戲攤位", desc:"學生可以玩提示詞闖關。", answer:"excitement", why:"沒有不一定抱怨，但有了能提升驚喜與參與感。"},
      {name:"活動後寄出個人化學習摘要", desc:"整理學生參與紀錄與推薦資源。", answer:"excitement", why:"這是能創造記憶點的魅力品質。"},
      {name:"報名表要填 20 題個資與興趣題", desc:"填寫很久才能送出。", answer:"reverse", why:"過度蒐集資料會造成負擔與反感。"},
      {name:"攤位越多越好", desc:"從 5 攤增加到 20 攤。", answer:"performance", why:"在合理範圍內，選擇越多可能越滿意；但超過負荷也可能轉為反感。"}
    ]
  },
  {
    label: "第 4 關｜預算有限的品質策略",
    title: "先保底，再提升，最後創造驚喜",
    mode: "budget",
    prompt: "你的預算只夠優先改善 3 個項目。請選出最合理的 Kano 品質策略。",
    concept: "Kano 模型不是只拿來分類，而是資源配置工具。品質策略通常應該先保住基本品質，再強化一元品質，最後才投資魅力品質。",
    budgetItems: [
      {name:"修正錯誤活動資訊與報名確認信", type:"basic", value:30, risk:-25, desc:"讓參與者能取得一致、正確的活動資訊，並順利完成報名。"},
      {name:"改善現場動線與報到流程", type:"basic", value:28, risk:-22, desc:"讓參與者從抵達、報到到進入活動場域的過程更順暢。"},
      {name:"縮短入場等待時間", type:"performance", value:24, risk:-14, desc:"減少排隊與等待，讓參與者更快進入活動體驗。"},
      {name:"增加 AI 小遊戲互動攤位", type:"excitement", value:18, risk:-5, desc:"在活動中加入可操作、可分享的互動體驗。"},
      {name:"活動後寄個人化學習摘要", type:"excitement", value:17, risk:-4, desc:"活動後提供參與者專屬整理與延伸學習建議。"},
      {name:"大型打卡裝置", type:"indifferent", value:4, risk:2, desc:"設置視覺亮點，讓參與者可以拍照分享。"},
      {name:"要求所有人下載 App 才能報到", type:"reverse", value:-12, risk:20, desc:"把報到流程集中到單一數位工具上。"}
    ]
  }
];

let current = 0;
let score = 0;
let risk = 40;
let logs = [];
let chosenBudget = [];

function startGame(){
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('result').classList.add('hidden');
  document.getElementById('between').classList.add('hidden');
  document.getElementById('game').classList.remove('hidden');
  renderStage();
}

function renderStage(){
  const s = stages[current];
  document.getElementById('levelLabel').textContent = s.label;
  document.getElementById('title').textContent = s.title;
  document.getElementById('prompt').innerHTML = `<h2>${s.prompt}</h2>`;
  document.getElementById('concept').innerHTML = `<p>${s.concept}</p>`;
  document.getElementById('feedback').classList.add('hidden');
  document.getElementById('nextBtn').classList.add('hidden');
  updateScore();
  if(s.mode === 'sort') renderSort(s); else renderBudget(s);
}

function renderSort(s){
  const area = document.getElementById('activity');
  area.className = 'sort-area';
  area.innerHTML = `<div class="feature-pool">${s.items.map((item,idx)=>`
    <div class="feature-card">
      <h4>${item.name}</h4>
      <p>${item.desc}</p>
      <select id="sel-${idx}">
        <option value="">請選擇 Kano 類型</option>
        ${Object.entries(TYPES).map(([k,v])=>`<option value="${k}">${v}</option>`).join('')}
      </select>
    </div>`).join('')}</div><button class="primary" onclick="submitSort()">送出分類</button>`;
}

function submitSort(){
  const s = stages[current];
  let correct = 0;
  let feedback = [];
  s.items.forEach((item, idx)=>{
    const val = document.getElementById(`sel-${idx}`).value;
    if(val === item.answer) correct++;
    feedback.push(`<li><strong>${item.name}</strong>：正確類型是「${TYPES[item.answer]}」。${item.why}</li>`);
  });
  const points = correct * 12 - (s.items.length - correct) * 4;
  const riskDelta = (s.items.length - correct) * 6 - correct * 3;
  score += points;
  risk = Math.max(0, Math.min(100, risk + riskDelta));
  logs.push({stage:s.label, result:`命中 ${correct}/${s.items.length}`, note:s.concept});
  document.querySelectorAll('select').forEach(x=>x.disabled=true);
  const fb = document.getElementById('feedback');
  fb.innerHTML = `<strong>分類結果：</strong>你答對 ${correct}/${s.items.length} 題。<ul>${feedback.join('')}</ul>`;
  fb.classList.remove('hidden');
  document.getElementById('nextBtn').classList.remove('hidden');
  updateScore();
}

function renderBudget(s){
  chosenBudget = [];
  const area = document.getElementById('activity');
  area.className = '';
  area.innerHTML = `<div class="chosen-list"><strong>已選項目：</strong><div id="chosenBox">尚未選擇</div></div><div class="budget-board">${s.budgetItems.map((item,idx)=>`
    <div class="budget-card">
      <h4>${item.name}</h4>
      <p>${item.desc}</p>
      <button class="secondary" id="budget-${idx}" onclick="chooseBudget(${idx})">選擇</button>
    </div>`).join('')}</div><button class="primary" onclick="submitBudget()">送出策略</button>`;
}

function chooseBudget(idx){
  if(chosenBudget.includes(idx) || chosenBudget.length >= 3) return;
  chosenBudget.push(idx);
  document.getElementById(`budget-${idx}`).disabled = true;
  renderChosen();
}

function renderChosen(){
  const s = stages[current];
  const box = document.getElementById('chosenBox');
  box.innerHTML = chosenBudget.length ? chosenBudget.map(i=>`<span class="chosen-item">${s.budgetItems[i].name}</span>`).join('') : '尚未選擇';
}

function describeBudgetItem(item){
  const explanations = {
    basic: `這屬於「基本品質」。它不一定會讓人驚喜，但若沒做好，參與者會直接不滿。Kano 策略上應優先守住。`,
    performance: `這屬於「一元品質」。做得越好，滿意度越高；它通常是提升競爭力與體驗品質的重要投資。`,
    excitement: `這屬於「魅力品質」。沒有時參與者未必抱怨，但有了會覺得驚喜、願意分享或留下記憶點。`,
    indifferent: `這較接近「無差異品質」。它可能好看或有趣，但不一定影響核心滿意，若預算有限通常不應優先。`,
    reverse: `這屬於「反轉品質」。原本可能想提升效率，但會讓參與者覺得麻煩、被迫或被打擾，反而降低滿意度。`
  };
  return explanations[item.type];
}

function submitBudget(){
  const s = stages[current];
  if(chosenBudget.length < 3){
    const fb = document.getElementById('feedback');
    fb.innerHTML = '請先選滿 3 個項目。';
    fb.classList.remove('hidden');
    return;
  }
  const picked = chosenBudget.map(i=>s.budgetItems[i]);
  const unpicked = s.budgetItems.filter((_,i)=>!chosenBudget.includes(i));
  const count = type => picked.filter(x=>x.type===type).length;
  const hasReverse = picked.some(x=>x.type==='reverse');
  let points = picked.reduce((sum,x)=>sum+x.value,0);
  let riskDelta = picked.reduce((sum,x)=>sum+x.risk,0);
  if(count('basic') >= 2) points += 20;
  if(hasReverse) points -= 20;
  score += points;
  risk = Math.max(0, Math.min(100, risk + riskDelta));

  const diagnosis = [];
  if(count('basic') >= 2) diagnosis.push('你有先守住基本品質，這可以避免活動一開始就因資訊錯誤、動線混亂或流程不順而引發不滿。');
  else diagnosis.push('你的選擇沒有優先守住基本品質。這代表活動可能很有亮點，但如果報名、資訊或現場流程出錯，參與者仍會不滿。');
  if(count('performance') >= 1) diagnosis.push('你也投資了一元品質，能讓體驗隨著改善程度而提升，例如等待更短、流程更快。');
  if(count('excitement') >= 1) diagnosis.push('你選到魅力品質，這有助於創造驚喜與分享點，但它應該建立在基本品質已穩定的前提上。');
  if(count('indifferent') >= 1) diagnosis.push('你選到可能較無差異的項目。它不一定錯，但在預算有限時，要確認它是否真的影響核心滿意。');
  if(hasReverse) diagnosis.push('你選到了反轉品質。這類設計常以效率或管理為名，但會把便利變成負擔，應盡量避免。');

  logs.push({stage:s.label, result:`選擇：${picked.map(x=>x.name).join('、')}`, note:'策略取捨：先保住基本品質，再投資一元品質與魅力品質。'});
  document.querySelectorAll('.budget-card button').forEach(x=>x.disabled=true);
  const fb = document.getElementById('feedback');
  fb.innerHTML = `
    <strong>策略回饋：</strong>
    <p>${diagnosis.join('</p><p>')}</p>
    <h4>你選擇的 3 個項目解析</h4>
    <ul>${picked.map(item=>`<li><strong>${item.name}</strong>：${TYPES[item.type]}。${describeBudgetItem(item)}</li>`).join('')}</ul>
    <h4>你沒有選的項目中，特別值得注意</h4>
    <ul>${unpicked.filter(item=>item.type==='basic' || item.type==='performance' || item.type==='reverse').map(item=>`<li><strong>${item.name}</strong>：${TYPES[item.type]}。${describeBudgetItem(item)}</li>`).join('')}</ul>
    <h4>Kano 策略提醒</h4>
    <p>資源有限時，不是先做最炫的功能，而是先問：哪些功能一失守就會造成不滿？哪些功能做得越好越能提升滿意？哪些功能只是加分？哪些功能可能反而惹人厭？</p>
    <p><strong>建議順序：</strong>基本品質不能失守 → 一元品質逐步提升 → 魅力品質創造驚喜 → 無差異品質謹慎投入 → 反轉品質盡量避免。</p>`;
  fb.classList.remove('hidden');
  document.getElementById('nextBtn').classList.remove('hidden');
  updateScore();
}

function nextStage(){
  current++;
  if(current >= stages.length){ showResult(); return; }
  showBetween();
}

function showBetween(){
  document.getElementById('game').classList.add('hidden');
  document.getElementById('between').classList.remove('hidden');
  document.getElementById('betweenTitle').textContent = `完成 ${stages[current-1].label}`;
  document.getElementById('betweenBody').innerHTML = `<p><span class="tag">目前理解分數 ${score}</span><span class="tag">誤判風險 ${risk}%</span></p><p>${stages[current-1].concept}</p>`;
}

function continueGame(){
  document.getElementById('between').classList.add('hidden');
  document.getElementById('game').classList.remove('hidden');
  renderStage();
}

function showResult(){
  document.getElementById('game').classList.add('hidden');
  document.getElementById('result').classList.remove('hidden');
  const level = score >= 240 ? 'Kano 策略高手' : score >= 160 ? 'Kano 分類合格' : '需要再練習分類與取捨';
  const riskText = risk <= 25 ? '誤判風險低' : risk <= 55 ? '誤判風險中等' : '誤判風險偏高';
  document.getElementById('resultBody').innerHTML = `<p><span class="tag">${level}</span><span class="tag">${riskText}</span><span class="tag">理解分數 ${score}</span><span class="tag">誤判風險 ${risk}%</span></p>
    <h3>Kano 品質策略通則</h3>
    <div class="principle-list">
      <div class="principle"><strong>1. 基本品質不能失守</strong>沒有做到會直接不滿；做到也只是應該。</div>
      <div class="principle"><strong>2. 一元品質決定競爭力</strong>做得越好，滿意度越高，例如等待時間、速度、便利性。</div>
      <div class="principle"><strong>3. 魅力品質創造驚喜</strong>沒有不會抱怨，但有了會讓人記住。</div>
      <div class="principle"><strong>4. 反轉品質要避免</strong>過度提醒、強迫下載、過度蒐集資料，可能讓服務變負擔。</div>
      <div class="principle"><strong>5. 同一功能會因情境改變</strong>使用者、場景、目標不同，Kano 分類可能不同。</div>
      <div class="principle"><strong>6. 策略順序：保底→提升→驚喜</strong>先守住基本品質，再改善一元品質，最後投資魅力品質。</div>
    </div>
    <h3>四關學習紀錄</h3>
    <table class="plan-table"><tr><th>關卡</th><th>結果</th><th>學習重點</th></tr>${logs.map(l=>`<tr><td>${l.stage}</td><td>${l.result}</td><td>${l.note}</td></tr>`).join('')}</table>`;
}

function restartGame(){
  current = 0; score = 0; risk = 40; logs = []; chosenBudget = [];
  document.getElementById('result').classList.add('hidden');
  document.getElementById('intro').classList.remove('hidden');
}

function updateScore(){
  document.getElementById('score').textContent = score;
  document.getElementById('risk').textContent = risk;
}
