import HackathonDetails from "./page";
import Footer from "@/components/Footer";

const layout = ({ children }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 text-gray-600 body-font bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
      {children}
      <Footer />
    </div>
  );
};

export default layout;
