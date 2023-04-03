import "./App.css";

import img1 from "./naszeZDJ/img1.jpg";
import img2 from "./naszeZDJ/img3.jpg";
import img3 from "./naszeZDJ/img2.jpg";
import img4 from "./naszeZDJ/img4.jpg";

function App() {
  return (
    <div className="content">
      <div className="big-text">STRONA GŁÓWNA</div>
      <div className="gallery-homepage">
        <img src={img2} alt="zdjęcia przy pracy 1" />
        <img src={img3} alt="zdjęcia przy pracy 2" />
        <img src={img1} alt="zdjęcia przy pracy 3" />
        <img src={img4} alt="zdjęcia książek" />
      </div>
      <div className="container">
        <div className="homePageContent">
          Jesteśmy uczniami Szkoły Podstawowej nr 1 im. Fryderyka Chopina w
          Żarach, chcemy wziąć udział w projekcie w ramach XXIX Sesji Sejmu
          Dzieci I Młodzieży, który ma na celu kształtowanie postaw
          obywatelskich wśród młodych ludzi. W tym roku temat brzmi następująco:
          &quot;Zginąć, ale z honorem (Krystyna Budnicka). Bohaterska walka
          zbrojna żydowskich organizacji bojowych z Niemcami z perspektywy 80
          lat – o ludzki, społeczny i narodowy honor oraz godność, na
          przykładzie powstania w getcie warszawskim.&quot; Do tego tematu, od
          razu pomyśleliśmy, że będzie pasować, postać Mordechaja Anielewicza.
          Wybraliśmy go z kilku powodów:
          <ul className="homePageUlList">
            <li>
              Wartości, którymi się kierował (wolność, równość czy godność
              człowieka), to są wartości bardzo ważne dla całego świata. Postać
              ta idealnie pokazywała, że te wartości są bardzo ważne.
            </li>
            <li>
              Mordechaj Anielewicz był jednym z najważniejszych przywódców
              powstania w getcie warszawskim. Warto zwrócić uwagę na jego odwagę
              i determinację w walce z okupantem niemieckim. Jego postawa jest
              przykładem dla młodych ludzi, którzy chcą działać na rzecz
              wolności i godności człowieka.
            </li>
            <li>
              Bohater był jednym z najważniejszych przywódców Żydowskiej
              Organizacji Bojowej (ŻOB), która była jedną z największych
              organizacji konspiracyjnych w getcie warszawskim. ŻOB miała na
              celu walkę z okupantem niemieckim i obronę mieszkańców getta przed
              deportacją do obozów koncentracyjnych. Działania ŻOB i Mordechaja
              Anielewicza były ważnym elementem walki o wolność i godność
              człowieka.
            </li>
          </ul>
          <div className="big-text">Kuba Musielski i Olaf Harasim</div>
        </div>
      </div>
    </div>
  );
}

export default App;
