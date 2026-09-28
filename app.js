const { useState, useEffect } = React;
const { motion } = window.Motion;

function App() {
  const [page, setPage] = useState('HOME');
  const [userName, setUserName] = useState(localStorage.getItem('TRATA_USER') || '');
  const [adminPass, setAdminPass] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    localStorage.setItem('TRATA_USER', userName);
  }, [userName]);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPass === '9451968246') {
      setIsAdmin(true);
    } else {
      alert('Wrong Admin Password!');
    }
  };

  return (
    <div className="min-h-screen p-6 max-w-5xl mx-auto space-y-6">
      {/* Navigation */}
      <header className="glass-card p-4 rounded-xl flex justify-between items-center">
        <h1 className="text-2xl font-black font-orbitron text-trata-cyan tracking-wider">TRATA</h1>
        <div className="flex gap-4 font-orbitron text-xs">
          <button onClick={() => setPage('HOME')} className="hover:text-trata-cyan">HOME</button>
          <button onClick={() => setPage('QUIZ')} className="hover:text-trata-cyan">QUIZ</button>
          <button onClick={() => setPage('CERTIFICATE')} className="hover:text-trata-cyan">CERTIFICATE</button>
          <button onClick={() => setPage('ADMIN')} className="hover:text-trata-cyan text-red-400">ADMIN</button>
        </div>
      </header>

      {/* Pages */}
      {page === 'HOME' && (
        <div className="glass-card p-8 rounded-2xl space-y-6 text-center">
          <h2 className="text-4xl font-black font-orbitron text-white">TRATA QUIZ</h2>
          <p className="text-slate-300">Test Your Knowledge. Explore Technology. Discover Your Future.</p>
          <input
            type="text"
            placeholder="Enter Name..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="p-3 bg-slate-900 border border-trata-cyan/40 rounded-xl text-center text-white"
          />
          <div>
            <button onClick={() => setPage('QUIZ')} className="px-6 py-3 bg-trata-cyan text-slate-900 font-black font-orbitron rounded-xl">
              START QUIZ
            </button>
          </div>
        </div>
      )}

      {page === 'QUIZ' && (
        <div className="glass-card p-6 rounded-2xl space-y-4">
          <h2 className="text-xl font-orbitron text-trata-cyan">TRATA ASSESSMENT</h2>
          <p className="text-lg">Q: What is TRATA's primary objective?</p>
          <button onClick={() => { setScore(100); setPage('CERTIFICATE'); }} className="w-full p-3 glass-card text-left rounded-xl hover:border-trata-cyan">
            A) Autonomous Disaster Response & Rescue Operations
          </button>
        </div>
      )}

      {page === 'CERTIFICATE' && (
        <div className="glass-gold p-8 rounded-2xl text-center space-y-4">
          <h2 className="text-3xl font-orbitron font-black text-trata-gold">TRATA CERTIFICATE OF ACHIEVEMENT</h2>
          <p className="text-xs">THIS CERTIFICATE IS PROUDLY PRESENTED TO</p>
          <h3 className="text-3xl font-black font-orbitron text-white">{userName || "OPERATOR"}</h3>
          <p className="text-xs text-slate-300">Successfully completed the TRATA Technology & Innovation Evaluation.</p>
        </div>
      )}

      {page === 'ADMIN' && (
        <div className="glass-card p-6 rounded-2xl space-y-4">
          {!isAdmin ? (
            <form onSubmit={handleAdminLogin} className="space-y-4 max-w-sm mx-auto">
              <h3 className="font-orbitron font-bold text-red-400">ADMIN ACCESS</h3>
              <input
                type="password"
                placeholder="Password..."
                value={adminPass}
                onChange={(e) => setAdminPass(e.target.value)}
                className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl text-white"
              />
              <button type="submit" className="w-full py-3 bg-red-500/20 border border-red-500 text-red-400 font-orbitron font-bold rounded-xl">
                LOGIN
              </button>
            </form>
          ) : (
            <div className="space-y-2 font-orbitron text-xs">
              <h3 className="text-trata-cyan font-bold">USER TELEMETRY DATA</h3>
              <p>Active Operator: {userName || "None"}</p>
              <p>Admin Status: Authenticated (9451968246)</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);