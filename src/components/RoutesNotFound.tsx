import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";

const RoutesNotFound = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return (
    <Routes>
      {children}
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesNotFound;
