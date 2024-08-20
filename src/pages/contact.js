import React from 'react';
import "./style.css";
import Header from './components/header';
import Footer from './components/footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Contact() {
  return (
    <div id="site-content">
      <Header />

      <main className="main-content">
        <div className="page">
          <div className="container">
            <p>Bizimle iletişime geçmek, sorularınızı sormak veya randevu almak için aşağıdaki iletişim formunu kullanabilirsiniz. Size en iyi hizmeti sunmak ve her türlü talebinizi karşılamak için buradayız.

Formu doldurarak isminizi, e-posta adresinizi, web sitenizi (varsa) ve mesajınızı bize iletebilirsiniz. Mesajınıza en kısa sürede geri dönüş yaparak size yardımcı olacağız.

Ayrıca, fiziksel adresimizi ve iletişim bilgilerimizi aşağıda bulabilirsiniz. Haritamız, bizi bulmanızı kolaylaştırmak için yerleştirilmiştir. Güzellik merkezi adresimize uğramak veya telefonla bizi aramak isterseniz, iletişim bilgilerimiz burada.

Her türlü geri bildirim ve soru için bize ulaşmaktan çekinmeyin. Sizinle iletişimde olmak bizim için bir zevktir!</p>

            <div className="row">
              <div className="col-md-5">
                <form action="#" className="contact-form">
                  <input type="text" id="name" placeholder="Name..." />
                  <input type="text" id="email" placeholder="Email..." />
                  <input type="text" id="website" placeholder="Website..." />
                  <textarea id="message" placeholder="Message..."></textarea>
                  <div className="text-right">
                    <button className="button large" type="submit">Send Message</button>
                  </div>
                </form>
              </div>
              <div className="col-md-6 col-md-offset-1">
                <div className="map-container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.458640221827!2d29.40760587554612!3d40.77393013382275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadff0933e1a91%3A0xf119feb24f80dc07!2sFevzi%20Pa%C5%9Fa%2C%20Altun%20Sk.%20No%3A30%2C%2041700%20Dar%C4%B1ca%2FKocaeli!5e0!3m2!1str!2str!4v1723341178800!5m2!1str!2str" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                    <div className="address-info">
                    <address>
                      <img src="images/icon-map-small.png" className="icon" alt="Map Icon" />
                      <p><strong>Rose Yaşam ve Güzellik Merkezi</strong> Kazım Karabekir Mahallesi, Doktor Zeki Acar Caddesi, Altun Sokak, No: 30, Darıca/Kocaeli</p>
                    </address>
                    <div className="contact-info">
                      <a href="mailto:sibelyildiz@gmail.com" className="mail">
                        <img src="images/icon-envelope-small.png" className="icon" alt="Email Icon" />
                        sibelyildiz@gmail.com
                      </a>
                      <a href="tel:(544)5101674" className="phone">
                        <img src="images/icon-phone-small.png" className="icon" alt="Phone Icon" />
                        (544)510 16 74
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
