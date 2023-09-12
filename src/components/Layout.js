import { useLocation } from "react-router-dom";
import Header from "./Header";
const Layout = ({ children }) => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div>
      {pathname !== "/" ? <Header /> : null}
      <div>{children}</div>
    </div>
  );
};

export default Layout;
