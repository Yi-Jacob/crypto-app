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
      console.log(res)
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
                    <Col md={6} lg={6}>
                      <Card style={{ margin: '12px auto' }}>
                        <Card.Img className="logo-img" width="30px" variant="top" src={val.icon} />
                        <Card.Body>
                          <Card.Title className="text-center">{val.name}</Card.Title>
                          <Card.Text className="text-center">Rank: {val.rank} || Ticker: {val.symbol}</Card.Text>
                          <Card.Title className="text-center">${val.price.toFixed(2)}</Card.Title>
                          <Card.Text className="text-left">Market Cap: ${val.marketCap.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits: 2 })}</Card.Text>
                          <Card.Text className="text-left">Available Supply: {val.availableSupply.toLocaleString()}</Card.Text>
                          <Card.Text className="text-left">24hr Volume: ${val.volume?.toLocaleString(undefined, { maximumFractionDigits: 2 })}</Card.Text>
                          <table>
                            <tr className="table-border">
                              <td className="table-border">1hr</td>
                              <td className="table-border">24hr</td>
                              <td className="table-border">7 day</td>
                            </tr>
                            <tr className="table-border">
                              <td className={val.priceChange1h >= 0 ? 'table-border green' : 'table-border red'}>{val.priceChange1h}</td>
                              <td className={val.priceChange1h >= 0 ? 'table-border green' : 'table-border red'}>{val.priceChange1d}</td>
                              <td className={val.priceChange1h >= 0 ? 'table-border green' : 'table-border red'}>{val.priceChange1w}</td>
                            </tr>
                          </table>
                        </Card.Body>
                          <Card.Footer className="text-muted">
                            <Card.Link href={val.websiteUrl}>Learn More</Card.Link>
                          </Card.Footer>
                      </Card>
                    </Col>
                  </>
                );
              })}
                </Row>
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
