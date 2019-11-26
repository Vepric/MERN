import React, { Component } from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

class Paypal extends Component {
  render() {
    const onSuccess = payment => {
      //console.log(JSON.stringify(payment));
      this.props.onSuccess(payment);

      //   {"paid":true,"cancelled":false,"payerID":"XXHHJKANA7W4E","paymentID":"PAYID-LWJ2QMI6JG37553PJ916201M","paymentToken":"EC-02W46097JD494273H","returnUrl":"https://www.paypal.com/checkoutnow/error?paymentId=PAYID-LWJ2QMI6JG37553PJ916201M&token=EC-02W46097JD494273H&PayerID=XXHHJKANA7W4E","address":{"recipient_name":"John Doe","line1":"1 Main St","city":"San Jose","state":"CA","postal_code":"95131","country_code":"US"},"email":"sb-hbgoq318621@personal.example.com"}
    };

    const onCancel = data => {
      console.log(JSON.stringify(data));
    };

    const onError = err => {
      console.log(JSON.stringify(err));
    };

    let env = "sandbox";
    let currency = "USD";
    let total = this.props.toPay;

    const client = {
      sandbox:
        "Afde0E-3DliKHRXa5-7tjjOshwvxdVc4FvRdGcq_WSPeFrNVk8ig-a_sSuvHIGUptpgb9L48pcz-DakQ",
      production: ""
    };

    return (
      <div>
        <PaypalExpressBtn
          env={env}
          client={client}
          currency={currency}
          total={total}
          onError={onError}
          onSuccess={onSuccess}
          onCancel={onCancel}
          style={{
            size: "large",
            color: "blue",
            shape: "rect",
            label: "checkout"
          }}
        />
      </div>
    );
  }
}

export default Paypal;
