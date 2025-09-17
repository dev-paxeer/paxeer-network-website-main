import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import styles from '../styles/Home.module.css';

const Ecosystem: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paxeer Network - Ecosystem</title>
        <meta name="description" content="Explore the Paxeer Network ecosystem" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Explore a Thriving Digital Economy
        </h1>

        <p className={styles.description}>
          Discover a rapidly growing ecosystem of decentralized applications, from sophisticated DeFi protocols to innovative NFT projects, all powered by Paxeer.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Total Value Locked</h2>
            <p>$15.2M</p>
          </div>

          <div className={styles.card}>
            <h2>Total Transactions</h2>
            <p>66.13K</p>
          </div>

          <div className={styles.card}>
            <h2>Active Wallets</h2>
            <p>2K+</p>
          </div>

          <div className={styles.card}>
            <h2>Live Projects</h2>
            <p>5+</p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2>Project Directory</h2>
          <p>
            The complete list of projects building and growing on Paxeer. This is a living ecosystem that expands daily.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2>Core Protocols</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <a href="https://paxport.paxeer.app" target="_blank" rel="noopener noreferrer" className="p-4 border border-[#2d2d3a] rounded-lg hover:border-[#35b7ff] transition-colors">
              <h3 className="text-xl font-semibold mb-2">Paxport Wallet</h3>
              <p className="text-gray-400">Official non-custodial wallet for Paxeer Network</p>
            </a>
            
            <a href="https://orbex.paxeer.app" target="_blank" rel="noopener noreferrer" className="p-4 border border-[#2d2d3a] rounded-lg hover:border-[#35b7ff] transition-colors">
              <h3 className="text-xl font-semibold mb-2">Orbex CEX</h3>
              <p className="text-gray-400">Centralized exchange with deep liquidity</p>
            </a>
            
            <a href="https://chainscan.paxeer.app" target="_blank" rel="noopener noreferrer" className="p-4 border border-[#2d2d3a] rounded-lg hover:border-[#35b7ff] transition-colors">
              <h3 className="text-xl font-semibold mb-2">ChainScan Block Explorer</h3>
              <p className="text-gray-400">Explore transactions, blocks, and contracts</p>
            </a>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2>Add Your Project to the Ecosystem</h2>
          <p>
            Are you building on Paxeer? We want to hear from you. Submit your project to get listed in our official directory and gain exposure to our rapidly growing community.
          </p>
          <button className={styles.button}>Get Listed</button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Ecosystem;
