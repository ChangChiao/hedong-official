## 1. 專案初始化

- [x] 1.1 使用 `create-next-app` 建立 Next.js 專案（App Router、TypeScript、Tailwind CSS）
- [x] 1.2 設定 `next.config.ts`，啟用 `output: 'export'` 靜態匯出
- [x] 1.3 建立 `src/components/` 目錄結構與 `public/images/` 圖片目錄

## 2. 設計系統

- [x] 2.1 在 `globals.css` 中使用 `@theme` 定義品牌配色（深棕、古銅、暗紅、米白）與自訂色彩變數
- [x] 2.2 在 `layout.tsx` 使用 `next/font/google` 載入 Noto Serif TC（標題）與 Noto Sans TC（內文），設定 CSS 變數
- [x] 2.3 在 `globals.css` 的 `@theme` 中註冊字體 family，定義統一的間距與圓角規範

## 3. 全站佈局（Site Layout）

- [x] 3.1 實作 `Header.tsx`：品牌 Logo/店名、導覽選單（錨點連結）、sticky 固定於頂部
- [x] 3.2 實作 Header 響應式漢堡選單：< 768px 收合為漢堡圖示，點擊展開/收合，連結點擊後自動收合
- [x] 3.3 實作導覽連結平滑捲動（smooth scroll）至對應 section
- [x] 3.4 實作 `Footer.tsx`：版權聲明「© 2026 和東佛具店 版權所有」
- [x] 3.5 在 `layout.tsx` 組合 Header 與 Footer，使用語意化 HTML 標籤（`<header>`, `<nav>`, `<main>`, `<footer>`）

## 4. Banner 首圖區

- [x] 4.1 實作 `Banner.tsx`：全幅背景圖，使用 `next/image` 搭配 `priority` 屬性優先載入
- [x] 4.2 設定 Banner 圖片固定寬高比（aspect-ratio），避免 CLS
- [x] 4.3 實作 Ken Burns 動態縮放效果（CSS animation）
- [x] 4.4 實作品牌標語文字覆蓋層，使用 Noto Serif TC 襯線字體

## 5. 店面簡介區（About）

- [x] 5.1 實作 `About.tsx`：店家歷史與經營理念簡介文字（100-200 字）
- [x] 5.2 實作核心服務清單：神像整修、神像粉身、神像翻新、神像製作、神像整理
- [x] 5.3 加入店面環境照或執業照（WebP、next/image、明確寬高、描述性 alt）

## 6. 精選作品區（Portfolio）

- [x] 6.1 實作 `Portfolio.tsx`：RWD 網格佈局（手機 1-2 欄、平板 2-3 欄、桌面 3-4 欄）
- [x] 6.2 實作分類標籤篩選按鈕：全部、佛像系列、神桌配套、宗教文物，預設選中「全部」
- [x] 6.3 實作標籤點擊篩選邏輯，切換顯示對應分類作品
- [x] 6.4 實作 `Lightbox.tsx`：點擊縮圖開啟全螢幕覆蓋層，顯示放大圖片與作品名稱
- [x] 6.5 實作 Lightbox 關閉功能：點擊外部區域、關閉按鈕、Escape 鍵皆可關閉
- [x] 6.6 所有作品圖片使用 WebP 格式、next/image lazy loading、明確寬高、描述性 alt

## 7. 聯絡與地點區（Contact）

- [x] 7.1 實作 `Contact.tsx`：店家地址、電話（`tel:` 連結）、營業時間資訊
- [x] 7.2 嵌入 Google Maps iframe（place 模式），設定 `loading="lazy"`
- [x] 7.3 實作「開啟地圖導航」按鈕，點擊在新分頁開啟 Google Maps 導航
- [x] 7.4 實作 LINE 聯絡按鈕，點擊導向 LINE 加入好友頁面

## 8. 頁面組裝

- [x] 8.1 在 `page.tsx` 組合所有 section 元件（Banner → About → Portfolio → Contact），各區塊使用 `<section>` 標籤並設定對應 id
- [x] 8.2 確保僅有一個 `<h1>` 標籤，各區塊標題使用 `<h2>`，子標題使用 `<h3>`

## 9. SEO 優化

- [x] 9.1 在 `layout.tsx` 使用 Next.js metadata API 設定 title、description（含目標關鍵字）、Open Graph 標籤
- [x] 9.2 在 `layout.tsx` 嵌入 JSON-LD 結構化資料（`@type: LocalBusiness`），包含店名、地址、電話、營業時間
- [x] 9.3 建立 `public/sitemap.xml`（包含首頁 URL）
- [x] 9.4 建立 `public/robots.txt`（允許所有爬蟲、指向 sitemap）

## 10. 效能驗證與收尾

- [x] 10.1 確認所有圖片為 WebP 格式，放置於 `public/images/`
- [x] 10.2 準備 placeholder 圖片（Banner、About、Portfolio 各分類）供開發使用
- [x] 10.3 執行 `next build` 靜態匯出，確認建置成功無錯誤
- [ ] 10.4 使用 Lighthouse 檢測，確認 LCP < 2.5s、CLS < 0.1
