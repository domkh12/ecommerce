import { Button, FileInput, Label, TextInput } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function CreateProduct() {

    const navigate = useNavigate()

  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="name" value="Name product" />
      </div>
      <TextInput
        id="name"
        type="text"
        placeholder="Name product"
        required
        shadow
      />

      <div className="mb-2 block">
        <Label htmlFor="description" value="Description" />
      </div>
      <TextInput
        id="description"
        type="text"
        placeholder="Description"
        required
        shadow
      />

      <div className="mb-2 block">
        <Label htmlFor="price" value="Price" />
      </div>
      <TextInput id="price" type="text" placeholder="Price" required shadow />

      <div id="fileUpload" className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="file" value="Upload file" />
        </div>
        <FileInput
          id="file"
          helperText="A profile picture is useful to confirm your are logged into your account"
        />
      </div>
      <div className="flex justify-start mt-5 gap-3">
        <Button onClick={() => navigate("/dash/products")} color="gray" pill>
          Cancel
        </Button>
        <Button color="dark" pill>
          Create
        </Button>
      </div>
    </div>
  );
}

export default CreateProduct;
