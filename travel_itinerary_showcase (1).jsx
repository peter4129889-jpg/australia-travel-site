export default function TravelItineraryShowcase() {
  const trip = {
    title: "澳洲 6–7 月最終旅遊行程",
    subtitle: "Sydney · Cairns · Gold Coast · Melbourne",
    date: "2026 年 6–7 月｜可填入最終出發日期",
    destination: "澳洲自由行 12 天",
    travelers: "2–4 人同行｜可自行修改",
    budget: "建議 NT$ 85,000–125,000 / 人",
    highlight:
      "這是一份可直接分享給旅伴、朋友與家人的最終版旅遊網站。已整合城市亮點、每日安排、住宿與票券規劃、預算估算，以及行前提醒。",
  };

  const heroImage =
    "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80";

  const cityHighlights = [
    {
      name: "Sydney",
      zh: "雪梨",
      image:
        "https://images.unsplash.com/photo-1523428096881-5bd79d043006?auto=format&fit=crop&w=1200&q=80",
      desc: "歌劇院、港灣大橋、達令港與市區經典地標。",
    },
    {
      name: "Cairns",
      zh: "凱恩斯",
      image:
        "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80",
      desc: "大堡礁、熱帶雨林、纜車與觀光列車。",
    },
    {
      name: "Gold Coast",
      zh: "黃金海岸",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      desc: "主題樂園、海灘度假、衝浪者天堂與購物。",
    },
    {
      name: "Melbourne",
      zh: "墨爾本",
      image:
        "https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=1200&q=80",
      desc: "咖啡文化、巷弄街景與大洋路絕景。",
    },
  ];

  const overview = [
    { label: "旅遊地點", value: trip.destination },
    { label: "旅行日期", value: trip.date },
    { label: "同行人數", value: trip.travelers },
    { label: "預估預算", value: trip.budget },
  ];

  const bookings = [
    {
      category: "國際航班",
      title: "台灣 ⇄ 澳洲",
      desc: "建議提早比價並確認是否含托運行李、轉機時間與抵達城市。",
      status: "待填入最終訂票資訊",
      button: "填入航班資訊",
    },
    {
      category: "國內航班",
      title: "Sydney → Cairns → Gold Coast → Melbourne",
      desc: "澳洲內陸航班建議提早預訂，旺季價格波動較大。",
      status: "待填入最終班次",
      button: "填入國內段",
    },
    {
      category: "住宿",
      title: "四城市住宿整理",
      desc: "每個城市建議住市中心或交通便利區，方便景點與機場移動。",
      status: "待填入飯店名稱 / 訂房連結",
      button: "填入飯店資訊",
    },
    {
      category: "票券 / 一日遊",
      title: "大堡礁、樂園、大洋路",
      desc: "熱門行程建議先預約，避免臨時滿團或票價升高。",
      status: "待填入預訂平台連結",
      button: "填入票券資訊",
    },
  ];

  const stays = [
    {
      city: "雪梨 Sydney",
      nights: "3 晚",
      area: "建議住 Circular Quay / CBD / Darling Harbour",
      note: "第一站建議住交通方便處，靠近歌劇院、市區與機場接駁。",
    },
    {
      city: "凱恩斯 Cairns",
      nights: "3 晚",
      area: "建議住 Esplanade 附近",
      note: "方便參加大堡礁與雨林行程，晚上海邊散步也很舒服。",
    },
    {
      city: "黃金海岸 Gold Coast",
      nights: "3 晚",
      area: "建議住 Surfers Paradise",
      note: "方便海灘、餐廳、購物與樂園交通。",
    },
    {
      city: "墨爾本 Melbourne",
      nights: "2–3 晚",
      area: "建議住 CBD / Southern Cross 附近",
      note: "方便市區移動與大洋路一日遊集合。",
    },
  ];

  const itinerary = [
    {
      day: "Day 1",
      title: "台灣 → 雪梨",
      summary: "國際航班出發，抵達澳洲雪梨後入住飯店休息，調整時差。",
      items: ["桃園機場出發", "飛往雪梨", "入境與換匯 / 網卡", "飯店 Check-in"],
      map: "加入 Google Maps 連結",
    },
    {
      day: "Day 2",
      title: "雪梨市區經典",
      summary: "安排歌劇院、港灣大橋、達令港與市中心拍照景點。",
      items: ["雪梨歌劇院", "皇家植物園", "雪梨港灣大橋", "達令港夜景"],
      map: "加入市區地圖",
    },
    {
      day: "Day 3",
      title: "藍山一日遊",
      summary: "經典近郊自然行程，可安排藍山、三姊妹岩與景觀纜車。",
      items: ["藍山國家公園", "三姊妹岩", "景觀世界", "返回雪梨"],
      map: "加入藍山地圖",
    },
    {
      day: "Day 4",
      title: "雪梨 → 凱恩斯",
      summary: "搭乘澳洲國內班機前往北昆士蘭，入住海邊城市。",
      items: ["前往機場", "國內航班", "凱恩斯海濱步道", "夜市 / 晚餐"],
      map: "加入凱恩斯地圖",
    },
    {
      day: "Day 5",
      title: "大堡礁出海",
      summary: "安排最重要的海上行程，浮潛、潛水或玻璃底船都很推薦。",
      items: ["碼頭集合", "大堡礁一日遊", "浮潛 / 潛水", "返回市區"],
      map: "加入港口集合點",
    },
    {
      day: "Day 6",
      title: "庫蘭達雨林",
      summary: "可搭觀光列車與 Skyrail，安排熱帶雨林與原住民文化體驗。",
      items: ["Kuranda Scenic Railway", "Skyrail", "雨林步道", "返回凱恩斯"],
      map: "加入雨林地圖",
    },
    {
      day: "Day 7",
      title: "凱恩斯 → 黃金海岸",
      summary: "轉往海灘與樂園城市，晚上可安排海邊散步。",
      items: ["國內航班", "飯店 Check-in", "Surfers Paradise", "晚餐"],
      map: "加入黃金海岸地圖",
    },
    {
      day: "Day 8",
      title: "主題樂園日",
      summary: "可選華納兄弟電影世界、夢幻世界或 Sea World。",
      items: ["電影世界 / 夢幻世界", "樂園設施", "表演", "園區晚餐"],
      map: "加入樂園地圖",
    },
    {
      day: "Day 9",
      title: "海灘放鬆與購物",
      summary: "安排比較輕鬆的一天，海灘、咖啡廳、逛街與休息。",
      items: ["衝浪者天堂", "海邊拍照", "Outlet / 市區購物", "自由活動"],
      map: "加入購物地圖",
    },
    {
      day: "Day 10",
      title: "黃金海岸 → 墨爾本",
      summary: "飛往墨爾本，進入咖啡與城市漫步行程。",
      items: ["國內航班", "市區散步", "巷弄咖啡", "夜間自由行"],
      map: "加入墨爾本地圖",
    },
    {
      day: "Day 11",
      title: "大洋路一日遊",
      summary: "安排最經典的海岸公路行程，必看十二門徒岩。",
      items: ["大洋路", "十二門徒岩", "海岸景點", "返回墨爾本"],
      map: "加入大洋路地圖",
    },
    {
      day: "Day 12",
      title: "墨爾本 → 台灣",
      summary: "最後採買伴手禮，前往機場返程。",
      items: ["早餐", "退房", "機場", "返程航班"],
      map: "加入機場地圖",
    },
  ];

  const budget = [
    { item: "國際機票", price: "NT$ 25,000–40,000" },
    { item: "澳洲國內段機票", price: "NT$ 12,000–22,000" },
    { item: "住宿", price: "NT$ 22,000–35,000" },
    { item: "交通", price: "NT$ 5,000–10,000" },
    { item: "票券 / 一日遊", price: "NT$ 10,000–18,000" },
    { item: "餐飲與購物", price: "NT$ 10,000–20,000" },
  ];

  const checklist = [
    "護照效期、簽證與保險確認",
    "澳洲網卡 / eSIM、信用卡與少量現金",
    "6–7 月南北溫差大，衣物建議洋蔥式穿法",
    "大堡礁、防曬、泳裝與拖鞋記得先準備",
    "主題樂園與一日遊盡量提早預約",
    "每日地圖、集合點與備案餐廳可再補進網站",
  ];

  const navItems = ["總覽", "城市亮點", "每日行程", "住宿", "預算", "行前準備"];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">Australia Trip</div>
            <div className="text-lg font-bold text-white">最終分享版網站</div>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <img src={heroImage} alt="Australia travel cover" className="h-[560px] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/45 to-transparent" />
        <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-6 md:px-10 lg:px-12">
          <div className="max-w-3xl text-white">
            <div className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur">
              Australia Trip Showcase
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{trip.title}</h1>
            <p className="mt-4 text-lg text-slate-100 md:text-xl">{trip.subtitle}</p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200">{trip.highlight}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {cityHighlights.map((city) => (
                <span key={city.name} className="rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
                  {city.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-16 max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid gap-4 rounded-[30px] bg-white p-6 shadow-2xl ring-1 ring-slate-200 md:grid-cols-2 lg:grid-cols-4">
          {overview.map((item) => (
            <div key={item.label} className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm text-slate-500">{item.label}</div>
              <div className="mt-1 text-base font-semibold">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Booking Overview</div>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">航班・住宿・票券整理</h2>
          </div>
          <div className="text-sm text-slate-500">可直接補入最終訂票資訊</div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {bookings.map((item) => (
            <div key={item.title} className="rounded-[28px] bg-white p-6 shadow-lg ring-1 ring-slate-200">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">{item.category}</div>
              <h3 className="mt-3 text-2xl font-bold leading-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
              <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">{item.status}</div>
              <button className="mt-5 w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 md:px-10 lg:px-12">
        <div className="mb-8">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">City Highlights</div>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">四大城市亮點</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cityHighlights.map((city) => (
            <div key={city.name} className="overflow-hidden rounded-[28px] bg-white shadow-lg ring-1 ring-slate-200 transition hover:-translate-y-1">
              <img src={city.image} alt={city.name} className="h-56 w-full object-cover" />
              <div className="p-5">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">{city.name}</div>
                <h3 className="mt-1 text-2xl font-bold">{city.zh}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{city.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Daily Plan</div>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">每日行程安排</h2>
          </div>
          <div className="text-sm text-slate-500">已整理成可分享版型</div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {itinerary.map((day, index) => (
            <div key={day.day} className="rounded-[28px] bg-white p-6 shadow-lg ring-1 ring-slate-200">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-sky-600">{day.day}</div>
                <div className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">#{index + 1}</div>
              </div>
              <h3 className="mt-3 text-2xl font-bold">{day.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{day.summary}</p>
              <div className="mt-5 space-y-2">
                {day.items.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <button className="flex-1 rounded-2xl bg-sky-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-sky-700">
                  {day.map}
                </button>
                <button className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  備註
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 md:px-10 lg:px-12">
        <div className="mb-8">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Hotel Plan</div>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">住宿建議與停留天數</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stays.map((stay) => (
            <div key={stay.city} className="rounded-[28px] bg-white p-6 shadow-lg ring-1 ring-slate-200">
              <div className="text-sm font-semibold text-sky-600">{stay.nights}</div>
              <h3 className="mt-2 text-2xl font-bold">{stay.city}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{stay.area}</p>
              <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">{stay.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-14 md:px-10 lg:grid-cols-2 lg:px-12">
        <div className="rounded-[28px] bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Budget</div>
          <h3 className="mt-2 text-2xl font-bold">預算估算</h3>
          <div className="mt-6 space-y-3">
            {budget.map((expense) => (
              <div key={expense.item} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                <span className="font-medium">{expense.item}</span>
                <span className="text-slate-600">{expense.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Checklist</div>
          <h3 className="mt-2 text-2xl font-bold">行前準備</h3>
          <div className="mt-6 space-y-3">
            {checklist.map((item) => (
              <div key={item} className="rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-12">
        <div className="overflow-hidden rounded-[32px] bg-slate-900 text-white shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-10">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Final Share Version</div>
              <h3 className="mt-3 text-3xl font-bold">這份網站已可作為最終分享版使用</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                目前頁面已具備旅程總覽、每日安排、住宿建議、票券規劃、預算與行前提醒。若你要進一步變成真正可操作版本，下一步只要把真實航班、飯店名稱、Google Maps 與訂票連結補上即可。
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                  分享給旅伴
                </button>
                <button className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  更新最終資訊
                </button>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1400&q=80"
              alt="Australia coastline"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
