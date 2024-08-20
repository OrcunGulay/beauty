import React from 'react';
import "../style.css";
import '@fortawesome/fontawesome-free/css/all.min.css';



function footer(){
    return(
        <footer class="site-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="widget contact-widget">
                                    <h3 class="widget-title">Contact</h3>
                                    <div class="contact-info">
                                        <address>
                                            <img src="images/icon-map-small.png" class="icon"/>
                                            <p><strong>Rose Yaşam ve Güzellik Merkezi</strong> Fevzi Çakmak Mahallesi Doktor Zeki Acar Caddesi Altun Sokak No: 30 Darıca/Kocaeli</p>
                                        </address>
                                        <a href="mailto:contact@companyname.com" class="mail"><img src="images/icon-envelope-small.png" class="icon"/>sibelyildiz@gmail.com</a>
                                        <a href="tel:(500)942042259" class="phone"><img src="images/icon-phone-small.png" class="icon"/>(544) 510 16 74</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="widget">
                                    <h3 class="widget-title">Sosyal Medya</h3>
                                    <div class="social-links">
                                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                        <p>guzellik_uzman_sibel_yldz</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="colophon">
                            <p>Copyright 2024 Designed by Orçun Gülay.</p>
                        </div>
                    </div>
                </footer>
    )}
export default footer