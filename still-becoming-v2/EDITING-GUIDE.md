# Still Becoming：修改说明与展示前检查

## 修改每个素材的文字

打开 `script.js`，最上面的 `const fragments = [...]` 是唯一的 metadata 编辑入口。
通过 `id` 找到对象：vlog、piano、plog、poster、wireframe、doc、rock-museum-unity、music-board、rulebook。

- `title`：作品标题。
- `typeLabel`：自定义显示的类型名称，例如 3D model；不要用它替换程序内部的 `type`。
- `status`：状态，例如 unfinished / rough cut。
- `date`：最后修改日期，支持 YYYY-MM-DD 或 YYYY.M.D。不确定就保留空字符串。
- `annotation`：你喜欢、想留下的部分，对应 what I liked about it。
- `reason`：为什么暂停，对应 why it stopped。
- `alt`：图片的客观替代描述；图片系列的描述在 images 中。

只改引号内的文字，保留字段之间的逗号。如果文字含英文双引号，要写成 \"；或者用中文引号。空字符串不会在 metadata 里显示。不要修改 id、type、src 或图片路径：旧收藏和便签依赖稳定的 id。

作者已补充 metadata，并确认 DOCX 正文；日期处理已兼容点分隔写法，自定义类型名称使用 typeLabel。旧的未使用字段（todo、thought、possibility、stoppedAt 等）与标题二次覆盖逻辑已删除。

`documentParagraphs` 是 DOCX 的网页正文，不是 metadata。修改项目描述文档时，如需网页同步，请更新这部分。

## 文件职责

- `index.html`：语义结构、标题、按钮和开场提示。搜索 unfoldHint 可修改 click to unfold。
- `style.css`：颜色、字体、纸张布局、动画、手机断点。已展开格式并添加分区注释。
- `script.js`：素材清单、去白底、动画音效、路由、收藏、便签与绘画。已添加 01–12 功能分区注释。
- `assets/fonts/`：本地字体与 OFL 授权文本；网站不需要在线字体服务。

手写字体优先保留原来的系统字体，缺少时使用项目内的 Caveat，最后回退 cursive。正文字体优先使用项目内的 EB Garamond，失败时使用 Georgia / serif。因此跨设备都能阅读，但手写字形不会保证像素级一致。

## 课程要求与检查范围（2026-10-04）

依据 weekly schedule 的 Sep 3 条目，明确涉及评分：正确 HTML 语法、字体 fallback、正确文档结构、有意义的标题与组织、清晰可读代码。课程材料未提供完整评分权重，不能承诺分数。

已检查：
- 主入口 HTML5 解析无错误、无重复 ID；设置语言、字符编码、viewport。
- 一个主 h1；主页 main、分区标题、metadata 的 dl/dt/dd、原生按钮与 dialog。
- 图片替代说明、装饰图片空 alt、工具可访问名称、可见键盘焦点。
- 修复跳过开场链接；收藏弹窗 Esc 关闭及焦点返回。
- CSS/JS/HTML 独立，完成格式化；JS 语法检查。
- 本地字体加载与回退链；字体采用 swap。
- 触屏删除按钮始终可见且为 44×44 CSS px；手机增加便签快捷入口。
- 保留减少动态效果设置和用户点击后播放音效的逻辑。

展示前仍需完成：
1. 作者已填写 metadata 并核对文档正文；展示前可再校对英文拼写。
2. 有语言内容的视频需要准确字幕/文字稿；音频也应有适当的文字说明。目前尚未完成这些媒体替代内容。
3. PDF 图片没有可选择的文本层；原始 PDF 链接仍保留，不能据此认定 PDF 已全面无障碍。
4. 用真实手机和 Windows 设备再看一次；自动测试是 Chrome 模拟视口/触控，不等同于全平台认证。
5. 本次修改在本地项目，发布前确认 GitHub Pages 使用的版本与本地一致。

网站素材与项目内原型的全部内容没有做完整无障碍认证；本清单不代表完整评分表或满分保证。

## 最终课程对照与可学习的方法

- 课件 10–19 / schedule Sep 3：语义 HTML、明确分区、alt、字体回退、可读代码。主网站已采用 main、aside、section、dl、原生 button/dialog，并保留键盘焦点和跳过入口。
- 课件 26–48 / Sep 15–17：HTML/CSS/JS 分工、外部样式表、可复用 class、唯一 id。可从 metadata 的数据清单 → showFragment → dl 渲染学习“内容与展示分离”；typeLabel 和 type 分离，避免文案修改影响媒体渲染。
- 课件 65–79 / Sep 22：border-box、margin/padding、相对宽度。可查看 workspace 的 grid、gap 和 minmax，以及装饰胶带的百分比宽度，理解拼贴外观背后的稳定布局。
- 课件 81–100 / Sep 24–28：响应式还包括输入方式。可查看手机断点、hover:none / pointer:coarse、图片 object-fit 和 clamp；无需为展示课堂技巧重做已实测可用的手机布局。
- 课件 101 / Oct 1：prefers-reduced-motion 同时用于 CSS 和 JS；不只关闭 CSS 动画，也缩短开场并停用其音效。
- 课件 22–24 / Sep 8：用 Git 提交可回溯版本；发布后要验证 Pages 的根入口确实打开 v2。

没有为套用课堂例子增加不必要功能。原始 Playlist Copilot 是作为作品展示的交互线框，不是真实 Spotify 登录/生成服务；其原始内部代码保持原样，不应在展示时宣称为真实联网服务。

最终检查覆盖全部 9 个 fragment、素材路径、日期格式、收藏/便签持久化、绘画、PDF 与图片系列导航、开场音效和减少动态效果、键盘跳过、弹窗关闭、字体加载及 320–1440px 抽查。测试通过不等于所有浏览器或完整无障碍认证；媒体替代内容和 PDF 文本层仍可后续完善。
