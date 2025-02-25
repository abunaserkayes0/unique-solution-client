import File from "../../file/file";
import Input from "../../input/input";
import TextArea from "../../textArea/textArea";
import Loading from "../../loading";

export default function AddService({ service: { title } }) {
  if (!title) {
    return <Loading />;
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <>
      <form
        onSubmit={handelSubmit}
        className="form-control p-4 md:p-8 max-w-lg mx-auto"
      >
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        </div>
        <div className="mb-4">
          <File type="file" />
        </div>
        <div className="mb-4">
          <Input placeholder="Enter Your title" type="text" />
        </div>
        <div className="mb-4">
          <TextArea placeholder="Enter Your Description" />
        </div>
        <div className="mb-4">
          <button className="btn w-full md:w-auto">Add Service</button>
        </div>
      </form>
    </>
  );
}
