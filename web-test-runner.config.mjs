import { esbuildPlugin } from "@web/dev-server-esbuild"
import { chromeLauncher } from "@web/test-runner"

export default {
  files: ["./src/example-element.tests.ts"],
  plugins: [esbuildPlugin({ ts: true })],
  browsers: [chromeLauncher({ launchOptions: { args: ["--no-sandbox"] } })],
}
