## ADDED Requirements

### Requirement: RWD 網格佈局
Portfolio 區塊 SHALL 以網格佈局展示作品圖片。手機裝置（< 768px）SHALL 顯示 1-2 欄，桌面裝置 SHALL 顯示 3-4 欄。

#### Scenario: 手機裝置佈局
- **WHEN** 視窗寬度小於 768px
- **THEN** 作品圖片 SHALL 以 1-2 欄網格排列

#### Scenario: 桌面裝置佈局
- **WHEN** 視窗寬度大於等於 1024px
- **THEN** 作品圖片 SHALL 以 3-4 欄網格排列

### Requirement: 分類標籤篩選
Portfolio SHALL 提供分類標籤按鈕，包含：全部、佛像系列、神桌配套、宗教文物。點擊標籤 SHALL 篩選顯示對應分類的作品。

#### Scenario: 點擊分類標籤篩選作品
- **WHEN** 使用者點擊「佛像系列」標籤
- **THEN** SHALL 僅顯示屬於「佛像系列」分類的作品圖片

#### Scenario: 預設顯示全部作品
- **WHEN** 頁面載入完成
- **THEN** 「全部」標籤 SHALL 為預設選中狀態，顯示所有作品

### Requirement: Lightbox 圖片放大
點擊作品圖片 SHALL 開啟 Lightbox 模態視窗，顯示該作品的放大圖片與作品名稱簡介。

#### Scenario: 開啟 Lightbox
- **WHEN** 使用者點擊任一作品縮圖
- **THEN** SHALL 顯示全螢幕 Lightbox 覆蓋層，包含放大圖片與作品名稱

#### Scenario: 關閉 Lightbox
- **WHEN** 使用者點擊 Lightbox 外部區域或關閉按鈕
- **THEN** Lightbox SHALL 關閉，回到作品列表

#### Scenario: Lightbox 鍵盤操作
- **WHEN** Lightbox 開啟狀態下使用者按下 Escape 鍵
- **THEN** Lightbox SHALL 關閉

### Requirement: 作品圖片使用 WebP 格式並 lazy loading
所有作品圖片 SHALL 使用 WebP 格式，透過 `next/image` 元件載入，預設 lazy loading。每張圖片 SHALL 明確指定寬高屬性並附上描述性 alt 文字。

#### Scenario: 圖片延遲載入
- **WHEN** 作品圖片尚未進入視窗可見範圍
- **THEN** 圖片 SHALL 不會載入，直到捲動至可見範圍時才開始載入
