import { useAccount } from 'wagmi'

import { Account, Connect, NetworkSwitcher } from './components'
import { useCounterRead } from './generated'

export function App() {
  const { isConnected } = useAccount()
  const { data } = useCounterRead({ functionName: 'number' }) 

  return (
    <>
      <h1>wagmi + Next.js + @wagmi/cli (Etherscan)</h1>

      <Connect />

      {data?.toString()}

      {isConnected && (
        <>
          <Account />
          <hr />
          <NetworkSwitcher />
        </>
      )}
    </>
  )
}
