import React from 'react';
import { footerLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5 px-5 sm:px-10">
      <div className="max-w-screen-xl mx-auto">
        

        

        <div className="text-xs space-y-2">
          <ol className="list-decimal list-inside space-y-1">
            <li>The display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.12 inches (iPhone 15 Pro) or 6.69 inches (iPhone 15 Pro Max) diagonally. Actual viewable area is less.</li>
            <li>iPhone 15 Pro and iPhone 15 Pro Max are splash, water and dust resistant and were tested under controlled laboratory conditions with a rating of IP68 under IEC standard 60529 (maximum depth of 6 metres up to 30 minutes). Splash, water and dust resistance are not permanent conditions. Resistance might decrease as a result of normal wear. Do not attempt to charge a wet iPhone; refer to the user guide for cleaning and drying instructions. Liquid damage not covered under warranty.</li>
            <li>Stand sold separately.</li>
            <li>Apple Vision Pro available early next year in the United States.</li>
            <li>USB 3 cable with 10Gb/s speed required.</li>
            <li>Wi-Fi 6E connectivity available in countries where supported.</li>
            <li>Ultra Wideband availability varies by region.</li>
            <li>The included USB-C Charge Cable is compatible with AirPods Pro (2nd generation) with MagSafe Charging Case (USB-C).</li>
            <li>Testing conducted by Apple in August 2023 using pre-production iPhone 15, iPhone 15 Plus, iPhone 15 Pro and iPhone 15 Pro Max units and software and accessory Apple USB-C Power Adapter (20W Model A2305). Fast-charge testing conducted with drained iPhone units. Charge time varies with settings and environmental factors; actual results will vary.</li>
            <li>Use of eSIM requires a wireless service plan which may include restrictions on switching service providers and roaming, even after contract expires. Not all providers support eSIM. Use of eSIM in iPhone may be disabled when purchased from some providers. See your provider for details. To learn more, visit support.apple.com/en-za/HT212780.</li>
            <li>Data plan required. 5G is available in selected markets and through selected network providers. Speeds vary based on site conditions and network. For details on 5G support, contact your provider and see apple.com/iphone/cellular.</li>
            <li>All battery claims depend on network configuration and many other factors; actual results will vary. Battery has limited recharge cycles and may eventually need to be replaced. Battery life and charge cycles vary by use and settings. See apple.com/za/batteries and apple.com/iphone/battery.html for more information.</li>
            <li>Accessories sold separately.</li>
            <li>Requires an iPhone and Apple Watch with second-generation Ultra Wideband chip. Ultra Wideband availability varies by region.</li>
            <li>Battery life claim refers to larger models. All battery claims depend on network configuration and many other factors; actual results will vary. Battery has limited recharge cycles and may eventually need to be replaced. Battery life and charge cycles vary by use and settings. See apple.com/za/batteries and apple.com/iphone/battery.html for more information.</li>
          </ol>
        </div>

        <div className="border-t border-gray-700 my-4"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 text-xs">
          <div>
            <h3 className="font-semibold">Explore</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Mac</a></li>
              <li><a href="#" className="hover:underline">iPad</a></li>
              <li><a href="#" className="hover:underline">iPhone</a></li>
              <li><a href="#" className="hover:underline">Watch</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Account</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Manage Your Apple ID</a></li>
              <li><a href="#" className="hover:underline">iCloud.com</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">For Business</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Apple and Business</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">For Education</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Apple and Education</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Apple Values</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">About Apple</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">Apple Leadership</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Ethics & Compliance</a></li>
              <li><a href="#" className="hover:underline">Contact Apple</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 my-4"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
          <div className="flex space-x-2 mt-2 md:mt-0">
            {footerLinks.map((link, i) => (
              <span key={i} className="hover:underline cursor-pointer">
                {link} {i !== footerLinks.length - 1 && <span>|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
