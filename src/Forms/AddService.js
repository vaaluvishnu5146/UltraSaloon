import React, { useState } from "react";
import BasicCta from "../Elements/Button";
import TextInput from "../Elements/TextInput";
import BasicSelect from "../Elements/Select";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewServices,
  updateService,
  deleteService,
} from "../Redux/Reducers/ServicesSlice";

const categories = ["Spa", "Makeup", "Grooming"];

function AddService() {
  const dispatcher = useDispatch();
  const { items = [] } = useSelector((state) => state.services);
  const [mode, setMode] = useState("create");
  const [form, setForm] = useState(null);

  function handleInput(e) {
    if (e) {
      let formCopy = {
        ...form,
      };
      formCopy[e.target.id] = e.target.value;
      setForm(formCopy);
    }
  }

  function saveService(e) {
    if (form) {
      dispatcher(addNewServices(form));
      setForm(null);
    }
  }

  function handleEdit(e, item = {}) {
    if (e) {
      setMode("update");
      setForm(items.find((d) => d.serviceName === item.serviceName));
    }
  }

  function handleUpdate() {
    dispatcher(updateService(form));
    setForm(null);
    setMode("create");
  }

  function handleDelete(e, name = "") {
    dispatcher(deleteService(name));
  }

  return (
    <div className="form">
      <TextInput
        id="serviceName"
        marginBottom={"10px"}
        placeholder="Enter Service name"
        onChange={handleInput}
        value={form?.serviceName || ""}
        disabled={mode === "update"}
      />
      <TextInput
        id="serviceDescription"
        marginBottom={"10px"}
        placeholder="Enter Service description"
        onChange={handleInput}
        value={form?.serviceDescription || ""}
      />
      <TextInput
        id="servicePricing"
        marginBottom={"10px"}
        placeholder="Enter Service Pricing"
        onChange={handleInput}
        value={form?.servicePricing || ""}
      />
      <BasicSelect
        marginBottom={"10px"}
        options={categories}
        id="serviceCategory"
        onSelect={handleInput}
        value={form?.serviceCategory || ""}
      />
      <BasicCta
        text={mode === "create" ? "Save" : "Update"}
        onClick={mode === "create" ? saveService : handleUpdate}
      />
      <div className="listing-container">
        <h3>All Services</h3>
        <div className="listing-section">
          {items.length > 0 &&
            items.map((d, i) => (
              <div className="services-card" key={`${i}`}>
                <h4>{d.serviceName}</h4>
                <p>{d.serviceDescription}</p>
                <p>{d.servicePricing}</p>
                <div className="row">
                  <BasicCta text="Edit" onClick={(e) => handleEdit(e, d)} />
                  <BasicCta
                    text="Delete"
                    onClick={(e) => handleDelete(e, d.serviceName)}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default AddService;
