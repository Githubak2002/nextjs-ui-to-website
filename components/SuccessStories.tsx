import React from "react";

const SuccessStories = () => {
  return (
    <section className="my-10 mx-auto max-w-[820px] text-sm leading-6 pb-10">
        <h1 className="text-xl font-bold text-blue-900 text-center md:py-6 py-8">
          See Our Success Stories
        </h1>
      <main className="mx-4 md:shadow-xl shadow-none md:rounded-s-5xl overflow-hidden text-center">

        <div className="flex md:flex-row flex-col-reverse">

          <div className="md:w-[10%] hidden md:flexCenter text-4xl bg-blue-600">
            <i className="ri-double-quotes-l"></i>
          </div>
          <div className="flex flex-col p-5 md:w-[60%] md:text-left">
            <h6>
              There are many variations of passages of Lorem Ipsum available but
              the majority have sufferg lteration in some form. by injected
              humour. or randomised words which don't look even slightly
              believable. If you are going to use a passage.
            </h6>
            <h3 className="md:text-right font-bold mt-3 ">-Abcdefgh Ijklmnop</h3>
            <h3 className="md:text-right">Frontend Engineer</h3>
          </div>

          <div className="md:w-[30%] flexCenter">
              <div className="h-40 w-40 border-4 border-blue-600 rounded-full"></div>
          </div>


        </div>
      </main>
    </section>
  );
};

export default SuccessStories;
