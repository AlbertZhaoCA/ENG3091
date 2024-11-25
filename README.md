# Kean ENG 3091 TECHNICAL WRITING Final Project

# 如何部署本项目

### 先决条件

- [Node.js](https://nodejs.org/) (包含 npm)

### 安装 Node.js 和 npm

#### 在 Windows 上安装 Nodejs 和 NPM

1. **下载 Node.js 安装程序**：

   - 访问 [Node.js 官方网站](https://nodejs.org/)。
   - 点击下载最新的 LTS（长期支持）版本。

2. **运行安装程序**：

   - 下载完成后，运行安装程序。
   - 按照安装向导的指示进行安装。确保选中 "Automatically install the necessary tools" 选项。

3. **验证安装**：

   - 打开命令提示符（Command Prompt）。
   - 运行以下命令来验证安装：
     ```bash
     node -v
     npm -v
     ```
   - 你应该会看到 Node.js 和 npm 的版本号。

4. 克隆仓库：

   ```bash
   git clone https://github.com/AlbertZhaoCA/ENG3091
   cd your-repo-name
   ```

5. 安装依赖

   ```bash
   npm install
   ```

6. 运行开发服务器
   ```bash
   npm run dev
   ```

7. 更新

``` bash
git add --all
git commit
git commit -m "更新"
```

8. 更新本地代码

``` bash
git push
```



预览数据都放在`@/data/`里面，具体数据放在`@/data/details`里，event数据用md或者mdx文件保存

