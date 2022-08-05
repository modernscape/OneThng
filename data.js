var exItems = [
{
  id: 0,
  title: "Webデザイン検討案",
  category: "web",
  imgPaths: ["web_design_001.jpg", "web_design_002.jpg", "web_design_003.jpg", "web_design_004.jpg"],
  date: "2021.09",
  description: '既存の顧客管理システムのデザイン改修案',
  urls: ['https://modernscape.github.io/paperworks.github.io/mockup/MyPage_3_3/develop/private/mockup/index_3_3.html','https://modernscape.github.io/paperworks.github.io/mockup/MyPage_3_2/develop/private/mockup/index_3_2.html','https://modernscape.github.io/paperworks.github.io/mockup/MyPage_1_3/develop/private/mockup/index_1_3.html'] 
},
{
  id: 1,
  title: "Swift School site",
  category: "web",
  imgPaths: ["swift-school.jpg"],
  date: "2017.05",
  description: '自分のアプリ開発レッスンのLP<br><br>Webデザイン、コーディング',
  urls: ["http://btw.html.xdomain.jp/_sample/dreamapps.jp"]
},
{
  id: 2,
  title: "Web制作スタディ",
  category: "web",
  imgPaths: ['btw_s.png', 'wd2_webgl_s.png', 'slice_s.png', 'ShowCase_s.png'],
  date: "2018.05",
  description: "・サンプルサイト<br>・UnityによるWeb<br>・その他（エフェクトサンプルなど）",
  urls: [
    "http://btw.html.xdomain.jp/BTW/",
    "http://btw.html.xdomain.jp/_sample/WD2_Web/",
    "http://btw.html.xdomain.jp/ShowCase/",
    "http://btw.html.xdomain.jp/slideImages/19-12-04_slideImages_siding/clip.html"
    // "http://btw.html.xdomain.jp/Explosion/",
    // "http://btw.html.xdomain.jp/_sample/Lights/",
    // "http://btw.html.xdomain.jp/_sample/AirPlane/",
    // "http://btw.html.xdomain.jp/_sample/Transform3D/"
  ]
},
{
  id: 3,
  title: "Webアプリ試作（フロントのみ）",
  category: "web",
  imgPaths: ['concentration.png'],
  date: "2021.10",
  description: "最も重要なことにどれだけ集中しているかアプリ<br>JavaScript、HTML、CSS",
  urls: [
    "http://btw.html.xdomain.jp/concentration/"
  ]
},
{
  id: 4,
  title: "Top for SANAA 〔Web デザインコンペ〕",
  category: "web",
  imgPaths: ['SANAA_2.png'],
  date: "2018.05",
  description: "SANAAのTopページデザイン案<br><br>Webデザイン、コーディング",
  urls: [
    "http://btw.html.xdomain.jp/01_white/index.html",
    "http://btw.html.xdomain.jp/02_shuffle/index.html",
    "http://btw.html.xdomain.jp/03_Jiwajiwa/index.html",
    "http://btw.html.xdomain.jp/04_vertical/index.html",
  ]
},
{
  id: 5,
  title: "Top for Nail salon 〔Web スタディ〕",
  category: "web",
  imgPaths: ["nail-salon_0.jpg", "nail-salon_1.jpg", "nail-salon_2.jpg"],
  date: "2017.06",
  description: "Webトップページスタディ<br><br>Webデザイン、コーディング",
  urls: ["http://btw.html.xdomain.jp/FlowGrids/index.html"]
},
{
  id: 6,
  title: "Crystals 〔Web スタディ〕",
  category: "web",
  imgPaths: ["three_1.png"],
  date: "2019.04",
  description: "three.jsを使用したインタラクティブな3DCGスタディ<br><br>CADによるクリスタルのモデリング",
  urls: ["http://btw.html.xdomain.jp/19-04-10_crystals/"]
},
{
  id: 7,
  title: "新しい「3D UI」の提案 〔Web スタディ〕",
  category: "web",
  imgPaths: ['view_01.png', 'view_02.png', 'view_03.png', 'view_04.png'],
  date: "2021.07",
  description: "3D NAVメニューの提案<br>（three.js、ライノセラス使用）",
  urls: [
    "http://btw.html.xdomain.jp/paperworks3d/index_2.html"
  ]
},
{
  id: 8,
  title: "Skill Set 〔スキル〕",
  category: "general",
  imgPaths: [
    "skill_01.png",
    "skill_02.png",
    "skill_03.png",
    "skill_04.png",
    "skill_05.png",
  ],
  date: null,
  description: null,
  urls: []
},
{
  id: 9,
  title: "Career 〔経歴〕",
  category: "general",
  imgPaths: ["career.png"],
  date: null,
  description: null,
  urls: []
},
{
  id: 10,
  title: "Water Drops 2 〔Unity App〕",
  category: "Unity",
  imgPaths: ["waterdrops2_0.png", "waterdrops2_1.png"],
  date: "2020.7 release",
  description: 'UnityによるiOS App<br><br><span style="color:#00c3ff;font-size:13px">2021年1月 BS11「どっぷりアプリ」で放送</span><br><br>ビジュアルに使える、達成を促すタスクアプリ<br><br>ダウンロード数　650',
  urls: ["https://apps.apple.com/jp/app/waterdrops/id1515123047"]
},
{
  id: 11,
  title: "GuruGuru Task 〔iOS App〕",
  category: "iOS",
  imgPaths: ["GuruGuruTask_0.jpg", "GuruGuruTask_1.jpg"],
  date: "2017.11 release",
  description: "直感的に使えるタスクアプリ<br>SpriteKit使用<br><br>ダウンロード数　4,300",
  urls: ["https://itunes.apple.com/jp/app/guruguru-task/id1317583724?mt=8"]
},
{
  id: 12,
  title: "ミースの家 〔空間アイデアコンペ〕",
  category: "space",
  imgPaths: ["mies_0.jpg", "mies_1.jpg", "mies_2.jpg"],
  date: "1997.03",
  description: 'エスバイエル住宅設計コンペティション<br><span style="color:#00c3ff;font-size:13px">妹島和世賞 受賞</span><br>新建築 1997年7月号掲載<br><br>近代建築の巨匠「ミース」のための家<br><br><span class="tools">Strata3d、PhotoShop、Illustrator</span>',
  urls: []
},
{
  id: 13,
  title: "落水荘 〔空間アイデアコンペ〕",
  category: "space",
  imgPaths: ["waterfall.jpg"],
  date: "2005.01",
  description: "新しい空間のイメージを提案<br><br>複雑な要素の集合で成り立つ建築<br><br><span class='tools'>FormZ、Illustrator、PhotoShop</span>",
  urls: []
},

{
  id: 14,
  title: "air-fabric ／ air-edges 〔空間アイデアコンペ〕",
  category: "space",
  imgPaths: ["air-fabric.jpg", "air-edges.jpg"],
  date: "2005.01",
  description: "照明アイデアコンペティション応募<br><br>複数のスポットライトが交わるところが発光（上） <br>不定形なグラスファイバーが発光（下）<br><br><span class='tools'>Illustrator、PhotoShop</span>",
  urls: []
},


//   urls: [],
// },


//  {
//    id: 11,
//    title: "Break Through Works site",
//    category: "web",
//    imgPaths: ["btw.jpg"],
//    date: "2017.08",
//    description: null,
//    urls: ["http://btw.html.xdomain.jp/BTW/index.html"],
//  },

// {
//   id: 13,
//   title: "Furniture factory site",
//   category: "web",
//   imgPaths: ["furniture-shop.jpg"],
//   date: "2017.06",
//   description: null,
//   urls: ["http://btw.html.xdomain.jp/FurnitureFactory/index.html"],
// },
//  {
//    id: 14,
//    title: "Particles",
//    category: "web",
//    imgPaths: ["particles.jpg"],
//    date: "2018.04",
//    description: "for mobile",
//    urls: ["http://btw.html.xdomain.jp/Particles/index.html"],
//  },

{
  id: 15,
  title: "白地図アプリ（受注）",
  category: "iOS",
  imgPaths: [
    "white-map_0.png",
    "white-map_1.png",
    "white-map_2.png",
    "white-map_3.png",
  ],
  date: "2018.10 release",
  description: "（クラウドワークスでの受注アプリ）<br>神社仏閣めぐり、イベントへの参加、スポーツの観戦、ご当地グルメなど。あなたの旅を、仲間との旅を、テーマ別に日本地図の47都道府県を塗りつぶすことで彩りましょう。<br><br>・テーマ別に白地図を保存できます。<br>・日本列島の白地図を都道府県別に塗りつぶせます。<br>・塗った都道府県には日付とメモを保存できます。<br><br>【開発期間】1ヶ月",
  urls: ['https://apps.apple.com/jp/app/%E7%99%BD%E5%9C%B0%E5%9B%B3ad/id1438596925']
},
{
  id: 16,
  title: "Water Drops 〔iOS App〕",
  category: "iOS",
  imgPaths: [
    "waterdrops_0.jpg",
    "waterdrops_1.jpg",
    "waterdrops_2.jpg",
    "waterdrops_3.jpg",
  ],
  date: "2017.9 release",
  description: "ビジュアルに使えるタスクアプリ<br>Water Drops 2の前身<br><br>ダウンロード数　4,300",
  urls: []
},
{
  id: 17,
  title: "竹と布の家",
  category: "space",
  imgPaths: ["taketonuno.jpg"],
  date: "1999.06",
  description: "第9回 国際デザインコンペティション OSAKA<br>「編むー intertextuarity」<br><br><span style = 'color:#00c3ff'>奨励賞 受賞<br>国際デザイン展 '99 展示</span>",
  urls: []
},
{
  id: 18,
  title: "七夕花 〔活け花〕",
  category: "flower",
  imgPaths: ["tanabata.jpg"],
  date: "2009.04",
  description: '雑誌「花時間」応募<br><br><span style="color:#00c3ff">2009年4月号 掲載（Web）</span>',
  urls: []
},
{
  id: 19,
  title: "モミジ花 〔活け花〕",
  category: "flower",
  imgPaths: ["mojimi.jpg"],
  date: "2003.05",
  description: '雑誌「花時間」応募<br><br><span style="color:#00c3ff">2003年5月号 掲載（入選）</span>',
  urls: []
},
{
  id: 20,
  title: "Message 〔メッセージ〕",
  category: "general",
  imgPaths: ["message.png"],
  date: null,
  description: null,
  urls: []
}
];