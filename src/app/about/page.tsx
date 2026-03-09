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
                                    <p className="text-white text-sm font-medium">實習第一名獲獎留影</p>
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

                        <section className="pt-8 border-t border-gray-100">
                            <h3 className="text-2xl font-bold text-[#1A2B3C] mb-6">關於陳政良醫師</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-bold text-[#1A2B3C] mb-2 text-blue-700">我的醫療哲學：在科學證據與真實生活間找尋最佳解</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        醫療從來都不是單純的套用公式。從進入醫學領域的初期，我就深刻體認到，面對同樣的疾病，不同生活環境與工作型態的人，需要截然不同的處置策略。在東北角與瑞芳的長期義診經驗中，我學習到如何將醫療調整至最符合患者真實生活的狀態。這份對於「人」的關懷，成為我日後行醫的核心信念。
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-[#1A2B3C] mb-2 text-blue-700">跨領域的醫學養成：從人社思維到內外科兼具的精準醫療</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        我的學思歷程始於建中人文與社會科學資優班，這段經歷培養了我對於社會結構與人際互動的敏銳觀察力。進入國防醫學院接受扎實醫學訓練後，我先後於三軍總醫院完成一般醫學訓練，並在馬偕醫學中心紮下深厚的內科基石。帶著這套嚴謹、系統性的內科思維，我目前於長庚紀念醫院擔任耳鼻喉科住院醫師，將內科的全面性評估與耳鼻喉頭頸外科的精準技術（如頭頸部超音波、內視鏡）完美結合。
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-[#1A2B3C] mb-2 text-blue-700">為什麼要跨足流行病學？</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        為了提供更客觀、更具科學實證的醫療建議，我目前就讀於國立台灣大學公共衛生學院預防醫學與流行病學研究所碩士班。透過生物統計與統合分析，我能夠精準解讀龐大的醫學數據，將最新的研究成果轉化為臨床上的實用決策工具。這意味著，我能為您提供的，不僅是「經驗法則」，更是經得起科學檢驗的「實證數據」。
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-[#1A2B3C] mb-2 text-blue-700">寫給講求邏輯與效率的專業人士</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        對於身處高壓環境、決策講求邏輯的工程師、會計師或法界人士來說，時間是最寶貴的資產。我了解您面對健康問題時的焦慮，也明白您需要的不只是「多休息」這種空泛的建議。身為您的「個人醫療顧問」，我將運用跨科別的醫學知識與流行病學數據，為您拆解複雜的醫療資訊，並考量您的職業特性與生活型態，共同制定出最具效益的健康管理與治療策略。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="pt-8 border-t border-gray-100">
                            <h3 className="text-xl font-bold text-[#1A2B3C] mb-4 flex items-center gap-2">
                                <span className="w-2 h-6 bg-blue-600 rounded"></span>
                                簡歷亮點
                            </h3>
                            <div className="bg-gray-50 p-6 rounded-lg text-base text-gray-700 space-y-4">
                                <div>
                                    <p><strong>進修：</strong>國立台灣大學 公共衛生學院預防醫學與流行病學研究所 碩士在職專班 (2025–至今)</p>
                                    <p><strong>現任：</strong>長庚紀念醫院 耳鼻喉科 住院醫師 (2024–至今)</p>
                                </div>
                                <div>
                                    <p className="font-bold mb-1">經歷：</p>
                                    <ul className="list-disc list-inside pl-2 space-y-1">
                                        <li>馬偕醫學中心 內科部 住院醫師 (2023–2024)</li>
                                        <li>三軍總醫院 一般醫學訓練醫師 (PGY) (2021–2023)</li>
                                    </ul>
                                </div>
                                <div>
                                    <p><strong>學歷：</strong>國防醫學院 醫學系 (2015–2021) / 建國中學 人文暨社會科學資優班</p>
                                </div>
                                <div>
                                    <p className="font-bold mb-1">公共參與：</p>
                                    <ul className="list-disc list-inside pl-2 space-y-1">
                                        <li>行政院教育部青年發展署 青年諮詢委員 (2019)</li>
                                        <li>世界衛生大會(WHA)台灣青年團發言人(2019)</li>
                                        <li>台灣醫學生聯合會 對外事務副會長 (2018)</li>
                                        <li>東北角與瑞芳地區 醫療義診醫師 (2017起)</li>
                                    </ul>
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
