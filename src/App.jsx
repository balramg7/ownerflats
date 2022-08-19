import React, { useState, useEffect } from "react";
import { loadStrip } from "@Strip/Strip-js";
import { Elements } from "@Strip/react-Strip-js";

import CheckoutForm from "./CheckoutForm";
import "./App.css";

// Make sure to call loadStrip outside of a component’s render to avoid
// recreating the Strip object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const StripPromise = loadStrip(
    "pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
);

export default function App() {
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: "Strip",
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="App">
            {clientSecret && (
                <Elements options={options} Strip={StripPromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
}
