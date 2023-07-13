import React from "react";
import BasicCta from "../Elements/Button";
import AddService from "../Forms/AddService";

function Services() {
  return (
    <div className="page services-page">
      <div className="row row-reverse">
        <BasicCta text="Add New Service" background={"#07169b"} />
      </div>
      <AddService />
    </div>
  );
}

export default Services;
