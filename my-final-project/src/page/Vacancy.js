import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Vacancy = () => {
  const [data, setData] = useState(null);

  async function getData() {
    const res = await axios.get(
      " https://dev-example.sanbercloud.com/api/job-vacancy"
    );
    console.log(res);
    setData(res.data.data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-7">
        {data !== null &&
          data.map((items) => {
            return (
              <Card
                id={items.id}
                image={items.company_image_url}
                Name={items.company_name}
                TypeJob={items.job_type}
                location={items.company_city}
              />
            );
          })}
      </div>
      <Footer />
    </>
  );
};

export default Vacancy;
