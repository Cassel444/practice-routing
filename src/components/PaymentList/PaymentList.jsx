import PaymentCard from "../../components/PaymentCard/PaymentCard";

function PaymentList({ payments }) {
  return (
    <ul>
      {payments.map((payment) => (
        <li key={payment.id}>
          <PaymentCard payment={payment} />
        </li>
      ))}
    </ul>
  );
}
export default PaymentList;
