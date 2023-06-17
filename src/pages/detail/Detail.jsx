import Navbar from "../../component/Navbar/NavBar";
import DeltaiData from "../../component/data/detail.json"
import DelTail from "../../component/deltail/deltai";
import Footer from "../../component/Footer/Footer";
import footerData from "../../component/data/footer.json"
import FormHotel from "../../component/Form/Form";

const Detail = () => {
  return (
    <div>
          <Navbar />
          <DelTail items={DeltaiData} />
          <FormHotel />
          <Footer  footerData={footerData}/>
    </div>
  );
};

export default Detail;
