import "./zyciorys.css";
import img1 from "./mordechajAnielewicz/mordechajprofilowe.jpg";
import img2 from "./mordechajAnielewicz/mordechaj2.jpg";
import img3 from "./mordechajAnielewicz/mordechaj3.jpg";
import img4 from "./logo/betar.jpg";
import img5 from "./logo/haszomer.jpg";

import { useState } from "react";
function Zyciorys() {
  const [logoPrev, setLogoPrev] = useState(false);
  const [whichImageToShow, setWhichImageToShow] = useState(img4);
  const prevLogo = (type) => {
    setLogoPrev((prev) => !prev);
    if (type === 1) {
      setWhichImageToShow(img4);
    } else if (type === 2) {
      setWhichImageToShow(img5);
    }
  };
  return (
    <>
      <div className="content">
        <div className="img-scroll">
          <img src={img1} alt="profilowe" width={200} />
          <img src={img2} alt="profilowe2" width={200} />
          <img src={img3} alt="profilowe3" width={200} />
        </div>
        <div className={logoPrev ? "imagePopup" : ""}>
          <img src={whichImageToShow} alt="BETAR" width={logoPrev ? 300 : 0} />
          <button
            className={logoPrev ? "closePopupButon" : "closePopupButonDisabled"}
            onClick={() => setLogoPrev(false)}
          >
            X
          </button>
        </div>
        <div className="big-text">Życiorys Mordechaja Anielewicza</div>
        <div className="container">
          <div className="nowyRozdzial">1. Życie prywatne </div>
          Mordechaj Anielewicz urodził się w Wyszykowie w 1919 roku. Jego
          rodzice to Abram i Cyryla z domu Zandram. Kiedy Mordechaj miał kilka
          lat, cała rodzina Anielewiczów przeprowadziła się z Wyszkowa do
          Warszawy. Bohater uczył się w prywatnym hebrajskim męskim Gimnazjum
          Towarzystwa &quot;Laor&quot; przy ulicy Nalewki 2a. Dzięki bardzo
          dobrym wynikom w nauce, nie musiał płacić czesnego. Maturę zdał w
          1938.
          <div className="nowyRozdzial">2. Przynależności do organizacji</div>
          Od 1933 roku Mordechaj należał do prawicowej organizacji młodzieżowej
          o nazwie Betar(Związek Młodzieży Hebrajskiej im. Josefa Trumpeldora),
          organizacja ta dążyła do ustanowienia państwa żydowskiego na terenach
          Palestyny{" "}
          <button onClick={() => prevLogo(1)} className="clickMe">
            [Kliknij tutaj aby zobaczyć jak wyglądało ich logo]
          </button>{" "}
          . W roku 1934 dołączył do organizacji skautowej lewicowej o nazwie
          &quot;Ha-Szomer Ha-Cair&quot;{" "}
          <button onClick={() => prevLogo(2)} className="clickMe">
            [Kliknij tutaj aby zobaczyć jak wyglądało ich logo]
          </button>{" "}
          , organizacja ta głosiła, że jedynym sensownym rozwiązaniem dla żydów,
          aby być szanowanym i tolerowanym, było utworzenie państwa Palestyny i
          wyjazd do niego.
          <div className="nowyRozdzial">3. Początki wojska</div> W 1937 roku
          Mordechaj został dowódcą oddziału (gdudu) hufca &quot;Bechazit&quot; i
          członkiem komendy warszawskiej, a w 1939 wszedł do Komendy Naczelnej.
          W latach 1936-1938 organizator samoobrony przeciwko antysemickim
          akcjom ONR, a także przeciwko nacjonalistom żydowskim. Mordechaj
          Anielewicz w czasie kampanii wrześniowej wraz z kolegami z organizacji
          Ha-Szomer Ha-Cair usiłował przedostać się do Rumunii, jednak został na
          krótko aresztowany przez władze radzieckie. Powrócił do Warszawy po
          kapitulacji miasta, a pod koniec 1939 wyjechał na kilka tygodni do
          Wilna. Po powrocie do Warszawy kontynuował swoją działalność w
          Komendzie Naczelnej Ha-Szomer Ha-Cair. Włączył się także do
          redagowania pisma Neged Hazerem i był instruktorem w kibucu przy ul.
          Nalewki 23. Przyjaźnił się z Emanuelem Ringelblumem .
          <div className="nowyRozdzial">4. Powstanie</div>W marcu 1942,
          Mordechaj Anielewicz rozpoczął współorganizowanie Bloku
          Antyfaszystowskiego, który był organizacją działającą w gettach
          Generalnego Gubernatorstwa i Śląska. W tym samym roku, Anielewicz
          organizował grupy samoobrony Żydów w Będzinie i Sosnowcu. W jesieni
          1942 powrócił do Warszawy po zakończeniu wielkiej akcji deportacyjnej
          do Treblinki. Od października 1942, Anielewicz był komendantem
          Żydowskiej Organizacji Bojowej. Był jednym ze współorganizatorów
          udanego zamachu na zastępcę komendanta Żydowskiej Służby Porządkowej w
          październiku 1942. W styczniu 1943, Mordechaj Anielewicz kierował
          pierwszą zbrojną samoobroną w getcie warszawskim, która doprowadziła
          do przerwania drugiej niemieckiej akcji deportacyjnej do Treblinki. W
          walkach zginęło wielu żydowskich bojowców, ale udało się uratować
          kilkudziesięciu Żydów prowadzonych na Umschlagplatz. Anielewicz stał
          się znanym i szanowanym dowódcą po styczniowych walkach. Był
          zwolennikiem porozumienia z Żydowskim Związkiem Wojskowym. W kwietniu
          1943, Mordechaj Anielewicz stanął na czele powstania w getcie
          warszawskim, które trwało do maja 1943. Anielewicz zginął wraz z
          członkami dowództwa ŻOB 8 maja 1943 w otoczonym przez Niemców bunkrze
          przy ul. Miłej 18. Okoliczności jego śmierci nie są dokładnie znane. W
          bunkrze znajdowało się około 120 powstańców, w tym jego dziewczyna
          Mira Fuchrer. Wielu z nich popełniło samobójstwo na wezwanie Arie
          Wilnera.
          <div className="nowyRozdzial">5. Śmierć</div>
          Mordechaj Anielewicz zmarł tragicznie w dniu 8 maja 1943 roku w
          trakcie walk w getcie warszawskim. Śmierć Anielewicza była wynikiem
          intensywnych walk pomiędzy bojownikami a niemieckimi oddziałami.
          Anielewicz i jego towarzysze bronili jednej z ostatnich pozycji w
          getcie, w budynku przy ulicy Miłej 18. Niemieckie wojska otoczyły
          budynek, a po kilku dniach walki, zaczęły go burzyć przy użyciu
          granatów i materiałów wybuchowych. W trakcie walki Anielewicz dowodził
          swoimi ludźmi z ogromnym poświęceniem i odwagą. Niemniej jednak,
          sytuacja stawała się coraz bardziej beznadziejna. W końcu, wraz z
          kilkoma towarzyszami, uciekł na ostatnią kondygnację budynku. Tam,
          zamiast poddać się, postanowili popełnić samobójstwo, aby uniknąć
          schwytania i śmierci z rąk Niemców. Anielewicz wybrał śmierć z honoru,
          zdał sobie sprawę, że po walce, niemieckie oddziały wzięłyby ich do
          niewoli i dopuściłyby się na nich okrutnych zbrodni.{" "}
          <div>
            <br />
          </div>{" "}
          Śmierć Anielewicza była ogromną stratą dla ŻOB i dla całego getta
          warszawskiego. Jednak jego poświęcenie i odwaga stały się symbolem
          walki żydowskiej ludności z okupantem nazistowskim i zainspirowały
          wielu ludzi do walki o wolność i godność. Współcześnie Anielewicz jest
          uważany za bohatera narodowego Izraela i zawsze będzie pamiętany jako
          przykład determinacji, odwagi i ofiary w imię wolności i
          sprawiedliwości.
          <div className="nowyRozdzial">6. Odznaczenia / Upamiętnienia</div>
          Mordechaj po swojej śmierci zdobył 2 odznaczenia:
          <ul className="zyciorysUl">
            <li>
              Order Krzyża Grunwaldu III klasy - 18 kwietnia 1945 (po śmierci,
              rozkazem ND WP)
            </li>
            <li>
              Krzyż Walecznych - 25 lipca 1944 (po śmierci, rozkazem L.400/BP KG
              AK){" "}
            </li>
          </ul>
          <div>
            <br />
          </div>
          <div>
            <br />
          </div>
          Mordechaj Anielewicz, jako jedna z najważniejszych postaci powstania w
          getcie warszawskim, został uhonorowany licznymi upamiętnieniami za
          swoją niezłomność i odwagę w walce z okupantami nazistowskimi.
          <br />
          Jego imię stało się nazwą oddziału partyzanckiego Gwardii Ludowej,
          utworzonego przez uczestników powstania w getcie. W 1955 roku dawna
          ulica Gęsia w Warszawie została przemianowana na ulicę Mordechaja
          Anielewicza, a w 1993 roku Mennica Państwowa wybiła medal z jego
          podobizną, upamiętniającą 50. rocznicę powstania w getcie.
          <br />
          Mordechaj Anielewicz został również uwieczniony na kamiennym bloku
          Traktu Pamięci Męczeństwa i Walki Żydów w Warszawie oraz na obelisku
          Kopca Anielewicza przy dawnej ulicy Miłej 18. W 2003 roku, z okazji
          60. rocznicy śmierci, na skwerze Berka Joselewicza w Wyszkowie
          odsłonięto pomnik składający się z trzech tablic z napisami w językach
          polskim, hebrajskim i angielskim, na którym widnieje imię Mordechaja
          Anielewicza.
          <br />
          Jego nazwisko związane jest także z kibucem Jad Mordechaj w Izraelu
          oraz z Centrum Badania i Nauczania Dziejów i Kultury Żydów w Polsce
          im. Mordechaja Anielewicza, założonym w 1990 roku przy Uniwersytecie
          Warszawskim. W Amsterdamie ulica Anielewiczsingel w dzielnicy
          Osdorp-De Aker również upamiętnia bohatera powstania w getcie
          warszawskim.
        </div>
      </div>
    </>
  );
}

export default Zyciorys;
