import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    const header = screen.getByText(/Checkout Form/i)
    expect(header).toBeInTheDocument()
});

test('form shows success message on submit with form details', () => {
    const { getByLabelText, findAllByText, getByTestId } = render(<CheckoutForm />);

    const firstNameInput = getByLabelText(/first name/i)
    const lastNameInput = getByLabelText(/last name/i)
    const addressInput = getByLabelText(/address/i)
    const cityInput = getByLabelText(/city/i)
    const stateInput = getByLabelText(/state/i)
    const zipInput = getByLabelText(/zip/i)

    fireEvent.change(firstNameInput, { target: { value: 'jorge' } });
    fireEvent.change(lastNameInput, { target: { value: 'manzur' } });
    fireEvent.change(addressInput, { target: { value: 'thehouseinmango street' } });
    fireEvent.change(cityInput, { target: { value: 'Lafayette' } });
    fireEvent.change(stateInput, { target: { value: 'LA' } });
    fireEvent.change(zipInput, { target: { value: '33333' } });

    const checkoutButton = getByTestId('checkoutButton');
    fireEvent.click(checkoutButton);

    expect(getByTestId('successMessage')).toBeInTheDocument();
});