## Why

和東佛具店需要一個專業的線上門面來建立品牌信任感，並讓客戶能快速瞭解店家服務與聯繫方式。目前缺乏官方網站，潛在客戶無法在線上認識店家的工藝實力與經營理念，也無法透過搜尋引擎找到店家。一頁式網站是最適合的形式——結構簡潔、維護成本低，且能完整呈現品牌形象。同時需要加強 SEO 優化，提升在 Google 等搜尋引擎的曝光度，讓搜尋「神像整修」、「神像粉身」、「神像翻新」、「神像製作」、「神像整理」等關鍵字的潛在客戶能找到和東。

## What Changes

- 建立全新 Next.js 一頁式網站專案
- 實作響應式導覽列（Header），含品牌 Logo 與錨點連結導覽
- 實作首圖區（Banner），含全幅背景圖與 Ken Burns 動態縮放效果及品牌標語
- 實作店面簡介區（About），呈現店家歷史、經營理念與核心服務清單
- 實作精選作品區（Portfolio），含 RWD 網格佈局、分類標籤篩選與圖片點擊放大（Lightbox）
- 實作聯絡與地點區（Contact），含 Google Maps 嵌入、點擊撥號、LINE 按鈕與營業時間
- 實作頁腳（Footer），含版權聲明
- 整體設計採木質色系（深棕/古銅）、暗紅色搭配米白底色，標題使用襯線體、內文使用黑體
- 實作 SEO 優化，包含語意化 HTML 結構、Meta 標籤（title / description / Open Graph）、JSON-LD 結構化資料（LocalBusiness）、sitemap.xml 與 robots.txt，目標關鍵字：神像整修、神像粉身、神像翻新、神像製作、神像整理
- 實作效能優化，包含圖片 lazy loading（next/image）、統一使用 WebP 格式圖片以縮小檔案大小、HTML 語意化標籤（header/nav/main/section/footer）、優化 CLS（預設圖片寬高比避免版面位移）與 LCP（首圖優先載入 priority、字體 preload）

## Capabilities

### New Capabilities
- `site-layout`: 全站佈局框架，包含 Header 導覽列（錨點連結、響應式漢堡選單）與 Footer 版權聲明
- `banner`: 首圖區，含全幅背景圖、Ken Burns 動態效果與品牌標語展示
- `about`: 店面簡介區，呈現店家歷史、經營理念與核心服務項目清單
- `portfolio`: 精選作品展示區，含 RWD 網格佈局（手機 1-2 欄、桌面 3-4 欄）、分類標籤篩選與 Lightbox 圖片放大
- `contact`: 聯絡與地點區，含 Google Maps 嵌入、tel: 點擊撥號、LINE 聯絡按鈕與營業時間資訊
- `design-system`: 設計系統，定義配色（木質深棕、古銅、暗紅、米白）、字體（襯線標題、黑體內文）與共用樣式變數
- `seo`: SEO 優化，包含 Meta 標籤、Open Graph、JSON-LD 結構化資料（LocalBusiness）、語意化 HTML、sitemap.xml、robots.txt，目標關鍵字涵蓋神像整修/粉身/翻新/製作/整理
- `performance`: 效能優化，包含圖片 lazy loading（next/image）、統一使用 WebP 格式圖片、CLS 優化（預設寬高比）、LCP 優化（首圖 priority 載入、字體 preload）、語意化 HTML 標籤

### Modified Capabilities
<!-- 全新專案，無既有 capabilities 需修改 -->

## Impact

- **Tech stack**: Next.js (App Router) + Tailwind CSS，靜態匯出（next export / output: 'export'）
- **Dependencies**: 需引入 Google Fonts（Noto Serif TC / Noto Sans TC）、Google Maps Embed API
- **Assets**: 需準備店面照片、作品照片、品牌 Logo 等圖片素材，統一使用 WebP 格式
- **Deployment**: 靜態輸出，可部署至 Vercel / Netlify / GitHub Pages
