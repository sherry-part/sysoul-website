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
    title: "一体机 · 智脑盒子",
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
    id: "body",
    index: "02",
    label: "THE BODY",
    title: "联名本体 · 物理世界",
    visual: "body",
    leftBubbles: [
      { text: "XiUOS 小脑", top: "20%" },
      { text: "关节运控算法", top: "50%" },
      { text: "实时精准控制", top: "82%" },
    ],
    rightBubbles: [
      { text: "兼容多形态机器人", top: "22%" },
      { text: "联名款 + 开源款", top: "50%" },
      { text: "稳定 · 精准 · 可复用", top: "82%" },
    ],
  },
  {
    id: "cyber",
    index: "03",
    label: "THE CYBER",
    title: "赛博机器人 · 虚拟世界",
    visual: "cyber",
    leftBubbles: [
      { text: "感控一体", top: "20%" },
      { text: "虚拟仿真验证", top: "50%" },
      { text: "数字世界先行一步", top: "82%" },
    ],
    rightBubbles: [
      { text: "连接仿真与真实部署", top: "22%" },
      { text: "想法先被数字验证", top: "50%" },
      { text: "降低试错成本", top: "82%" },
    ],
  },
];

export const partners = [
  { name: "CCF", logo: "/images/CCF.png" },
  { name: "Syswonder", logo: "/images/Syswonder.svg" },
  { name: "PKU", logo: "/images/PKU.png" },
  { name: "THU", logo: "/images/THU.png" },
  { name: "SJTU", logo: "/images/SJTU.png" },
  { name: "ZJU", logo: "/images/ZJU.webp" },
  { name: "ICT-CAS", logo: "/images/ICT-CAS.png" },
  { name: "HZDU", logo: "/images/HZDU.svg" },
  { name: "ZJUT", logo: "/images/ZJUT.png" },
  { name: "AIIT", logo: "/images/AIIT.png" },
  { name: "AgileX", logo: "/images/agilex.png" },
  { name: "Aubo", logo: "/images/Aubo.png" },
  { name: "DeepRobotics", logo: "/images/DeepRobotics.png" },
  { name: "Hantewin", logo: "/images/Hantewin.png" },
  { name: "Inspire", logo: "/images/Inspire.png" },
  { name: "Jaka", logo: "/images/Jaka.png" },
  { name: "LinkerBot", logo: "/images/LinkerBot.png" },
  { name: "ModelBest", logo: "/images/ModelBest.svg" },
  { name: "Yobotics", logo: "/images/Yobotics.png" },
  { name: "BeingBeyond", logo: "/images/BeingBeyond.svg" },
];
