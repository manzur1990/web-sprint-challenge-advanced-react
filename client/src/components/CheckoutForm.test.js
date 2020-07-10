import React from "react";
import { render, fireEvent, screen} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", () => {
    const {getByLabelText, getByTestId} = render(<CheckoutForm />)

    const firstNameInput = getByLabelText(/first name/i)
    const lastNameInput = getByLabelText(/last name/i)
    const addressInput = getByLabelText(/address/i)
    const cityInput = getByLabelText(/city/i)
    const stateInput = getByLabelText(/state/i)
    const zipInput = getByLabelText(/zip/i)
    const checkoutButton= getByTestId('checkoutButton')

    fireEvent.change(firstNameInput, {target: {value: 'jorge'}})
    fireEvent.change(lastNameInput, {target: {value: 'manzur'}})
    fireEvent.change(addressInput, {target: {value: 'sin city 203'}})
    fireEvent.change(cityInput, {target: {value: 'Las Vegas'}})
    fireEvent.change(stateInput, {target: {value: 'Nevada'}})
    fireEvent.change(zipInput, {target: {value: '11111'}})
    fireEvent.click(checkoutButton)

    expect(getByTestId('successMessage')).toBeInTheDocument()
    
});
