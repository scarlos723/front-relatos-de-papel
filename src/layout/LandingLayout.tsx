import { Outlet } from "react-router-dom";
const LandingLayout = () => {
  return <>
    <header>
      <nav>Aqui el nav</nav>
    </header>
    {<Outlet />}</>;
};

export default LandingLayout;
