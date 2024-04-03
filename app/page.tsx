import Link from 'next/link'; {/*For Icons and Portfolio Links*/}
import NavBar from './components/NavBar';
import Layout from '../app/layout';
import ContactForm from '../app/components/ContactForm';
import Slideshow from '../app/components/Slider';
import dotenv from 'dotenv';
dotenv.config();

export default function Home() {
  return (
    <Layout>
      <NavBar/>
      <main>
      {/*Home Section*/}
      <section id='Home'>
        <div className="home-header">
          <img id='homephoto' src="OZoneLogo.jpg"/>
          <h1 className='home-heading'>Welcome to the OZone: Where Style Meets Tradition</h1>
        </div>
        
        <div className="slideshow-container">
          <Slideshow/>
        </div>
      </section>

      {/*Location Section*/}
      <section id='Location'>
        <Link className='headings' href='https://www.google.com/maps/place/4201+Plantation+Rd+NE,+Roanoke,+VA+24012/@37.3130919,-79.9353726,17z/data=!3m1!4b1!4m6!3m5!1s0x884d0e17a90c51a5:0xbb33808b07682ae3!8m2!3d37.3130919!4d-79.9327977!16s%2Fg%2F11c5m9g1xc?entry=ttu'>
          4201 Plantation Road NE Roanoke VA 24012</Link>
      </section>


      {/*Services Section*/}
      <section id='Services'>
        <h2 className='headings'>Services</h2>
          <ul className='services-content'>
            <li className="service-category">
            <span className="service-title">Haircuts:</span> From traditional cuts to modern styles, our experienced barbers are adept at delivering precision haircuts that suit your individual taste and lifestyle.
            </li>
            <li className="service-category">
            <span className="service-title">Beard Trims:</span> Keep your beard looking sharp and well-groomed with our expert beard trimming services. Whether you prefer a clean, sculpted look or a more natural appearance, our barbers will ensure your beard is perfectly tailored to your preferences.
            </li>
            <li className="service-category">
            <span className="service-title">Line-Ups:</span> Achieve crisp, clean lines and a polished look with our precise line-up services. Whether you're maintaining your current style or trying something new, our barbers will ensure your edges are sharp and defined.
            </li>
            <li className="service-category">
            <span className="service-title">Hair Coloring:</span> Want to switch up your look or cover up those gray hairs? Our expert colorists can help you achieve your desired hair color with professional hair coloring services.
            </li>
            <li className="service-category">
            <span className="service-title">Hair Design:</span> Elevate your style with intricate hair designs and patterns. Whether you're looking for a bold statement or subtle detailing, our skilled barbers can bring your vision to life with precision and creativity.
            </li>
          </ul>
      </section>


      {/*Contact Section*/}
      <ContactForm/>

      {/*Footer Section*/}
      <footer id="Footer">
        <div className="footer-links">
          <Link href={"https://www.facebook.com/newbillollie"}>
          <img src="icons8-facebook-48.png" />
          </Link>
          <Link href={"https://www.instagram.com/ozoneoj_/"}>
          <img src="icons8-instagram-48.png" />
          </Link>
        </div>
        <div className="footer-info">
        <small> OZone OJ</small>
        </div>
      </footer>

      </main>
    </Layout>
  );
}
