import { createOrder } from "../api/orderApi";

export default function Checkout() {
  const handlePay = async () => {
    const order = await createOrder();
    alert("Commande créée, paiement en cours...");
    // redirection PayPal / Mobile Money ici
  };

  return (
    <button onClick={handlePay}>
      Payer maintenant
    </button>
  );
}
