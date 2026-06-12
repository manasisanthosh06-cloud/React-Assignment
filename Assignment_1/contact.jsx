import { useState } from "react";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [matter, setMatter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const jsonData = {
      name,
      email,
      matter,
    };

    alert(JSON.stringify(jsonData, null, 2));
  };

  return (
    <>
      <h1>Contact</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Matter</label>
          <textarea
            className="form-control"
            rows="4"
            value={matter}
            onChange={(e) => setMatter(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Contact;
