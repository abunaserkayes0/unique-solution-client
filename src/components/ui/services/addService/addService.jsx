import File from "../../file/file";
import Input from "../../input/input";
import TextArea from "../../textArea/textArea";
import Loading from "../../loading";
import { useState } from "react";
import axios from "axios";
import axiosUrl from "../../../../utils/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { routePaths } from "../../../../router/route-paths";

export default function AddService({ service = {} }) {
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const { title } = service;

  if (!title) {
    return <Loading />;
  }

  const handleUploadImage = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (!file) {
      console.error("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
    formData.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);

    const result = await axios.post(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUD_NAME
      }/image/upload`,
      formData
    );

    setImageUrl(result.data.secure_url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const subTitle = formData.get("subtitle");
    const description = formData.get("description");

    const data = {
      subTitle,
      description,
      imageUrl,
    };
    try {
      const response = await axiosUrl.post(`/add/${title}`, data);
      if (response.status === 200) {
        toast.success("Service Added Successfully");
        navigate(routePaths.home.root);
      }
    } catch (error) {
      toast.error("Failed to Add Service", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form-control p-4 md:p-8 max-w-lg mx-auto"
    >
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      </div>
      <div className="mb-4">
        <File type="file" name="file" onChange={handleUploadImage} />
      </div>
      {imageUrl && (
        <div className="mb-4">
          <img
            src={imageUrl}
            alt="Uploaded Preview"
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}
      <div className="mb-4">
        <Input
          placeholder="Enter Your Subtitle"
          type="text"
          name="subtitle"
          required
        />
      </div>
      <div className="mb-4">
        <TextArea
          placeholder="Enter Your Description"
          name="description"
          required
        />
      </div>
      <div className="mb-4">
        <button type="submit" className="btn w-full md:w-auto">
          Add Service
        </button>
      </div>
    </form>
  );
}
