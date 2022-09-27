import "./App.css";
import "./TopBanner.css"
import Axios from "axios";
import { useEffect, useState } from "react";

function TopBanner() {
  // Setting up the initial states using
  // react hook 'useState'

  const [crypto, setCrypto] = useState([]);

  // Fetching crypto data from the API only
  // once when the component is mounted
  useEffect(() => {
    Axios.get(
      `https://api.coinstats.app/public/v1/coins?skip=0&limit=10¤cy=INR`
    ).then((res) => {
      setCrypto(res.data.coins);
    });
  }, []);


  return (
    <section class="marquee">
      <div class="scroll">
        <div>
          <h3 class="category">Top 10</h3>
          {crypto.slice(0,15).map((val, id) => {
            return (
              <h3 class="category">{val.symbol}: ${val.price.toFixed(2)}</h3>
            )
          }
          )}
        </div>
        <div>
          <h3 class="category">Top 10</h3>
          {crypto.slice(0, 15).map((val, id) => {
            return (
              <h3 class="category">{val.symbol}: ${val.price.toFixed(2)}</h3>
            )
          }
          )}
        </div>
      </div>
    </section>

  )
}

export default TopBanner;
