import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { useState } from "react";

export default function App() {
  const [walletConnected, setWalletConnected] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center p-6">
      <h1 className="text-5xl font-bold mb-4 text-center">METHANE CREDITS</h1>
      <p className="text-xl mb-6 text-center max-w-xl">
        Saving the planet, one fart at a time. Earn $METHANE by embracing your natural emissions.
      </p>

      <Card className="w-full max-w-md mb-6">
        <CardContent className="flex flex-col gap-4 items-center p-6">
          <div className="text-3xl font-mono">💨 + 💰 = $METHANE</div>
          {walletConnected ? (
            <Button variant="default">Claim Methane Credits</Button>
          ) : (
            <Button variant="secondary" onClick={() => setWalletConnected(true)}>
              Connect Wallet
            </Button>
          )}
        </CardContent>
      </Card>

      <div className="max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-2">Tokenomics</h2>
        <p className="mb-1">• Total Supply: 69,000,000 $METHANE</p>
        <p className="mb-1">• 69% Community Staking</p>
        <p className="mb-1">• 20% Fart Offset Pool</p>
        <p className="mb-1">• 11% Devs & Research</p>
      </div>

      <div className="mt-10 text-center max-w-xl">
        <h2 className="text-2xl font-semibold mb-2">Join the Flatulution</h2>
        <p>
          Coming soon: NFT emission trackers, fart yield farming, and our groundbreaking Poof-of-Work protocol.
        </p>
      </div>
    </div>
  );
}