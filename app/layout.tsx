import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sysoul | 具身智能基础设施",
  description: "Sysoul 为机器人提供计算、控制与技能基础设施。"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
