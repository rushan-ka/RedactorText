
import './App.css'
import { ModelEditor, Param } from './components/ListRedactor'

const App = () => {
  const params: Param[] = [
      { name: 'color', value: 'red' },
      { name: 'size', value: 'medium' },
      { name: 'nfqw', value: 'mediwqfqum' }

  ];

  return <ModelEditor params={params} />;
};

export default App
