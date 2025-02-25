import { useParams } from "react-router-dom";
import { getServiceId } from "../../api/api";
import AddService from "../../components/ui/services/addService/addService";
import { useEffect, useState } from "react";
export default function Add() {
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    async function fetchService() {
      if (id) {
        const service = await getServiceId(id);
        setService(service);
      }
    }
    fetchService();
  }, [id]);
  return (
    <div>
      <AddService service={service} />
    </div>
  );
}
