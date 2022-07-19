import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import PrimaryPage from "./pages/PrimaryPage";
import MyHistory from "./pages/MyHistory";
import TermsPage from "./pages/TermsPage";
import TermsPageEN from "./pages/TermsPageEN";
import ScrollToTop from "./pages/ScrollToTop";

function App() {
  return (
    <Fragment>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<PrimaryPage />} />
          <Route path="/myhistory" element={<MyHistory />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/termsEN" element={<TermsPageEN />} />
          <Route path="*" element={<PrimaryPage />} />
        </Routes>
      </ScrollToTop>
    </Fragment>
  );
}

export default App;
