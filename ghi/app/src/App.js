import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';























function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="inventory">
            <Route path="manufacturers">
              <Route path="" />
              <Route path="new" />
            </Route>
            <Route path="models">
              <Route path="" />
              <Route path="new" />
            </Route>
            <Route path="automobile">
              <Route path="" />
              <Route path="new" />
            </Route>
          </Route>
          <Route path="sales">
            <Route path="" />
            <Route path="new" />
            <Route path="salesperson">
              <Route path="new" />
              <Route path="history" />
            </Route>
          </Route>
          <Route path="service">
            <Route path="customers/new" />
            <Route path="technicians/new" />
            <Route path="appointments">
              <Route path="" />
              <Route path="new" />
            </Route>
            <Route path="history" />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
