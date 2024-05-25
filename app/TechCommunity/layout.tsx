import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
const layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default layout;
