import React from 'react';

const OurStory = () => {
  return (
    <section className="bg-[#FAF9F6] py-24 mb-16" id="ourstory">
      <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left: Image / Visual */}
        <div className="w-full lg:w-5/12 relative group h-[500px]">
            <img 
                src="/assets/images/IMG_1029_jpg.jpg" 
                alt="date.mates early days" 
                className="w-full h-full object-cover rounded-[3rem] shadow-sm transition duration-700 group-hover:scale-[1.02]" 
            />
            {/* Soft decorative element */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full border border-orange-200 rounded-[3rem]"></div>
            <div className="absolute top-8 -right-4 w-24 h-24 bg-accentPink rounded-full flex items-center justify-center rotate-12 shadow-md hover:rotate-0 transition duration-500">
                <span className="font-swash text-white text-2xl drop-shadow-sm">Since '20</span>
            </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-7/12">
            <h2 className="text-4xl md:text-5xl text-primary leading-tight mb-8">
                <span className="font-serif italic"><span className="drop-cap">C</span>reate your dream dates</span> <br/>
                <span className="font-serif italic">come true!</span>
            </h2>
            
            <div className="space-y-6 text-[13.5px] text-textGray leading-relaxed max-w-xl">
                <p>
                    Back to August 2020, date.mates come from a simple idea; to fulfil recreational needs during COVID-19 pandemic when outdoor activities and picnic became popular on social media. We started the business by providing picnic set rent and decorations rent with the purpose to simplify our customer picnic preparation and give them a memorable and unique “picnic-date” experience.
                </p>
                <p>
                    Throughout these 5 years, we have received huge enthusiasm and took our role as ‘the mate’ that accompany our customers, not only on a daily picnic, but also on some of their special occasions such as birthday, anniversary, pre-wedding, bridal shower, etc. We have been using our social media platforms to share these moments from our customers and became the source for picnic-date inspiration. We keep developing our services and now we have various kind of picnic set both outdoor and indoor available to be rent daily for our customers.
                </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="font-serif italic text-2xl text-primary mb-6">Why date.mates?</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-center gap-3 text-[12px] font-medium text-textGray bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100">
                        <span className="w-3 h-3 rounded-full bg-accentYellow"></span> We offer you unique date experiences
                    </li>
                    <li className="flex items-center gap-3 text-[12px] font-medium text-textGray bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100">
                        <span className="w-3 h-3 rounded-full bg-accentPink"></span> We help you to create your moments
                    </li>
                    <li className="flex items-center gap-3 text-[12px] font-medium text-textGray bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100">
                        <span className="w-3 h-3 rounded-full bg-accentGreen"></span> We are your date mates
                    </li>
                </ul>
            </div>
        </div>

      </div>
    </section>
  );
};

export default OurStory;
