import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "@tanstack/react-start/config"
import tsConfigPaths from "vite-tsconfig-paths"

export default defineConfig({
    server: {
        preset: 'vercel',
      },
    tsr: {
        appDirectory: "app"
    },
    vite: {
        plugins: [
            tailwindcss(),
            tsConfigPaths({
                projects: ["./tsconfig.json"]
            })
        ]
    }
})
