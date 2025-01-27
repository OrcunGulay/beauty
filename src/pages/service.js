import React from 'react';
import "./style.css";
import Header from './components/header'
import Footer from './components/footer'
import '@fortawesome/fontawesome-free/css/all.min.css';


function service(){
    return(
        <div id="site-content">
			
			<Header></Header>

			<main class="main-content">
				<div class="page">
					<div class="container">
						<p>Fusce nec congue diam. Maecenas condimentum porttitor nibh in dignissim. Maecenas dictum felis id suscipit facilisis. Quisque et ipsum eleifend, commodo tellus at, ultrices purus. Suspendisse bibendum diam et tortor sodales sagittis. Phasellus rutrum justo libero, in gravida sem laoreet in. Aenean sed elit nec felis elementum scelerisque sit amet nec leo. Curabitur ipsum justo, laoreet quis feugiat at, blandit vel mauris. Vivamus luctus placerat nibh quis tempus. Nunc molestie, mi et suscipit vulputate, sem est rhoncus arcu, a vestibulum nunc magna ac tortor. Sed malesuada quis sem in tincidunt. Sed cursus enim orci, vitae vulputate est condimentum pharetra. Curabitur pretium est quis venenatis pharetra. Vestibulum a leo at quam rutrum vestibulum. Aenean tincidunt tellus quis tortor feugiat, rutrum sollicitudin .</p>

						<div class="row">
							<div class="col-md-3">
								<div class="feature">
									<img src="images/icon-1.png" class="feature-image"/>
									<h3 class="feature-title">Voluptatem</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolor </p>
								</div>
							</div>
							<div class="col-md-3">
								<div class="feature">
									<img src="images/icon-2.png" class="feature-image"/>
									<h3 class="feature-title">COnsequatur</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, minus, totam. Officia </p>
								</div>
							</div>
							<div class="col-md-3">
								<div class="feature">
									<img src="images/icon-3.png" class="feature-image"/>
									<h3 class="feature-title">Temporibus</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, omnis cum, </p>
								</div>
							</div>
							<div class="col-md-3">
								<div class="feature">
									<img src="images/icon-4.png" class="feature-image"/>
									<h3 class="feature-title">Perferendis</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, facere numquam porro </p>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-md-3">
								<div class="feature">
									<img src="images/icon-5.png" class="feature-image"/>
									<h3 class="feature-title">Voluptatem</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolor perferendis</p>
								</div>
							</div>
							<div class="col-md-3">
								<div class="feature">
									<img src="images/icon-6.png" class="feature-image"/>
									<h3 class="feature-title">COnsequatur</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, minus, totam. Officia ea</p>
								</div>
							</div>
							<div class="col-md-3">
								<div class="feature">
									<img src="images/icon-7.png" class="feature-image"/>
									<h3 class="feature-title">Temporibus</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, omnis cum, quo dolorem </p>
								</div>
							</div>
							<div class="col-md-3">
								<div class="feature">
									<img src="images/icon-8.png" class="feature-image"/>
									<h3 class="feature-title">Perferendis</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, facere numquam porro </p>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-md-6">
								<div class="price-list">
									<h2 class="section-title">Men's prices</h2>
									<ul class="prices">
										<li>Maecenas dictum felis id suscipit facilisis<span class="price">$50</span></li>
										<li>Maecenas dictum felis id suscipit facilisis<span class="price">$50</span></li>
										<li>Maecenas dictum felis id suscipit facilisis<span class="price">$50</span></li>
										<li>Maecenas dictum felis id suscipit facilisis<span class="price">$50</span></li>
										<li>Maecenas dictum felis id suscipit facilisis<span class="price">$50</span></li>
									</ul>
								</div>
							</div>
							<div class="col-md-6">
								<div class="price-list">
									<h2 class="section-title">women's prices</h2>
									<ul class="prices">
										<li>Maecenas dictum felis id suscipit facilisis<span class="price">$50</span></li>
										<li>Maecenas dictum felis id suscipit facilisis<span class="price">$50</span></li>
										<li>Maecenas dictum felis id suscipit facilisis<span class="price">$50</span></li>
										<li>Maecenas dictum felis id suscipit facilisis<span class="price">$50</span></li>
										<li>Maecenas dictum felis id suscipit facilisis<span class="price">$50</span></li>
									</ul>
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
export default service