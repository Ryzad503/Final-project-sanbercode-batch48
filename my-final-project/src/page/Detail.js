import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../components/CardDetail";

const Detail = () => {
  const [data, setData] = useState(null);

  console.log("data", data);

  const { id } = useParams();

  console.log(id);

  async function getData() {
    const res = await axios.get(
      `https://dev-example.sanbercloud.com/api/job-vacancy/${id}`
    );
    console.log(res);
    setData({
      image: res.data.company_image_url,
      title: res.data.title,
      Typejob: res.data.job_type,
      name: res.data.company_name,
      location: res.data.company_city,
      status: res.data.job_status,
      Contract: res.data.job_tenure,
      Description: res.data.job_description,
      Qualification: res.data.job_qualification,
      min: res.data.salary_min,
      max: res.data.salary_max,
    });
    console.log(res.data);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        {data !== null && (
          <CardDetail
            image={data.image}
            Title={data.title}
            TypeJob={data.TypeJob}
            Name={data.name}
            location={data.location}
            Status={data.status}
            Contract={data.Contract}
            Description={data.Description}
            Qualification={data.Qualification}
            min={data.min} 
            max={data.max}
          />
        )}
      </div>
    </>
  );
};

export default Detail;
