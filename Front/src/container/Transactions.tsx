import CardTransaction from "../components/CardTransaction";

const Transactions = () => {
  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      <CardTransaction data={{
        title: 'Argent Bank Checking (x8349)',
        amount: '$2,082.79',
        description: 'Available Balance'
      }}/>
      <CardTransaction data={{
        title: 'Argent Bank Savings (x6712)',
        amount: '$10,928.42',
        description: 'Available Balance'
      }}/>
      <CardTransaction data={{
        title: 'Argent Bank Credit Card (x8349)',
        amount: '$184.30',
        description: 'Current Balance'
      }}/>
      
      
    </>
  );
};

export default Transactions;
