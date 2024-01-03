import About from './components/About/About';
import Service from './components/Service/Service';
import Count from './components/Count/Count';
import Review from './components/Review/Review';
import ContactUs from './components/Contactus/contactus';

const ContentLayout = () => {
    return (
     <main>
        <About />
        <Count />
        <Service />
        <Review />
        <ContactUs />
    </main>
        
    );
}

export default ContentLayout