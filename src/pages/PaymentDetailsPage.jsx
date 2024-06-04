import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { getPaymentById } from "../payments-api";

function PaymentDetailsPage() {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getPaymentById(paymentId);
        setPayment(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [paymentId]);

  return (
    <div>
      <h1>PaymentDetailsPage: {paymentId}</h1>
      {isLoading && <b>Loading payment...</b>}
      {error && <b>HTTP error!</b>}

      {payment && (
        <div>
          <p>Amount: {payment.amount}</p>
          <p>Number: {payment.cardNumber}</p>
          <p>Owner: {payment.cardOwner}</p>
          <p>Type: {payment.cardType}</p>
          <p>Description: {payment.description}</p>
        </div>
      )}
      <ul>
        <li>
          <NavLink to="client">Client info</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="receipt">Receipt info</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
export default PaymentDetailsPage;
