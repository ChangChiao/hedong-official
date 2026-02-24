## ADDED Requirements

### Requirement: 品牌配色系統
設計系統 SHALL 定義以下品牌色彩，透過 Tailwind CSS v4 `@theme` 在 `globals.css` 中統一管理：
- 主色：深棕色（木質色系）
- 輔色：古銅色
- 強調色：暗紅色（吉祥意象）
- 背景色：米白色
- 文字色：深色（近黑）

#### Scenario: 配色一致性
- **WHEN** 檢視網站所有區塊
- **THEN** 所有色彩 SHALL 使用設計系統定義的品牌色彩變數，不使用硬編碼色值

### Requirement: 字體系統
設計系統 SHALL 定義兩組字體：
- 標題字體：Noto Serif TC（襯線體），用於所有標題與品牌標語
- 內文字體：Noto Sans TC（黑體），用於段落與一般文字

字體 SHALL 透過 `next/font/google` 載入，自動 self-host 並設定 `font-display: swap`。

#### Scenario: 字體正確套用
- **WHEN** 檢視頁面標題與內文
- **THEN** 標題 SHALL 使用 Noto Serif TC，內文 SHALL 使用 Noto Sans TC

#### Scenario: 字體載入不阻塞渲染
- **WHEN** 字體檔案尚未載入完成
- **THEN** SHALL 先使用系統備用字體顯示文字（swap），字體載入後再替換

### Requirement: 統一的間距與圓角規範
設計系統 SHALL 定義一致的間距（padding/margin）與圓角（border-radius）數值，確保各區塊風格統一。

#### Scenario: 區塊間距一致
- **WHEN** 檢視各 section 區塊
- **THEN** 各區塊的上下間距 SHALL 使用統一的設計系統數值
