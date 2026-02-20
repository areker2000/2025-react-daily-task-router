import './App.css';
import {
  HashRouter,
  NavLink,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
} from 'react-router-dom';

const Index = () => {
  return (
    <>
      <p>這是首頁</p>
    </>
  );
};
const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p>
      <Logout />
    </>
  );
};
const Logout = () => {
  const navigate = useNavigate();
  return (
    <>
      <button type="button" onClick={() => navigate('/login')}>
        登出
      </button>
    </>
  );
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const Post = () => {
  return (
    <>
      <p>這是Post元件</p>
      <Outlet />
    </>
  );
};
const PostId = () => {
  const param = useParams();

  return (
    <>
      <p>Post ID: {param.id}</p>
    </>
  );
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post 頁面</p>
          </NavLink>
        </div>
        {
          /* Routes, Route 練習區 */
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/post" element={<Post />}>
              <Route path=":id" element={<PostId />} />
            </Route>
          </Routes>
        }
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
