import React from 'react';
import { NextPage } from 'next';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import styles from '../styles/Home.module.css';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const DeveloperResources: NextPage = () => {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const addToMetaMask = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0x13880', // 80000 in hex
          chainName: 'Paxeer Network',
          nativeCurrency: {
            name: 'PAXEER',
            symbol: 'PAX',
            decimals: 18
          },
          rpcUrls: ['https://v1-rpc.paxeer.app'],
          blockExplorerUrls: ['https://paxscan.paxeer.app']
        }]
      });
    } catch (error) {
      console.error('Error adding Paxeer to MetaMask:', error);
    }
  };

  const tokens = [
    { symbol: 'USDC', address: '0x29e1f94f6b209b57ecdc1fe87448a6d085a78a5a' },
    { symbol: 'WPAX', address: '0x17D6592A6B27564F3D0810D79405D366a4aC69e5' },
    { symbol: 'USDT', address: '0x2a401fe7616c4aba69b147b4b725ce48ca7ec660' },
    { symbol: 'SOL', address: '0x7100cf39ff0e845d7751fb56198b8dd16c6ecb2a' },
    { symbol: 'UNI', address: '0x90a271d104aea929b68867b3050efacbc1a28e84' },
    { symbol: 'WBTC', address: '0x96465d06640aff1a00888d4b9217c9eae708c419' },
    { symbol: 'TON', address: '0x9d60b394276e67a44f2d80e1ab7cfafa4e151f02' },
    { symbol: 'CRO', address: '0xa1956408cbeb4c0d2c257be394b9bdf4c9e1a061' },
    { symbol: 'BNB', address: '0xbbf11b964ac48bd11109b68dffe129b45671e34e' },
    { symbol: 'WETH', address: '0xd0c1a714c46c364dbdd4e0f7b0b6ba5354460da7' },
    { symbol: 'DOT', address: '0xdccec2b62dd102276b7ba689405a5cd7504a8cd3' },
    { symbol: 'wstETH', address: '0xeb2c4ae6fe90f9bf25c94269236cb5408e00e188' }
  ];

  const subgraphs = [
    {
      name: 'V3 Exchange Subgraph',
      endpoint: 'https://v1-api.paxeer.app/subgraphs/name/flack/exchange-v3-paxeer',
      status: '✅ Healthy and fully synced'
    },
    {
      name: 'V2 Positions Subgraph',
      endpoint: 'https://v1-api.paxeer.app/subgraphs/name/flack/exchange-v2-positions-paxeer',
      status: '✅ Healthy and fully synced'
    },
    {
      name: 'StableSwap Subgraph',
      endpoint: 'https://v1-api.paxeer.app/subgraphs/name/flack/exchange-stableswap-paxeer',
      status: '✅ Healthy and fully synced'
    }
  ];

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Paxeer Developer Resources</h1>
        
        {/* Network Info */}
        <section className={styles.section}>
          <h2>Network Information</h2>
          <div className={styles.card}>
            <p><strong>Chain ID:</strong> 80000</p>
            <p><strong>Network Name:</strong> Paxeer Network</p>
            <p><strong>Native Coin:</strong> PAXEER (PAX)</p>
            <p><strong>RPC URL:</strong> https://v1-rpc.paxeer.app</p>
            <p><strong>Explorer:</strong> https://paxscan.paxeer.app</p>
            <Button onClick={addToMetaMask} className="mt-4">
              Add Paxeer to MetaMask
            </Button>
          </div>
        </section>

        {/* Token List */}
        <section className={styles.section}>
          <h2>Token Contracts</h2>
          <div className={`${styles.card} overflow-x-auto`}>
            <table className="w-full">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Contract Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tokens.map((token) => (
                  <tr key={token.symbol}>
                    <td>{token.symbol}</td>
                    <td className="font-mono text-sm">{token.address}</td>
                    <td>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={() => copyToClipboard(token.address, token.symbol)}
                      >
                        {copied === token.symbol ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Subgraphs */}
        <section className={styles.section}>
          <h2>Subgraph Endpoints</h2>
          {subgraphs.map((subgraph) => (
            <div key={subgraph.name} className={styles.card}>
              <h3>{subgraph.name}</h3>
              <div className="flex items-center gap-2">
                <code className="flex-1">{subgraph.endpoint}</code>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => copyToClipboard(subgraph.endpoint, subgraph.name)}
                >
                  {copied === subgraph.name ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <p className="mt-2">{subgraph.status}</p>
            </div>
          ))}
        </section>

        {/* Price API */}
        <section className={styles.section}>
          <h2>Price API</h2>
          <div className={styles.card}>
            <h3>Get All Prices</h3>
            <div className="flex items-center gap-2">
              <code className="flex-1">GET https://dex-api.paxeer.app/api/prices</code>
              <Button 
                size="sm" 
                variant="ghost" 
                onClick={() => copyToClipboard('https://dex-api.paxeer.app/api/prices', 'all-prices')}
              >
                {copied === 'all-prices' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
            
            <h3 className="mt-4">Get Single Token Price</h3>
            <div className="flex items-center gap-2">
              <code className="flex-1">GET https://dex-api.paxeer.app/api/prices/&#123;Token_Address_Hash&#125;</code>
              <Button 
                size="sm" 
                variant="ghost" 
                onClick={() => copyToClipboard('https://dex-api.paxeer.app/api/prices/{Token_Address_Hash}', 'single-price')}
              >
                {copied === 'single-price' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DeveloperResources;
