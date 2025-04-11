import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Loading from './components/common/Loading';

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <AppRoutes />
      </Suspense>
    </Router>
  );
}

export default App;
