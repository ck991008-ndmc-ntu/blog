import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-tc",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drchenmd.tw"),
  title: {
    default: "你的專屬醫療智庫｜陳政良醫師",
    template: "%s | 陳政良醫師",
  },
  description: "從內外科臨床到公衛實證，為您量身打造的健康策略",
  openGraph: {
    title: "你的專屬醫療智庫｜陳政良醫師",
    description: "從內外科臨床到公衛實證，為您量身打造的健康策略",
    url: "https://drchenmd.tw",
    siteName: "你的專屬醫療智庫｜陳政良醫師",
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${notoSansTC.variable} font-sans antialiased text-[#1A2B3C] bg-[#F8F9FA]`}>
        <div className="flex flex-col min-h-screen">
          <header className="bg-[#1A2B3C] text-white py-6 px-8 shadow-md">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold tracking-wide">你的專屬醫療智庫｜陳政良醫師</h1>
                <p className="text-sm opacity-80 mt-1">從內外科臨床到公衛實證，為您量身打造的健康策略</p>
              </div>
              <nav className="space-x-6">
                <a href="/" className="hover:text-blue-200 transition-colors">首頁</a>
                <a href="/about" className="hover:text-blue-200 transition-colors">關於我</a>
              </nav>
            </div>
          </header>
          <main className="flex-grow max-w-5xl mx-auto w-full p-8 mt-4">
            {children}
          </main>
          <footer className="bg-[#1A2B3C] text-white py-6 text-center mt-12 text-sm opacity-80">
            © {new Date().getFullYear()} Dr. Chen. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
