import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  FaServer, 
  FaGlobe, 
  FaEthereum, 
  FaSearch,
  FaExternalLinkAlt,
  FaInfoCircle
} from 'react-icons/fa';
import { SiBinance, SiPoly } from 'react-icons/si';
import styles from '../styles/Home.module.css';

interface RPCEndpoint {
  name: string;
  url: string;
  type: 'provider' | 'public' | 'websocket' | 'setup';
}

const RPCEndpoints: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  // Paxeer Network endpoints
  const paxeerEndpoints: RPCEndpoint[] = [
    { name: 'Paxeer Mainnet RPC', url: 'https://rpc.paxeer.network', type: 'public' },
    { name: 'Paxeer WebSocket', url: 'wss://ws.paxeer.network', type: 'websocket' },
    { name: 'Paxeer Archive Node', url: 'https://archive.paxeer.network', type: 'public' },
    { name: 'Ankr Paxeer RPC', url: 'https://rpc.ankr.com/paxeer', type: 'provider' },
    { name: 'Run Your Own Node', url: 'https://docs.paxeer.network/node/run', type: 'setup' }
  ];

  // Filter endpoints based on search and type
  const filteredEndpoints = paxeerEndpoints.filter(endpoint => {
    const matchesSearch = searchQuery === '' || 
      endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      endpoint.url.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = selectedType === 'all' || endpoint.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>RPC Endpoints | Paxeer Network</title>
        <meta 
          name="description" 
          content="Comprehensive directory of RPC endpoints for Paxeer Network and connected chains" 
        />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          RPC Endpoints Directory
        </h1>

        <p className={styles.description}>
          Connect to Paxeer Network and supported chains with these reliable RPC providers
        </p>

        {/* Search and Filter */}
        <div className="w-full max-w-2xl mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search endpoints..."
                className="w-full px-4 py-3 bg-[#1e1e2d] rounded-lg border border-[#2d2d3a] focus:outline-none focus:ring-2 focus:ring-[#35b7ff] text-white pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <select
              className="px-4 py-3 bg-[#1e1e2d] rounded-lg border border-[#2d2d3a] focus:outline-none focus:ring-2 focus:ring-[#35b7ff] text-white"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="provider">Service Providers</option>
              <option value="public">Public Endpoints</option>
              <option value="websocket">WebSocket</option>
              <option value="setup">Setup Your Own</option>
            </select>
          </div>
          
          <div className="text-sm text-gray-400">
            Showing {filteredEndpoints.length} of {paxeerEndpoints.length} endpoints
          </div>
        </div>

        {/* Paxeer Network Section */}
        <div className="w-full max-w-4xl mb-12">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-[#35b7ff] rounded-full flex items-center justify-center mr-3">
              <FaEthereum className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Paxeer Network</h2>
          </div>
          
          {filteredEndpoints.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {filteredEndpoints.map((endpoint, index) => (
                <div key={index} className="bg-[#1e1e2d] p-4 rounded-lg border border-[#2d2d3a] hover:border-[#35b7ff]/50 transition-colors">
                  <h3 className="font-medium text-white mb-2">{endpoint.name}</h3>
                  <div className="flex items-center">
                    <a
                      href={endpoint.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#35b7ff] hover:text-[#35b7ff]/80 text-sm flex items-center"
                    >
                      {endpoint.url.length > 30 ? `${endpoint.url.substring(0, 30)}...` : endpoint.url}
                      <FaExternalLinkAlt size={12} className="ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-[#1e1e2d] p-6 rounded-lg border border-[#2d2d3a] text-center">
              <FaInfoCircle className="mx-auto text-[#35b7ff] mb-2" size={24} />
              <p>No endpoints match your search criteria</p>
            </div>
          )}
        </div>

        {/* Additional Resources */}
        <div className="w-full max-w-4xl bg-[#1e1e2d] p-6 rounded-lg border border-[#2d2d3a]">
          <h2 className="text-xl font-bold text-white mb-4">Additional Resources</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>For high availability, consider using multiple RPC endpoints in your application</li>
            <li>Production applications should use authenticated endpoints from service providers</li>
            <li>Monitor your RPC usage to avoid rate limits</li>
            <li>For development, consider running a local node for maximum control</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RPCEndpoints;
