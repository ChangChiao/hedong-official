## ADDED Requirements

### Requirement: Header 導覽列顯示品牌與導覽連結
Header SHALL 固定於頁面頂部，包含品牌 Logo（或店名文字）與導覽選單。導覽選單 SHALL 包含以下錨點連結：關於我們、作品展示、聯絡我們。點擊連結 SHALL 平滑捲動至對應區塊。

#### Scenario: 使用者點擊導覽連結
- **WHEN** 使用者點擊「作品展示」連結
- **THEN** 頁面平滑捲動至 Portfolio 區塊

#### Scenario: Header 固定於頂部
- **WHEN** 使用者向下捲動頁面
- **THEN** Header SHALL 始終固定於視窗頂部（sticky）

### Requirement: 響應式漢堡選單
在手機視窗寬度（< 768px）下，導覽選單 SHALL 收合為漢堡選單圖示。點擊漢堡圖示 SHALL 展開導覽選單。

#### Scenario: 手機裝置開啟選單
- **WHEN** 視窗寬度小於 768px 且使用者點擊漢堡圖示
- **THEN** 導覽選單 SHALL 展開顯示所有連結

#### Scenario: 選單連結點擊後自動收合
- **WHEN** 使用者在展開的漢堡選單中點擊任一導覽連結
- **THEN** 選單 SHALL 自動收合，頁面捲動至對應區塊

### Requirement: Footer 版權聲明
Footer SHALL 顯示版權聲明文字「© 2026 和東佛具店 版權所有」。

#### Scenario: Footer 顯示於頁面底部
- **WHEN** 使用者捲動至頁面最底部
- **THEN** SHALL 看到 Footer 區塊包含版權聲明文字

### Requirement: 語意化佈局結構
頁面 SHALL 使用語意化 HTML 標籤：Header 使用 `<header>`，導覽使用 `<nav>`，主要內容使用 `<main>`，各區塊使用 `<section>`，頁腳使用 `<footer>`。

#### Scenario: HTML 結構語意化
- **WHEN** 檢視頁面 HTML 結構
- **THEN** SHALL 包含 `<header>`、`<nav>`、`<main>`、至少 4 個 `<section>`、`<footer>` 標籤
