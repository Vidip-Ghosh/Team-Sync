import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const layout = ({ children }) => {
  return (
    <div className="bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
