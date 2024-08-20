import React from 'react';
import "../style.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function header(){
    return(
        <header class="site-header">
                    <div class="container">
                        <a id="branding" href="index.html">
                            <img src="./images/logo.png" alt="Company name" class="logo"/>
                            <div class="logo-copy">
                                <h1 class="site-title">Rose Yaşam ve Güzellik Merkezi</h1>
                                <small class="site-description">Yaşamanın ve Güzelliğin Adresi</small>
                            </div>
                        </a> 
                        <div class="main-navigation">
                            <button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
                            <ul class="menu">
                                <li class="menu-item current-menu-item"><a href="index.html">Ana Sayfa</a></li>
                                <li class="menu-item"><a href="/about">Hakkımızda</a></li>
                                <li class="menu-item"><a href="service.html">Hizmetlerimiz</a></li>
                                <li class="menu-item"><a href="gallery.html">Galeri</a></li>
                                <li class="menu-item"><a href="contact.html">İletişim</a></li>
                            </ul>
                        </div> 
    
                        <div class="mobile-navigation"></div>
                    </div>
                </header>
    )
}
export default header
