import React from 'react';
import "./style.css";
import Header from './components/header'
import Footer from './components/footer'
import '@fortawesome/fontawesome-free/css/all.min.css';

function gallery(){
    return(
        <div id="site-content">
			
			<Header></Header>

			<main class="main-content">
				<div class="page">
					<div class="container">
						<div class="text-center">
							<div class="filter-links filterable-nav">
								<select class="mobile-filter">
									<option value="*">Show all</option>
									<option value=".hair">hair</option>
									<option value=".manicure">manicure</option>
									<option value=".pedicure">pedicure</option>
									<option value=".face">face</option>
									<option value=".makeup">makeup</option>
								</select>
								<a href="#" class="current wow fadeInRight" data-filter="*">Show all</a>
								<a href="#" class="wow fadeInRight" data-wow-delay=".2s" data-filter=".hair">hair</a>
								<a href="#" class="wow fadeInRight" data-wow-delay=".4s" data-filter=".manicure">manicure</a>
								<a href="#" class="wow fadeInRight" data-wow-delay=".6s" data-filter=".pedicure">pedicure</a>
								<a href="#" class="wow fadeInRight" data-wow-delay=".8s" data-filter=".face">face</a>
								<a href="#" class="wow fadeInRight" data-wow-delay="1s" data-filter=".makeup">makeup</a>
							</div>
						</div>

						<div class="filterable-items">
							<div class="gallery-item filterable-item manicure">
								<a href="dummy/large-gallery/gallery-1.jpg">
									<figure class="featured-image">
										<img src="dummy/gallery-1.jpg" alt=""/>
										<figcaption>
											<h2 class="gallery-title">Lorem ipsum dolor sit amet</h2>
											<p>Maecenas dictum suscipit</p>
										</figcaption>
									</figure>
								</a>
							</div>
							<div class="gallery-item filterable-item face">
								<a href="dummy/large-gallery/gallery-2.jpg">
									<figure class="featured-image">
										<img src="dummy/gallery-2.jpg" alt=""/>
										<figcaption>
											<h2 class="gallery-title">Consectetur adipisicing elit</h2>
											<p>Maecenas dictum suscipit</p>
										</figcaption>
									</figure>
								</a>
							</div>
							<div class="gallery-item filterable-item hair">
								<a href="dummy/large-gallery/gallery-3.jpg">
									<figure class="featured-image">
										<img src="dummy/gallery-3.jpg" alt=""/>
										<figcaption>
											<h2 class="gallery-title">Repellat fugit tenetur</h2> 
											<p>Maecenas dictum suscipit</p>
										</figcaption>
									</figure>
								</a>
							</div>
							<div class="gallery-item filterable-item pedicure">
								<a href="dummy/large-gallery/gallery-4.jpg">
									<figure class="featured-image">
										<img src="dummy/gallery-4.jpg" alt=""/>
										<figcaption>
											<h2 class="gallery-title">Asperiores quas voluptatem</h2>
											<p>Maecenas dictum suscipit</p>
										</figcaption>
									</figure>
								</a>
							</div>
							<div class="gallery-item filterable-item face">
								<a href="dummy/large-gallery/gallery-5.jpg">
									<figure class="featured-image">
										<img src="dummy/gallery-5.jpg" alt=""/>
										<figcaption>
											<h2 class="gallery-title">Ex quos ab perspiciatis</h2>
											<p>Maecenas dictum suscipit</p>
										</figcaption>
									</figure>
								</a>
							</div>
							<div class="gallery-item filterable-item face">
								<a href="dummy/large-gallery/gallery-6.jpg">
									<figure class="featured-image">
										<img src="dummy/gallery-6.jpg" alt=""/>
										<figcaption>
											<h2 class="gallery-title">Natus dolores ad et ipsam</h2>
											<p>Maecenas dictum suscipit</p>
										</figcaption>
									</figure>
								</a>
							</div>
							<div class="gallery-item filterable-item manicure">
								<a href="dummy/large-gallery/gallery-7.jpg">
									<figure class="featured-image">
										<img src="dummy/gallery-7.jpg" alt=""/>
										<figcaption>
											<h2 class="gallery-title">Hic nisi. Animi placeat</h2>
											<p>Maecenas dictum suscipit</p>
										</figcaption>
									</figure>
								</a>
							</div>
							<div class="gallery-item filterable-item face">
								<a href="dummy/large-gallery/gallery-8.jpg">
									<figure class="featured-image">
										<img src="dummy/gallery-8.jpg" alt=""/>
										<figcaption>
											<h2 class="gallery-title">Obcaecati quam</h2>
											<p>Maecenas dictum suscipit</p>
										</figcaption>
									</figure>
								</a>
							</div>
							<div class="gallery-item filterable-item face">
								<a href="dummy/large-gallery/gallery-9.jpg">
									<figure class="featured-image">
										<img src="dummy/gallery-9.jpg" alt=""/>
										<figcaption>
											<h2 class="gallery-title">quam exercitationem</h2>
											<p>Maecenas dictum suscipit</p>
										</figcaption>
									</figure>
								</a>
							</div>
							<div class="gallery-item filterable-item manicure">
								<a href="dummy/large-gallery/gallery-10.jpg">
									<figure class="featured-image">
										<img src="dummy/gallery-10.jpg" alt=""/>
										<figcaption>
											<h2 class="gallery-title">Hic nisi. Animi placeat</h2>
											<p>Maecenas dictum suscipit</p>
										</figcaption>
									</figure>
								</a>
							</div>
							<div class="gallery-item filterable-item makeup">
								<a href="dummy/large-gallery/gallery-11.jpg">
									<figure class="featured-image">
										<img src="dummy/gallery-11.jpg" alt=""/>
										<figcaption>
											<h2 class="gallery-title">Obcaecati quam</h2>
											<p>Maecenas dictum suscipit</p>
										</figcaption>
									</figure>
								</a>
							</div>
							<div class="gallery-item filterable-item makeup">
								<a href="dummy/large-gallery/gallery-12.jpg">
									<figure class="featured-image">
										<img src="dummy/gallery-12.jpg" alt=""/>
										<figcaption>
											<h2 class="gallery-title">quam exercitationem</h2>
											<p>Maecenas dictum suscipit</p>
										</figcaption>
									</figure>
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>

			<Footer></Footer>
		</div>
    )
}
export default gallery
