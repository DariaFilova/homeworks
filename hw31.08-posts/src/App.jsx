import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Nav from './Components/Nav/Nav';
import HomePage from './Pages/HomePage/HomePage';
import PostsPage from './Pages/PostsPage/PostsPage';
import PostPage from './Pages/PostPage/PostPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/posts' element={<PostsPage />}></Route>
        <Route path='/posts/:id' element={<PostPage />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

