import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useBalance } from 'wagmi'
import { formatEther } from 'viem'

// Pixel art punk SVG components
function PixelPunk({ variant = 1, className = '', style }: { variant?: number; className?: string; style?: React.CSSProperties }) {
  const punks = [
    // Punk 1 - Cyan mohawk
    <svg viewBox="0 0 24 24" className={className} style={style} key="punk1">
      <rect x="8" y="4" width="8" height="8" fill="#dbb180" />
      <rect x="9" y="5" width="2" height="2" fill="#000" />
      <rect x="13" y="5" width="2" height="2" fill="#000" />
      <rect x="10" y="8" width="4" height="1" fill="#000" />
      <rect x="10" y="1" width="1" height="4" fill="#00ffff" />
      <rect x="11" y="0" width="1" height="5" fill="#00ffff" />
      <rect x="12" y="1" width="1" height="4" fill="#00ffff" />
      <rect x="13" y="2" width="1" height="3" fill="#00ffff" />
      <rect x="8" y="12" width="8" height="6" fill="#000" />
      <rect x="6" y="14" width="2" height="4" fill="#dbb180" />
      <rect x="16" y="14" width="2" height="4" fill="#dbb180" />
    </svg>,
    // Punk 2 - Pink hair, sunglasses
    <svg viewBox="0 0 24 24" className={className} style={style} key="punk2">
      <rect x="8" y="4" width="8" height="8" fill="#c8ad7f" />
      <rect x="8" y="5" width="8" height="2" fill="#000" />
      <rect x="9" y="5" width="2" height="1" fill="#00ffff" />
      <rect x="13" y="5" width="2" height="1" fill="#00ffff" />
      <rect x="10" y="9" width="4" height="1" fill="#000" />
      <rect x="7" y="2" width="10" height="3" fill="#ff00ff" />
      <rect x="8" y="1" width="8" height="2" fill="#ff00ff" />
      <rect x="8" y="12" width="8" height="6" fill="#2a2a2a" />
      <rect x="6" y="14" width="2" height="4" fill="#c8ad7f" />
      <rect x="16" y="14" width="2" height="4" fill="#c8ad7f" />
    </svg>,
    // Punk 3 - Green alien
    <svg viewBox="0 0 24 24" className={className} style={style} key="punk3">
      <rect x="8" y="4" width="8" height="8" fill="#89ff89" />
      <rect x="9" y="5" width="2" height="3" fill="#000" />
      <rect x="13" y="5" width="2" height="3" fill="#000" />
      <rect x="9" y="5" width="1" height="1" fill="#ff0000" />
      <rect x="13" y="5" width="1" height="1" fill="#ff0000" />
      <rect x="10" y="9" width="4" height="1" fill="#000" />
      <rect x="8" y="12" width="8" height="6" fill="#4a4a4a" />
      <rect x="6" y="14" width="2" height="4" fill="#89ff89" />
      <rect x="16" y="14" width="2" height="4" fill="#89ff89" />
    </svg>,
  ]
  return punks[variant % punks.length]
}

function FloatingPunk({ delay, position, variant }: { delay: number; position: string; variant: number }) {
  return (
    <div
      className={`absolute ${position} opacity-20 animate-float`}
      style={{ animationDelay: `${delay}s` }}
    >
      <PixelPunk variant={variant} className="w-12 h-12 md:w-16 md:h-16" />
    </div>
  )
}

