import React from "react";
import SectionTitle from "./SectionTitle";
import TestimonalItems from "./TestimonalItems";

const Testimonal = () => {
  return (
    <section id="testimonial" className="testimonial-02 py-6 bg-grey">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle baslik="What people say" aciklama="Testimonial" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="owl-carousel">
              {/* <!-- Item 01 --> */}
              <TestimonalItems
                resim="assets/img/man.png"
                mesaj="In a professional context it often happens that private or
                    corporate clients corder a publication to be made and
                    presented with the actual content still not being ready."
                isim="John Doe"
                unvan="Seo Manager"
              />

              {/* <!-- Item 02 --> */}
              <TestimonalItems
                resim="assets/img/woman-avator.png"
                mesaj="In a professional context it often happens that private or
                    corporate clients corder a publication to be made and
                    presented with the actual content still not being ready."
                isim="Merry Doe"
                unvan="Seo Manager"
              />

              {/* <!-- Item 03 --> */}
              <TestimonalItems
                resim="assets/img/woman.png"
                mesaj=" In a professional context it often happens that private or
                    corporate clients corder a publication to be made and
                    presented with the actual content still not being ready."
                isim="Sarah Doe"
                unvan="Seo Manager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonal;
