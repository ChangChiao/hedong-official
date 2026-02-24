## ADDED Requirements

### Requirement: 圖片 Lazy Loading
除 Banner 首圖外，所有圖片 SHALL 使用 `next/image` 元件的預設 lazy loading 行為，僅在進入視窗可見範圍時才載入。

#### Scenario: 非首屏圖片延遲載入
- **WHEN** 頁面初始載入
- **THEN** 僅 Banner 首圖 SHALL 立即載入，其餘圖片 SHALL 在捲動至可見範圍時才載入

### Requirement: 統一使用 WebP 格式
所有圖片素材 SHALL 使用 WebP 格式儲存於 `public/images/` 目錄，以縮小檔案大小並加快載入速度。

#### Scenario: 圖片格式檢查
- **WHEN** 檢視 `public/images/` 目錄中的圖片
- **THEN** 所有圖片 SHALL 為 `.webp` 副檔名

### Requirement: CLS 優化
所有圖片 SHALL 透過 `next/image` 元件明確指定 `width` 與 `height` 屬性，或使用 `aspect-ratio` CSS 屬性預留空間，確保頁面載入過程中不產生版面位移。

#### Scenario: 頁面 CLS 指標
- **WHEN** 使用 Lighthouse 檢測頁面
- **THEN** CLS 值 SHALL 小於 0.1

### Requirement: LCP 優化
Banner 首圖 SHALL 設定 `next/image` 的 `priority` 屬性，確保作為 LCP 元素優先載入。字體 SHALL 透過 `next/font` 自動 preload。

#### Scenario: LCP 載入時間
- **WHEN** 使用 Lighthouse 檢測頁面
- **THEN** LCP 值 SHALL 小於 2.5 秒

### Requirement: Google Maps 延遲載入
Google Maps iframe SHALL 設定 `loading="lazy"` 屬性，避免影響首次頁面載入效能。

#### Scenario: 地圖不阻塞首次載入
- **WHEN** 頁面初始載入
- **THEN** Google Maps iframe SHALL 不在首次載入時請求，直到使用者捲動至 Contact 區塊附近才載入