function WalletInfo() {
  const { address } = useAccount()
  const { data: balance } = useBalance({ address })

  const truncatedAddress = address ? `${address.slice(0, 6)}...${address.slice(-4)}` : ''
  const formattedBalance = balance ? parseFloat(formatEther(balance.value)).toFixed(4) : '0.0000'

  return (
    <div className="pixel-border bg-black/80 p-4 md:p-6 max-w-md w-full mx-auto animate-fade-in">
      <div className="text-[#00ffff] text-xs md:text-sm font-press mb-4 flex items-center gap-2">
        <span className="inline-block w-2 h-2 bg-[#00ff00] animate-pulse"></span>
        PLAYER CONNECTED
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-[#888] font-vt text-sm md:text-base">WALLET ID:</span>
          <span className="text-white font-vt text-sm md:text-base">{truncatedAddress}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-[#888] font-vt text-sm md:text-base">ETH BALANCE:</span>
          <span className="text-[#00ff00] font-vt text-sm md:text-base">{formattedBalance} ETH</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-[#888] font-vt text-sm md:text-base">NETWORK:</span>
          <span className="text-[#ff00ff] font-vt text-sm md:text-base">BASE</span>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-[#333]">
        <div className="flex items-center justify-center gap-4">
          <PixelPunk variant={0} className="w-10 h-10 md:w-12 md:h-12" />
          <div className="text-center">
            <div className="text-[#ffff00] font-press text-[10px] md:text-xs">PUNK STATUS</div>
            <div className="text-white font-vt text-lg md:text-xl">LEGENDARY</div>
          </div>
          <PixelPunk variant={1} className="w-10 h-10 md:w-12 md:h-12" />
        </div>
      </div>
    </div>
  )
}

function LandingContent() {
  return (
    <div className="text-center space-y-6 md:space-y-8 animate-fade-in">
      <div className="flex justify-center gap-3 md:gap-4 mb-6 md:mb-8">
        <PixelPunk variant={0} className="w-16 h-16 md:w-24 md:h-24 animate-bounce-slow" />
        <PixelPunk variant={1} className="w-16 h-16 md:w-24 md:h-24 animate-bounce-slow" style={{ animationDelay: '0.2s' }} />
        <PixelPunk variant={2} className="w-16 h-16 md:w-24 md:h-24 animate-bounce-slow" style={{ animationDelay: '0.4s' }} />
      </div>

      <h2 className="font-press text-[#00ffff] text-lg md:text-2xl lg:text-3xl leading-relaxed">
        INSERT COIN
        <br />
        <span className="text-[#ff00ff]">TO PLAY</span>
      </h2>

      <p className="font-vt text-[#888] text-lg md:text-xl lg:text-2xl max-w-lg mx-auto px-4">
        Connect your wallet to enter the pixel dimension. Your on-chain identity awaits.
      </p>

      <div className="pixel-border inline-block bg-black/60 px-4 md:px-6 py-3 md:py-4 mt-4">
        <div className="flex items-center gap-3">
          <span className="text-[#ffff00] font-vt text-base md:text-lg animate-blink">{">>>"}</span>
          <span className="text-white font-vt text-base md:text-lg">CLICK CONNECT ABOVE</span>
          <span className="text-[#ffff00] font-vt text-base md:text-lg animate-blink">{"<<<"}</span>
        </div>
      </div>
    </div>
  )
}

function App() {
  const { isConnected } = useAccount()

  return (
    <div className="min-h-dvh bg-[#0d0d0d] relative overflow-hidden flex flex-col">
      {/* Scanline overlay */}
      <div className="scanlines pointer-events-none fixed inset-0 z-50" />

      {/* Pixel grid background */}
      <div className="fixed inset-0 pixel-grid opacity-10" />

      {/* Floating punks background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <FloatingPunk delay={0} position="top-[10%] left-[5%]" variant={0} />
        <FloatingPunk delay={1.5} position="top-[20%] right-[8%]" variant={1} />
        <FloatingPunk delay={3} position="bottom-[30%] left-[10%]" variant={2} />
        <FloatingPunk delay={2} position="bottom-[15%] right-[5%]" variant={0} />
        <FloatingPunk delay={4} position="top-[50%] left-[3%]" variant={1} />
        <FloatingPunk delay={2.5} position="top-[40%] right-[3%]" variant={2} />
      </div>

      {/* Header */}
      <header className="relative z-10 p-4 md:p-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="pixel-border-small p-1 md:p-2 bg-black">
              <PixelPunk variant={0} className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h1 className="font-press text-white text-xs md:text-sm lg:text-base">
              PIXEL<span className="text-[#00ffff]">PUNKS</span>
            </h1>
          </div>

          <div className="connect-wrapper">
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
              }) => {
                const ready = mounted
                const connected = ready && account && chain

                return (
                  <div
                    {...(!ready && {
                      'aria-hidden': true,
                      style: {
                        opacity: 0,
                        pointerEvents: 'none',
                        userSelect: 'none',
                      },
                    })}
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          <button
                            onClick={openConnectModal}
                            type="button"
                            className="pixel-button font-press text-[10px] md:text-xs px-4 md:px-6 py-3 md:py-4"
                          >
                            CONNECT
                          </button>
                        )
                      }

                      if (chain.unsupported) {
                        return (
                          <button
                            onClick={openChainModal}
                            type="button"
                            className="pixel-button-danger font-press text-[10px] md:text-xs px-4 md:px-6 py-3 md:py-4"
                          >
                            WRONG NETWORK
                          </button>
                        )
                      }

                      return (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={openChainModal}
                            type="button"
                            className="pixel-button-secondary font-vt text-xs md:text-sm px-3 py-2"
                          >
                            {chain.name}
                          </button>
                          <button
                            onClick={openAccountModal}
                            type="button"
                            className="pixel-button font-vt text-xs md:text-sm px-3 md:px-4 py-2"
                          >
                            {account.displayName}
                          </button>
                        </div>
                      )
                    })()}
                  </div>
                )
              }}
            </ConnectButton.Custom>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4 md:p-6">
        <div className="w-full max-w-2xl">
          {isConnected ? <WalletInfo /> : <LandingContent />}
        </div>
      </main>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-[#333] bg-black/50 px-4 py-3 md:py-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 md:gap-8 text-center">
          <div>
            <div className="text-[#00ffff] font-press text-[10px] md:text-xs">PUNKS</div>
            <div className="text-white font-vt text-lg md:text-2xl">10,000</div>
          </div>
          <div>
            <div className="text-[#ff00ff] font-press text-[10px] md:text-xs">HOLDERS</div>
            <div className="text-white font-vt text-lg md:text-2xl">3,847</div>
          </div>
          <div>
            <div className="text-[#00ff00] font-press text-[10px] md:text-xs">FLOOR</div>
            <div className="text-white font-vt text-lg md:text-2xl">0.42 ETH</div>
          </div>
          <div>
            <div className="text-[#ffff00] font-press text-[10px] md:text-xs">VOLUME</div>
            <div className="text-white font-vt text-lg md:text-2xl">1,234 ETH</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-3 md:py-4 text-center">
        <p className="font-vt text-[#555] text-xs md:text-sm">
          Requested by @Salmong · Built by @clonkbot
        </p>
      </footer>
    </div>
  )
}

export default App
