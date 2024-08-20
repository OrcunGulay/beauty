import React from 'react';
import "./style.css";
import Header from './components/header'
import Footer from './components/footer'
import '@fortawesome/fontawesome-free/css/all.min.css';

function about(){
    return(
        <div id="site-content">
			
			<Header></Header>
			<main class="main-content">
				<div class="page">
					<div class="container">
						<div class="row">
							<div class="col-md-6">
								<h3 class="section-title">Hakkımızda</h3>
								<figure><img src="dummy/figure-1.jpg" alt=""/></figure>
								<h4>Biz Kimiz? Güzellikte Uzman Ekibimizle Tanışın</h4>
								<p>Güzellik merkezimiz, güzellik ve bakım alanında sunduğumuz yenilikçi hizmetlerle kendinizi özel hissetmenizi sağlamak amacıyla Rose Yaşam ve Güzellik Merkezi olarak hizmet vermektedir. Müşterilerimizin doğal güzelliklerini en iyi şekilde yansıtmak için en son teknoloji ve yöntemleri kullanıyoruz.

Vizyonumuz, her bireyin kendini en iyi şekilde ifade edebileceği bir güzellik deneyimi sunmaktır. Deneyimli ve profesyonel kadromuz, kişisel ihtiyaçlarınıza özel çözümler sunarak, hem içsel hem de dışsal güzelliğinizi vurgulamaya odaklanır. Cilt bakımı, saç bakımı, epilasyon, makyaj ve daha birçok alanda sunduğumuz hizmetlerle, kendinizi yenilenmiş ve taze hissetmenizi sağlıyoruz.

Hijyen ve müşteri memnuniyetini ön planda tutarak, her ziyaretinizde konforlu bir ortam sunmayı taahhüt ediyoruz. Güzellik merkezimizde geçireceğiniz her an, sadece bir bakım değil, aynı zamanda kendinize ayırdığınız özel bir zaman olacak.

Amacımız, size en iyi hizmeti sunarak güzelliğinizi en etkili şekilde ortaya çıkarmak ve sizlerin güler yüzlü memnuniyeti ile çalışmalarımızı daha da ileriye taşımaktır. Sizi merkezimizde ağırlamaktan büyük mutluluk duyuyoruz.

Rose Yaşam ve Güzellik Merkezi olarak, güzelliğinizi yansıttığınız her an yanınızda olmaktan gurur duyuyoruz. Bizimle bu güzellik yolculuğuna çıkın ve kendinizi şımartın!</p>
							</div>
							<div class="col-md-6">
								<h3 class="section-title">Takımımız</h3>
								<div class="row">
									<div class="col-md-6">
										<div class="team small">
											<figure class="team-image"><img src = {'./images/logo.png'}/></figure>
											<h3 class="team-name">Sibel Yıldız</h3>
											<p>Güzellik Uzmanı</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			<Footer></Footer>

		</div>
    )
}
export default about