/**
 * @typedef {Object} TemplateConfig
 * @property {string} id - 唯一标识符，建议使用 'tpl_' 前缀
 * @property {string} name - 模板显示名称
 * @property {string} content - 模板内容，支持 markdown 和 {{variable}} 变量
 * @property {string} imageUrl - 预览缩略图 URL
 * @property {Object.<string, string>} selections - 默认选中的变量值 map (key: variable_id, value: option_value)
 * @property {string[]} tags - 模板标签数组，可选值：建筑、人物、摄影、产品、图表、卡通、宠物、游戏、创意
 */

/**
 * 模板系统版本号，每次更新 templates.js 或 banks.js 时请更新此版本号
 */
export const SYSTEM_DATA_VERSION = "0.5.0";

export const DEFAULT_TEMPLATE_CONTENT = `### Role (角色设定)
你是一位顶尖的 {{role}}，擅长制作详尽的角色设定图（Character Sheet）。你具备“像素级拆解”的能力，能够透视角色的穿着层级、捕捉微表情变化，并将与其相关的物品进行具象化还原。你特别擅长通过 {{subject}} 的私密物品、随身物件和生活细节来侧面丰满人物性格与背景故事。

### Task (任务目标)
根据用户上传或描述的主体形象，生成一张**“全景式角色深度概念分解图”**。该图片必须包含 {{layout_focus}}，并在其周围环绕展示该人物的服装分层、不同表情、核心道具、材质特写，以及极具生活气息的私密与随身物品展示。

### Visual Guidelines (视觉规范)
**1. 构图布局 (Layout):**
- **中心位 (Center):** 放置角色的 {{layout_focus}}，作为视觉锚点。
- **环绕位 (Surroundings):** 在中心人物四周空白处，有序排列拆解后的元素。
- **视觉引导 (Connectors):** 使用{{connectors}}，将周边的拆解物品与中心人物的对应部位或所属区域连接起来。

**2. 拆解内容 (Deconstruction Details):**
- **服装分层 (Clothing Layers):** 将角色的服装拆分为单品展示
- **私密内着拆解:** 独立展示角色的内层衣物，重点突出设计感与材质。例如： {{underwear_style}} （展示细节与剪裁）。
- **表情集 (Expression Sheet):** 在角落绘制 3-4 个不同的头部特写，展示不同的情绪，如： {{expressions}} 。
- **材质特写 (Texture & Zoom):** 选取关键部位进行放大特写。例如： {{texture_zoom}} ，增加对小物件材质的描绘。
- **动作:** 绘制特殊的动作和表情，例如：{{action_detail}}，增加动作的深度刻画。
- **特殊视角:** 绘制从某种特殊场景下拍摄的特殊视角，例如：{{special_view}}

- **关联物品 (Related Items):**
 - **随身包袋与内容物:** 绘制 {{bag_content}}，并将其“打开”，展示散落在旁的物品。
 - **美妆与护理:** 展示 {{cosmetics}}。
 - **私密生活物件:** 具象化角色隐藏面的物品。根据角色性格可能包括： {{private_items}}，需以一种设计图的客观视角呈现。

**3. 风格与注释 (Style & Annotations):**
- **画风:** {{art_style}}，线条干净利落。
- **背景:** {{background_style}}，营造设计手稿的氛围。
- **文字说明:** 在每个拆解元素旁模拟手写注释，简要说明材质或品牌/型号暗示。

### Workflow (执行逻辑)
1. 分析主体的核心特征、穿着风格及潜在性格。
2. 提取可拆解的一级元素（外套、鞋子、大表情）。
3. 脑补并设计二级深度元素（她内衣穿什么风格？包里装什么？独处时用什么？）。
4. 生成一张包含所有这些元素的组合图，确保透视准确，光影统一，注释清晰。
5. 使用中文，高清输出。`;

