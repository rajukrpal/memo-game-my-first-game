import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import data from "../data";
import { useState } from "react";

const Form_C = () => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const memesArray = data.data.memes;
    const renderNumber = Math.floor(Math.random() * memesArray.length);
    // const url = memesArray[renderNumber].url
    const url = memesArray[renderNumber].url;

    setUrl(url);
    // console.log(url)
  };

  return (
    <div className="px-5 py-2">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>Top text</Form.Label>
            <Form.Control type="text" placeholder="Shut up" />
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>Bottom text</Form.Label>
            <Form.Control type="text" placeholder="And take my money" />
          </Form.Group>

          <div className="py-3">
            <button
              type="submit"
              className="w-full py-2 rounded-md capitalize bg-[#A818DA] text-white border-[#A818DA] hover:bg-[#8d00b8] hover:border-[#8d00b8]"
            >
              Get a new meme image 🖼
            </button>
          </div>
        </Row>
      </Form>
      <div className="flex justify-center">
        <img className="md:h-96 h-40 md:w-auto " src={url} alt="" />
      </div>
    </div>
  );
};

export default Form_C;
