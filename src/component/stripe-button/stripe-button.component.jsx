import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_MRLpbYmZER17wBV3uVbCfhu200McIIAch0';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Sucessful');
    }
 
    return (
        <StripeCheckout 
            label = 'Pay Now'
            name='CRWN Clothing LLC.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/en/7c7542da0d'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;