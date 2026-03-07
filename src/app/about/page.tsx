import Sidebar from "@/components/Sidebar";

export default function AboutPage() {
    return (
        <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="mb-8 border-b border-gray-100 pb-8 flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-[#1A2B3C] mb-4">陳政良醫師 <span className="text-lg text-gray-500 font-normal ml-2">Dr. Chen</span></h2>
                            <p className="text-xl text-blue-600 font-medium mb-6">「醫療不只是診斷疾病，而是透過邏輯與數據，為複雜的人生尋找最優解。」</p>
                            <p className="text-gray-700 leading-relaxed">
                                具備醫學中心內科與耳鼻喉科雙重住院醫師經歷，目前於國立台灣大學進修流行病學與預防醫學碩士。
                                結合臨床實務經驗與公共衛生統計證據，致力於將權威醫學期刊知識轉化為實用的臨床實務建議。
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 shrink-0">
                            <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 relative group">
                                <img
                                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhx7NYrIca4QFXnBNaavFRv-82Pyb6RuoDpd912xpL3EppAYq1w8E5csGwWOWzv5SJhl_VHeF8LjtTSzrCbKh2TAD7udWc3IDSvsUtWoKRb0q1keWBOnrHfQKpf3NWSvIizP3s0OUuRe6E8RHV6vPORsvH3IG17xznkEvRNRmyd_aKSXaSFJUCPgFIu/s16000/DSC_0463%20(2).JPG"
                                    alt="實習第一名獲獎照片"
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-sm font-medium">✨ 實習第一名獲獎留影</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <section>
                            <h3 className="text-xl font-bold text-[#1A2B3C] mb-4 flex items-center gap-2">
                                <span className="w-2 h-6 bg-blue-600 rounded"></span>
                                核心專長與里程碑
                            </h3>
                            <ul className="space-y-3 pl-4">
                                <li className="flex gap-3">
                                    <span className="text-blue-600 font-bold">•</span>
                                    <span className="text-gray-700"><strong>內科與耳鼻喉科雙核背景：</strong>曾擔任醫學中心內科住院醫師至R2，現任耳鼻喉科住院醫師，具備跨領域整體性評估視野。</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-600 font-bold">•</span>
                                    <span className="text-gray-700"><strong>精準超音波診斷：</strong>2025年完成基隆長庚院區首例耳鼻喉科施作頭頸部超音波粗針穿刺切片(CNB)，為癌症患者快速診斷並安排及時治療。</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-600 font-bold">•</span>
                                    <span className="text-gray-700"><strong>公衛與流行病學：</strong>台大流行病學與預防醫學碩士班進修，強調「證據等級(Evidence Level)」與嚴格的數據邏輯判讀。</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-600 font-bold">•</span>
                                    <span className="text-gray-700"><strong>偏鄉醫療實踐：</strong>持續參與偏鄉醫療與義診經驗長達 9 年半，深感資源分配與科技輔助醫療之重要性。</span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-[#1A2B3C] mb-4 flex items-center gap-2">
                                <span className="w-2 h-6 bg-blue-600 rounded"></span>
                                學歷與經歷簡表
                            </h3>
                            <div className="relative border-l-2 border-gray-200 ml-3 pl-6 space-y-6">
                                <div className="relative">
                                    <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[1.65rem] top-1.5 ring-4 ring-white"></div>
                                    <time className="text-sm font-bold text-blue-600">2025</time>
                                    <p className="font-bold text-[#1A2B3C] mt-1">國立台灣大學</p>
                                    <p className="text-gray-600 text-sm">公共衛生學院流行病學與預防醫學研究所碩士班</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[1.65rem] top-1.5 ring-4 ring-white"></div>
                                    <time className="text-sm font-bold text-gray-500">2024</time>
                                    <p className="font-bold text-[#1A2B3C] mt-1">長庚紀念醫院</p>
                                    <p className="text-gray-600 text-sm">擔任耳鼻喉科住院醫師</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[1.65rem] top-1.5 ring-4 ring-white"></div>
                                    <time className="text-sm font-bold text-gray-500">2023</time>
                                    <p className="font-bold text-[#1A2B3C] mt-1">馬偕醫學中心</p>
                                    <p className="text-gray-600 text-sm">內科住院醫師訓練 (R2)</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[1.65rem] top-1.5 ring-4 ring-white"></div>
                                    <time className="text-sm font-bold text-gray-500">2019</time>
                                    <p className="font-bold text-[#1A2B3C] mt-1">世界衛生大會 (WHA)</p>
                                    <p className="text-gray-600 text-sm">台灣青年團發言人</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[1.65rem] top-1.5 ring-4 ring-white"></div>
                                    <time className="text-sm font-bold text-gray-500">2019</time>
                                    <p className="font-bold text-[#1A2B3C] mt-1">行政院教育部</p>
                                    <p className="text-gray-600 text-sm">獲選青年發展署青年諮詢委員</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[1.65rem] top-1.5 ring-4 ring-white"></div>
                                    <time className="text-sm font-bold text-gray-500">2018</time>
                                    <p className="font-bold text-[#1A2B3C] mt-1">台灣醫學生聯合會</p>
                                    <p className="text-gray-600 text-sm">當選對外事務副會長</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[1.65rem] top-1.5 ring-4 ring-white"></div>
                                    <time className="text-sm font-bold text-gray-500">2015</time>
                                    <p className="font-bold text-[#1A2B3C] mt-1">國防醫學院</p>
                                    <p className="text-gray-600 text-sm">醫學系</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <Sidebar />
        </div>
    );
}
