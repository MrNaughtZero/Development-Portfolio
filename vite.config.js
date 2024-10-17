import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import svgr from "@svgr/rollup";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@atoms": path.resolve(__dirname, "./src/atoms"),
			"@common": path.resolve(__dirname, "./src/common"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@helpers": path.resolve(__dirname, "./src/helpers"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@router": path.resolve(__dirname, "./src/router"),
			"@styles": path.resolve(__dirname, "./src/styles"),
		},
	},
	plugins: [react(), svgr()],
});