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
        <img id='homephoto' src="OZoneLogo.jpg"/>

        <div><Slideshow/></div>

      </section>

      {/*Location Section*/}
      <section id='Location'>
        <h2 className='headings'>4201 Plantation Road NE Roanoke VA 24012</h2>
      </section>


      {/*Services Section*/}
      <section id='Services'>
        <h2 className='headings'>Services</h2>
        {/*Detail Services etc.*/}
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
