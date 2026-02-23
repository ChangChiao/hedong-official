## ADDED Requirements

### Requirement: Meta 標籤與 Open Graph
頁面 SHALL 設定完整的 Meta 標籤，包含：
- `<title>`: 包含店名與核心關鍵字（如「和東佛具店｜神像整修・神像粉身・神像翻新」）
- `<meta name="description">`: 150 字內描述，包含目標關鍵字
- Open Graph 標籤：`og:title`、`og:description`、`og:image`、`og:type`、`og:url`

SHALL 使用 Next.js metadata API 在 `layout.tsx` 中定義。

#### Scenario: 搜尋引擎抓取 Meta 資訊
- **WHEN** 搜尋引擎爬蟲抓取頁面
- **THEN** SHALL 取得包含目標關鍵字的 title 與 description

#### Scenario: 社群分享預覽
- **WHEN** 使用者在社群媒體分享網站連結
- **THEN** SHALL 顯示包含店名、描述與預覽圖片的 Open Graph 卡片

### Requirement: JSON-LD 結構化資料
頁面 SHALL 嵌入 `@type: LocalBusiness` 的 JSON-LD 結構化資料，包含：店名、地址、電話、營業時間、經緯度座標、業務描述。

#### Scenario: 結構化資料驗證
- **WHEN** 使用 Google Rich Results Test 工具檢測頁面
- **THEN** SHALL 正確識別 LocalBusiness 結構化資料，無錯誤

### Requirement: Sitemap 與 Robots.txt
專案 SHALL 在 `public/` 目錄提供靜態 `sitemap.xml` 與 `robots.txt` 檔案。`robots.txt` SHALL 允許所有搜尋引擎爬蟲抓取，並指向 sitemap 位置。

#### Scenario: 搜尋引擎存取 sitemap
- **WHEN** 搜尋引擎爬蟲存取 `/sitemap.xml`
- **THEN** SHALL 取得包含首頁 URL 的有效 sitemap

#### Scenario: Robots.txt 允許爬蟲
- **WHEN** 搜尋引擎爬蟲存取 `/robots.txt`
- **THEN** SHALL 取得允許所有爬蟲抓取的規則與 sitemap 連結

### Requirement: 語意化 HTML 與描述性 Alt 文字
所有圖片 SHALL 附上包含相關關鍵字的描述性 `alt` 屬性。頁面 SHALL 正確使用 `<h1>`（僅一個）、`<h2>`、`<h3>` 標題層級結構。

#### Scenario: 圖片 Alt 屬性
- **WHEN** 檢視頁面所有 `<img>` 標籤
- **THEN** 每張圖片 SHALL 具備描述性 alt 文字，包含相關關鍵字

#### Scenario: 標題層級結構
- **WHEN** 檢視頁面 HTML
- **THEN** SHALL 僅有一個 `<h1>` 標籤，各區塊標題使用 `<h2>`，子標題使用 `<h3>`
