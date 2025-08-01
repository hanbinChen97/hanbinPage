import "tailwindcss/tailwind.css";
import "../globalStyles.scss";

import {ReactNode} from "react";

export default function RootLayout({children}: { children: ReactNode }) {
  return children;
}
