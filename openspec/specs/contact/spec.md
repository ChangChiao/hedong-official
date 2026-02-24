## ADDED Requirements

### Requirement: Google Maps 嵌入
Contact 區塊 SHALL 嵌入 Google Maps 顯示店家位置。地圖 SHALL 使用 iframe embed 方式載入，並設定 `loading="lazy"` 延遲載入。

#### Scenario: 地圖顯示
- **WHEN** 使用者捲動至 Contact 區塊
- **THEN** SHALL 看到嵌入的 Google Maps 顯示店家位置

### Requirement: 開啟地圖導航按鈕
Contact SHALL 提供「開啟地圖導航」按鈕，點擊後 SHALL 在新視窗開啟 Google Maps 導航至店家地址。

#### Scenario: 點擊導航按鈕
- **WHEN** 使用者點擊「開啟地圖導航」按鈕
- **THEN** SHALL 在新分頁開啟 Google Maps 並導航至店家地址

### Requirement: 點擊撥號功能
電話號碼 SHALL 使用 `tel:` 連結，手機用戶點擊即可直接撥打電話。

#### Scenario: 手機點擊撥號
- **WHEN** 手機用戶點擊電話號碼連結
- **THEN** SHALL 觸發手機的撥號功能，自動帶入店家電話號碼

### Requirement: LINE 聯絡按鈕
Contact SHALL 提供 LINE 聯絡按鈕，點擊後 SHALL 開啟 LINE 加入好友或聊天頁面。

#### Scenario: 點擊 LINE 按鈕
- **WHEN** 使用者點擊 LINE 聯絡按鈕
- **THEN** SHALL 導向 LINE 加入好友頁面

### Requirement: 營業時間與地址資訊
Contact SHALL 顯示店家的完整地址與營業時間資訊。

#### Scenario: 資訊完整顯示
- **WHEN** 使用者查看 Contact 區塊
- **THEN** SHALL 看到店家地址、電話號碼與營業時間
