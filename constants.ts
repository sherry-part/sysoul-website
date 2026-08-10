export interface Bubble {
  text: string;
  top: string;
}

export interface Slide {
  id: string;
  index: string;
  label: string;
  title: string;
  visual: "machine" | "body" | "cyber";
  leftBubbles: Bubble[];
  rightBubbles: Bubble[];
}

export const slides: Slide[] = [
  {
    id: "allinone",
    index: "01",
    label: "THE BRAIN",
    title: "希秀智脑",
    visual: "machine",
    leftBubbles: [
      { text: "Robonix 操作系统", top: "20%" },
      { text: "开箱即用，部署更快", top: "50%" },
      { text: "技能与模型持续进化", top: "82%" },
    ],
    rightBubbles: [
      { text: "计算 · 控制 · 技能", top: "22%" },
      { text: "大脑-小脑-本体协同", top: "50%" },
      { text: "打破封闭生态", top: "82%" },
    ],
  },
  {
    id: "cyber",
    index: "02",
    label: "THE CYBER",
    title: "赛博机器人 · 数据引擎",
    visual: "cyber",
    leftBubbles: [
      { text: "硬件层直采技术，破除封闭系统壁垒", top: "18%" },
      { text: "非侵入式架构，无需安装任何软件", top: "48%" },
      { text: "毫秒级实时响应，采集精度100%", top: "80%" },
    ],
    rightBubbles: [
      { text: "同时支持上千台机器并行工作", top: "18%" },
      { text: "积木式低代码流程编排，拖拉拽上手", top: "48%" },
      { text: "覆盖工业、政务、互联网全场景", top: "80%" },
    ],
  },
  {
    id: "body",
    index: "03",
    label: "THE BODY",
    title: "本体方案",
    visual: "body",
    leftBubbles: [
      { text: "XiUOS 小脑内核", top: "20%" },
      { text: "关节运控算法 · 实时精准控制", top: "50%" },
      { text: "原理图全开放，从底层构建", top: "82%" },
    ],
    rightBubbles: [
      { text: "兼容多形态机器人", top: "22%" },
      { text: "性能提升效果显著", top: "50%" },
      { text: "研究教学 · 开源可复现", top: "82%" },
    ],
  },
];

export const partners = [
  { name: "CCF", logo: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/CCF.png" },
  { name: "Syswonder", logo: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/Syswonder.svg" },
  { name: "PKU", logo: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/PKU.png" },
  { name: "THU", logo: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/THU.png" },
  { name: "SJTU", logo: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/SJTU.png" },
  { name: "ZJU", logo: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/ZJU.webp" },
  { name: "ICT-CAS", logo: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/ICT-CAS.png" },
  { name: "HZDU", logo: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/HZDU.svg" },
  { name: "ZJUT", logo: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/ZJUT.png" },
  { name: "AIIT", logo: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/AIIT.png" },
  { name: "AgileX", logo: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/agilex.png" },
  { name: "Aubo", logo: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/Aubo.png" },
  { name: "DeepRobotics", logo: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/DeepRobotics.png" },
  { name: "Hantewin", logo: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/Hantewin.png" },
  { name: "Inspire", logo: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/Inspire.png" },
  { name: "Jaka", logo: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/Jaka.png" },
  { name: "LinkerBot", logo: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/LinkerBot.png" },
  { name: "ModelBest", logo: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/ModelBest.svg" },
  { name: "Yobotics", logo: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/Yobotics.png" },
  { name: "BeingBeyond", logo: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/BeingBeyond.svg" },
];
