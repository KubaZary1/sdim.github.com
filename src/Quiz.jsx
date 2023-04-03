import React from "react";

function Quiz() {
  let userAnswers = {};
  const changeValue = (value) => {
    const [question, answer] = value.split("-");
    userAnswers[question] = answer;
    console.log(userAnswers);
  };
  const checkAnswers = () => {
    const correctAnswers = {
      pyt1: "4",
      pyt2: "4",
      pyt3: "3",
      pyt4: "2",
      pyt5: "2",
      pyt6: "2",
      pyt7: "3",
      pyt8: "1",
      pyt9: "1",
      pyt10: "4",
    };
    let incorrect = [];
    for (const pyt in correctAnswers) {
      if (userAnswers[pyt] !== correctAnswers[pyt]) {
        incorrect.push(pyt);
      }
    }
    if (incorrect.length === 0) {
      console.log(true);
      window.location.href = "#/quiz-completed";
    } else {
      window.location.href = "#/quiz-bad-answers";
      console.log(false);
      console.log(incorrect);
    }
  };
  return (
    <div>
      <div className="content">
        <div className="big-text">QUIZ</div>
        <div className="container">
          {/* */}
          <div
            className="container"
            onChange={(e) => changeValue(e.target.value)}
          >
            <div className="big-text">Pytanie 1</div>
            <p>Kim był Mordechaj Anielewicz?</p>
            <label>
              <input type="radio" name="pyt1" value="pyt1-1" />
              Polski żołnierz
            </label>
            <br />
            <label>
              <input type="radio" name="pyt1" value="pyt1-2" />
              Żołnierz francuski
            </label>
            <br />
            <label>
              <input type="radio" name="pyt1" value="pyt1-3" />
              Żołnierz Armii Krajowej
            </label>
            <br />
            <label>
              <input type="radio" name="pyt1" value="pyt1-4" />
              Żołnierz Żydowski
              {/* Poprawne*/}
            </label>
          </div>
          {/* */}
          <div
            className="container"
            onChange={(e) => changeValue(e.target.value)}
          >
            <div className="big-text">Pytanie 2</div>
            <p>
              Kiedy Mordechaj Anielewicz przewodniczył powstaniu w getcie
              warszawskim?
            </p>
            <label>
              <input type="radio" name="pyt2" value="pyt2-1" />
              1939 r.
            </label>
            <br />
            <label>
              <input type="radio" name="pyt2" value="pyt2-2" />
              1940 r.
            </label>
            <br />
            <label>
              <input type="radio" name="pyt2" value="pyt2-3" />
              1941 r.
            </label>
            <br />
            <label>
              <input type="radio" name="pyt2" value="pyt2-4" />
              1943 r.
              {/* Poprawne*/}
            </label>
          </div>
          {/* */}
          <div
            className="container"
            onChange={(e) => changeValue(e.target.value)}
          >
            <div className="big-text">Pytanie 3</div>
            <p>Jakie był cel powstania w getcie warszawskim?</p>
            <label>
              <input type="radio" name="pyt3" value="pyt3-1" />
              Ucieczka Żydów z getta
            </label>
            <br />
            <label>
              <input type="radio" name="pyt3" value="pyt3-2" />
              Zabicie jak największej liczby Niemców
            </label>
            <br />
            <label>
              <input type="radio" name="pyt3" value="pyt3-3" />
              Obrona przed Niemcami i opóźnienie deportacji Żydów do obozów
              koncentracyjnych
              {/* Poprawne*/}
            </label>
            <br />
            <label>
              <input type="radio" name="pyt3" value="pyt3-4" />
              Zdobycie broni i ucieczka z kraju
            </label>
          </div>
          {/* */}
          <div
            className="container"
            onChange={(e) => changeValue(e.target.value)}
          >
            <div className="big-text">Pytanie 4</div>
            <p>
              Jakie było stanowisko Mordechaja Anielewicza w getcie warszawskim?
            </p>
            <label>
              <input type="radio" name="pyt4" value="pyt4-1" />
              Dowódca sił nieregularnych
            </label>
            <br />
            <label>
              <input type="radio" name="pyt4" value="pyt4-2" />
              Dowódca Żydowskiej Organizacji Bojowej
              {/* Poprawne*/}
            </label>
            <br />
            <label>
              <input type="radio" name="pyt4" value="pyt4-3" />
              Dowódca jednostek Armii Krajowej
            </label>
            <br />
            <label>
              <input type="radio" name="pyt4" value="pyt4-4" />
              Szpieg żydów
            </label>
          </div>
          {/* */}
          <div
            className="container"
            onChange={(e) => changeValue(e.target.value)}
          >
            <div className="big-text">Pytanie 5</div>
            <p>
              Która grupa polityczna była związana z Mordechajem Anielewiczem?
            </p>
            <label>
              <input type="radio" name="pyt5" value="pyt5-1" />
              Syjonistyczna Organizacja Bojowa
            </label>
            <br />
            <label>
              <input type="radio" name="pyt5" value="pyt5-2" />
              Bund
              {/* Poprawne*/}
            </label>
            <br />
            <label>
              <input type="radio" name="pyt5" value="pyt5-3" />
              Komunistyczna Partia Polski
            </label>
            <br />
            <label>
              <input type="radio" name="pyt5" value="pyt5-4" />
              Poalej Syjon
            </label>
          </div>
          {/* */}
          <div
            className="container"
            onChange={(e) => changeValue(e.target.value)}
          >
            <div className="big-text">Pytanie 6</div>
            <p>
              Która z tych postaci była przeciwnikiem Mordechaja Anielewicza w
              getcie warszawskim?
            </p>
            <label>
              <input type="radio" name="pyt6" value="pyt6-1" />
              Tadeusz Bór-Komorowski
            </label>
            <br />
            <label>
              <input type="radio" name="pyt6" value="pyt6-2" />
              Jürgen Stroop {/* Poprawne*/}
            </label>
            <br />
            <label>
              <input type="radio" name="pyt6" value="pyt6-3" />
              Hans Frank
            </label>
            <br />
            <label>
              <input type="radio" name="pyt6" value="pyt6-4" />
              Heinrich Himmler
            </label>
          </div>
          {/* */}
          <div
            className="container"
            onChange={(e) => changeValue(e.target.value)}
          >
            <div className="big-text">Pytanie 7</div>
            <p>Kiedy zginął Mordechaj Anielewicz?</p>
            <label>
              <input type="radio" name="pyt7" value="pyt7-1" />W marcu 1943 r.
            </label>
            <br />
            <label>
              <input type="radio" name="pyt7" value="pyt7-2" />W kwietniu 1943
              r.
            </label>
            <br />
            <label>
              <input type="radio" name="pyt7" value="pyt7-3" />W maju 1943 r.{" "}
              {/* Poprawne*/}
            </label>
            <br />
            <label>
              <input type="radio" name="pyt7" value="pyt7-4" />W czerwcu 1943 r.
            </label>
          </div>
          {/* */}
          <div
            className="container"
            onChange={(e) => changeValue(e.target.value)}
          >
            <div className="big-text">Pytanie 8</div>
            <p>Gdzie znajduje się pomnik Mordechaja Anielewicza?</p>
            <label>
              <input type="radio" name="pyt8" value="pyt8-1" />W Warszawie{" "}
              {/* Poprawne*/}
            </label>
            <br />
            <label>
              <input type="radio" name="pyt8" value="pyt8-2" />W Krakowie
            </label>
            <br />
            <label>
              <input type="radio" name="pyt8" value="pyt8-3" />W Łodzi
            </label>
            <br />
            <label>
              <input type="radio" name="pyt8" value="pyt8-4" />W Gdańsku
            </label>
          </div>
          {/* */}
          <div
            className="container"
            onChange={(e) => changeValue(e.target.value)}
          >
            <div className="big-text">Pytanie 9</div>
            <p>
              Kto napisał książkę &quot;Ogień i pył. Ostatnia wiosna Mordechaja
              Anielewicza&quot;?
            </p>
            <label>
              <input type="radio" name="pyt9" value="pyt9-1" />
              Andrzej Żbikowski {/* TO */}
            </label>
            <br />
            <label>
              <input type="radio" name="pyt9" value="pyt9-2" />
              Witold Bereś
            </label>
            <br />
            <label>
              <input type="radio" name="pyt9" value="pyt9-3" />
              Stefan Korboński
            </label>
            <br />
            <label>
              <input type="radio" name="pyt9" value="pyt9-4" />
              Józef Piłsudski
              {/* Poprawne*/}
            </label>
          </div>
          {/* */}
          <div
            className="container"
            onChange={(e) => changeValue(e.target.value)}
          >
            <div className="big-text">Pytanie 10</div>
            <p>
              Jakie były konsekwencje powstania w getcie warszawskim dla
              niemieckiego okupanta?
            </p>
            <label>
              <input type="radio" name="pyt10" value="pyt10-1" />
              Niemiecka armia została zmuszona do wycofania się z Warszawy
            </label>
            <br />
            <label>
              <input type="radio" name="pyt10" value="pyt10-2" />
              Niemiecki rząd przeprosił za zbrodnie popełnione w getcie
              warszawskim
            </label>
            <br />
            <label>
              <input type="radio" name="pyt10" value="pyt10-3" />
              Niemiecki rząd zdecydował się na likwidację obozów
              koncentracyjnych
            </label>
            <br />
            <label>
              <input type="radio" name="pyt10" value="pyt10-4" />
              Niemiecki okupant zaostrzył represje wobec Żydów i innych grup
              narodowościowych
              {/* Poprawne*/}
            </label>
          </div>
          {/* */}
          <button onClick={checkAnswers} className="buttonCheck">
            SPRAWDŹ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
