import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import SideBanner from "./SideBanner";
import TopBanner from "./TopBanner";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function App() {

  // Setting up the initial states using
  // react hook 'useState'
  const [search, setSearch] = useState("");
  const [crypto, setCrypto] = useState([]);

  // Fetching crypto data from the API only
  // once when the component is mounted
  useEffect(() => {
    Axios.get(
      `https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR`
    ).then((res) => {
      setCrypto(res.data.coins);
    });
  }, []);

  return (
    <Container>
      <Row>
        <Col md={12} className="text-center">
          <TopBanner />

          </Col>
        <Col md={9}>
          <div className="App">
            <h1>Top 100 Cryptocurrencies</h1>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <Row>



            {crypto
              .filter((val) => {
                return val.name.toLowerCase().includes(search.toLowerCase());
              })
              .map((val, id) => {
                return (
                  <>
                    <Col md={4}>
                      <Card style={{ margin: '12px auto' }}>
                        <Card.Img className="logo-img" width="30px" variant="top" src={val.icon} />
                        <Card.Body>
                          <Card.Title className="text-center">{val.name}</Card.Title>
                          <Card.Text className="text-center">Rank: {val.rank} || Ticker: {val.symbol}</Card.Text>
                          <Card.Title className="text-center">${val.price.toFixed(2)}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  </>
                );
              })}

                </Row>


            <table>
              <thead>
                <tr>
                  <td>Rank</td>
                  <td>Name</td>
                  <td>Symbol</td>
                  <td>Market Cap</td>
                  <td>Price</td>
                  {/* <td>Available Supply</td> */}
                  {/* <td>Volume(24hrs)</td> */}
                </tr>
              </thead>
              {/* Mapping all the cryptos */}
              <tbody>
                {/* Filtering to check for the searched crypto */}
                {crypto
                  .filter((val) => {
                    return val.name.toLowerCase().includes(search.toLowerCase());
                  })
                  .map((val, id) => {
                    return (
                      <>
                        <tr id={id}>
                          <td className="rank">{val.rank}</td>
                          <td className="logo">
                            <a href={val.websiteUrl}>
                              <img src={val.icon} alt="logo" width="30px" />
                            </a>
                            <p className="overflow-hidden">{val.name}</p>
                          </td>
                          <td className="symbol">{val.symbol}</td>
                          <td>${val.marketCap.toLocaleString()}</td>
                          <td>${val.price.toFixed(2)}</td>
                          {/* <td>{val.availableSupply.toLocaleString()}</td> */}
                          {/* <td>{val.volume.toFixed(0)}</td> */}
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </Col>
        <Col md={3}>
         <SideBanner />
        </Col>
      </Row>
    </Container>

  );
}

export default App;
