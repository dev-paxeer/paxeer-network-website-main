import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { 
  FaBook, 
  FaCode, 
  FaShieldAlt, 
  FaUsers,
  FaGithub,
  FaServer 
} from 'react-icons/fa';
import styles from '../styles/Home.module.css';

const Developers = () => {
  useEffect(() => {
    document.title = "Developer Resources | Paxeer Network";
    const meta = document.createElement('meta');
    meta.name = "description";
    meta.content = "Essential resources for developers building on Paxeer Network including security guides, code patterns, and RPC endpoints.";
    document.head.appendChild(meta);
    
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Developer Resources
        </h1>

        <p className={styles.description}>
          Build secure, scalable applications on Paxeer Network with our developer tools and resources.
        </p>

        {/* Resources Grid */}
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#35b7ff]/10 rounded-lg flex items-center justify-center mr-4">
                <FaShieldAlt className="text-[#35b7ff] text-xl" />
              </div>
              <h2>Security Best Practices</h2>
            </div>
            <p>
              Comprehensive guidelines for developing secure smart contracts and conducting audits.
            </p>
          </div>

          <div className={styles.card}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#35b7ff]/10 rounded-lg flex items-center justify-center mr-4">
                <FaCode className="text-[#35b7ff] text-xl" />
              </div>
              <h2>Code Patterns</h2>
            </div>
            <p>
              Battle-tested design patterns for common DeFi mechanisms and smart contract development.
            </p>
          </div>

          <div className={styles.card}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#35b7ff]/10 rounded-lg flex items-center justify-center mr-4">
                <FaUsers className="text-[#35b7ff] text-xl" />
              </div>
              <h2>Community Guidelines</h2>
            </div>
            <p>
              Frameworks for building transparent developer communities and governance models.
            </p>
          </div>

          <div className={styles.card}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#35b7ff]/10 rounded-lg flex items-center justify-center mr-4">
                <FaServer className="text-[#35b7ff] text-xl" />
              </div>
              <h2>RPC Endpoints</h2>
            </div>
            <p>
              Directory of RPC endpoints for Paxeer Network and connected chains.
            </p>
          </div>

          <div className={styles.card}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#35b7ff]/10 rounded-lg flex items-center justify-center mr-4">
                <FaBook className="text-[#35b7ff] text-xl" />
              </div>
              <h2>Documentation</h2>
            </div>
            <p>
              Technical documentation and API references for Paxeer Network.
            </p>
          </div>

          <div className={styles.card}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#35b7ff]/10 rounded-lg flex items-center justify-center mr-4">
                <FaGithub className="text-[#35b7ff] text-xl" />
              </div>
              <h2>GitHub Repos</h2>
            </div>
            <p>
              Official repositories, SDKs, and example projects for Paxeer development.
            </p>
          </div>
        </div>

        {/* Open Letter */}
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-[#1e1e2d] rounded-lg border border-[#2d2d3a]">
          <h2 className="text-2xl font-bold mb-4 text-center">Building on Paxeer</h2>
          <p className="mb-4">
            Paxeer Network provides developers with a scalable, secure platform to build next-generation 
            decentralized applications. As an L2 solution combining Ethereum security with high throughput 
            and low fees, Paxeer offers the ideal environment for DeFi, NFTs, and Web3 innovation.
          </p>
          <p>
            We encourage developers to prioritize security, transparency, and sustainable tokenomics in 
            their projects. The Paxeer Foundation provides grants, technical support, and community 
            resources to help quality projects succeed.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Developers;
