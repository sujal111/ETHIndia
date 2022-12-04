import logo from './logo.svg';
import './App.css';
import { useAccount, useConnect } from 'wagmi'
import { Chat } from "@pushprotocol/uiweb";
import { InjectedConnector } from 'wagmi/connectors/injected'

function App() {
  const { address } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => connect()}>Connect Wallet</button>
        <Chat
          account={address} //user address
          supportAddress="0xd9c1CCAcD4B8a745e191b62BA3fcaD87229CB26d" //support address
          apiKey="jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0"
          env="staging"
        />
      </header>
    </div>
  );
}

export default App;