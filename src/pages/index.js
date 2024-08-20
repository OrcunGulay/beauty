import React from 'react';
import "./style.css";
import Header from './components/header';
import Footer from './components/footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Index() {
    return (
        <div id="site-content">
            <Header />

            <div className="hero hero-slider">
                <ul className="slides">
                    <li data-bg-image="dummy/slider-1.jpg">
                        <div className="container">
                            <h3 className="slider-subtitle">Siz Güzelsiniz</h3>
                            <h2 className="slider-title">Biz Bunu Vurguluyoruz</h2>
                            <p>Güzelliğiniz zaten var olan, doğallığınızdan gelen bir ışık. Bizim görevimiz, bu ışıltıyı en iyi şekilde ortaya çıkarmak ve sizin en güzel halinizi yansıtmak. Uzman kadromuz ve son teknoloji ekipmanlarımızla, içsel güzelliğinizi dışarıya taşımak için buradayız. Siz zaten güzelsiniz; biz sadece bu güzelliği daha da parlatıyoruz.</p>
                        </div>
                    </li>
                </ul>
            </div>

            <main className="main-content">
                <div className="fullwidth-block features-section">
                    <div className="container">
                        <h2 className="section-title">Hizmetlerimiz</h2>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="feature">
                                    <img src="images/icon-1.png" className="feature-image" alt="Cilt Bakımı" />
                                    <h3 className="feature-title">Cilt Bakımı</h3>
                                    <p>Cildiniz, güzelliğinizin en değerli yansımasıdır. Düzenli cilt bakımı, sağlıklı, pürüzsüz ve ışıltılı bir görünüm için vazgeçilmezdir. Uzmanlarımız, cildinizin ihtiyaçlarına özel çözümler sunarak, genç ve taze bir cilt için size en doğru bakımı sağlar.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="feature">
                                    <img src="images/icon-2.png" className="feature-image" alt="Epilasyon" />
                                    <h3 className="feature-title">Epilasyon</h3>
                                    <p>Pürüzsüz ve uzun süre kalıcı bir cilt için epilasyon, en etkili çözümlerden biridir. Modern tekniklerimizle, istenmeyen tüylerden zahmetsizce kurtulun ve özgüveninizi artırın. Kalıcı sonuçlar ve konforlu bir deneyim için size özel epilasyon hizmetlerimizle tanışın.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="feature">
                                    <img src="images/icon-3.png" className="feature-image" alt="Saç Bakımı" />
                                    <h3 className="feature-title">Saç Bakımı</h3>
                                    <p>Saçlarınız, tarzınızın ve sağlığınızın aynasıdır. Canlı, parlak ve güçlü saçlar için düzenli bakım şart. Uzmanlarımız, saç tipinize ve ihtiyaçlarınıza uygun bakım uygulamaları ile saçlarınızı besler, onarır ve doğal güzelliğini ortaya çıkarır. Sağlıklı ve ışıltılı saçlar için bize güvenin.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="feature">
                                    <img src="images/icon-4.png" className="feature-image" alt="Kirpikler" />
                                    <h3 className="feature-title">Kirpikler</h3>
                                    <p>Doğal güzelliğinizi ön plana çıkaran, maskara etkisi yaratan lifting kirpik uygulamasıyla tanışın. Kimyasal işlemler olmadan, kirpiklerinizi kıvırır, dolgun ve uzun görünmelerini sağlar. Gözleriniz daha belirgin, bakışlarınız daha etkileyici hale gelir. Uzun süre kalıcı sonuçlarla, her sabah uyanır uyanmaz göz alıcı kirpiklere sahip olmanın keyfini yaşayın.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fullwidth-block team-section">
                    <div className="container">
                        <h2 className="section-title">Takımımız</h2>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="team">
                                    <figure className="team-image"><img src="dummy/person-1.jpg" alt="Sibel Yıldız" /></figure>
                                    <h3 className="team-name">Sibel Yıldız</h3>
                                    <p>Güzellik Uzmanı</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div> 

                <div className="fullwidth-block information-section">
                    <div className="container">
                        <h2 className="section-title">Amacımız</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <figure><img src="dummy/figure-1.jpg" alt="Güzellik Merkezi" /></figure>
                            </div>
                            <div className="col-md-4">
                                <p>Güzellik merkezimiz, her biri alanında uzman profesyonellerden oluşan kadromuzla, güzelliğinizi en doğal ve etkili yöntemlerle ortaya çıkarmayı hedefliyor. İster cilt bakımı, ister saç bakımı, isterse epilasyon olsun, her hizmetimizde kişisel ihtiyaçlarınıza özel çözümler sunuyoruz. Modern ve rahat bir ortamda, en son teknolojiye sahip ekipmanlarla, hijyen ve müşteri memnuniyeti önceliğimizdir. Güzelliğin detaylarda gizli olduğuna inanıyor ve size en iyi hizmeti sunmak için sürekli olarak kendimizi geliştiriyoruz.</p>
                            </div>
                            <div className="col-md-4">
                                <p>Doğal güzelliğinizi vurgulamak, kendinizi daha iyi hissetmenizi sağlamak için buradayız. Cildinizin sağlığı, saçlarınızın canlılığı, pürüzsüz bir cilt veya etkileyici bakışlar… Güzelliğin her yönüyle ilgileniyoruz. Bizimle geçireceğiniz her an, sadece bir bakım değil, aynı zamanda kendinize ayırdığınız özel bir zaman olacak. Çünkü biz, sizin güzelliğinizin zaten var olduğuna ve onu en iyi şekilde yansıtmak için burada olduğumuza inanıyoruz. Size en iyi hizmeti sunmak için sabırsızlanıyoruz. Güzellik merkezimizde kendinizi şımartın ve en güzel halinizle ışıldayın!</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </main>

            <Footer />
        </div>
    );
}

export default Index;
