import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '../components/Header';
import { 
  FaWallet,
  FaNetworkWired,
  FaCoins,
  FaPaintBrush,
  FaLock
} from 'react-icons/fa';
import styles from '../styles/Home.module.css';

const WalletGuide = () => {
  const [activeTab, setActiveTab] = useState('basics');

  const tabs = [
    { id: 'basics', name: 'Wallet Basics', icon: <FaWallet /> },
    { id: 'network', name: 'Network Setup', icon: <FaNetworkWired /> },
    { id: 'tokens', name: 'Token Types', icon: <FaCoins /> },
    { id: 'nfts', name: 'NFT Management', icon: <FaPaintBrush /> },
    { id: 'security', name: 'Security', icon: <FaLock /> }
  ];

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Wallet Guide | Paxeer Network</title>
        <meta 
          name="description" 
          content="Complete guide to setting up and using crypto wallets with Paxeer Network" 
        />
      </Helmet>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Wallet Guide
        </h1>

        <p className={styles.description}>
          Everything you need to know about crypto wallets and Paxeer Network
        </p>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto mb-8 border-b border-gray-700">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 text-sm font-medium ${activeTab === tab.id ? 'text-[#35b7ff] border-b-2 border-[#35b7ff]' : 'text-gray-400 hover:text-white'}`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Wallet Basics Tab */}
        {activeTab === 'basics' && (
          <div className={styles.section}>
            <h2>Understanding Crypto Wallets</h2>
            
            <div className={styles.card}>
              <h3>Key Concepts</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Private Keys:</strong> Secret codes that control access to your crypto</li>
                <li><strong>Public Address:</strong> Your wallet address that others can send to</li>
                <li><strong>Seed Phrase:</strong> 12-24 words that can restore your wallet</li>
                <li><strong>Gas Fees:</strong> Transaction costs paid in the network's native token</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className={styles.card}>
                <h3>Hot Wallets (Online)</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Mobile apps (Trust Wallet, Coinbase Wallet)</li>
                  <li>Browser extensions (MetaMask, Phantom)</li>
                  <li>Best for frequent transactions</li>
                  <li>More vulnerable to online threats</li>
                </ul>
              </div>

              <div className={styles.card}>
                <h3>Cold Wallets (Offline)</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Hardware devices (Ledger, Trezor)</li>
                  <li>Paper wallets</li>
                  <li>Best for long-term storage</li>
                  <li>Maximum security against online threats</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Network Setup Tab */}
        {activeTab === 'network' && (
          <div className={styles.section}>
            <h2>Setting Up Paxeer Network</h2>
            
            <div className={styles.card}>
              <h3>Manual Network Setup</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Open your wallet and go to network settings</li>
                <li>Select "Add Network" or "Custom RPC"</li>
                <li>Enter Paxeer Network details:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Network Name: <code>Paxeer Mainnet</code></li>
                    <li>RPC URL: <code>https://rpc.paxeer.network</code></li>
                    <li>Chain ID: <code>7878</code></li>
                    <li>Currency Symbol: <code>PAX</code></li>
                    <li>Block Explorer: <code>https://explorer.paxeer.network</code></li>
                  </ul>
                </li>
                <li>Save and switch to Paxeer Network</li>
              </ol>
            </div>

            <div className={styles.card}>
              <h3>Supported Wallets</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>MetaMask</li>
                <li>WalletConnect-compatible wallets</li>
                <li>Coinbase Wallet</li>
                <li>Trust Wallet</li>
                <li>Ledger (via MetaMask)</li>
              </ul>
            </div>
          </div>
        )}

        {/* Token Types Tab */}
        {activeTab === 'tokens' && (
          <div className={styles.section}>
            <h2>Token Standards on Paxeer</h2>
            
            <div className={styles.card}>
              <h3>PAX-20 (Fungible Tokens)</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Similar to ERC-20 on Ethereum</li>
                <li>Used for cryptocurrencies and utility tokens</li>
                <li>All tokens are identical and interchangeable</li>
                <li>Examples: Stablecoins, governance tokens</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h3>PAX-721 (NFTs)</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Non-fungible token standard</li>
                <li>Each token is unique with distinct properties</li>
                <li>Used for digital art, collectibles, virtual items</li>
                <li>Examples: Paxeer Punks, Metaverse land</li>
              </ul>
            </div>
          </div>
        )}

        {/* NFT Management Tab */}
        {activeTab === 'nfts' && (
          <div className={styles.section}>
            <h2>Managing NFTs on Paxeer</h2>
            
            <div className={styles.card}>
              <h3>Viewing NFTs</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use NFT-friendly wallets like Rainbow or Coinbase Wallet</li>
                <li>Connect to marketplaces like Paxeer Market or OpenSea</li>
                <li>Some wallets require adding NFT contracts manually</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h3>NFT Security</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Beware of fake NFT airdrops</li>
                <li>Verify marketplace URLs before connecting wallet</li>
                <li>Check collection verification status</li>
                <li>Consider hardware wallets for valuable NFTs</li>
              </ul>
            </div>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className={styles.section}>
            <h2>Wallet Security Essentials</h2>
            
            <div className={styles.card}>
              <h3>Seed Phrase Protection</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Never share your seed phrase with anyone</li>
                <li>Store it securely offline (never digitally)</li>
                <li>Consider metal backups for durability</li>
                <li>Use multiple secure locations</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className={styles.card}>
                <h3>Common Threats</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Phishing websites</li>
                  <li>Malicious smart contracts</li>
                  <li>Fake wallet apps</li>
                  <li>Social engineering attacks</li>
                </ul>
              </div>

              <div className={styles.card}>
                <h3>Best Practices</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Use hardware wallets for significant holdings</li>
                  <li>Enable all available security features</li>
                  <li>Keep software updated</li>
                  <li>Verify transactions carefully</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Additional Resources */}
        <div className="w-full max-w-4xl mt-8 bg-[#1e1e2d] p-6 rounded-lg border border-[#2d2d3a]">
          <h2 className="text-xl font-bold text-white mb-4">Wallet Resources</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><a href="https://docs.paxeer.network/wallets" className="text-[#35b7ff] hover:underline">Paxeer Wallet Documentation</a></li>
            <li><a href="https://chainlist.org/chain/7878" className="text-[#35b7ff] hover:underline">Auto-Add Paxeer Network</a></li>
            <li><a href="https://paxeer.network/explorer" className="text-[#35b7ff] hover:underline">Paxeer Block Explorer</a></li>
            <li><a href="https://community.paxeer.network/wallets" className="text-[#35b7ff] hover:underline">Wallet Support Forum</a></li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default WalletGuide;
