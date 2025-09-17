import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Homepage } from './pages/Homepage';
import { About } from './pages/About';
import { Token } from './pages/Token';
import { Docs } from './pages/Docs';
import { DocsProtocol } from './pages/DocsProtocol';
import { Community } from './pages/Community';
import { Blog } from './pages/Blog';
import { Careers } from './pages/Careers';
import { CTM } from './pages/CTM';
import { Mission } from './pages/Mission';
import { Technology } from './pages/Technology';
import { LoadingScreen } from './components/LoadingScreen';
import DeFiFundamentals from './pages/DeFiFundamentals';
import Developers from './pages/Developers';
import RPCEndpoints from './pages/RPCEndpoints';
import SecurityGuide from './pages/SecurityGuide';
import TradersGuide from './pages/TradersGuide';
import WalletGuide from './pages/WalletGuide';
import { useLoading } from './hooks/useLoading';

function App() {
  const { isLoading } = useLoading();

  return (
    <div className="dark min-h-screen bg-[#0A0B0E] text-white">
      {isLoading && <LoadingScreen />}
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/token" element={<Token />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/docs/protocol" element={<DocsProtocol />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/community" element={<Community />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/ctm" element={<CTM />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/defi-fundamentals" element={<DeFiFundamentals />} />
              <Route path="/developers" element={<Developers />} />
              <Route path="/rpc-endpoints" element={<RPCEndpoints />} />
              <Route path="/security-guide" element={<SecurityGuide />} />
              <Route path="/traders-guide" element={<TradersGuide />} />
              <Route path="/wallet-guide" element={<WalletGuide />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
