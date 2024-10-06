import HEADER from "./components/HEADER";
import TIMER from "./components/TIMER";
import DATA_DISPLAY from "./components/DATA_DISPLAY";
import SOCIALS from "./components/SOCIALS";
import FOOTER from "./components/FOOTER";
import DESCRIPTION from "./components/DESCRIPTION";

function App() {
  return (
    <>
      <div className="px-2 md:px-8 py-8 flex justify-center items-center">
        <div className="w-full md:w-4/5 lg:w-2/3">

          <HEADER />
          <TIMER />

          <DATA_DISPLAY />

          <DESCRIPTION />
          
          <SOCIALS />
          <FOOTER />

        </div>
      </div>
    </>
  );
}

export default App;
