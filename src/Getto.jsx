import "./getto.css";
import img1 from "./getto/get1.jpg";
import img2 from "./getto/get2.jpg";
import img3 from "./getto/getto.jpg";
import img4 from "./getto/getto0.jpg";
import img5 from "./getto/get3.jpg";
import img6 from "./getto/get4.jpg";
import img7 from "./getto/get5.jpg";
import img8 from "./getto/get6.jpg";
import img9 from "./getto/get7.jpg";

function Getto() {
  return (
    <>
      <div className="content">
        <div className="big-text">POWSTANIE W GETCIE</div>
        <div className="container">
          <div>
            Powstanie Żydowskie w Getcie Warszawskim było jednym z
            najważniejszych wydarzeń II wojny światowej. Miało ono miejsce w
            okresie od 19 kwietnia do 16 maja 1943 roku i było wynikiem
            narastającego niezadowolenia Żydów mieszkających w getcie z warunków
            życia, jakie im narzucono przez niemieckie władze okupacyjne.
            <br />
            Getto warszawskie powstało w listopadzie 1940 roku, kiedy Niemcy
            zaczęli izolować i koncentrować Żydów w specjalnie wydzielonych
            dzielnicach. Ludność getta była skazana na biedę, choroby, a także
            na ciągłe prześladowania ze strony hitlerowskich władz.
            <br />
            Od samego początku Żydzi w getcie stawiali opór. Organizowali
            demonstracje, strajki i sabotaże. Jednak dopiero w 1943 roku doszło
            do zbrojnego powstania, które miało na celu zdobycie wolności i
            uwolnienie getta spod niemieckiej okupacji.
            <br />
            Powstanie zostało poprzedzone długotrwałymi przygotowaniami.
            Żydowskie organizacje podziemne, takie jak Żydowska Organizacja
            Bojowa (ŻOB) i Żydowski Związek Wojskowy (ŻZW), przeprowadzały
            intensywny trening swoich członków, zbierały broń i amunicję oraz
            planowały atak na niemieckie jednostki.
            <br />
            W książce &quot;Polskie państwo podziemne&quot; Stefana Korbońskiego
            opisano współpracę polskich partyzantów z Żydami podczas powstania.
            Polska Armia Krajowa (AK) dostarczała Żydom broń i amunicję oraz
            pomagała w przenoszeniu rannych i ewakuacji cywilów z getta.
            Współpraca ta była bardzo ważna dla Żydów, którzy czuli się wsparci
            przez swoich polskich sąsiadów.
            <br />
            Książka &quot;Marek Edelman życie. Po prostu&quot; Witolda Beresia
            natomiast skupia się na postaci Marka Edelmana, jednego z liderów
            ŻOB. To właśnie Edelman był jednym z głównych organizatorów
            powstania i dowódców podczas walk.
            <br />
            Podczas powstania Niemcy walczyli z całym zapasem sił.
            Wykorzystywali czołgi, artylerię i bombardowania z powietrza. Walki
            toczyły się ulicami getta, gdzie Żydzi prowadzili obronę i atakowali
            niemieckie jednostki.
            <br />
            Niestety, pomimo wielkiego heroizmu i poświęcenia ze strony Żydów,
            powstanie nie udało się. Niemcy mieli przewagę w uzbrojeniu i
            liczbie żołnierzy, a także zastosowali brutalne metody walki, w tym
            palenie domów wraz z mieszkańcami. W wyniku walk zginęło około 13
            tysięcy Żydów, a 50 tysięcy zostało wywiezionych do obozów
            koncentracyjnych.
            <br />
            Mimo porażki powstanie Żydowskie w Getcie Warszawskim stało się
            symbolem walki o wolność i godność człowieka. Żydzi, którzy walczyli
            w getcie, zostali uznani za bohaterów narodowych i na zawsze
            zapamiętani jako ludzie, którzy nie ugięli się w obliczu niemieckiej
            okupacji i postawili swoje życie na szali dla walki o wolność.
            <br />
            Dziś, ponad 75 lat po powstaniu, pamięć o tych wydarzeniach wciąż
            jest żywa. Co roku w dniach 19 kwietnia i 16 maja odbywają się
            uroczystości upamiętniające powstanie Żydowskie w Getcie
            Warszawskim. Również w literaturze, sztuce i filmie powstanie to
            jest często przedmiotem zainteresowania i analizy.
            <br />
            Powstanie Żydowskie w Getcie Warszawskim było wydarzeniem
            tragicznym, ale jednocześnie ważnym momentem w historii Polski i
            Europy. Było to także wydarzenie, które pokazało, że naród żydowski,
            mimo prześladowań i wrogiego nastawienia ze strony hitlerowskich
            władz, nie poddał się i walczył o swoją godność i wolność. Dzięki
            temu, powstanie Żydowskie w Getcie Warszawskim stało się jednym z
            symboli walki z faszyzmem i okupacją, której nigdy nie wolno nam
            zapomnieć.
            <br />
            Mordechaj Anielewicz miał w tym powstaniu swoją ważną rolę, ale
            opiszę to na innej podstronie.{" "}
            <a href="/sdim.github.com/#/zyciorys">
              Kliknij tutaj aby przejść do podstrony ŻYCIORYS
            </a>
          </div>
        </div>
        <div className="big-text">Zdjęcia powstania:</div>
        <div className="gallery">
          <img src={img1} alt="img1" width={500} height={500} />
          <img src={img2} alt="img2" width={500} height={500} />
          <img src={img3} alt="img3" width={500} height={500} />
          <img src={img4} alt="img4" width={500} height={500} />
          <img src={img5} alt="img5" width={500} height={500} />
          <img src={img6} alt="img6" width={500} height={500} />
          <img src={img7} alt="img7" width={500} height={500} />
          <img src={img8} alt="img8" width={500} height={500} />
          <img src={img9} alt="img8" width={500} height={500} />
        </div>
      </div>
    </>
  );
}

export default Getto;
