import { Outlet, Link } from "react-router-dom";

function Home(props) {
  console.log(props);
  return (
    <div>
        <Link to="/home/class">班级管理</Link>
        <Link to="/home/lesson">课程管理</Link>
        <section>
            <Outlet />
        </section>
    </div>
  );
}

export default Home;