import React from 'react';
import { motion } from 'framer-motion';
// Using swiper for the carousel as it matches typical elementor carousels nicely
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const decorationImages = [
  'https://datemates.co/wp-content/uploads/2025/10/decor-request-datemates.jpg',
  'https://datemates.co/wp-content/uploads/2025/10/decor-request-datemates-2.jpg',
  'https://datemates.co/wp-content/uploads/2025/10/decor-request-datemates-3.jpg',
  'https://datemates.co/wp-content/uploads/2025/10/decor-request-datemates-4.jpg'
];

const DecorationGallery = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl text-[#6b5840] font-bold mb-12"
        >
          Decoration Set
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 }
            }}
            className="pb-12"
          >
            {decorationImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="rounded-[20px] overflow-hidden aspect-square">
                  <img 
                    src={img} 
                    alt={`Decoration setup ${idx + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
      
      {/* Custom styles to match the swiper pagination color */}
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-pagination-bullet { background: #dcdcdc; opacity: 1; }
        .swiper-pagination-bullet-active { background: #e3a982; }
      `}} />
    </section>
  );
};

export default DecorationGallery;
