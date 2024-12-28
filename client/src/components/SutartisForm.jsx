import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Sutartis";

const SutartisForm = (props) => {
  return (
    <Wrapper>
      <div className="sutartis-container">
        <div className="sutartis-pdf-box">
          <p className="sutartis-title">
            Sutartis nr.:
            <span className="sutartis-numeris">{props.sutartiesnr}</span>
          </p>
          <div className="title-under">
            <p className="kaunas">Kaunas</p>
            <p className="data">{props.data}</p>
          </div>
          <div className="paragraph">
            <p>
              {" "}
              Uždaroji akcinė bendrovė “TODESA“ (įmonės kodas 302041568,
              įregistruota 2008m. Spalio 16 d., kuri įsikūrusi veiklos adresu
              Kaune, Jonavos g. 204a), toliau vadinama “VYKDYTOJU“, veikianti
              pagal bendrovės įstatus, atstovaujama direktoriaus Ričardo Pūko,
              ir <span className="input">{props.pavadinimas}</span> , įmonės
              arba ūkio kodas: <span className="input">{props.VAT}</span> ,
              atstovaujama
              <span className="input"> {props.asmuo}</span> , toliau vadinama
              “UŽSAKOVU”, sudarė šią sutartį:
            </p>
          </div>
          <p className="sutartis-title">1. Sutarties objektas</p>
          <div className="paragraph">
            <p>
              {" "}
              1.1 Pagal užsakovo užduotį vykdytojas įsipareigoja įrengti vaizdo
              stebėjimo sistemą, o užsakovas įsi pareigoja priimti vykdytojo
              atliktą darbą ir už jį apmokėti, sutinkamai su šia sutartimi.
              Objekto adresas: <span className="input">{props.adresas}</span> ,
              Darbas laikomas atliktas sumontavus vaizdo stebėjimo įrangą ir
              atlikus jos konfigūravimo darbus užsakovo adresu. Sekantis ar
              vėlesnis konfigūravimas pagal kliento vėlesnius pageidavimus,
              apmokamas 1 asmens taikomu valandiniu įkainiu, kuris nurodytas 3.2
              punkte
            </p>
          </div>
          <p className="sutartis-title">2. Darbų atlikimo sąlygos</p>
          <div className="paragraph">
            <p>
              2.1 Vykdytojas įsipareigoja pradėti darbus ne vėliau kaip per 10
              darbo dienų po sutarties pasirašy mo ir pilno PVM sąskaitos
              faktūros (arba išankstinės sąskaitos) apmokėjimo už vaizdo
              stebėjimo įrangą, jos priedus ir kitus sąskaitoje esančius
              punktus. Šalių sutarimu gali būti nustatyti kitokie dar bų
              pradžios darbai arba keičiami dėl netinkamų oro sąlygų, gamtos
              stichijų ir kitų atvejų, kurie kelia pavojų darbuotojams ar yra
              netinkamos gamtos sąlygos įrangos montavimui. Esant ligų,
              pandemijos, karantino ir kitoms priežastims, vykdytojas informuos
              Užsakovą dėl darbų atlikimo pradžios ar eigos.
            </p>
          </div>
          <div className="paragraph">
            <p>
              2.2 Užsakovas įsipareigoja leisti dirbti vykdytojo darbuotojams ne
              trumpiau kaip 8 val. per dieną. Ne sant tokios galimybės,
              sutarties atlikimo terminas gali būti nukeliamas.
            </p>
          </div>
          <div className="paragraph">
            <p>
              2.3 Jeigu atliekant darbus vykdytojas padarys žalą užsakovui, tai
              vykdytojas įsipareigoja pataisyti trūkumus. Užsakovas privalo
              pateikti brėžinius ir schemas, kur objekte yra aukštos įtampos
              laidai, santechnika, kita instaliacija, ar kitaip informuoti bei
              pažymėti, kuruose vietose negali būti atliekami gręžimo,
              tvirtinimo darbai. Priešingu atveju, Vykdytojas neprivalo
              atlyginti žalos, kuri atsirado mon tuojant vaizdo stebėjimo
              įrangą.
            </p>
          </div>
          <div className="paragraph">
            <p>
              2.4 Vykdytojas įsipareigoja laikytis Lietuvos Respublikos
              civilinio kodekso 6.669 straipsnio nustatytų konfidencialumo
              reikalavimų, taip pat laikyti puslapyje užsakovo objekte įrengtų
              prietaisų sudėtį ir schemas.
            </p>
          </div>
          <div className="paragraph">
            <p>
              2.5 Už instaliacijos bei aparatūros pažeidimus, atsiradusius ne
              dėl Vykdytojo kaltės, atsako Užsako vas.
            </p>
          </div>
          <div className="paragraph">
            <p>
              2.6 Jei Užsakovo objekte reikia montuoti sistemą ar instaliaciją
              aukščiau nei 3 metrai nuo kieto ir sta bilaus pagrindo, vykdytojas
              gali išsinuomoti reikiamą techniką saugiam darbų atlikimui, o
              esančius nuomos kaštus apmokės Užsakovas, baigus darbus, išskyrus,
              jei yra sutarta kitaip. Jei Užsakovas savo turima technika ar
              įranga padeda atlikti darbus, Užsakovas yra atsakingas už darbų
              saugą.
            </p>
          </div>
          <p className="sutartis-title">
            3. Atsiskaitymo suma, įkainiai ir tvarka
          </p>
          <div className="paragraph">
            <p>
              3.1 Vykdytojo darbų atlikimo įkainis yra valandinis, kuris
              skaičiuojamas nuo išvykimo iš Vykdytojo veiklos adreso, darbų
              atlikimo laikas pas užsakovą iki grįžimo į vykdytojo veiklos
              adresą, kuris yra Kaune, Jonavos g. 204a.
            </p>
          </div>
          <div className="paragraph">
            <p>
              3.2 <span className="input">Montavimo darbų įkainis</span>{" "}
              kiekvienam objekte dirbančiam vykdytojo darbuotojui yra 60€ +
              PVM/1val.
              <p className="ikainiai">
                <span className="input">Programavimo įkainis</span> 90€ +
                PVM/1val, tačiau pirma nuotolinio programavimo valanda užsakovui
                yra nemokama, kuri skirta vaizdo stebėjimo įrangos programavimo
                korekcijai pagal užsakovo pageidavimus, kurie atsirado po darbų
                pabaigos, darbai atliekami nuotoliu.
              </p>
              <p className="ikainiai">
                <span className="input">Viršvalandžiai</span>: taikomas +50% , o
                darbų atlikimas šventinėmis ir ne darbo dienomis +100% koefi
                cientas išskyrus atvejus, jei su užsakovu sutaryta kitaip
                (tekstinis pagrindas).
              </p>
            </p>
          </div>
          <div className="paragraph">
            <p>
              3.3 Užsakovas už atliktus darbus atsiskaito per 2 darbo dienas,
              nuo tos datos, kai vykdytojas atsiunčia PVM sąskaitą-faktūrą, už
              atliktus darbus, sunaudotas montavimo medžiagas, išnuomtotą įrangą
              (jei ji buvo reikalinga pagal 2.6 punktą), papildomai panaudotą
              vaizdo stebėjimo įrangą, jos priedus, kom ponentus ir kitus
              priedus, kurių reikėjo darbams atlikti. Išskyrus atvejus, jei
              raštiškai sutarta kitaip (tekstinis pagrindas).
            </p>
          </div>
          <div className="paragraph">
            <p>
              3.4 Visa atsiskaitymo suma turi būti išmokėta vykdytojui per 2
              darbo dienas, to neatlikus, užsakovas traktuoja kaip
              įsipareigojimų nevykdymu ir be oficialaus įspėjimo skaičiuoja 0,5%
              dydžio delspinigius kiekvienai kalendorinei dienai visai sąskaitos
              sumai išskyrus atvejus, jei sutarta kitaip (tekstiniu pa grindu)
            </p>
          </div>
          <div className="paragraph">
            <p>3.5 Sumontuotai įrangai suteikiama 24 mėnesių garantija.</p>
          </div>
          <div className="paragraph">
            <p>
              <span className="input">
                3.6 Garantija negalioja ir neįpareigoja vykdytojo šiais
                atvejais:
              </span>
              <p className="ikainiai">
                3.6.1. Jeigu be vykdytojo žinios bandyta sumontuoti, permontuoti
                esančią įrangą, sistemą ar jos lydinčias dalis, jeigu užsakovas
                ir kiti asmenys bandė pajungti/pakeisti papildomą/esančią įrangą
                į vykdytojo sumontuotą ir sukonfiguruotą vaizdo stebėjimo
                sistemą, pvz be vykdytojo žinios ir su tarimo pajungtos
                papildomos kameros, įrašymo įrenginys, atminties laikmenos,
                interneto routeris, tinklo šakotuvas ar bet kokia kita įranga
                kuri dirba tame pačiame internetiniame tinkle, IP adresu ose
                kaip ir vaizdo stebėjimo įranga, jos dalys, siųstuvai ir t.t.
              </p>
              <p className="ikainiai">
                3.6.2. Jeigu įranga pažeista mechaniškai, paveikta drėgmės,
                aukštos temperatūros, vandens, ardy ta;
              </p>
              <p className="ikainiai">
                3.6.3. Jeigu pažeidimai įvyko dėl nenugalimos jėgos ar buitinių
                sąlygų poveikio: žemės drebėjimo, žaibo, ugnies,
                potvynio,vandens, drėgmės, viršįtampio, graužikų ir t.t.
              </p>
              <p className="ikainiai">
                3.6.4. Jeigu užsakovas savarankiškai ir be išankstinio vykdotojo
                įspėjimo atliko sistemos konfig uravimus.
              </p>
            </p>
          </div>
          <p className="sutartis-title">4. Nenugalima jėga</p>
          <div className="paragraph">
            <p>
              4.1 Šalis neatsako už bet kurios iš savo prievolių neįvykdymą,
              jeigu įrodo, kad jis buvo sąlygotas kliūties, kurios ji negalėjo
              kontroliuoti ir kad sutarties sudarymo momentu nebuvo galima
              protingai tikėtis iš jos kliūties numatymo arba tos kliūties ar
              jos pasekmių išvengimo ar įveikimo.
            </p>
          </div>
          <div className="paragraph">
            <p>
              4.2 Šiame straipsnyje numatytas atleidimas nuo atsakomybės galioja
              tuo laikotarpiu, kuriuo metu egzistuoja tokia kliūtis.
            </p>
          </div>
          <div className="paragraph">
            <p>
              4.3 Šalis, negalinti įvykdyti savo įsipareigojimų, privalo raštu
              pranešti kitai šaliai per 7 (septynias) kalendorines dienas nuo
              sužinojimo apie tokių kliūčių atsiradimą dienos ir jų įtaką šalies
              sugebėjimui vykdyti savo įsipareigojimus. Tai negalioja 3.3 ir 3.4
              punktams.
            </p>
          </div>
          <div className="paragraph">
            <p>
              4.4 Nepranešimas arba nesavalaikis pranešimas atima šalies teisę
              remtis bet kuria iš aukščiau nurodytų aplinkybių kaip pagrindu,
              atleidžiančių nuo atsakomybės už įsipareigojimų nevykdymą.
            </p>
          </div>
          <div className="paragraph">
            <p>
              4.5 Tuo atveju, jei šios sutarties 4.1. punkte nurodytos
              aplinkybės nustoja veikti, atitinkama šalis praneša apie tai kitai
              šaliai raštu per 7 (septynias) kalendorines dienas.
            </p>
          </div>
          <div className="paragraph">
            <p>
              4.6 Jei 4.1. punkte nurodytos aplinkybės tęsiasi ilgiau nei 7
              kalendorines dienas, šalys turi teisę abi pusiu raštišku
              susitarimu nutraukti sutartį.
            </p>
          </div>
          <p className="sutartis-title">5. Baigiamosios nuostatos</p>
          <div className="paragraph">
            <p>
              5.1 Ši sutartis galioja iki visiško vykdytojo ir užsakovo abipusių
              pareigų įvykdymo.
            </p>
          </div>
          <div className="paragraph">
            <p>
              5.2 Visi įrengimai yra vykdytojo nuosavybė iki užsakovo visiško
              atsiskaitymo už įrengimus ir atliktus darbus.
            </p>
          </div>
          <div className="paragraph">
            <p>
              5.3 Užsakovas neprieštarauja, kad Jo įmonės vardas būtų viešai
              skelbiamas kaip vykdytojo klientas.
            </p>
          </div>
          <div className="paragraph">
            <p>
              5.4 Jeigu sutartis nutraukiama iki darbų rezultato priėmimo,
              užsakovas turi teisę reikalauti perduoti jam atliktų darbų
              rezultatą, o vykdytojas tokiu atveju turi teisę reikalauti
              apmokėti už faktiškai atliktus darbus.
            </p>
          </div>
          <div className="paragraph">
            <p>
              5.5 Ši sutartis sudaryta dviem egzemplioriais, kurių vienas
              laikomas pas užsakovą , o kitas - pas vykdytoją .
            </p>
          </div>
          <div className="paragraph">
            <p>
              5.6 Šioje sutartyje nenumatyti klausimai, tarp jų ir ginčai
              sprendžiami tarpusavio susitarimu. Nepasiekus susitarimo -
              Lietuvos Respublikos įstatymų numatyta tvarka.
            </p>
          </div>
          <div className="paragraph">
            <p>
              5.7 Priedas Nr.1 – detalizuota sąmata, PVM sąskaita faktūra arba
              kita informacija su įrangos kaina.
            </p>
          </div>
          <div className="susitarimai">
            <p>Kiti susitarimai:</p>
            <span>{props.sutarimai}</span>
          </div>
          <div className="sutartis-footer">
            <div className="vykdytojas">
              <span className="title">VYKDYTOJAS</span>
              <div className="vykdytojas-info">
                <p>UAB Todesa</p>
                <p>Jonavos g. 204A, Kaunas</p>
                <p>Įmonės kodas: 302041568</p>
                <p>PVM kodas: LT100004353812</p>
              </div>
              <div className="vykdytojas-info">
                <p>Swedbank: LT107300010111002020</p>
                <p>SEB: LT847044090105342864</p>
                <p> Paysera: LT693500010001366103</p>
              </div>
            </div>
            <div className="uzsakovas">
              <span className="title">UŽSAKOVAS</span>
              <div className="uzsakovas-info">
                <p>{props.pavadinimas}</p>
                <p>{props.asmuo}</p>
                <p>Įmonės kodas: {props.VAT}</p>
                <p>Telefono nr.: {props.telefonas}</p>
                <p>Adresas: {props.adresas}</p>
                <img className="parasas" src={props.parasas}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SutartisForm;
