import React, { ReactNode } from "react";
import '@/styles/global.css'

import GlassPane from "../../components/GlassPane";
interface Props {
  children?: ReactNode
  // any props that come into the component
}
export default function AuthRootLayout({ children, ...props }: Props) {
  return (
    <html lang="en">
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">{children}</GlassPane>
      </body>
    </html>
  );
}
