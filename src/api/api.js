import axios from "../utils/axios";

const getServices = async () => {
  try {
    const { data } = await axios.get("/services");
    return data;
  } catch (error) {
    console.error("Error fetching services:", error);
  }
};

const getServiceId = async (id) => {
  try {
    const { data } = await axios.get(`/services/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching service:", error);
  }
};

export { getServices, getServiceId };
