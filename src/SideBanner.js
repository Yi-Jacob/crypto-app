import "./App.css";
import "./SideBanner.css"
import Card from 'react-bootstrap/Card';

function SideBanner() {
  return (
    <>

    <h2>Recommended Exchanges</h2>
      <a href="https://river.com/signup?r=REOLQPRN">
  <Card style={{width: '200px', margin: '12px auto'}}>
          <Card.Img style={{ background: 'black', height: "100px"}} variant="top" src="https://river.com/images/logo/logo-icon-7ac68430e55657074868bf7227680e30.svg?vsn=d" />
      <Card.Body>
        <Card.Title className="text-center">River Financial</Card.Title>
      </Card.Body>
    </Card>
    </a>
      <a href="https://www.swanbitcoin.com/jacob">
        <Card style={{ width: '200px', margin: '12px auto' }}>
          <Card.Img style={{ background: '#fff', height: "100px" }} variant="top" src="https://app.swanbitcoin.com/static/media/SwanWithLogoType.2917114e.svg" />
          <Card.Body>
            <Card.Title className="text-center">Swan Bitcoin</Card.Title>
          </Card.Body>
        </Card>
      </a>
      <a href="https://cash.app/app/KPLHNXG">
        <Card style={{ width: '200px', margin: '12px auto' }}>
          <Card.Img style={{ background: '#fff', height: "100px" }} variant="top" src="./cashapp.png" />
          <Card.Body>
            <Card.Title className="text-center">CashApp</Card.Title>
          </Card.Body>
        </Card>
      </a>
      <a href="https://invite.strike.me/80LHX1">
        <Card style={{ width: '200px', margin: '12px auto' }}>
          <Card.Img style={{ background: '#fff', height: "120px" }} variant="top" src="https://is4-ssl.mzstatic.com/image/thumb/Purple112/v4/5d/13/df/5d13dfd6-b16d-7b04-05f0-228ba9a84638/AppIcon-Live-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp" />
          <Card.Body>
            <Card.Title className="text-center">Strike</Card.Title>
          </Card.Body>
        </Card>
      </a>
    </>
  )
}


export default SideBanner;
// style = {{ width: '18rem' }}
