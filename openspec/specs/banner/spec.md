## ADDED Requirements

### Requirement: 全幅背景圖展示
Banner 區塊 SHALL 佔據視窗全寬，顯示一張高質感的店面或工藝作品背景圖（WebP 格式）。背景圖 SHALL 使用 `next/image` 元件載入並設定 `priority` 屬性優先載入。

#### Scenario: Banner 圖片載入
- **WHEN** 頁面載入完成
- **THEN** Banner SHALL 顯示全幅背景圖，圖片 SHALL 作為 LCP 元素優先載入

### Requirement: Ken Burns 動態效果
Banner 背景圖 SHALL 具備 Ken Burns Effect（輕微的緩慢縮放動畫），增加視覺動態質感。

#### Scenario: 動態縮放效果播放
- **WHEN** 使用者進入頁面
- **THEN** Banner 背景圖 SHALL 呈現緩慢的縮放動畫效果

### Requirement: 品牌標語展示
Banner SHALL 在背景圖上方疊加顯示品牌標語文字（如：「傳承工藝，誠心禮佛」）。標語 SHALL 使用襯線字體，文字清晰可辨。

#### Scenario: 標語可見性
- **WHEN** 使用者查看 Banner 區塊
- **THEN** SHALL 看到品牌標語文字覆蓋於背景圖上方，文字清晰易讀

### Requirement: Banner 圖片預設寬高比
Banner SHALL 明確指定圖片的寬高比（aspect ratio），避免載入過程中產生版面位移（CLS）。

#### Scenario: 圖片載入不產生版面位移
- **WHEN** 頁面載入過程中 Banner 圖片尚未完成載入
- **THEN** Banner 區域 SHALL 預留正確的高度空間，CLS 值 SHALL 為 0
