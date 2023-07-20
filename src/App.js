
import './App.css';
import Header from './Components/Header';
import InputForm from './Components/InputForm';
import ContextProvider from './Store/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <Header/>
      <main>
        <InputForm />
      </main>
    </ContextProvider>
  );
}

export default App;