export const TEMPLATE_PHOTO_GRID = `### Photo Grid Composition (九宫格摄影)

**编辑场景:** 3x3网格布局，采用冷灰色无缝背景。人物（面部特征与上传图片完全一致）身穿 {{clothing}}，确保每张照片中人物形象保持一致。

**灯光设置:** {{lighting}}，营造统一而富有层次的光影效果。

**照片细节包括 (Grid Details)：**
1. {{grid_pose}}，画面风格统一，镜头参数为 {{lens_param}}；
2. {{grid_pose}}，镜头参数为 {{lens_param}}，展现不同的拍摄角度和表情；
3. {{grid_pose}}，镜头参数为 {{lens_param}}，捕捉细腻的情感表达；
4. {{grid_pose}}，镜头参数为 {{lens_param}}，利用景深营造层次感；
5. {{grid_pose}}，镜头参数为 {{lens_param}}，突出动态瞬间的生动性；
6. {{grid_pose}}，镜头参数为 {{lens_param}}，通过前景虚化增强视觉焦点；
7. {{grid_pose}}，镜头参数为 {{lens_param}}，展现优雅的姿态和放松的状态；
8. {{grid_pose}}，镜头参数为 {{lens_param}}，捕捉自然光线下的表情变化；
9. {{grid_pose}}，镜头参数为 {{lens_param}}，微距特写展现面部细节和质感。

**后期处理:** 保持原始素材的真实感，平滑对比度，适度应用柔化效果，确保整体色调统一且富有质感。`;

export const TEMPLATE_PHOTO_GRID_V2 = `### Photo Grid Composition (九宫格摄影出格版)

**编辑场景:** 3x3网格布局，采用冷灰色无缝背景。人物（面部特征与上传图片完全一致）身穿 {{clothing}}，确保每张照片中人物形象保持一致。

**灯光设置:** {{lighting}}，营造统一而富有层次的光影效果。

**照片细节包括 (Grid Details)：**
1. {{grid_pose}}，画面风格统一，镜头参数为 {{lens_param}}；
2. {{grid_pose}}，镜头参数为 {{lens_param}}，展现不同的拍摄角度和表情；
3. {{grid_pose}}，镜头参数为 {{lens_param}}，捕捉细腻的情感表达；
4. {{grid_pose}}，镜头参数为 {{lens_param}}，利用景深营造层次感；
5. {{grid_pose}}，镜头参数为 {{lens_param}}，突出动态瞬间的生动性；
6. {{grid_pose}}，镜头参数为 {{lens_param}}，通过前景虚化增强视觉焦点；
7. {{grid_pose}}，镜头参数为 {{lens_param}}，展现优雅的姿态和放松的状态；
8. {{grid_pose}}，镜头参数为 {{lens_param}}，捕捉自然光线下的表情变化；
9. {{grid_pose}}，镜头参数为 {{lens_param}}，微距特写展现面部细节和质感。

**后期处理:** 保持原始素材的真实感，平滑对比度，适度应用柔化效果，确保整体色调统一且富有质感。

**需要单独处理:**中央宫格的图片不局限在自己的宫格内，形成一种从中央宫格跃出画面的3D立体视觉，中央宫格人物占据图片较大面积且全身出镜，会覆盖到其他宫格，并对其他宫格形成阴影效果，营造一种裸眼3D的视觉张力`;

export const TEMPLATE_FASHION_MOODBOARD = `### Fashion Illustration Moodboard (时尚插画情绪板)
一张9:16竖屏的高级时尚插画情绪板，模拟平板扫描效果。

**背景:** 纯手绘的奶油色水彩晕染纸张，带有淡淡的粉色网格。
**视觉核心:** 数张具有明显白色模切宽边和柔和投影的亮面乙烯基贴纸。

**贴纸内容:**
- **中央:** {{sticker_core}}，光线明亮。
- **左侧:** {{fashion_deconstruct}}。
- **右下角:** 关键的隐藏层贴纸：一套折叠整齐的内衣，展现细腻纹理。
- **互动元素:** 一只穿着粉色系、与用户服装呼应的 {{toy_companion}} 正趴在一个手绘对话框上。

**装饰细节:** 周围装饰着蜡笔质感的 {{sticker_decor}} 和潦草的中文书法标注OOTD。
**注意:** 画面中绝无任何人手、笔或物理桌面背景，纯粹的平面艺术插画。`;

