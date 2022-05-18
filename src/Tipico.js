import Header from "./containers/header/Header";
import NavigationLeft from "./containers/navigation-left/NavigationLeft";
import MainSection from "./containers/main-section/MainSection";
import Aside from "./containers/aside/Aside";

function Tipico() {
  return (
    <main className="font-Source bg-skin-grey-smoke h-screen capitalize ">
      <Header />
      <div className="max-widh-screen-main-section mx-auto flex gap-3 ">
        <NavigationLeft />
        <MainSection />
        <Aside />
      </div>
    </main>
  );
}

export default Tipico;
