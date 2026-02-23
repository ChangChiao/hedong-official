## Context

這是一個全新專案，目前無任何既有程式碼。目標是為和東佛具店建立一頁式官方網站，需兼顧品牌形象、SEO 曝光與效能表現。網站為純展示型靜態站點，無後端 API 或資料庫需求。

## Goals / Non-Goals

**Goals:**
- 建立可靜態部署的一頁式網站，載入快速且易於維護
- 達成良好的 Core Web Vitals 指標（LCP < 2.5s、CLS < 0.1）
- 針對目標關鍵字（神像整修/粉身/翻新/製作/整理）取得搜尋引擎曝光
- 響應式設計，手機與桌面皆有良好體驗

**Non-Goals:**
- 不實作後台管理系統（CMS）
- 不實作線上購物或金流功能
- 不實作多語系（僅繁體中文）
- 不實作部落格或文章發佈功能

## Decisions

### 1. 框架選擇：Next.js App Router + 靜態匯出

**選擇**: Next.js 14+ App Router，設定 `output: 'export'` 靜態匯出。

**理由**: Next.js 的 `next/image` 元件內建 WebP 轉換、lazy loading 與尺寸優化，對效能需求非常契合。App Router 支援 metadata API，方便管理 SEO 標籤。靜態匯出後為純 HTML/CSS/JS，部署簡單且載入快速。

**替代方案**: Astro（更輕量但生態系較小）、純 HTML（無法享受元件化開發與圖片優化）。

### 2. 樣式方案：Tailwind CSS

**選擇**: Tailwind CSS v4，採用 CSS-first 設定，在 `app/globals.css` 中使用 `@theme` 定義品牌配色與字體變數，不需要 `tailwind.config.ts`。

**理由**: Tailwind v4 移除了 JS 設定檔，改用原生 CSS `@theme` 指令，設定更直覺且與 CSS 變數無縫整合。Production build 自動移除未使用的樣式，最終 CSS 體積極小。

**替代方案**: CSS Modules（需手動管理更多檔案）、styled-components（增加 JS bundle 大小）。

### 3. 專案結構

```
hedong-official/
├── public/
│   ├── images/          # WebP 圖片素材
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── layout.tsx   # 根佈局（字體、metadata）
│   │   └── page.tsx     # 首頁（組合所有 section）
│   └── components/
│       ├── Header.tsx
│       ├── Banner.tsx
│       ├── About.tsx
│       ├── Portfolio.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       └── Lightbox.tsx
├── next.config.ts
└── package.json
```

**理由**: 一頁式網站只需一個 `page.tsx`，各區塊拆為獨立 component 方便維護。圖片統一放在 `public/images/` 以 WebP 格式存放。

### 4. 字體載入策略

**選擇**: 使用 `next/font/google` 載入 Noto Serif TC（標題）與 Noto Sans TC（內文）。

**理由**: Next.js 內建的 Google Fonts 整合會自動 self-host 字體檔案並加入 `font-display: swap`，避免 FOIT（Flash of Invisible Text），同時改善 LCP 與 CLS。

### 5. 圖片策略

**選擇**: 所有圖片使用 WebP 格式，透過 `next/image` 元件載入。Banner 首圖設定 `priority` 屬性優先載入，其餘圖片預設 lazy loading。所有圖片明確指定 `width` 與 `height` 屬性。

**理由**: WebP 壓縮率優於 JPEG/PNG，減少傳輸量。`priority` 確保 LCP 元素快速載入。明確寬高避免版面位移（CLS）。

### 6. SEO 策略

**選擇**:
- 使用 Next.js metadata API 在 `layout.tsx` 定義全站 title、description、Open Graph 標籤
- 在 `layout.tsx` 嵌入 JSON-LD 結構化資料（`@type: LocalBusiness`）
- 靜態生成 `sitemap.xml` 與 `robots.txt` 放在 `public/`
- 所有區塊使用語意化 HTML 標籤（`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`）
- 圖片皆附上描述性 `alt` 屬性，包含目標關鍵字

**理由**: 結構化資料幫助 Google 理解店家資訊（地址、電話、營業時間），提升本地搜尋排名。語意化標籤與描述性 alt 文字有助搜尋引擎理解頁面內容。

### 7. Portfolio Lightbox 實作

**選擇**: 使用輕量的 client component 自行實作 Lightbox，不引入第三方套件。

**理由**: Lightbox 邏輯簡單（overlay + 大圖 + 關閉按鈕），自行實作可避免額外依賴、控制 bundle 大小，且更容易配合設計風格。

### 8. Google Maps 嵌入

**選擇**: 使用 `<iframe>` 嵌入 Google Maps Embed API，並加上 `loading="lazy"` 屬性。

**理由**: iframe 嵌入不需 API key（使用 place 模式），且 lazy loading 避免地圖影響首次載入效能。

## Risks / Trade-offs

- **圖片素材缺失** → 先使用 placeholder 圖片開發，待店家提供實際照片後替換。所有圖片集中在 `public/images/`，替換方便。
- **Google Maps 無 API Key 限制** → Embed API 的 place 模式有每日請求限制，但對單一店家網站流量而言綽綽有餘。
- **靜態匯出限制** → 無法使用 Next.js 的 API Routes 或 ISR，但本專案為純展示站點，不需要這些功能。
- **字體檔案較大（中文字體）** → Noto Serif TC / Noto Sans TC 子集化後仍有一定體積，透過 `next/font` 的自動優化（subsetting、preload）減輕影響。
