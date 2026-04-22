export const metadata = {
  title: '澳洲 6–7 月最終旅遊行程',
  description: 'Sydney · Cairns · Gold Coast · Melbourne',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', background: '#f8fafc' }}>
        {children}
      </body>
    </html>
  );
}
