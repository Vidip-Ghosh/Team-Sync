import NavBar from "@/components/NavBar";
const layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default layout;
