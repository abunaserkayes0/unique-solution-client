import { Star } from "lucide-react";

export default function Testimonial({ img, name, rating }) {
  return (
    <div className="flex flex-col justify-center items-center text-center p-4">
      <section className="flex flex-col items-center justify-between gap-3">
        <div>
          <img className="w-10 h-10 rounded-full" src={img} alt="" />
        </div>
        <div className="flex-col">
          <h2 className="text-xl font-bold">{name}</h2>
        </div>
      </section>
      <section>
        <p className="italic my-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          tempore explicabo nemo, sit quisquam eveniet nulla aperiam sequi odit
          optio, asperiores voluptatum rerum, placeat perspiciatis. Doloribus
          illo aspernatur sunt accusantium.
        </p>
        <div className="flex items-center justify-center gap-1">
          {Array.from({ length: 5 }, (_, index) => {
            return (
              <span
                key={index}
                className={`${
                  rating > index ? "text-gray-800" : "text-gray-300"
                }`}
              >
                <Star strokeWidth={4} />
              </span>
            );
          })}
        </div>
      </section>
    </div>
  );
}
