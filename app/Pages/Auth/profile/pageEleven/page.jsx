import { useState } from "react";

export default function CompleteProfile() {
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    dob: "",
    country: "India",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Data:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Complete Your Profile</h2>
      
      <div className="flex items-center space-x-4 mb-4">
        <label className="cursor-pointer">
          <input type="file" className="hidden" onChange={handleImageUpload} />
          <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-400">+</span>
            )}
          </div>
        </label>
        <button className="px-3 py-1 text-white bg-blue-500 rounded">Upload Photo</button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600">Date of Birth</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} 
                 className="w-full border rounded p-2"/>
        </div>

        <div>
          <label className="block text-gray-600">Country</label>
          <select name="country" value={formData.country} onChange={handleChange} 
                  className="w-full border rounded p-2">
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-600">Street Address</label>
          <input type="text" name="street" value={formData.street} onChange={handleChange} 
                 className="w-full border rounded p-2" placeholder="Enter street address" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600">City</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} 
                   className="w-full border rounded p-2" placeholder="City"/>
          </div>

          <div>
            <label className="block text-gray-600">State</label>
            <input type="text" name="state" value={formData.state} onChange={handleChange} 
                   className="w-full border rounded p-2" placeholder="State/Province"/>
          </div>
        </div>

        <div>
          <label className="block text-gray-600">ZIP / Postal Code</label>
          <input type="text" name="zip" value={formData.zip} onChange={handleChange} 
                 className="w-full border rounded p-2" placeholder="ZIP Code"/>
        </div>

        <div>
          <label className="block text-gray-600">Phone</label>
          <div className="flex items-center border rounded p-2">
            <span className="mr-2">🇮🇳 +91</span>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} 
                   className="w-full outline-none" placeholder="Enter phone number"/>
          </div>
        </div>

        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
          Save Your Profile
        </button>
      </form>
    </div>
  );
}
