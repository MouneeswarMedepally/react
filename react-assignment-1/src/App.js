import React from "react";
import { useState, useEffect } from "react";
import preLoader from "./preloader.gif";
import searchIcon from "./search-icon.svg";
import axios from 'axios';
import "./App.css";
function App() {
  const [usersList, setUsersList] = useState(null);
  useEffect(() => {
    axios.get(
      "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
    )
      .then((response) => {setUsersList(response.data);
      setList(response.data);})
      .catch((error) => {
        console.log(error)
      });
  }, []);
  // // const usersList = [
  //   {
  //     id: 119,
  //     firstName: "Jasmin",
  //     lastName: "Weiler",
  //     email: "CMullens@convallis.com",
  //     phone: "(998)432-4040",
  //     address: {
  //       streetAddress: "4614 Magna Rd",
  //       city: "Lisle",
  //       state: "TX",
  //       zip: "28713",
  //     },
  //     description:
  //       "eros consectetur pulvinar facilisis malesuada turpis neque libero sit tincidunt lectus donec porttitor placerat lacus turpis magna consequat pharetra sed egestas egestas at placerat tellus magna elit nunc at mattis at sollicitudin",
  //   },
  //   {
  //     id: 946,
  //     firstName: "Keefer",
  //     lastName: "Parham",
  //     email: "EGaylord@at.io",
  //     phone: "(877)573-1344",
  //     address: {
  //       streetAddress: "5992 Tortor Rd",
  //       city: "Asheville",
  //       state: "WA",
  //       zip: "77112",
  //     },
  //     description:
  //       "vel consequat lacus lorem hendrerit sollicitudin odio morbi malesuada ac sit id tortor non scelerisque curabitur sapien convallis consectetur sit aenean egestas et suspendisse lacus tortor placerat massa sit dolor pharetra sed",
  //   },
  //   {
  //     id: 550,
  //     firstName: "Krista",
  //     lastName: "Mooney",
  //     email: "OEubanks@sit.gov",
  //     phone: "(627)758-1427",
  //     address: {
  //       streetAddress: "5861 Nec Dr",
  //       city: "Winston Salem",
  //       state: "SC",
  //       zip: "40193",
  //     },
  //     description:
  //       "tellus facilisis orci dolor magna vitae magna dolor vestibulum suspendisse vestibulum vel ipsum aliquam at placerat neque pharetra donec mi odio nec ac tempor vitae sapien mattis tincidunt aenean etiam tincidunt non",
  //   },
  //   {
  //     id: 846,
  //     firstName: "Felix",
  //     lastName: "Garayan",
  //     email: "DBatson@curabitur.ly",
  //     phone: "(706)767-4294",
  //     address: {
  //       streetAddress: "9484 Sit Rd",
  //       city: "Kingsville",
  //       state: "PA",
  //       zip: "21850",
  //     },
  //     description:
  //       "molestie mattis aliquam magna lorem vitae odio placerat nec lacus in facilisis vel ac eros non ipsum tincidunt elementum facilisis consequat odio et id tempor sapien tempor ac et nunc sed donec",
  //   },
  //   {
  //     id: 288,
  //     firstName: "Gloria",
  //     lastName: "Sharp",
  //     email: "CPowers@turpis.ly",
  //     phone: "(493)473-0524",
  //     address: {
  //       streetAddress: "3206 In Ct",
  //       city: "Roxboro",
  //       state: "OR",
  //       zip: "84372",
  //     },
  //     description:
  //       "consequat porta libero vel donec tortor lorem consequat mattis velit magna donec placerat lorem amet amet id massa tempor scelerisque eget sollicitudin sollicitudin ac neque odio eros eros amet elit at ipsum",
  //   },
  //   {
  //     id: 84,
  //     firstName: "Ewa",
  //     lastName: "Kaspar",
  //     email: "JDryden@magna.com",
  //     phone: "(667)514-1701",
  //     address: {
  //       streetAddress: "9929 Sagittis Ln",
  //       city: "South Denver",
  //       state: "ND",
  //       zip: "54519",
  //     },
  //     description:
  //       "mi non pulvinar aliquam lacus sagittis nullam vitae sed ipsum placerat sed ipsum neque etiam et pulvinar amet libero nunc sed tincidunt mi lacus tincidunt pretium nec odio risus eget vestibulum lacus",
  //   },
  //   {
  //     id: 800,
  //     firstName: "Joaquin",
  //     lastName: "Amaral",
  //     email: "NShay@egestas.ly",
  //     phone: "(187)244-3337",
  //     address: {
  //       streetAddress: "7081 Massa Ct",
  //       city: "Waldorf",
  //       state: "OH",
  //       zip: "84826",
  //     },
  //     description:
  //       "hendrerit nunc tincidunt sagittis non placerat facilisis sollicitudin ante fringilla sed suspendisse et massa sed aenean dolor pulvinar consequat nec sollicitudin magna suspendisse scelerisque etiam non nullam neque malesuada ante nec morbi",
  //   },
  //   {
  //     id: 891,
  //     firstName: "Kevin",
  //     lastName: "Primavera",
  //     email: "DEllingwood@malesuada.org",
  //     phone: "(182)385-0817",
  //     address: {
  //       streetAddress: "8667 Vitae Dr",
  //       city: "Swansea",
  //       state: "VT",
  //       zip: "40550",
  //     },
  //     description:
  //       "mattis mattis ac pharetra nullam mattis eget in magna lectus non velit amet ipsum nullam scelerisque sapien non sed et vestibulum magna amet sed pulvinar elementum suspendisse fringilla mattis nullam sed pharetra",
  //   },
  //   {
  //     id: 978,
  //     firstName: "Nidal",
  //     lastName: "Park",
  //     email: "EBelisario@orci.ly",
  //     phone: "(895)440-1209",
  //     address: {
  //       streetAddress: "8326 Amet Ave",
  //       city: "Providence",
  //       state: "TX",
  //       zip: "12202",
  //     },
  //     description:
  //       "orci neque in lacus ante tortor elementum nullam velit augue nullam sollicitudin et mattis pretium at sed curabitur eget tincidunt mi donec malesuada sed scelerisque vel ac amet et augue nullam odio",
  //   },
  //   {
  //     id: 581,
  //     firstName: "Aida",
  //     lastName: "Bashford",
  //     email: "TNorthrop@sit.net",
  //     phone: "(919)367-4498",
  //     address: {
  //       streetAddress: "9028 Ipsum Ave",
  //       city: "Long Beach",
  //       state: "TN",
  //       zip: "91910",
  //     },
  //     description:
  //       "mattis hendrerit donec magna sit vel sapien mi fringilla ipsum at ante rutrum sed facilisis eget in non vitae massa scelerisque placerat tortor adipiscing dui lectus placerat eget dolor dolor amet amet",
  //   },
  //   {
  //     id: 13,
  //     firstName: "Kadie",
  //     lastName: "Eubanks",
  //     email: "GBreuninger@vitae.net",
  //     phone: "(908)310-1330",
  //     address: {
  //       streetAddress: "6044 Scelerisque Ln",
  //       city: "San Jose",
  //       state: "AZ",
  //       zip: "76810",
  //     },
  //     description:
  //       "convallis lacus porta tellus consectetur ac magna morbi pretium in aenean pretium lorem ipsum mi elit aenean sagittis massa nullam quis sit ipsum lectus magna elementum nullam odio orci vitae sapien quis",
  //   },
  //   {
  //     id: 295,
  //     firstName: "Angela",
  //     lastName: "Clay",
  //     email: "JTowers@tortor.com",
  //     phone: "(154)327-3584",
  //     address: {
  //       streetAddress: "9145 Hendrerit Ln",
  //       city: "Chambersburg",
  //       state: "IL",
  //       zip: "87726",
  //     },
  //     description:
  //       "tortor tortor libero hendrerit pretium at in et at tellus pretium dui hendrerit mattis sed dolor amet amet eget mattis facilisis lacus vel tincidunt tortor sollicitudin in eget tincidunt tortor lectus id",
  //   },
  //   {
  //     id: 413,
  //     firstName: "Lenora",
  //     lastName: "Hunter",
  //     email: "RMislang@mattis.net",
  //     phone: "(432)315-5020",
  //     address: {
  //       streetAddress: "5567 Elementum Dr",
  //       city: "Forney",
  //       state: "WV",
  //       zip: "27060",
  //     },
  //     description:
  //       "magna placerat tortor magna odio nec nunc convallis mattis consequat elit consequat vitae vitae eros molestie sit vitae vitae at tellus amet donec magna odio velit id placerat aenean libero non quis",
  //   },
  //   {
  //     id: 898,
  //     firstName: "Dusanka",
  //     lastName: "Mooney",
  //     email: "JMettais@tortor.net",
  //     phone: "(645)358-5747",
  //     address: {
  //       streetAddress: "4639 Quis Ln",
  //       city: "Conehatta",
  //       state: "IL",
  //       zip: "42529",
  //     },
  //     description:
  //       "sed amet egestas vestibulum lacus sit at sapien morbi turpis pharetra nec consequat sed lorem amet elementum et ac neque sit sed consequat consequat tempor tincidunt ac amet eros sollicitudin elit sed",
  //   },
  //   {
  //     id: 694,
  //     firstName: "Arnitra",
  //     lastName: "Gibbs",
  //     email: "KHolmes@augue.gov",
  //     phone: "(795)429-0528",
  //     address: {
  //       streetAddress: "4196 Lectus Rd",
  //       city: "Miami",
  //       state: "SC",
  //       zip: "77943",
  //     },
  //     description:
  //       "etiam at sagittis massa vestibulum dolor vestibulum scelerisque vestibulum dui nec mi vel sit pulvinar at id malesuada pharetra pretium rutrum neque augue ac hendrerit sit augue risus egestas ac libero ante",
  //   },
  //   {
  //     id: 439,
  //     firstName: "Spyro",
  //     lastName: "Turich",
  //     email: "EKozlowski@tincidunt.net",
  //     phone: "(247)984-2911",
  //     address: {
  //       streetAddress: "43 Vestibulum Dr",
  //       city: "Kearney",
  //       state: "NC",
  //       zip: "92961",
  //     },
  //     description:
  //       "lacus facilisis hendrerit sed amet tortor facilisis odio lectus porttitor risus odio elit fringilla amet pulvinar porttitor turpis tortor quis ipsum ante consequat sed nec adipiscing malesuada lacus convallis neque etiam odio",
  //   },
  //   {
  //     id: 335,
  //     firstName: "Elida",
  //     lastName: "Wittcop",
  //     email: "AGaby@augue.ly",
  //     phone: "(315)816-2584",
  //     address: {
  //       streetAddress: "722 Aenean Ln",
  //       city: "Roanoke",
  //       state: "TN",
  //       zip: "87613",
  //     },
  //     description:
  //       "velit id pretium tortor amet libero mattis mattis malesuada turpis risus mattis dolor sed placerat sollicitudin pulvinar nullam id neque vitae ac amet quis sit convallis vel velit tortor sollicitudin tortor sed",
  //   },
  //   {
  //     id: 690,
  //     firstName: "Darren",
  //     lastName: "Velazco",
  //     email: "SParsons@tincidunt.org",
  //     phone: "(763)527-7010",
  //     address: {
  //       streetAddress: "3046 Tellus St",
  //       city: "Harrisburg",
  //       state: "WV",
  //       zip: "14323",
  //     },
  //     description:
  //       "tortor et mattis vitae vel sed augue porttitor malesuada lacus odio malesuada nec ac ipsum nullam suspendisse sollicitudin morbi et sit vestibulum velit tortor adipiscing ipsum magna orci nec dolor vestibulum lacus",
  //   },
  //   {
  //     id: 151,
  //     firstName: "Anita",
  //     lastName: "Mcdonald",
  //     email: "ZTierney@magna.gov",
  //     phone: "(639)334-7248",
  //     address: {
  //       streetAddress: "543 Non Ave",
  //       city: "Emmaus",
  //       state: "WY",
  //       zip: "13986",
  //     },
  //     description:
  //       "mi nec aliquam vestibulum lacus sit odio sed convallis et etiam dui pulvinar convallis orci mattis vitae at orci lacus sit magna ac rutrum placerat sollicitudin velit nec magna sed sollicitudin placerat",
  //   },
  //   {
  //     id: 262,
  //     firstName: "Bradford",
  //     lastName: "Larue",
  //     email: "DYuan@curabitur.net",
  //     phone: "(814)615-6820",
  //     address: {
  //       streetAddress: "780 Ac Dr",
  //       city: "Lewiston",
  //       state: "TX",
  //       zip: "16270",
  //     },
  //     description:
  //       "aenean vel scelerisque facilisis amet dolor sit at at dolor mattis ipsum pharetra pulvinar pretium risus non orci aenean libero sit egestas porta eget aenean magna tempor pulvinar morbi tellus libero eget",
  //   },
  //   {
  //     id: 369,
  //     firstName: "Vinit",
  //     lastName: "Holland",
  //     email: "SHershfeld@vitae.com",
  //     phone: "(723)555-9566",
  //     address: {
  //       streetAddress: "4467 Magna Ct",
  //       city: "Winter Garden",
  //       state: "RI",
  //       zip: "92278",
  //     },
  //     description:
  //       "sed odio donec dui odio rutrum vitae sit lorem etiam sit odio dui amet vestibulum sollicitudin rutrum aliquam odio mattis etiam in lectus sit dolor turpis sed sollicitudin tortor sollicitudin pulvinar tortor",
  //   },
  //   {
  //     id: 210,
  //     firstName: "Graeme",
  //     lastName: "Levin",
  //     email: "MDebord@et.net",
  //     phone: "(571)149-5595",
  //     address: {
  //       streetAddress: "5268 Pulvinar Ln",
  //       city: "Dinwiddie",
  //       state: "HI",
  //       zip: "53330",
  //     },
  //     description:
  //       "etiam consequat amet mattis lacus in hendrerit lacus suspendisse turpis in neque odio magna tortor augue lectus quis sit vestibulum suspendisse tortor adipiscing odio magna non rutrum consequat curabitur eros mi nec",
  //   },
  //   {
  //     id: 756,
  //     firstName: "Ahmad",
  //     lastName: "Claudio",
  //     email: "SJayn@morbi.io",
  //     phone: "(490)922-8946",
  //     address: {
  //       streetAddress: "7839 Augue St",
  //       city: "Trinity",
  //       state: "GA",
  //       zip: "74497",
  //     },
  //     description:
  //       "vitae mattis aliquam pharetra lacus lorem dui elementum tortor adipiscing tincidunt aliquam sed vitae risus placerat dolor magna sed magna consectetur pharetra pharetra placerat turpis ipsum sit ipsum libero vitae aenean sed",
  //   },
  //   {
  //     id: 82,
  //     firstName: "Christina",
  //     lastName: "Helgren",
  //     email: "NBessko@consectetur.gov",
  //     phone: "(701)687-1923",
  //     address: {
  //       streetAddress: "4811 Turpis Dr",
  //       city: "Paducah",
  //       state: "AZ",
  //       zip: "18675",
  //     },
  //     description:
  //       "pharetra sit morbi augue risus ipsum pulvinar lacus tincidunt scelerisque malesuada mattis lacus at tempor eget amet aenean tortor lacus at orci odio dui augue sed porttitor suspendisse sit porttitor id ipsum",
  //   },
  //   {
  //     id: 975,
  //     firstName: "Veronica",
  //     lastName: "Carrothers",
  //     email: "COsborne@magna.net",
  //     phone: "(981)871-8523",
  //     address: {
  //       streetAddress: "5675 Odio Ave",
  //       city: "Camas",
  //       state: "NJ",
  //       zip: "78213",
  //     },
  //     description:
  //       "sit non turpis elementum aenean quis egestas fringilla odio massa vestibulum consectetur sapien et at sagittis adipiscing dolor pharetra et mattis amet aliquam tempor amet sollicitudin augue amet nec augue aliquam vitae",
  //   },
  //   {
  //     id: 195,
  //     firstName: "Latia",
  //     lastName: "Roberts",
  //     email: "DWagner@vel.net",
  //     phone: "(901)791-1564",
  //     address: {
  //       streetAddress: "8577 Fringilla Rd",
  //       city: "Orlando",
  //       state: "FL",
  //       zip: "93273",
  //     },
  //     description:
  //       "sollicitudin curabitur pretium molestie tempor dolor convallis convallis mattis vel lacus sit lacus amet malesuada in nec elit tincidunt tellus massa elit pulvinar mattis sed nec at et pulvinar dui velit eget",
  //   },
  //   {
  //     id: 612,
  //     firstName: "Tracie",
  //     lastName: "Holben",
  //     email: "AWhitman@hendrerit.net",
  //     phone: "(953)162-0575",
  //     address: {
  //       streetAddress: "2646 Egestas Ave",
  //       city: "Streamwood",
  //       state: "UT",
  //       zip: "93171",
  //     },
  //     description:
  //       "tellus lorem porta non donec quis magna sed tortor odio lorem orci consectetur id tempor vestibulum neque nullam sagittis convallis ante vitae sagittis dui scelerisque mattis eros vitae sagittis tincidunt magna pretium",
  //   },
  //   {
  //     id: 544,
  //     firstName: "Ernesto",
  //     lastName: "Speth",
  //     email: "PGalvez@sagittis.com",
  //     phone: "(834)817-3930",
  //     address: {
  //       streetAddress: "8086 At Ave",
  //       city: "Wheeling",
  //       state: "OR",
  //       zip: "55386",
  //     },
  //     description:
  //       "morbi porttitor vestibulum tortor at vestibulum turpis sagittis sed lacus egestas vel lorem tortor magna mattis porta amet sapien porttitor et scelerisque nec lacus nec massa sit molestie lacus amet mi in",
  //   },
  //   {
  //     id: 80,
  //     firstName: "Karyn",
  //     lastName: "Kamradt",
  //     email: "JBodine@dui.ly",
  //     phone: "(453)350-0735",
  //     address: {
  //       streetAddress: "4916 Tincidunt Ct",
  //       city: "Longmont",
  //       state: "SD",
  //       zip: "23142",
  //     },
  //     description:
  //       "sed magna sed tincidunt magna libero sit amet massa sollicitudin neque non amet sit facilisis mattis dui nunc orci magna morbi non turpis etiam nec placerat sit et sit ac vestibulum quis",
  //   },
  //   {
  //     id: 778,
  //     firstName: "Melissa",
  //     lastName: "Theiss",
  //     email: "KHebert@tortor.gov",
  //     phone: "(720)264-7560",
  //     address: {
  //       streetAddress: "6192 Mattis Ct",
  //       city: "Derby",
  //       state: "MT",
  //       zip: "60874",
  //     },
  //     description:
  //       "etiam sed elementum nec malesuada odio tincidunt aliquam massa vestibulum fringilla id vel magna vel tempor aliquam sit tellus ipsum dui dolor massa vitae lacus ante dolor ac mattis sit curabitur non",
  //   },
  //   {
  //     id: 483,
  //     firstName: "Chareese",
  //     lastName: "Christopher",
  //     email: "VAnderes@nec.org",
  //     phone: "(995)975-3411",
  //     address: {
  //       streetAddress: "6436 Sit Ave",
  //       city: "Rosenberg",
  //       state: "MS",
  //       zip: "81258",
  //     },
  //     description:
  //       "tempor odio magna pharetra vel curabitur porttitor consectetur vitae magna lacus lacus neque sit suspendisse porttitor sit odio in hendrerit morbi sit nullam dolor lacus ipsum amet nullam tortor nec sapien consequat",
  //   },
  //   {
  //     id: 687,
  //     firstName: "Nishal",
  //     lastName: "Atheya",
  //     email: "PTruth@mattis.org",
  //     phone: "(827)012-3479",
  //     address: {
  //       streetAddress: "7538 Sapien Ct",
  //       city: "Hagerstown",
  //       state: "TN",
  //       zip: "82215",
  //     },
  //     description:
  //       "in nunc egestas elit libero mattis pulvinar consequat sed orci dolor sit tortor ante quis massa consequat ante etiam vitae turpis aliquam ipsum et odio nec adipiscing lorem pulvinar tortor magna mattis",
  //   },
  // ];
  const [list, setList] = useState(usersList);
  const [selectedUser, selectUser] = useState(null);
  const [search, setSearch] = useState("");
  function OnPersonDataClick(userDetails) {
    selectUser(userDetails);
  }
  const onChangeInput = (e) => {
    const { value } = e.target;

    setSearch(value);
    const newUsers = usersList.filter(
      (i) =>
        i.firstName.toLowerCase().includes(value.toLowerCase()) ||
        i.lastName.toLowerCase().includes(value.toLowerCase()) ||
        i.id.toString().includes(value) ||
        i.email.toLowerCase().includes(value.toLowerCase()) ||
        i.phone.includes(value)
    );

    setList(newUsers);
  };
  return usersList != null ? (
    <div>
      <main>
        <div id="table-section">
          <form action="/">
            <img src={searchIcon} alt="Search Icon" />
            <input
              type="text"
              placeholder="Enter something"
              name="search-box"
              id="search-box"
              value={search}
              onChange={onChangeInput}
            />
          </form>

          <div id="table-wrapper">
            <div id="table-headers">
              <table>
                <thead>
                  <tr>
                    <th className="column1">Id</th>
                    <th className="column2">FirstName</th>
                    <th className="column3">LastName</th>
                    <th className="column4">Email</th>
                    <th className="column5">Phone</th>
                  </tr>
                </thead>
              </table>
            </div>

            <div id="table-data">
              <table>
                <tbody>
                  {list &&
                    list.map((listItem, index) => {
                      return (
                        <tr
                          key={index}
                          className={
                            selectedUser &&
                            selectedUser.phone === listItem.phone &&
                            selectedUser.id === listItem.id &&
                            selectedUser.email === listItem.email
                              ? "active data-row"
                              : "data-row"
                          }
                          id={listItem.id}
                          onClick={() => OnPersonDataClick(listItem)}
                        >
                          <td className="column1">{listItem.id}</td>
                          <td className="column2">{listItem.firstName}</td>
                          <td className="column3">{listItem.lastName}</td>
                          <td className="column4">{listItem.email}</td>
                          <td className="column5">{listItem.phone}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div id="info-wrapper">
          <h1>Details</h1>
          <p className="info-wrapper-p">
            Click on a table item to get detailed information
          </p>
          {selectedUser && (
            <div id="info-content">
              <div>
                <b>User selected:</b>
                {selectedUser.firstName + " " + selectedUser.lastName}
              </div>
              <div>
                <b>Description: </b>
                <p className="description">{selectedUser.description}</p>
              </div>
              <div>
                <b>Address:</b>
                {selectedUser.address.streetAddress}
              </div>
              <div>
                <b>City:</b> {selectedUser.address.city}
              </div>
              <div>
                <b>State:</b>
                {selectedUser.address.state}
              </div>
              <div>
                <b>Zip:</b>
                {selectedUser.address.zip}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  ) : (
    <div id="overlay">
      <img src={preLoader} alt="Preloader icon" />
    </div>
  );
}
export default App;
