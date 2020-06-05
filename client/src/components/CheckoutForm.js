import React from "react";
import { useForm } from "../hooks/useForm";


  //  ************* Migrated to useForm ************** //
// const initialValue = {
//   firstName: "",
//   lastName: "",
//   address: "",
//   city: "",
//   state: "",
//   zip: "",
// };

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage, values, setValues, handleChanges] = useForm();


  //  ************* Migrated to useForm ************** //
  // const [values, setValues] = useState(initialValue);

  //  ************* Migrated to useForm ************** //
  // const handleChanges = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
            id="firstName"
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
            id="lastName"
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
            id="address"
          />
        </label>
        <label>
          City:
          <input name="city" value={values.city} onChange={handleChanges} id="city" />
        </label>
        <label>
          State:
          <input name="state" value={values.state} onChange={handleChanges} id="state" />
        </label>
        <label>
          Zip:
          <input name="zip" value={values.zip} onChange={handleChanges} id="zip" />
        </label>
        <button data-testid="checkoutButton">Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
