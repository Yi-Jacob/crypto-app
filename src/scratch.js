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