export const TEMPLATE_CHARACTER_SELFIE = `### Character Selfie (人物趣味合影)
让 {{character_companion}} 站在男人旁边，{{action_pose}}，同时对着镜头露出调皮的表情。

**背景:** 以 {{background_scene}} 为背景。

**要求:** 保持自拍构图不变，让两个角色自然地融入画面，光影统一，互动自然。`;

export const TEMPLATE_CLASSIC_SCENE = `### 经典场景微缩复刻

展示一个精致的、微缩 3D 卡通风格的{{classic_scene}}场景，采用清晰的 45° 俯视等轴侧视角（Isometric view）。

**核心构图：** 将主体最经典的形象突出地置于中心。自动搭配比例适宜的关键元素图标、象征性物品、迷人的小角色以及能诠释主体故事的道具。整体布局应当充满趣味且紧凑聚集，宛如一套高端的玩具盲盒套装。

**渲染与材质：** 采用{{render_style}}风格进行渲染。建模必须精细、圆润流畅且质感丰富。使用逼真的 PBR 材质：混合用于有机形态的柔和哑光粘土、用于水体/玻璃元素的光泽树脂，以及用于结构组件的光滑 PVC 材质。着重表现具有触感、“看起来手感很好”的纹理细节。

**灯光与氛围：** 采用柔和、逼真的摄影棚布光配合全局光照（Global Illumination）。利用柔和的阴影营造出温暖、舒适且充满魔力的氛围。

**布局：** 保持干净、极简的布局，使用与主体配色相协调的纯色背景。

**文字：** 在{{position}}，使用巨大的、圆润的 3D 字体醒目地展示主体名称，使其轻微悬浮于场景上方。`;

export const TEMPLATE_CORPORATE_GROWTH = `### 可视化企业成长之路

**角色定义**  
你是一位企业演变建筑师 (Corporate Evolution Architect)。你的目标是创建一个超高密度、垂直堆叠的等距轴测（Isometric）3D 渲染可视化图像，展示 {{company}} 公司的技术和产品历史。通过图像展示一个企业的时间线：底部是简陋的创业故事，通过产品迭代垂直向上升起，直到现代或未来的巅峰。

**核心能力 | 关键视觉策略（rameless Tech-Lapse）：**
- **根除容器：** 严禁使用底板、边框或横截面视图。底部边缘是创业基地（车库/实验室/小办公室），无限延伸。
- **垂直时间线：** “之字形上升（Zig-Zag Ascent）”穿越创新历程。  
  - 底部（前景）：创业阶段岁月 + 第一个原型机  
  - 中部（上升中）：快速增长 / 全球扩张 / 标志性的中期产品  
  - 顶部（背景）：当前总部 / 生态系统 / 未来研发
- **集成 3D 标题：** 企业 Logo 必须渲染为巨大的、电影般的 3D 字体，矗立在前景，使用公司标志性字体/材质。

**检索与梳理：**
- 提取企业历史的几个阶段。
- 列出定义每个时代的“经典产品”。
- 劳动力演变：可视化员工与设备的变化。

**构图与光影：**  
无框架、无边界、无横截面。垂直之字形时间线，将产品代际从底部的创业阶段堆叠到未来的顶部。灯光从近现代的暖光（创业初期）过渡到干净的白/蓝 LED 光（现代科技）。环境与公司经典产品随高度演变。公司的多款经典产品以“巨物化”呈现。  
移轴摄影（Tilt-shift）与 {{render_style}}，画幅 {{ratio}}。`;

export const TEMPLATE_DETECTIVE_SOCIAL = `发挥你的创意帮我一起脑洞，假设{{character_groups}}使用{{social_media}}，包括回复评论点赞，设计一些有趣、有反差的人物使用社交媒体互动朋友圈的场景，结合一些符合人物的大事件，有趣有梗有反差，制作一张{{social_media}}的截图，使用中文，{{ratio}}。
`;

