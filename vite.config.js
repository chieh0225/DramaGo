import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // base 的寫法：
  // base: '/DramaGo/',

  //嚼勁自己測試github
  base:process.env.NODE_ENV === 'production'? '/DramaGoTest/#/':'/', 
  plugins: [react()],
});
