import photo1 from "../assets/img/photo1.png";
import photo2 from "../assets/img/photo2.png";
import photo3 from "../assets/img/photo3.png";
import photo4 from "../assets/img/photo4.png";
import logo1 from "../assets/img/logo1.png";
import logo2 from "../assets/img/logo2.png";
import logo3 from "../assets/img/logo3.png";
import logo4 from "../assets/img/logo4.png";
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
const Homepage = () => {
  return (
    <section className="">
      <header className="bg-white shadow-md relative xl:py-3">
        <nav className="flex flex-row justify-between items-center px-6 pt-4 ">
          <div className="flex font-semibold text-2xl">AhmNET</div>
          <div className="hidden lg:flex flex-row gap-x-8 text-lg cursor-pointer list-none">
            <li className="hover:text-purple">Ana Sayfa</li>
            <li className="hover:text-purple"><a href="#hizmet">Hizmetler</a></li>
            <li className="hover:text-purple"><a href="#hakkında">Hakkında</a></li>
            <li className="hover:text-purple"><a href="#iletisim">İletişim</a></li>
          </div>
          <div className="absolute right-6 lg:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() =>
                document
                  .getElementById("mobile-menu")
                  .classList.toggle("hidden")
              }
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div className="hidden lg:block">
            <button className="text-xl bg-purple px-3 py-2 rounded-3xl text-white font-light hover:bg-black">
              Hemen Ara
            </button>
          </div>
        </nav>
        {/*Responsive Menu Bar */}
        <div className="hidden  mobile-menu lg:hidden" id="mobile-menu">
          <ol className="flex flex-col text-lg cursor-pointer">
            <li className="hover:text-purple p-2">Ana Sayfa</li>
            <li className="hover:text-purple p-2">Hizmetler</li>
            <li className="hover:text-purple p-2">Hakkında</li>
            <li className="hover:text-purple p-2">Müşteriler</li>
            <li className="hover:text-purple p-2">İletişim</li>
            <li className="hover:text-purple p-2">
              <button className="w-1/3 bg-purple px-2 py-2 rounded-3xl text-white font-light hover:bg-black">
                Hemen Ara
              </button>
            </li>
          </ol>
        </div>
      </header>

      {/*Hero section*/}
      <div className="relative w-full md:h-screen ">
        <img
          className="  w-full md:h-full  h-96 object-cover"
          src="https://static.wixstatic.com/media/84770f_994ffe746a074d1f8a2ec9456a8bf1ff~mv2.png/v1/fill/w_2379,h_900,al_br,q_95,usm_0.66_1.00_0.01,enc_auto/84770f_994ffe746a074d1f8a2ec9456a8bf1ff~mv2.png"
          alt=""
        />

        <motion.h1
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="absolute md:top-28 top-14 left-28  font-bold text-3xl md:text-7xl text-justify leading-normal"
        >
          İyi Tavsiyenin
          <br />
          Büyük Gücü
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="absolute pt-8 md:top-64 top-28  left-28 text-sm md:text-xl  font-light leading-relaxed tracking-wider text-justify  "
        >
          Bu, bir paragraf. Kendi metninizi
          <br />
          eklemek için tıklayın.
        </motion.p>
        <motion.button
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="absolute mt-8  top-48 md:top-1/3 xl:top-1/2 xl:left-32  left-28  text-sm md:text-xl md:px-4 md:py-3 p-2 rounded-3xl tracking-tighter font-light text-white bg-purple hover:bg-black"
        >
          Daha Fazla Bilgi
        </motion.button>
      </div>

      {/*Services section*/}
      <motion.div 
      id="hizmet"
       variants={fadeIn("up", 0.5)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.4 }}
      className="md:p-18 pb-10 mb-6">
        <div className="p-20">
          <h5 className="text-purple text-md md:text-lg font-medium leading-relaxed tracking-wider">
            HİZMETLER
          </h5>
          <h1 className="text-black text-xl md:text-3xl font-semibold pt-2 md:p-4 leading-normal">
            İş Süreçlerinizi Bir Üst
            <br />
            Seviyeye Taşıyoruz
          </h1>
        </div>

        <div className="flex flex-col gap-y-14 md:flex-row items-center justify-around  md:px-20 px-10">
          <div className="flex flex-col items-center gap-y-3">
            <img src={photo1} alt="" className="w-[120px] h-[140px] " />
            <h4 className="font-semibold pt-3">İş Planları</h4>
            <p className="font-light text-md leading-normal">
              Bu, bir paragraf. Kendi metninizi <br />
              eklemek için tıklayın.
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-3">
            <img src={photo2} alt="" className="w-[120px] h-[140px] " />
            <h4 className="font-semibold pt-3">Muhasebe Hizmetleri</h4>
            <p className="font-light text-md leading-normal">
              Bu, bir paragraf. Kendi metninizi <br />
              eklemek için tıklayın.
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-3">
            <img src={photo3} alt="" className="w-[120px] h-[140px] " />
            <h4 className="font-semibold pt-3">Finansal Optimizasyon</h4>
            <p className="font-light text-md leading-normal">
              Bu, bir paragraf. Kendi metninizi <br />
              eklemek için tıklayın.
            </p>
          </div>
        </div>
      </motion.div>

      {/*About-1 section*/}
      <div className="bg-black p-16 items-center ">
        <motion.div  
        id="hakkinda"
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}>
          <h2 className="text-white text-2xl md:text-4xl font-semibold ">
            Rakamlarda Çok Başarılıyız
          </h2>
        </motion.div>
        <motion.div 
         variants={fadeIn("up", 0.5)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.4 }}
        className="text-white flex md:flex-row flex-col md:items-start items-center gap-y-6 md:justify-center pt-16  gap-x-14">
          <div>
            <h1 className="text-6xl font-bold">15</h1>
            <p className="font-light pt-2">Yıllık Deneyim</p>
          </div>
          <div className=" flex text-5xl">.</div>
          <div>
            <h1 className="text-6xl font-bold">36</h1>
            <p className="font-light pt-2">Kalifiye Uzman</p>
          </div>
          <div className="flex text-5xl">.</div>
          <div>
            <h1 className="text-6xl font-bold">120</h1>
            <p className="font-light pt-2">Müşteri / Yıl</p>
          </div>
          <div className="flex text-5xl">.</div>
          <div>
            <h1 className="text-6xl font-bold">9</h1>
            <p className="font-light pt-2">Global Ortak</p>
          </div>
        </motion.div>
      </div>

      {/*About-2 section*/}
      <div className="flex flex-col md:flex-row mx-auto  ">
        <motion.div
         variants={fadeIn("up", 0.5)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.4 }} 
        className="flex flex-col  gap-y-4 md:p-10 pt-12 md:w-[1000px]  ">
          <h5 className="text-purple  text-md md:text-lg font-medium leading-relaxed tracking-wider text-center md:text-left md:pl-28">
            Hakkında
          </h5>
          <h1 className="text-black text-xl md:text-3xl font-semibold  leading-normal text-center md:px-4 md:text-left md:pl-28 ">
            Piyasanın En İyi
            <br />
            Uzmanları
          </h1>
          <div className="py-10 text-left px-8 md:text-left md:pl-28 font-light  leading-loose">
            <p>
              Bu, bir paragraf. Kendi metninizi eklemek için tıklayın.{" "}
              <br className="hidden md:block" />
              İçeriğinizi eklemek ve yazı tipini değiştirmek için{" "}
              <br className="hidden md:block" />
              “Metni Düzenle”ye tıklayın veya buraya çift tıklayın. Bu{" "}
              <br className="hidden md:block" />
              alanı sayfanın istediğiniz bir yerine sürükleyip{" "}
              <br className="hidden md:block" />
              bırakabilirsiniz. Burası, bir hikâye anlatmak ve{" "}
              <br className="hidden md:block" />
              kullanıcılarınıza kendinizi tanıtmak için harika bir yer.
              <br className="hidden md:block" />
            </p>
            <br />
            <p>
              Burası, şirketiniz ve hizmetleriniz hakkında uzun{" "}
              <br className="hidden md:block" />
              bir metin yazmak için harika bir yer. Bu alanı, şirketiniz ile{" "}
              <br className="hidden md:block" />
              ilgili daha ayrıntılı bilgi vermek için kullanabilirsiniz.{" "}
              <br className="hidden md:block" />
              Ziyaretçilerinize ekibinizden ve sunduğunuz hizmetlerden{" "}
              <br className="hidden md:block" />
              bahsedin. Bu işi kurma fikrinin nasıl doğduğunu ve sizi
              <br className="hidden md:block" />
              rakiplerinizden ayıran şeyleri anlatın. Şirketinizin{" "}
              <br className="hidden md:block" />
              öne çıkmasını sağlayın ve ziyaretçilerinize kendinizi gösterin.
            </p>
          </div>
        </motion.div>

        <div className="hidden md:block">
          <img src={photo4} alt="" className="w-full h-auto" />
        </div>
      </div>

      {/*Partners*/}
      <div className="bg-gray py-10 flex flex-col  ">
        <div>
          <h5 className="text-black  text-md md:text-lg font-semibold leading-relaxed tracking-wider">
            MUTLU MÜŞTERİLERİMİZ
          </h5>
        </div>
        <div className="flex md:flex-row flex-col items-center  md:px-28  py-5 justify-between gap-y-8 md:gap-x-12">
          <img
            src={logo1}
            alt=""
            className="md:w-[200px] md:h-[150px] w-[90px] h-[60x]"
          />
          <img
            src={logo2}
            alt=""
            className="md:w-[200px] md:h-[150px] w-[90px] h-[60x]"
          />
          <img
            src={logo3}
            alt=""
            className="md:w-[200px] md:h-[150px] w-[90px] h-[60x]"
          />
          <img
            src={logo4}
            alt=""
            className="md:w-[200px] md:h-[150px] w-[90px] h-[60x]"
          />
        </div>
      </div>

      {/*Contact */}
      <div id="iletisim" className="flex flex-col md:flex-row mx-auto  ">
        <div className="flex flex-col  gap-y-3 md:p-10 pt-12 md:w-[1000px]  ">
          <h5 className="text-purple  text-md md:text-lg font-medium leading-relaxed tracking-wider text-center md:text-left md:pl-28">
            İletişim
          </h5>
          <h1 className="text-black text-xl md:text-3xl font-semibold  leading-normal text-center md:px-4 md:text-left md:pl-28 ">
            Birlikte Çalışalım
          </h1>
          <div className="py-10 text-center text-sm   px-8 md:text-left md:pl-28 font-light  leading-loose">
            <p>
              Vişnezade Mahallesi, Dolmabahçe Cd
              <br />
              bilgi@bilgi.com <br />
              Tel: (+90) 212 234 56 78
            </p>
            <br />
            <div className="flex flex-row  ml-24 md:ml-0 gap-x-3">
              <CiTwitter size={35} />
              <CiInstagram size={35} />
              <CiLinkedin size={35} />
            </div>
          </div>
        </div>

        <div className="py-10 px-20 md:px-0">
          <form className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 md:gap-x-8">
              <input
                type="text"
                className="border-b-2 border-black py-4 outline-none flex-1"
                placeholder="Adı"
                required
              />
              <input
                type="text"
                className="border-b-2 border-black py-4 outline-none flex-1"
                placeholder="Soyadı"
              />
            </div>

            <input
              type="text"
              className="border-b-2 border-black py-4 outline-none"
              placeholder="Eposta"
            />
            <textarea
              className="border-b-2 border-black py-4 outline-none"
              placeholder="Mesaj Bırakınız"
            />
            <div>
              <button className="text-xl bg-purple px-6 py-3 rounded-3xl text-white font-light hover:bg-black">
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>

      {/*Maps */}
      <div>
        <iframe
          width="100%"
          height="380"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Be%C5%9Fikta%C5%9F+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps trackers</a>
        </iframe>
      </div>

      <div>
        <p className="p-6 text-black bg-gray font-medium">
          © 2024 Ahmet Şahin. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Homepage;
