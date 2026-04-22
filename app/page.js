const trip = {
  title: "澳洲 6–7 月最終旅遊行程",
  subtitle: "Sydney · Cairns · Gold Coast · Melbourne",
  date: "可填入實際旅行日期",
  destination: "澳洲自由行",
  travelers: "可填入旅伴人數",
  budget: "可填入預估總預算",
  highlight:
    "這是一份適合直接分享給旅伴、朋友或家人的澳洲行程展示頁。整體版型升級為旅遊網站風格，加入封面圖、城市亮點與每日行程卡片。",
};

const heroImage =
  "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80";

const cityHighlights = [
  {
    name: "Sydney",
    zh: "雪梨",
    image:
      "https://images.unsplash.com/photo-1523428096881-5bd79d043006?auto=format&fit=crop&w=1200&q=80",
    desc: "歌劇院、港灣大橋、達令港與城市地標。",
  },
  {
    name: "Cairns",
    zh: "凱恩斯",
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80",
    desc: "大堡礁、熱帶雨林與北昆士蘭海岸風景。",
  },
  {
    name: "Gold Coast",
    zh: "黃金海岸",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    desc: "主題樂園、海灘度假與衝浪者天堂。",
  },
  {
    name: "Melbourne",
    zh: "墨爾本",
    image:
      "https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=1200&q=80",
    desc: "咖啡文化、巷弄街景與大洋路經典風光。",
  },
];

const overview = [
  { label: "旅遊地點", value: trip.destination },
  { label: "旅行日期", value: trip.date },
  { label: "同行人數", value: trip.travelers },
  { label: "預估預算", value: trip.budget },
];

const itinerary = [
  {
    day: "Day 1",
    title: "台灣 → 雪梨",
    summary: "國際航班出發，抵達澳洲雪梨，入住飯店休息。",
    items: ["桃園機場出發", "飛往雪梨", "抵達後入境與交通", "飯店 Check-in"],
  },
  {
    day: "Day 2",
    title: "雪梨市區",
    summary: "歌劇院、港灣大橋與市區經典景點。",
    items: ["雪梨歌劇院", "雪梨港灣大橋", "達令港", "市區逛街與餐廳"],
  },
  {
    day: "Day 3",
    title: "雪梨近郊",
    summary: "藍山或周邊自然景點一日遊。",
    items: ["藍山國家公園", "三姊妹岩", "景觀纜車", "返回市區"],
  },
  {
    day: "Day 4",
    title: "雪梨 → 凱恩斯",
    summary: "飛往北部熱帶區，開始大堡礁行程。",
    items: ["國內航班", "抵達凱恩斯", "海邊散步", "夜市"],
  },
  {
    day: "Day 5",
    title: "大堡礁",
    summary: "出海浮潛或潛水體驗。",
    items: ["大堡礁一日遊", "浮潛 / 潛水", "船上餐", "返回凱恩斯"],
  },
  {
    day: "Day 6",
    title: "雨林探索",
    summary: "庫蘭達雨林或觀光火車體驗。",
    items: ["熱帶雨林", "觀光列車", "纜車", "原住民文化"],
  },
  {
    day: "Day 7",
    title: "凱恩斯 → 黃金海岸",
    summary: "轉往主題樂園與海灘城市。",
    items: ["國內航班", "入住飯店", "海邊散步"],
  },
  {
    day: "Day 8",
    title: "主題樂園",
    summary: "電影世界或夢幻世界。",
    items: ["華納兄弟電影世界", "遊樂設施", "表演"],
  },
  {
    day: "Day 9",
    title: "海灘放鬆",
    summary: "自由活動與購物。",
    items: ["衝浪者天堂", "咖啡廳", "購物"],
  },
  {
    day: "Day 10",
    title: "黃金海岸 → 墨爾本",
    summary: "前往文化與咖啡城市。",
    items: ["國內航班", "市區散步"],
  },
  {
    day: "Day 11",
    title: "大洋路",
    summary: "世界級海岸公路景觀。",
    items: ["十二門徒岩", "海岸線景觀"],
  },
  {
    day: "Day 12",
    title: "回程",
    summary: "返回台灣。",
    items: ["機場", "返程航班"],
  },
];

const expenses = [
  { item: "國際 / 國內機票", price: "可填入" },
  { item: "住宿", price: "可填入" },
  { item: "交通", price: "可填入" },
  { item: "餐飲", price: "可填入" },
  { item: "門票 / 一日遊", price: "可填入" },
  { item: "備用金", price: "可填入" },
];

const tips = [
  "可再補上每段航班與飯店名稱，會更像正式訂票版網站。",
  "若要給旅伴使用，可加入 Google Maps 與訂票連結。",
  "6–7 月澳洲南北氣候差異大，行李建議分層準備。",
  "主題樂園與大堡礁建議提早預約，熱門日期容易滿。",
];

function sectionTitle(en, zh) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0284c7' }}>{en}</div>
      <h2 style={{ marginTop: 8, fontSize: 36, fontWeight: 800 }}>{zh}</h2>
    </div>
  );
}