export const TEMPLATE_MAGAZINE_COVER = `### PROJECT GOAL | 项目目标
生成一张 9:16 旅游杂志封面级照片，以我上传的真人照片为基准，实现 100% 五官还原，呈现专业、精致、具有真实杂志质感的封面画面。

### SUBJECT | 人物设定
根据我上传人物的五官特征进行完整还原；人物置身于 {{travel_location}}，请根据这个地理位置给人物穿着符合当地此刻的实时天气、温度与季节服装逻辑；整体风格自然、优雅、有现场氛围。

### POSE & EXPRESSION | 姿态与表情
人物以杂志封面标准姿态入镜，略带从容质感；面部表情自然放松但具吸引力；
身体姿势根据场景与天气自由适配，呈现"在当地旅行中的真实状态"。

### ENVIRONMENT | 场景要求
背景呈现用户输入的地名代表性视觉线索，请根据用户输入的地理位置呈现符合当地此刻的实时天气、温度与季节场景逻辑；保持高级写实风格，不夸张、不超现实；
光线以真实自然光为主，具有现场环境的时间感。

### CAMERA & AESTHETICS | 拍摄规格
画幅比例: {{ratio}}
构图: 充分利用竖幅空间，打造"封面级"视觉中心；镜头语言: 专业摄影棚级别的清晰度与景深；肤质感可见毛孔与自然纹理（非磨皮）；整体氛围具有高级旅行杂志的真实感与美感。

### MAGAZINE DESIGN | 封面设计
版面风格现代、干净、具有国际旅行杂志氛围；
主标题、副标题、杂志图形元素可自动生成但需与人物与地点匹配；
色彩搭配高级、协调；
最终呈现接近《Vogue》《National Geographic Traveler》级别的封面气质。`;

export const TEMPLATE_MANGA_TO_REALITY = `### SUBJECT | 人物主体
{{character_originality}}，从漫画分镜边框中跨步走出并打破界限。真实版本与漫画版本之间充满动态且无缝的互动。

### SETTING | 场景设定
地点：{{comic_scene}}
地板上摊开一本巨大的漫画书。

### MANGA DETAILS | 漫画细节
- **风格：** 超现实风格的黑白四格漫画
- **技法：** 正宗日式排版，网点纸效果，粗黑墨线，线条清晰利落
- **内容：** 同一个人的漫画版本被困在漫画书里面
- **对比：** 单色漫画世界与鲜艳现实世界的强烈视觉对比

### REAL LIFE VERSION | 真实版本
- **视觉质感：** 生动、色彩丰富、照片级真实感、超逼真 8K 画质
- **互动方式：** 动态地浮现于漫画表面，直接与漫画版本互动
- **情绪氛围：** 元风格 (Meta)，幽默的相遇

### TECHNICAL SPECS | 技术规格
- **画质：** 超逼真，8K 分辨率，高度细节化
- **融合效果：** 漫画线条艺术与现实摄影的无缝融合
- **画幅比例：** {{ratio}}`;

export const TEMPLATE_FISHEYE_URBAN = `### 极端鱼眼都市奇观

{{character_originality}}，用{{lens_type}}拍摄的照片，主体是一位穿着{{school_uniform}}的{{subject}}，在{{urban_location}}兴奋地跳起，{{dynamic_action}}。

**视觉焦点：**
- **前景细节：** {{fingernail_detail}}
- **背景景观：** {{building_cluster}}，街道上挤满行人和车辆
- **超现实元素：** {{monster_element}}漂浮在城市上空，{{monster_feature}}环绕着扭曲的城市景观

**整体基调：**
创造一个融合现实与奇幻的都市奇观，鱼眼镜头的畸变效果与卡通怪兽的出现形成强烈对比，营造出梦幻而充满活力的视觉冲击。`;

export const TEMPLATE_INDUSTRIAL_DESIGN = `### 目标
设计一个顶级的工业设计产品介绍页，使用极简的宣传页风格；需要深刻理解该设计师的设计理念、设计风格，并将这种设计理解完全融入到设计产品的工业设计与展示页面中

### 内容
- **设计师：** {{designer}}
- **产品：** {{design_item}}

### 画面
- **设计师介绍：**
约占整个画面非常少的部分，包括设计师的介绍（极具氛围感的头像）与设计师对于这个产品的设计思路与设计理解，以及设计师的签名。
- **画面核心内容：**
占整个画面的80%或更多用于呈现产品本身，一个完全符合设计师自己设计风格与设计方法的顶级产品设计图（一个完整的单张产品效果的呈现），基于工业成品设计成果使用不同的构图。整体配色需要与设计师的风格与产品内容完全相符
- **构图：**
最终构图：{{ratio}} 
整体排版主次分明，规整，极具格调与设计特色`;

