# 在一起 (Love Together) - 情侣关系管理APP前端

## 项目说明

这是一个情侣关系管理APP的前端静态页面，通过 Express 服务器提供静态文件服务。

## 部署到 Render.com

### 步骤：

1. **创建 GitHub 仓库**
   - 在 GitHub 上创建新仓库，例如 `love-together-frontend`
   - 将此目录的所有文件推送到仓库

2. **在 Render.com 创建 Web Service**
   - 登录 https://dashboard.render.com
   - 点击 "New" → "Web Service"
   - 连接你的 GitHub 仓库 `love-together-frontend`
   - 配置：
     - **Build Command**: `npm install`
     - **Start Command**: `node server.js`
     - **Environment**: Node
     - **Region**: 选择离你最近的区域
   - 点击 "Create Web Service"

3. **等待部署完成**
   - Render 会自动构建和部署
   - 完成后会给你一个永久地址，例如 `https://love-together-frontend.onrender.com`

4. **在手机上使用**
   - 用 Safari 打开部署地址
   - 底部分享按钮 → 添加到主屏幕
   - APP 就可以像原生应用一样使用了

## 更新前端

当需要更新前端代码时：
1. 在本地修改 love-together 项目代码
2. `npm run build` 重新构建
3. 将 `dist/` 目录的新文件复制到这个项目的 `dist/` 目录
4. 推送到 GitHub
5. Render.com 会自动重新部署

## 注意事项

- Render.com 免费版有冷启动延迟（首次访问约30秒）
- 数据存储在 localStorage，不同手机各自独立
- 如需同步数据，在设置页面配置后端服务器地址：`https://love-together-server.onrender.com`