export default function Page() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', color: '#0f172a' }}>
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <img src={heroImage} alt="Australia travel cover" style={{ height: 520, width: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(2,6,23,0.78) 0%, rgba(15,23,42,0.45) 45%, rgba(15,23,42,0) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', padding: '0 24px' }}>
          <div style={{ maxWidth: 760, color: 'white' }}>
            <div style={{ display: 'inline-flex', borderRadius: 999, background: 'rgba(255,255,255,0.15)', padding: '6px 16px', fontSize: 14, fontWeight: 500, backdropFilter: 'blur(6px)', marginBottom: 16 }}>
              Australia Trip Showcase
            </div>
            <h1 style={{ fontSize: 56, lineHeight: 1.1, fontWeight: 800, margin: 0 }}>{trip.title}</h1>
            <p style={{ marginTop: 16, fontSize: 22, color: '#e2e8f0' }}>{trip.subtitle}</p>
            <p style={{ marginTop: 24, maxWidth: 720, fontSize: 16, lineHeight: 1.8, color: '#cbd5e1' }}>{trip.highlight}</p>
            <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {['Sydney', 'Cairns', 'Gold Coast', 'Melbourne'].map((tag) => (
                <span key={tag} style={{ borderRadius: 999, background: 'rgba(255,255,255,0.15)', padding: '8px 16px', fontSize: 14, backdropFilter: 'blur(6px)' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: '-64px auto 0', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16, borderRadius: 28, background: 'white', padding: 24, boxShadow: '0 25px 50px -12px rgba(15,23,42,0.25)', border: '1px solid #e2e8f0' }}>
          {overview.map((item) => (
            <div key={item.label} style={{ borderRadius: 20, background: '#f8fafc', padding: 16 }}>
              <div style={{ fontSize: 14, color: '#64748b' }}>{item.label}</div>
              <div style={{ marginTop: 4, fontSize: 16, fontWeight: 700 }}>{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '56px 24px' }}>
        {sectionTitle('City Highlights', '四大城市亮點')}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24 }}>
          {cityHighlights.map((city) => (
            <div key={city.name} style={{ overflow: 'hidden', borderRadius: 28, background: 'white', boxShadow: '0 10px 25px rgba(15,23,42,0.08)', border: '1px solid #e2e8f0' }}>
              <img src={city.image} alt={city.name} style={{ height: 224, width: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: 20 }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#0284c7' }}>{city.name}</div>
                <h3 style={{ margin: '8px 0 0', fontSize: 30, fontWeight: 800 }}>{city.zh}</h3>
                <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.7, color: '#475569' }}>{city.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px 32px' }}>
        {sectionTitle('Daily Plan', '每日行程安排')}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24 }}>
          {itinerary.map((day, index) => (
            <div key={day.day} style={{ borderRadius: 28, background: 'white', padding: 24, boxShadow: '0 10px 25px rgba(15,23,42,0.08)', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#0284c7' }}>{day.day}</div>
                <div style={{ borderRadius: 999, background: '#f1f5f9', padding: '4px 12px', fontSize: 12, color: '#64748b' }}>#{index + 1}</div>
              </div>
              <h3 style={{ marginTop: 12, fontSize: 30, fontWeight: 800 }}>{day.title}</h3>
              <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.7, color: '#475569' }}>{day.summary}</p>
              <div style={{ marginTop: 20, display: 'grid', gap: 8 }}>
                {day.items.map((item) => (
                  <div key={item} style={{ borderRadius: 16, border: '1px solid #e2e8f0', background: '#f8fafc', padding: '10px 12px', fontSize: 14, color: '#334155' }}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24 }}>
        <div style={{ borderRadius: 28, background: 'white', padding: 32, boxShadow: '0 10px 25px rgba(15,23,42,0.08)', border: '1px solid #e2e8f0' }}>
          <h3 style={{ margin: 0, fontSize: 32, fontWeight: 800 }}>預算規劃</h3>
          <div style={{ marginTop: 24, display: 'grid', gap: 12 }}>
            {expenses.map((expense) => (
              <div key={expense.item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: 16, background: '#f8fafc', padding: '12px 16px' }}>
                <span style={{ fontWeight: 600 }}>{expense.item}</span>
                <span style={{ color: '#475569' }}>{expense.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderRadius: 28, background: 'white', padding: 32, boxShadow: '0 10px 25px rgba(15,23,42,0.08)', border: '1px solid #e2e8f0' }}>
          <h3 style={{ margin: 0, fontSize: 32, fontWeight: 800 }}>行前提醒</h3>
          <div style={{ marginTop: 24, display: 'grid', gap: 12 }}>
            {tips.map((tip) => (
              <div key={tip} style={{ borderRadius: 16, border: '1px solid #dbeafe', background: '#eff6ff', padding: '12px 16px', color: '#334155' }}>{tip}</div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px 64px' }}>
        <div style={{ overflow: 'hidden', borderRadius: 32, background: '#0f172a', color: 'white', boxShadow: '0 25px 50px -12px rgba(15,23,42,0.35)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))' }}>
            <div style={{ padding: 40 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7dd3fc' }}>Share Ready</div>
              <h3 style={{ marginTop: 12, fontSize: 36, fontWeight: 800 }}>這份頁面已經適合直接分享</h3>
              <p style={{ marginTop: 16, maxWidth: 560, fontSize: 14, lineHeight: 1.9, color: '#cbd5e1' }}>
                目前已經是圖片升級版旅遊展示頁。如果下一步你要，可以再補上真實飯店、航班、票券按鈕、Google Maps、每日照片相簿，變成接近最終成品的旅遊網站。
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1400&q=80" alt="Australia coastline" style={{ width: '100%', minHeight: 280, height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>
    </div>
  );
}
