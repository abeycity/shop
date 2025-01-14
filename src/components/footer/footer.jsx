import { TiMail } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div>
        <h3>stay up to date about our latest offers</h3>
        <div>
            <form action="">
                <div>
                    <TiMail />
                    <input type="email" name="" id="" />
                </div>
                <button> subscribe to news letter</button>
            </form>
        </div>
      </div>
      <div>
        <div>
            <article>
                <h3>Shop.co</h3>
                <p>we have clothes that suits your style and
                    which you&lsquo;re proud to wear.From women to men
                </p>
            </article>
            <div>
                <div><AiOutlineTwitter /></div>
                <div> <FaFacebookF /></div>
                <div><FaInstagram /></div>
                <div> </div>
            </div>
        </div>
        <div>
            <h3>company</h3>
            <ul>
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
            </ul>
        </div>
        <div>
            <h3>Help</h3>
            <ul>
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & conditions</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <h3>FAQ</h3>
            <ul>
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
            </ul>
        </div>
        <div>
            <h3>Resoources</h3>
            <ul>
                <li>Free Ebooks</li>
                <li>Development Tutorial</li>
                <li>How to -blog </li>
                <li>Youtube playlists</li>
            </ul>
        </div>
      </div>
      <hr />
      <p>Shop.co &Copy;{Date.now()}.all Rights Reserved</p>
    </div>
  )
}

export default Footer