import logo from "./logo.svg";
import classes from "./App.module.css";
import "typeface-roboto";
import { MdDone } from "react-icons/md";
import img1 from "./c1.png";
import img2 from "./c2.png";
import img3 from "./c3.png";
import img4 from "./c4.png";
import Payment from "./PaymentHistory";

function App() {
  return (
    <div className={classes.parentBillingContainer}>
      <div className={classes.leftContainer}>
        <div className={classes.MainHeading}>Subscribe To DiracAI</div>
        <div className={classes.MainHeading2}>Billings Plans : </div>

        <div className={classes.topParent}>
          <div className={classes.Lcontainer}>
            <div className={classes.billedTitle}>Billed Monthly</div>

            <div className={classes.moneyContainer}>
              <div className={classes.billedPrice}>$ 100</div>

              <input
                type="radio"
                className={classes.YearlyRadioBtn}
                checked
              />
            </div>
            <div className={classes.taxDetails}>
              CGST & SGST Include In Amount
            </div>
          </div>

          <div className={classes.Ccontainer}>
            <div className={classes.billedTitle}>Quarterly Monthly</div>

            <div className={classes.moneyContainer}>
              <div className={classes.billedPrice}>$ 500</div>

              <input type="radio" className={classes.YearlyRadioBtn} checked />
            </div>
            <div className={classes.taxDetails}>
              CGST & SGST Include In Amount
            </div>
          </div>

          <div className={classes.Rcontainer}>
            <div className={classes.billedTitle}>Billed Yearly</div>

            <div className={classes.moneyContainer}>
              <div className={classes.billedPrice}>$ 1000</div>

              <input type="radio" className={classes.YearlyRadioBtn} checked />
            </div>
            <div className={classes.taxDetails}>
              CGST & SGST Include In Amount
            </div>
          </div>
        </div>

        <div className={classes.PaymentDetails}>
          <div className={classes.paymentTitle}>Payment Details</div>

          <div className={classes.navigationBar}>
            <div className={classes.navigationMenu}>
              <div className={classes.netBanking}>Net Banking</div>
              <div className={classes.card}>Card</div>
              <div className={classes.Upi}>UPI</div>
              <div className={classes.qr}>QR Code</div>
            </div>
          </div>

          <div className={classes.cardPayment}>
            <div className={classes.cardPaymentMainContainer}>
              <div className={classes.cardNumberContainer}>
                <div className={classes.CardText}>Card Number :</div>
                <input className={classes.cardNumberEditBox} type="text" />
              </div>

              <div className={classes.horizontalContainer}>
                <div className={classes.expiryContainer}>
                  <div className={classes.ExpiryText}>Expiration Date :</div>
                  <input className={classes.ExpirationEditBox} type="text" />
                </div>

                <div className={classes.cvvContainer}>
                  <div className={classes.textCvv}>CVV :</div>

                  <input className={classes.cvvEditBox} type="text" />
                </div>
              </div>

              <div className={classes.submitBtn}>Subscribe</div>
            </div>
          </div>

          <div className={classes.horizontalLine}></div>

          <div className={classes.paymentHistoryDetails}>
            <div className={classes.paymentContainer}>
              <div className={classes.Date}>Date</div>

              <div className={classes.Amount}>Amount</div>

              <div className={classes.Invoice}>Invoice</div>

              <div className={classes.PaymnetMethod}>Payment Mehthod</div>

              <div className={classes.Status}>Status</div>
            </div>

            <Payment />
            <Payment />
            <Payment />
            <Payment />
            <Payment />
            <Payment />
            <Payment />
            <Payment />
          </div>
        </div>
      </div>

      <div className={classes.rightContainer}>
        <div className={classes.title}>Unlimited</div>

        <div className={classes.horiLine}></div>

        <div className={classes.featuresContainer}>
          <div className={classes.f1Container}>
            <MdDone className={classes.img} />
            <div className={classes.heading}>Unlimited</div>
            <div className={classes.subHeading}>Storage</div>
          </div>

          <div className={classes.f1Container}>
            <MdDone className={classes.img} />
            <div className={classes.heading}>Unlimited</div>
            <div className={classes.subHeading}>Email</div>
          </div>

          <div className={classes.f1Container}>
            <MdDone className={classes.img} />
            <div className={classes.heading}>Unlimited</div>
            <div className={classes.subHeading}>Chat</div>
          </div>

          <div className={classes.f1Container}>
            <MdDone className={classes.img} />
            <div className={classes.heading}>Unlimited</div>
            <div className={classes.subHeading}>Books</div>
          </div>

          <div className={classes.f1Container}>
            <MdDone className={classes.img} />
            <div className={classes.heading}>Unlimited</div>
            <div className={classes.subHeading}>Video Calls</div>
          </div>

          <div className={classes.f1Container}>
            <MdDone className={classes.img} />
            <div className={classes.heading}>Unlimited</div>
            <div className={classes.subHeading}>24 / 7 Support</div>
          </div>

          <div className={classes.f1Container}>
            <MdDone className={classes.img} />
            <div className={classes.heading}>Unlimited</div>
            <div className={classes.subHeading}>Full Access</div>
          </div>
        </div>

        <div className={classes.mainCardContainer}>
          <div className={classes.cardTitle}>We Accept The Following Cards</div>

          <div className={classes.cardContainer}>
            <img className={classes.card1} src={img1}></img>
            <img className={classes.card2} src={img2}></img>
            <img className={classes.card3} src={img3}></img>
            <img className={classes.card4} src={img4}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
