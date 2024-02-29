import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/InvestorsDetails.css'; // Ensure the path is correct and matches the file name

const InvestorDetails = () => {
  const { investorId } = useParams();
  const [assetClass, setAssetClass] = useState("");
  const [commitmentInfo, setCommitmentInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (assetClass) {
      setIsLoading(true);
      setError(null);
      fetch(`http://localhost:8000/api/investor/commitment/${assetClass.toLowerCase()}/${investorId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => setCommitmentInfo(data))
        .catch(e => setError(e.message))
        .finally(() => setIsLoading(false));
    }
  }, [assetClass, investorId]);

  const handleAssetClassChange = (e) => {
    setAssetClass(e.target.value);
    setCommitmentInfo([]); // Reset commitment info when asset class changes
  };

  return (
    <div className="investor-details-container">
      <h1 className="investor-details-heading">Investor Commitment Details for ID: {investorId}</h1>
      <div className="dropdown-container">
        <select
          id="asset-class-dropdown"
          value={assetClass}
          onChange={handleAssetClassChange}
          className="dropdown"
          aria-label="Asset class select"
        >
          <option value="">Select Asset Class</option>
          <option value="">Select Asset Class</option>
          <option value="PE">PE (Private Equity)</option>
          <option value="PD">PD (Private Debt)</option>
          <option value="RE">RE (Real Estate)</option>
          <option value="INF">INF (Infrastructure)</option>
          <option value="NR">NR (Natural Resources)</option>
          <option value="HF">HF (Hedge Funds)</option>
        </select>
      </div>

      {isLoading && <p>Loading...</p>}
      {error && <p className="text-danger">Error: {error}</p>}

      {!isLoading && !error &&commitmentInfo && commitmentInfo.length > 0 && (
        <table className="table investor-details-table">
           <thead>
            <tr>
              <th>ID</th>
              <th>Asset Class</th>
              <th>Firm ID</th>
              <th>Currency</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {commitmentInfo.map((commitment) => (
              <tr key={commitment.id}>
                <td>{commitment.id}</td>
                <td>{commitment.asset_class}</td>
                <td>{commitment.firm_id}</td>
                <td>{commitment.currency}</td>
                <td>{commitment.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InvestorDetails;
