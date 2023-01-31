import { defineConfig } from '@wagmi/cli'
import { hardhat, react } from '@wagmi/cli/plugins'

export default defineConfig(() => {
  return {
    out: 'src/generated.ts',
    contracts: [],
    plugins: [
      hardhat({
        project: './contracts',
        sources: 'src',
      }),
      react(),
    ],
  }
})
