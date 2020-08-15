export default function Card(props) {
  const handleClick = (e) => {
    props.handleClick && props.handleClick(e);
  };
  return (
    <>
      <style jsx>{`
        .card {
          margin: 1rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 1rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 5px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }
        .view-more {
          margin-left: 130px;
          cursor: pointer;
        }
      `}</style>
      <div className="card">
        <div className="">
          <h3>{props.name}</h3>
          <p>{props.address}</p>
        </div>
        <div className="view-more" onClick={handleClick}>
          View &rarr;
        </div>
      </div>
    </>
  );
}
