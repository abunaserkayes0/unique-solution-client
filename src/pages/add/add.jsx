import { useParams } from "react-router-dom";
import { getServiceId } from "../../api/api";
import AddService from "../../components/ui/services/addService/addService";
import { useEffect, useState } from "react";
export default function Add() {
  const { title } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    async function fetchService() {
      if (title) {
        const service = await getServiceId(title);
        setService(service);
      }
    }
    fetchService();
  }, [title]);
  return (
    <div>
      <AddService service={service} />
    </div>
  );
}
