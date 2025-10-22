import React, { useRef, useState } from "react";
import "./Contact.css";
import { FaPaperclip, FaCamera, FaFileAlt, FaFileImage, FaFileVideo, FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const Contact = ({ isStandalone = false }) => {
  const fileInputRef = useRef(null);
  const mediaInputRef = useRef(null);

  const [attachments, setAttachments] = useState([]);
  const [media, setMedia] = useState([]);

  const [inputvalue, setInputvalue] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFileClick = () => fileInputRef.current.click();
  const handleMediaClick = () => mediaInputRef.current.click();

  const handleFileChange = (e) => {
    setAttachments([...attachments, ...Array.from(e.target.files)]);
  };

  const handleMediaChange = (e) => {
    setMedia([...media, ...Array.from(e.target.files)]);
  };

  const removeFile = (type, index) => {
    if (type === "attachment") {
      setAttachments(attachments.filter((_, i) => i !== index));
    } else if (type === "media") {
      setMedia(media.filter((_, i) => i !== index));
    }
  };

  const getFileIcon = (file) => {
    if (file.type.startsWith("image/")) return <FaFileImage className="file-icon image" />;
    if (file.type.startsWith("video/")) return <FaFileVideo className="file-icon video" />;
    if (file.type === "application/pdf") return <FaFileAlt className="file-icon pdf" />;
    return <FaFileAlt className="file-icon" />;
  };

  const getvalue = (e) => {
    const { name, value } = e.target;
    setInputvalue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sentUserdata = async (e) => {
    e.preventDefault();
    const { fname, lname, email, phone, message } = inputvalue;

    if (!fname || !lname || !email || !phone || !message) {
      toast.error("All fields are required");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("fname", fname);
      formData.append("lname", lname);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("message", message);

      attachments.forEach((file) => formData.append("files", file));
      media.forEach((file) => formData.append("files", file));

      const res = await fetch("http://localhost:6002/register", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log(data);

      if (data.status === 201) {
        toast.success("Your Form Sent Successfully");
        setInputvalue({ fname: "", lname: "", email: "", phone: "", message: "" });
        setAttachments([]);
        setMedia([]);
      } else {
        toast.error("Submission failed");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error("Something went wrong");
    }
  };

  return (
    <section className={`contact-section ${isStandalone ? "standalone" : ""}`}>
      <div className="container-fluid">
        <h2 className="contact-heading text-center mb-5">Contact Us</h2>
        <form className="row g-3 justify-content-center" onSubmit={sentUserdata}>
          <div className="col-md-5">
            <label className="form-label text-white">First Name</label>
            <input type="text" className="form-control" name="fname" placeholder="Enter First name" value={inputvalue.fname} onChange={getvalue} />
          </div>
          <div className="col-md-5">
            <label className="form-label text-white">Last Name</label>
            <input type="text" className="form-control" name="lname" placeholder="Enter Last name" value={inputvalue.lname} onChange={getvalue} />
          </div>

          <div className="col-md-5">
            <label className="form-label text-white">Email</label>
            <input type="email" className="form-control" name="email" placeholder="Enter email" value={inputvalue.email} onChange={getvalue} />
          </div>
          <div className="col-md-5">
            <label className="form-label text-white">Phone Number</label>
            <input type="text" className="form-control" name="phone" placeholder="Enter Phone number" value={inputvalue.phone} onChange={getvalue} />
          </div>

          <div className="col-md-10">
            <label className="form-label text-white">Message</label>
            <div className="textarea-container">
              <textarea className="form-control" rows="4" name="message" placeholder="Leave a Message" value={inputvalue.message} onChange={getvalue}></textarea>

              <div className="textarea-icons">
                <FaPaperclip className="icon" onClick={handleFileClick} />
                <FaCamera className="icon" onClick={handleMediaClick} />
              </div>

              <input type="file" ref={fileInputRef} style={{ display: "none" }} multiple onChange={handleFileChange} />
              <input type="file" ref={mediaInputRef} accept="image/*,video/*" style={{ display: "none" }} multiple onChange={handleMediaChange} />
            </div>

            <div className="file-preview">
              {attachments.map((file, index) => (
                <div key={index} className="file-item">
                  {getFileIcon(file)}
                  <span>{file.name}</span>
                  <FaTimes className="remove-icon" onClick={() => removeFile("attachment", index)} />
                </div>
              ))}
              {media.map((file, index) => (
                <div key={index} className="file-item">
                  {getFileIcon(file)}
                  <span>{file.name}</span>
                  <FaTimes className="remove-icon" onClick={() => removeFile("media", index)} />
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-10 text-center">
            <button type="submit" className="btn btn-danger px-5">
              Submit
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;
