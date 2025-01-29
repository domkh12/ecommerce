import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaSquareInstagram, FaXTwitter } from 'react-icons/fa6';

function FooterComponent() {
  return (
    <footer className="bg-black text-white flex flex-col justify-center items-center gap-10 py-10">
      <div className="flex justify-center items-start gap-10">
        <div className="flex flex-col gap-2">
          <h5 className="text-xl font-semibold">Exclusive</h5>
          <h6 className="text-[16px] font-semibold">Subscribe</h6>
          <p>Get 10% off your first order</p>
          <input type="text" name="Email" id="email" placeholder="Email" />
        </div>

        <div className="flex flex-col gap-2">
          <h6 className="text-[16px] font-semibold">Support</h6>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="flex flex-col gap-2">
          <h6 className="text-[16px] font-semibold">Account</h6>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        <div className="flex flex-col gap-2">
          <h6 className="text-[16px] font-semibold">Quick Link</h6>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        <div className="flex flex-col gap-2">
          <h6 className="text-[16px] font-semibold">Download App</h6>
          <small>Save $3 with App New User Only</small>
          <div className="flex items-center gap-5">
            <img src="/image/qrCode.svg" alt="QrCode" />
            <div className="flex flex-col gap-2">
              <img src="/image/googlePlayStore.svg" alt="googlePlayStore" />
              <img src="/image/appStore.svg" alt="AppStore" />
            </div>
          </div>

          <div className='flex gap-3 mt-3'>
            <FaFacebookF />
            <FaXTwitter />
            <FaSquareInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <p className="text-gray-500">
        &#169; Copyright Rimel 2022. All right reserved
      </p>
    </footer>
  );
}

export default FooterComponent
