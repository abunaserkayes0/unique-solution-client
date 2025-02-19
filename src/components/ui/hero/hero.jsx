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
        <h1 className="mb-5 text-4xl font-bold">
          Unique Solutions – The Fine Unique Experts
        </h1>
        <h2 className="text-2xl font-semibold my-5">
          Your Partner in Excellence Across Industries
        </h2>
        <p className="mb-5 max-w-1/2 mx-auto">
          At Unique Solutions, we bring expertise across multiple industries,
          offering tailored consultancy, advisory services, and business
          ventures. Whether you are optimizing your supply chain, starting a new
          business, or expanding into new markets, our team is here to provide
          you with innovative solutions for long-term success.
        </p>
        <div className="flex justify-center space-x-5">
          <Button className="btn"> Get Started </Button>
          <Button className="btn"> Contact Us </Button>
        </div>
      </div>
    </div>
  );
}
