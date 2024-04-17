

const Contact = () => {


    return (
        <div className="flex flex-col items-center justify-center space-y-5">
            <h1 className="text-3xl font-bold">Contact</h1>
            <p>This is the contact page of Namasate REACT 🚀</p>
            <div className="flex space-x-5">
                <a href="https://github.com/mandartule" className="text-blue-500 hover:underline">Github</a>
                <a href="https://www.linkedin.com/in/mandartule" className="text-blue-500 hover:underline">LinkedIn</a>
            </div>
            <form  className="flex flex-col space-y-4">
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" className="border p-2 rounded" />
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2 rounded" />
                <textarea  onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="border p-2 rounded" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
            </form>
        </div>
    )
};

export default Contact;