export const TEMPLATE_RAINDROP_ART = `### Raindrop Art (雨滴定格艺术)

**核心表现:**
捕捉了雨滴落入水面的瞬间，雨滴打落在水面上，飞溅的水珠在空中形成一个抽象的 {{rain_shape}}。

**艺术视觉:**
水滴构成的结果相对比较概念化，更遵从水滴溅落形成的动态感，但能从动作或神态中感受到其表达的艺术视觉。画面将雨水与自然交互的微妙之美的定格艺术作品，动感与优雅交融，呈现出诗意的视觉表达。

**环境背景:**
背景是朦胧的雨景。

**规格:**
{{ratio}}`;

export const TEMPLATE_ART_GROWTH = `### 可视化艺术成长之路

**角色定义**  
你是一位历史演变建筑师 (History Evolution Architect)。你的目标是创建一个超高密度、垂直堆叠的等距轴测（Isometric）3D 展厅渲染可视化图像，展示 {{art_type}} 的发展历史。通过展厅来展示一个里程发展的时间线：底部是简陋的发展初期，通过历史更迭迭代垂直向上升起，直到现代或未来的巅峰。

**核心能力 | 关键视觉策略（rameless Tech-Lapse）：**
- **展厅模拟：** 使用一个多层的艺术展厅承载所要表达的事物发展，层级代表时间维度的发展，每层可能存在不同的“房间”用于展示同一时代不同风格的作品
- **根除容器：** 严禁使用底板、边框或横截面视图。底部边缘是历史起源（原始社会或古代社会）
- **垂直时间线：** “之字形上升（Zig-Zag Ascent）”穿越创新历程。  
  - 底部（前景）：起源与原型  
  - 中部（上升中）：古代到现代的辉煌发展  
  - 顶部（背景）：当前的发展状态与未来的可能性
- **集成 3D 标题：** 明确的与主题相符合的标题

**检索与梳理：**
- 提取重要发展历史中的的几个阶段。
- 列出定义每个时代的“经典”。
- 工具与媒介的变化

**构图与光影：**  
等距视角的展厅视角。垂直之字形时间线，将事物发展从底部的创业阶段堆叠到未来的顶部，环境与划时代的经典作品随高度演变。多款经典产品以“巨物化”呈现。  
移轴摄影（Tilt-shift）与 {{render_style}}，画幅 {{ratio}}。`;

export const TEMPLATE_MINIATURE_DESK = `### 窗边书桌微缩场景

展示一个在窗边书桌上的场景。

**核心内容：**
《{{show_name}}》的经典镜头微缩场景展示，采用了{{render_style}}风格，充分体现了微缩摄影的艺术表达。

**环境背景：**
背景是真实的书桌，有一些制作工具，散乱的书本，营造一种刚刚加工完这个场景的凌乱感。书桌上还有编制的图纸和原型手稿。

**窗外互动：**
窗外，真实的{{character_name}}正好奇地向内观察这个桌上的作品。

**画面规格：**
{{ratio}}`;

/**
 * 可用的模板标签
 */
export const TEMPLATE_TAGS = [
  "建筑",
  "人物",
  "摄影",
  "产品",
  "图表",
  "卡通",
  "宠物",
  "游戏",
  "创意"
];

/**
 * 系统内置模板列表
 * 
 * 如何添加新模板：
 * 1. 在上方定义模板内容常量 (可选，但推荐)
 * 2. 在数组中添加一个新的配置对象
 * 3. 确保 id 唯一
 * 4. imageUrl 可以是外部链接，也可以是项目内的 import 资源
 * 5. tags 可以从 TEMPLATE_TAGS 中选择
 */
