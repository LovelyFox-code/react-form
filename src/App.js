import './App.css';
import Input from './components/input/Input';

function App() {
  return (
    <div className="form">
      <Input />
      <div className="text">
        <p>Already have an account? <a href="#"><b>Log In</b></a></p>
        <p>Review privacy and disclosures <a href="#"><b>here</b></a></p>
      </div>
    </div>
  );
}

export default App;
