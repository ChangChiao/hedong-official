## ADDED Requirements

### Requirement: 店家歷史與經營理念
About 區塊 SHALL 顯示 100-200 字的店家簡介短文，內容涵蓋和東佛具店的歷史沿革與經營理念，強調「真材實料」與「細膩工法」。

#### Scenario: 簡介文字顯示
- **WHEN** 使用者捲動至 About 區塊
- **THEN** SHALL 看到店家歷史與經營理念的簡介文字

### Requirement: 核心服務清單
About 區塊 SHALL 列出核心服務項目清單，包含但不限於：神像整修、神像粉身、神像翻新、神像製作、神像整理。

#### Scenario: 服務項目列表
- **WHEN** 使用者查看 About 區塊
- **THEN** SHALL 看到以清單或卡片形式呈現的核心服務項目

### Requirement: 店面環境或執業形象照
About 區塊 SHALL 搭配至少一張店面環境照或老闆執業照（WebP 格式），圖片使用 `next/image` 元件並設定明確寬高。

#### Scenario: 形象照片展示
- **WHEN** 使用者查看 About 區塊
- **THEN** SHALL 看到店面或執業相關的照片搭配文字說明
