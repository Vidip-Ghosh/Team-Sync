import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
