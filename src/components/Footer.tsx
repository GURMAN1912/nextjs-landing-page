import InstaIcon from "../assets/icons/insta.svg"
import XSocial from "../assets/icons/x-social.svg"
import TictokIcon from "../assets/icons/tiktok.svg"
import YouTube from "../assets/icons/youtube.svg"
export const Footer = () => {
  return (
    <footer className="bg-black py-5 text-white/60 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <div className="text-center">2024 Your Company,Inc. All right reserved</div>
            <ul className="flex justify-center gap-3">
              <li><XSocial/></li>
              <li><InstaIcon/></li>
              <li><TictokIcon/></li>
              <li><YouTube/></li>
            </ul>
        </div>
      </div>

    </footer>
  );
};