export const INITIAL_TEMPLATES_CONFIG = [
  {
    id: "tpl_default",
    name: "角色概念分解图",
    content: DEFAULT_TEMPLATE_CONTENT,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/08/ec433cf214faf102.jpg",
    author: "官方",
    selections: {},
    tags: ["人物", "创意", "图表"]
  },
  {
    id: "tpl_photo_grid",
    name: "3x3 摄影网格",
    content: TEMPLATE_PHOTO_GRID,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/08/5302794e63fa130b.jpg",
    author: "官方",
    selections: {
      "clothing": "炭灰色无袖连衣裙",
      "grid_pose-0": "前景手指虚化",
      "grid_pose-1": "目光锁定镜头",
      "grid_pose-2": "单色下巴托手",
      "grid_pose-3": "正面特写阴影",
      "grid_pose-4": "斜角拍摄",
      "grid_pose-5": "双手置于锁骨",
      "grid_pose-6": "坐姿半身侧面",
      "grid_pose-7": "侧面微距水滴",
      "grid_pose-8": "回眸一笑",
      "lens_param-0": "85mm, f/1.8",
      "lens_param-1": "85mm, f/2.0",
      "lens_param-2": "50mm, f/2.2",
      "lens_param-3": "50mm, f/2.5",
      "lens_param-4": "50mm, f/3.2",
      "lens_param-5": "35mm, f/4.5",
      "lens_param-6": "85mm, f/1.9",
      "lens_param-7": "50mm, f/1.8",
      "lens_param-8": "85mm, f/2.2"
    },
    tags: ["人物", "摄影"]
  },
  {
    id: "tpl_fashion",
    name: "时尚情绪板插画",
    content: TEMPLATE_FASHION_MOODBOARD,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/08/4d9f92ccb4113fdd.jpg",
    author: "官方",
    selections: {},
    tags: ["人物", "创意", "卡通"]
  },
  {
    id: "tpl_character_selfie",
    name: "人物趣味合影",
    content: TEMPLATE_CHARACTER_SELFIE,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/08/c2312d24d0f2c38e.jpeg",
    author: "官方",
    selections: {},
    tags: ["人物", "创意"]
  },
  {
    id: "tpl_classic_scene",
    name: "经典场景微缩复刻",
    content: TEMPLATE_CLASSIC_SCENE,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/10/1eac697f5a438542.jpg",
    author: "官方",
    selections: {
      "classic_scene": "千与千寻",
      "render_style": "Octane Render 和 Cinema 4D",
      "position": "顶部中央"
    },
    tags: ["卡通", "创意", "游戏"]
  },
  {
    id: "tpl_corporate_growth",
    name: "可视化企业成长之路",
    content: TEMPLATE_CORPORATE_GROWTH,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/10/a7e87e49c6144fdc.jpg",
    author: "官方",
    selections: {
      "company": "任天堂（Nintendo）",
      "render_style": "3D像素风格",
      "ratio": "3:4竖构图"
    },
    tags: ["建筑", "创意", "图表"]
  },
  {
    id: "tpl_fisheye_urban",
    name: "极端鱼眼都市奇观",
    content: TEMPLATE_FISHEYE_URBAN,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/14/b21165a2afefaf4d.jpg",
    author: "官方",
    selections: {
      "lens_type": "极端鱼眼镜头",
      "role": "年轻女性",
      "character_originality": "使用附图中的人物，确保结果与人物一致性",
      "school_uniform": "灰色开衫和格子裙校服",
      "urban_location": "涩谷十字路口",
      "dynamic_action": "一只手夸张地伸向镜头前景",
      "fingernail_detail": "手指甲清晰可见",
      "building_cluster": "扭曲的涩谷109大楼和其他建筑林立",
      "crowd_traffic": "挤满行人和车辆",
      "monster_element": "巨大的粉色和蓝色渐变卡通怪兽",
      "monster_feature": "巨大的触手和角",
      "distorted_city": "扭曲的城市景观",
      "lighting_atmosphere": "阳光明媚",
      "shadow_contrast": "光影对比强烈",
      "ratio": "圆形画幅",
      "render_style": "高质量的 2D 插画风格",
    },
    tags: ["摄影", "创意", "人物"]
  },
  {
    id: "tpl_detective_social",
    name: "历史名人的朋友圈",
    content: TEMPLATE_DETECTIVE_SOCIAL,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/14/6ff892060de55ea9.jpg",
    author: "@dotey(宝玉)",
    selections: {
      "character_groups": "中国古代开国皇帝",
      "social_media": "微信朋友圈",
      "ratio": "9:16竖构图"
    },
    tags: ["创意", "人物", "摄影"]
  },
  {
    id: "tpl_magazine_cover",
    name: "杂志大片",
    content: TEMPLATE_MAGAZINE_COVER,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/16/a6106f5cc6e92a74.jpg",
    author: "官方",
    selections: {
      "travel_location": "东北雪乡",
      "ratio": "9:16竖构图"
    },
    tags: ["人物", "摄影", "创意"]
  },
  {
    id: "tpl_manga_reality",
    name: "漫画人物成真",
    content: TEMPLATE_MANGA_TO_REALITY,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/16/f5291c56ece88cd9.jpg",
    author: "官方",
    selections: {
      "character_originality": "使用附图中的人物，确保结果与人物一致性",
      "comic_scene": "唯美的卧室",
      "ratio": "9:16竖构图"
    },
    tags: ["人物", "创意", "卡通"]
  },
  {
    id: "tpl_industrial_design",
    name: "设计大师的产品设计",
    content: TEMPLATE_INDUSTRIAL_DESIGN,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/17/7dbe43ae66b1a78c.jpg",
    author: "官方",
    selections: {
      "designer": "Jonathan Ive (Jony Ive)",
      "design_item": "无人机",
      "ratio": "3:4竖构图"
    },
    tags: ["产品", "创意", "图表"]
  },
  {
    id: "tpl_photo_grid_v2",
    name: "3x3 摄影网格出格版",
    content: TEMPLATE_PHOTO_GRID_V2,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/17/77bfd2bf7abc3eac.png",
    author: "官方",
    selections: {
      "clothing": "炭灰色无袖连衣裙",
      "grid_pose-0": "前景手指虚化",
      "grid_pose-1": "目光锁定镜头",
      "grid_pose-2": "单色下巴托手",
      "grid_pose-3": "正面特写阴影",
      "grid_pose-4": "斜角拍摄",
      "grid_pose-5": "双手置于锁骨",
      "grid_pose-6": "坐姿半身侧面",
      "grid_pose-7": "侧面微距水滴",
      "grid_pose-8": "回眸一笑",
      "lens_param-0": "85mm, f/1.8",
      "lens_param-1": "85mm, f/2.0",
      "lens_param-2": "50mm, f/2.2",
      "lens_param-3": "50mm, f/2.5",
      "lens_param-4": "50mm, f/3.2",
      "lens_param-5": "35mm, f/4.5",
      "lens_param-6": "85mm, f/1.9",
      "lens_param-7": "50mm, f/1.8",
      "lens_param-8": "85mm, f/2.2"
    },
    tags: ["人物", "摄影"]
  },
  {
    id: "tpl_raindrop_art",
    name: "雨滴定格艺术",
    content: TEMPLATE_RAINDROP_ART,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/19/6b6e14845635b168.jpg",
    author: "@tanshilong",
    selections: {
      "rain_shape": "芭蕾舞者",
      "ratio": "3:4竖构图"
    },
    tags: ["摄影", "创意"]
  },
  {
    id: "tpl_art_growth",
    name: "可视化艺术成长之路",
    content: TEMPLATE_ART_GROWTH,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/19/47a2cbfec635a29a.jpg", 
    author: "@sundyme",
    selections: {
      "art_type": "美术学",
      "render_style": "3D像素风格",
      "ratio": "3:4竖构图"
    },
    tags: ["建筑", "创意", "图表"]
  },
  {
    id: "tpl_miniature_desk",
    name: "窗边书桌微缩场景",
    content: TEMPLATE_MINIATURE_DESK,
    imageUrl: "https://s3.bmp.ovh/imgs/2025/12/20/8e9c9c28b3d2cf1b.jpg",
    author: "@tanshilong",
    selections: {
      "show_name": "龙猫",
      "character_name": "龙猫",
      "render_style": "毛毡与粘土",
      "ratio": "4:3横构图"
    },
    tags: ["摄影", "创意", "卡通"]
  }
];
