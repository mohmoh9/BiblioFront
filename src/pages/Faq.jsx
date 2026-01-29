import "./Faq.css";

export default function Faq() {
  return (
    <section className="faq-container">
      <h1 className="faq-title"> Foire Aux Questions</h1>

      <div className="faq-item">
        <h3> Comment acheter un livre ?</h3>
        <p>
          Cliquez sur le bouton <strong>“Acheter”</strong> sur la fiche du livre.
          Il sera ajouté à votre panier.
        </p>
      </div>

      <div className="faq-item">
        <h3> Comment louer un livre ?</h3>
        <p>
          Cliquez sur <strong>“Louer”</strong>. La durée est définie
          automatiquement par la bibliothèque.
        </p>
      </div>

      <div className="faq-item">
        <h3> Que faire si un livre est indisponible ?</h3>
        <p>
          Si le stock est épuisé, le livre ne peut pas être acheté ni loué.
        </p>
      </div>

      <div className="faq-item">
        <h3> Dois-je créer un compte ?</h3>
        <p>
          Oui, un compte est nécessaire pour gérer votre panier et vos commandes.
        </p>
      </div>

      <div className="faq-item">
        <h3> Qui peut gérer les livres ?</h3>
        <p>
          Seuls les utilisateurs avec le rôle <strong>ADMIN</strong> peuvent
          ajouter, modifier ou supprimer des livres.
        </p>
      </div>
    </section>
  );
}
