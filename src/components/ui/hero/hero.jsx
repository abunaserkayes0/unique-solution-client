import Button from "../button/button";
export default function hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dhjkntuy2/video/upload/v1739824193/Unique%20Solution/Videos/video_iykmri.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

      <div className="relative text-white">
        <h1 className="mb-5 text-5xl font-bold">
          Unique Solutions The Fine Unique Experts
        </h1>
        <p className="mb-5 max-w-1/2 mx-auto">
          Unique Solutions stands as a premier provider of expert solutions
          tailored to diverse industries. With a commitment to excellence, we
          specialize in empowering individual brands and affiliates through
          innovative strategies, top-tier expertise, and a results-driven
          approach.
        </p>
        <div className="flex justify-center space-x-5">
          <Button className="btn"> Get Started </Button>
          <Button className="btn"> Contact Us </Button>
        </div>
      </div>
    </div>
  );
}
