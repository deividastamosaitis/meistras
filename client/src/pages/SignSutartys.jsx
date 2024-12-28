import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/Sutartis";
import customFetch from "../utils/customFetch";
import { SutartisForm } from "../components";
import { redirect } from "react-router-dom";
import {
  Document,
  Page,
  Text,
  StyleSheet,
  Font,
  View,
  Image,
  pdf,
} from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import day from "dayjs";
import _ from "lodash";
import Signature from "signature_pad";
import { FaSave, FaEraser } from "react-icons/fa";
import { useState, useEffect } from "react";
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/sutartys/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard");
  }
};

//PDF START-----------------

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
      fontWeight: 300,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf",
      fontWeight: 400,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
      fontWeight: 500,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
      fontWeight: 600,
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  parasas: {
    width: "200px",
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 25,
    fontWeight: 300,
    flex: 1,
    fontFamily: "Roboto",
  },
  title: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: 800,
  },
  datatext: {
    margin: 12,
    fontSize: 12,
    position: "absolute",
    marginTop: 20,
    fontWeight: 300,
    right: 25,
    fontFamily: "Roboto",
  },
  datatext2: {
    margin: 12,
    fontSize: 12,
    position: "absolute",
    marginTop: 20,
    left: 25,
    fontFamily: "Roboto",
  },
  insert: {
    fontWeight: "bold",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  text: {
    margin: 12,
    fontSize: 12,
    textAlign: "justify",
    fontFamily: "Roboto",
    fontWeight: "normal",
  },
  punktai: {
    margin: 3,
    fontSize: 12,
    textAlign: "justify",
    fontFamily: "Roboto",
    fontWeight: "normal",
  },
  punktas: {
    marginLeft: 25,
    fontSize: 12,
    textAlign: "justify",
    fontFamily: "Roboto",
    fontWeight: "normal",
  },
  susitarimai: {
    marginTop: 25,
    fontSize: 12,
    textAlign: "justify",
    fontFamily: "Roboto",
    fontWeight: "normal",
  },
  rekvizitai_container: {
    marginTop: 25,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    alignItems: "flex-start",
    alignContent: "flex-start",
  },
  rekvizitai_todesa: {
    display: "block",
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
    alignSelf: "auto",
    order: 0,
  },
  rekvizitai_klientas: {
    display: "block",
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
    alignSelf: "auto",
    order: 0,
  },
  rekvizitai_bold: {
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
  rekvizitai_info_container: {
    fontWeight: "normal",
    fontSize: 12,
    textAlign: "left",
    marginTop: 10,
  },
  tarpas: {
    marginTop: 1,
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

// Create Document Component
const Quixote = (props) => (
  <>
    <Document>
      <Page size="A4" style={styles.body}>
        <Text style={styles.title}>Sutartis nr.: {props.sutartiesnr}</Text>
        <Text style={styles.datatext}>{props.data}</Text>
        <Text style={styles.datatext2}>Kaunas</Text>
        <Text style={styles.text}>
          Uždaroji akcinė bendrovė “TODESA“ (įmonės kodas 302041568,
          įregistruota 2008m. Spalio 16 d., kuri įsikūrusi veiklos adresu Kaune,
          Jonavos g. 204a), toliau vadinama “VYKDYTOJU“, veikianti pagal
          bendrovės įstatus, atstovaujama direktoriaus Ričardo Pūko, ir{" "}
          <Text style={styles.insert}>{props.pavadinimas} </Text>, įmonės arba
          ūkio kodas: <Text style={styles.insert}>{props.VAT} </Text>,
          atstovaujama <Text style={styles.insert}>{props.asmuo} </Text>, toliau
          vadinama “UŽSAKOVU”, sudarė šią sutartį:
        </Text>
        <Text style={styles.title}>1. Sutarties objektas</Text>
        <Text style={styles.punktai}>
          1.1 Pagal užsakovo užduotį vykdytojas įsipareigoja įrengti vaizdo
          stebėjimo sistemą, o užsakovas įsipareigoja priimti vykdytojo atliktą
          darbą ir už jį apmokėti, sutinkamai su šia sutartimi. Objekto adresas:
          <Text style={styles.insert}> {props.adresas} </Text>, Darbas laikomas
          atliktas sumontavus vaizdo stebėjimo įrangą ir atlikus jos
          konfigūravimo darbus užsakovo adresu. Sekantis ar vėlesnis
          konfigūravimas pagal kliento vėlesnius pageidavimus, apmokamas 1
          asmens taikomu valandiniu įkainiu, kuris nurodytas 3.2 punkte
        </Text>
        <Text style={styles.title}>2. Darbų atlikimo sąlygos</Text>
        <Text style={styles.punktai}>
          2.1 Vykdytojas įsipareigoja pradėti darbus ne vėliau kaip per 10 darbo
          dienų po sutarties pasirašymo ir pilno PVM sąskaitos faktūros (arba
          išankstinės sąskaitos) apmokėjimo už vaizdo stebėjimo įrangą, jos
          priedus ir kitus sąskaitoje esančius punktus. Šalių sutarimu gali būti
          nustatyti kitokie darbų pradžios darbai arba keičiami dėl netinkamų
          oro sąlygų, gamtos stichijų ir kitų atvejų, kurie kelia pavojų
          darbuotojams ar yra netinkamos gamtos sąlygos įrangos montavimui.
          Esant ligų, pandemijos, karantino ir kitoms priežastims, vykdytojas
          informuos Užsakovą dėl darbų atlikimo pradžios ar eigos.
        </Text>
        <Text style={styles.punktai}>
          2.2 Užsakovas įsipareigoja leisti dirbti vykdytojo darbuotojams ne
          trumpiau kaip 8 val. per dieną. Nesant tokios galimybės, sutarties
          atlikimo terminas gali būti nukeliamas.
        </Text>
        <Text style={styles.punktai}>
          2.3 Jeigu atliekant darbus vykdytojas padarys žalą užsakovui, tai
          vykdytojas įsipareigoja pataisyti trūkumus. Užsakovas privalo pateikti
          brėžinius ir schemas, kur objekte yra aukštos įtampos laidai,
          santechnika, kita instaliacija, ar kitaip informuoti bei pažymėti,
          kuruose vietose negali būti atliekami gręžimo, tvirtinimo darbai.
          Priešingu atveju, Vykdytojas neprivalo atlyginti žalos, kuri atsirado
          montuojant vaizdo stebėjimo įrangą.
        </Text>
        <Text style={styles.punktai}>
          2.4 Vykdytojas įsipareigoja laikytis Lietuvos Respublikos civilinio
          kodekso 6.669 straipsnio nustatytų konfidencialumo reikalavimų, taip
          pat laikyti puslapyje užsakovo objekte įrengtų prietaisų sudėtį ir
          schemas.
        </Text>
        <Text style={styles.punktai}>
          2.5 Už instaliacijos bei aparatūros pažeidimus, atsiradusius ne dėl
          Vykdytojo kaltės, atsako Užsakovas.
        </Text>
        <Text style={styles.punktai}>
          2.6 Jei Užsakovo objekte reikia montuoti sistemą ar instaliaciją
          aukščiau nei 3 metrai nuo kieto ir stabilaus pagrindo, vykdytojas gali
          išsinuomoti reikiamą techniką saugiam darbų atlikimui, o esančius
          nuomos kaštus apmokės Užsakovas, baigus darbus, išskyrus, jei yra
          sutarta kitaip. Jei Užsakovas savo turima technika ar įranga padeda
          atlikti darbus, Užsakovas yra atsakingas už darbų saugą.
        </Text>
        <Text style={styles.title}>
          3. Atsiskaitymo suma, įkainiai ir tvarka
        </Text>
        <Text style={styles.punktai}>
          3.1 Vykdytojo darbų atlikimo įkainis yra valandinis, kuris
          skaičiuojamas nuo išvykimo iš Vykdytojo veiklos adreso, darbų atlikimo
          laikas pas užsakovą iki grįžimo į vykdytojo veiklos adresą, kuris yra
          Kaune, Jonavos g. 204a.
        </Text>
        <Text style={styles.punktas}>
          3.2 <Text style={styles.insert}>Montavimo darbų įkainis </Text>
          kiekvienam objekte dirbančiam vykdytojo darbuotojui yra 60€ +
          PVM/1val.
        </Text>
        <Text style={styles.punktas}>
          <Text style={styles.insert}>Programavimo įkainis </Text>
          90€ + PVM/1val, tačiau pirma nuotolinio programavimo valanda užsakovui
          yra nemokama, kuri skirta vaizdo stebėjimo įrangos programavimo
          korekcijai pagal užsakovo pageidavimus, kurie atsirado po darbų
          pabaigos, darbai atliekami nuotoliu.
        </Text>
        <Text style={styles.punktas}>
          <Text style={styles.insert}>Viršvalandžiai: </Text>
          taikomas +50% , o darbų atlikimas šventinėmis ir ne darbo dienomis
          +100% koeficientas išskyrus atvejus, jei su užsakovu sutaryta kitaip
          (tekstinis pagrindas).
        </Text>
        <Text style={styles.punktai}>
          3.3 Užsakovas už atliktus darbus atsiskaito per 2 darbo dienas, nuo
          tos datos, kai vykdytojas atsiunčia PVM sąskaitą-faktūrą, už atliktus
          darbus, sunaudotas montavimo medžiagas, išnuomtotą įrangą (jei ji buvo
          reikalinga pagal 2.6 punktą), papildomai panaudotą vaizdo stebėjimo
          įrangą, jos priedus, komponentus ir kitus priedus, kurių reikėjo
          darbams atlikti. Išskyrus atvejus, jei raštiškai sutarta kitaip
          (tekstinis pagrindas).
        </Text>
        <Text style={styles.punktai}>
          3.4 Visa atsiskaitymo suma turi būti išmokėta vykdytojui per 2 darbo
          dienas, to neatlikus, užsakovas traktuoja kaip įsipareigojimų
          nevykdymu ir be oficialaus įspėjimo skaičiuoja 0,5% dydžio
          delspinigius kiekvienai kalendorinei dienai visai sąskaitos sumai
          išskyrus atvejus, jei sutarta kitaip (tekstiniu pagrindu)
        </Text>
        <Text style={styles.punktai}>
          3.5 Sumontuotai įrangai suteikiama 24 mėnesių garantija.
        </Text>
        <Text style={styles.punktai}>
          <Text style={styles.insert}>
            3.6 Garantija negalioja ir neįpareigoja vykdytojo šiais atvejais:{" "}
          </Text>
        </Text>
        <Text style={styles.punktas}>
          3.6.1. Jeigu be vykdytojo žinios bandyta sumontuoti, permontuoti
          esančią įrangą, sistemą ar jos lydinčias dalis, jeigu užsakovas ir
          kiti asmenys bandė pajungti/pakeisti papildomą/esančią įrangą į
          vykdytojo sumontuotą ir sukonfiguruotą vaizdo stebėjimo sistemą, pvz
          be vykdytojo žinios ir sutarimo pajungtos papildomos kameros, įrašymo
          įrenginys, atminties laikmenos, interneto routeris, tinklo šakotuvas
          ar bet kokia kita įranga kuri dirba tame pačiame internetiniame
          tinkle, IP adresuose kaip ir vaizdo stebėjimo įranga, jos dalys,
          siųstuvai ir t.t.
        </Text>
        <Text style={styles.punktas}>
          3.6.2. Jeigu įranga pažeista mechaniškai, paveikta drėgmės, aukštos
          temperatūros, vandens, ardyta;
        </Text>
        <Text style={styles.punktas}>
          3.6.3. Jeigu pažeidimai įvyko dėl nenugalimos jėgos ar buitinių sąlygų
          poveikio: žemės drebėjimo, žaibo, ugnies, potvynio,vandens, drėgmės,
          viršįtampio, graužikų ir t.t.
        </Text>
        <Text style={styles.punktas}>
          3.6.4. Jeigu užsakovas savarankiškai ir be išankstinio vykdotojo
          įspėjimo atliko sistemos konfiguravimus.
        </Text>
        <Text style={styles.title}>4. Nenugalima jėga</Text>
        <Text style={styles.punktai}>
          4.1 Šalis neatsako už bet kurios iš savo prievolių neįvykdymą, jeigu
          įrodo, kad jis buvo sąlygotas kliūties,  kurios ji negalėjo
          kontroliuoti ir kad sutarties sudarymo momentu nebuvo galima protingai
          tikėtis iš jos kliūties numatymo arba tos kliūties ar jos pasekmių
          išvengimo ar įveikimo.
        </Text>
        <Text style={styles.punktai}>
          4.2 Šiame straipsnyje numatytas atleidimas nuo atsakomybės galioja tuo
          laikotarpiu, kuriuo metu egzistuoja tokia kliūtis.
        </Text>
        <Text style={styles.punktai}>
          4.3 Šalis, negalinti įvykdyti savo įsipareigojimų, privalo raštu
          pranešti kitai šaliai per 7 (septynias) kalendorines dienas nuo
          sužinojimo apie tokių kliūčių atsiradimą dienos ir jų įtaką šalies
          sugebėjimui vykdyti savo įsipareigojimus. Tai negalioja 3.3 ir 3.4
          punktams.
        </Text>
        <Text style={styles.punktai}>
          4.4 Nepranešimas arba nesavalaikis pranešimas atima šalies teisę
          remtis bet kuria iš aukščiau nurodytų aplinkybių kaip pagrindu,
          atleidžiančių nuo atsakomybės už įsipareigojimų nevykdymą.
        </Text>
        <Text style={styles.punktai}>
          4.5 Tuo atveju, jei šios sutarties 4.1. punkte nurodytos aplinkybės
          nustoja veikti, atitinkama šalis praneša apie tai kitai šaliai raštu
          per 7 (septynias) kalendorines dienas.
        </Text>
        <Text style={styles.punktai}>
          4.6 Jei 4.1. punkte nurodytos aplinkybės tęsiasi ilgiau nei 7
          kalendorines dienas, šalys turi teisę abipusiu raštišku susitarimu
          nutraukti sutartį.
        </Text>
        <Text style={styles.title}>5. Baigiamosios nuostatos</Text>
        <Text style={styles.punktai}>
          5.1 Ši sutartis galioja iki visiško vykdytojo ir užsakovo abipusių
          pareigų įvykdymo.
        </Text>
        <Text style={styles.punktai}>
          5.2 Visi įrengimai yra vykdytojo nuosavybė iki užsakovo visiško
          atsiskaitymo už įrengimus ir atliktus darbus.
        </Text>
        <Text style={styles.punktai}>
          5.3 Užsakovas neprieštarauja, kad Jo įmonės vardas būtų viešai
          skelbiamas kaip vykdytojo klientas.
        </Text>
        <Text style={styles.punktai}>
          5.4 Jeigu sutartis nutraukiama iki darbų rezultato priėmimo, užsakovas
          turi teisę reikalauti perduoti jam atliktų darbų rezultatą, o
          vykdytojas tokiu atveju turi teisę reikalauti apmokėti už faktiškai
          atliktus darbus.
        </Text>
        <Text style={styles.punktai}>
          5.5 Ši sutartis sudaryta dviem egzemplioriais, kurių vienas laikomas
          pas užsakovą , o kitas - pas vykdytoją .
        </Text>
        <Text style={styles.punktai}>
          5.6 Šioje sutartyje nenumatyti klausimai, tarp jų ir ginčai
          sprendžiami tarpusavio susitarimu. Nepasiekus susitarimo - Lietuvos
          Respublikos įstatymų numatyta tvarka.
        </Text>
        <Text style={styles.punktai}>
          5.7 Priedas Nr.1 – detalizuota sąmata, PVM sąskaita faktūra arba kita
          informacija su įrangos kaina.
        </Text>
        <Text style={styles.susitarimai}>
          Kiti susitarimai:{" "}
          <Text style={styles.insert}> {props.sutarimai} </Text>
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
        <View style={styles.rekvizitai_container}>
          <View style={styles.rekvizitai_todesa}>
            <Text style={styles.rekvizitai_bold}>VYKDYTOJAS</Text>
            <View style={styles.rekvizitai_info_container}>
              <Text>UAB Todesa</Text>
              <Text>Jonavos g. 204a, Kaunas. </Text>
              <Text>Įmonės kodas 302041568 </Text>
              <Text>PVM kodas LT100004353812 </Text>
              <Text style={styles.tarpas}> </Text>
              <Text>Swedbank: LT107300010111002020</Text>
              <Text>SEB: LT847044090105342864</Text>
              <Text>Paysera: LT693500010001366103</Text>
            </View>
          </View>
          <View style={styles.rekvizitai_klientas}>
            <Text style={styles.rekvizitai_bold}>UŽSAKOVAS</Text>
            <View style={styles.rekvizitai_info_container}>
              <Text>{props.pavadinimas}</Text>
              <Text>{props.adresas} </Text>
              <Text>Įmonės kodas: {props.VAT} </Text>
              <Text>Telefono nr.: {props.telefonas} </Text>
              <Text>Adresas: {props.adresas} </Text>
              <Text style={styles.tarpas}> </Text>
              {props.parasas ? (
                <Image style={styles.parasas} src={props.parasas}></Image>
              ) : null}
              {/* <Image src={props.parasas}></Image> */}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  </>
);

//PDF END--------------------

const SignSutartys = () => {
  const { sutartis } = useLoaderData();
  const [pdfBlob, setPdfBlob] = useState(null);
  const date = day(sutartis.createdAt).format("YYYY-MM-DD");
  const sutartiesnr = day(sutartis.createdAt).format("YYYYMMDD");
  //PARASAS START---------------------------
  const [signaturePad, setSignaturePad] = useState();
  const [savedSignature, setSavedSignature] = useState("");

  const readyPad = () => {
    let wrapper = document.getElementById("signature-pad");
    let canvas = wrapper?.querySelector("canvas");
    canvas.getContext("2d").scale(1, 1);
    let tempSignaturePad = new Signature(canvas, {
      backgroundColor: "rgb(255, 255, 255)",
    });
    setSignaturePad(tempSignaturePad);
  };

  const handleSave = async () => {
    const signatureDataURL = signaturePad.toDataURL();
    setSavedSignature(signatureDataURL);
    const blob = await pdf(
      <Quixote
        sutartiesnr={sutartiesnr}
        pavadinimas={sutartis.pavadinimas}
        data={date}
        VAT={sutartis.VAT}
        asmuo={sutartis.asmuo}
        adresas={sutartis.adresas}
        patikslinimas={sutartis.patikslinimas}
        sutarimai={sutartis.sutarimai}
        telefonas={sutartis.telefonas}
        parasas={signatureDataURL}
      />
    ).toBlob();
    setPdfBlob(blob);
    console.log(savedSignature);
  };
  const handleClear = () => {
    signaturePad.clear();
  };

  useEffect(() => {
    readyPad();
  }, []);

  //PARASAS END------------------------------

  return (
    <>
      <Wrapper>
        <div className="sutartis-container">
          <div className="sutartis-signature-box">
            {pdfBlob && (
              <>
                <a
                  href={URL.createObjectURL(pdfBlob)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", marginTop: "10px" }}
                >
                  <button>Atidaryti Sutartį</button>
                </a>
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(pdfBlob);
                    link.download = `${sutartis.pavadinimas}.pdf`;
                    link.click();
                  }}
                >
                  Atsisiųsti sutartį
                </button>
              </>
            )}
            <div className="signature-label">
              <label>Parašas:</label>
            </div>
            <div id="signature-pad">
              <canvas className="signature-canvas"></canvas>
              <div>
                <button onClick={handleSave}>
                  <FaSave /> Pasirašyti
                </button>
                <button onClick={handleClear}>
                  <FaEraser /> Pataisyti
                </button>
              </div>
            </div>
          </div>
          <SutartisForm
            sutartiesnr={sutartiesnr}
            pavadinimas={sutartis.pavadinimas}
            data={date}
            VAT={sutartis.VAT}
            asmuo={sutartis.asmuo}
            adresas={sutartis.adresas}
            patikslinimas={sutartis.patikslinimas}
            sutarimai={sutartis.sutarimai}
            telefonas={sutartis.telefonas}
            parasas={savedSignature}
          />
        </div>
      </Wrapper>
    </>
  );
};

export default SignSutartys;
