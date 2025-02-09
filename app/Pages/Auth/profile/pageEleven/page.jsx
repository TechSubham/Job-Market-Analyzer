"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function CompleteProfile() {
  const [profileImage, setProfileImage] = useState(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [formData, setFormData] = useState({
    dob: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });
  const router = useRouter();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setIsUploadOpen(false);
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
          <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden" onClick={() => setIsUploadOpen(true)}>
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-400">+</span>
            )}
          </div>
        </label>
        <input
    type="file"
    id="fileInput"
    accept="image/*"
    className="hidden"
    onChange={handleFileChange}
  />

  <Button onClick={() => document.getElementById("fileInput").click()} className="bg-blue-500 text-white px-4 py-2 rounded">
    Upload Photo
  </Button>

      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600">Date of Birth</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full border rounded p-2"/>
        </div>

        <div>
          <label className="block text-gray-600">Country</label>
          <select name="country" value={formData.country} onChange={handleChange} className="w-full border rounded p-2">
          <option value="">Select your country</option>
    <option value="Afghanistan">Afghanistan</option>
    <option value="Albania">Albania</option>
    <option value="Algeria">Algeria</option>
    <option value="Andorra">Andorra</option>
    <option value="Angola">Angola</option>
    <option value="Argentina">Argentina</option>
    <option value="Armenia">Armenia</option>
    <option value="Australia">Australia</option>
    <option value="Austria">Austria</option>
    <option value="Azerbaijan">Azerbaijan</option>
    <option value="Bahamas">Bahamas</option>
    <option value="Bahrain">Bahrain</option>
    <option value="Bangladesh">Bangladesh</option>
    <option value="Barbados">Barbados</option>
    <option value="Belarus">Belarus</option>
    <option value="Belgium">Belgium</option>
    <option value="Belize">Belize</option>
    <option value="Bhutan">Bhutan</option>
    <option value="Bolivia">Bolivia</option>
    <option value="Botswana">Botswana</option>
    <option value="Brazil">Brazil</option>
    <option value="Bulgaria">Bulgaria</option>
    <option value="Canada">Canada</option>
    <option value="Chile">Chile</option>
    <option value="China">China</option>
    <option value="Colombia">Colombia</option>
    <option value="Costa Rica">Costa Rica</option>
    <option value="Croatia">Croatia</option>
    <option value="Cuba">Cuba</option>
    <option value="Cyprus">Cyprus</option>
    <option value="Czech Republic">Czech Republic</option>
    <option value="Denmark">Denmark</option>
    <option value="Ecuador">Ecuador</option>
    <option value="Egypt">Egypt</option>
    <option value="Estonia">Estonia</option>
    <option value="Finland">Finland</option>
    <option value="France">France</option>
    <option value="Germany">Germany</option>
    <option value="Greece">Greece</option>
    <option value="Hong Kong">Hong Kong</option>
    <option value="Hungary">Hungary</option>
    <option value="India">India</option>
    <option value="Indonesia">Indonesia</option>
    <option value="Iran">Iran</option>
    <option value="Iraq">Iraq</option>
    <option value="Ireland">Ireland</option>
    <option value="Israel">Israel</option>
    <option value="Italy">Italy</option>
    <option value="Jamaica">Jamaica</option>
    <option value="Japan">Japan</option>
    <option value="Jordan">Jordan</option>
    <option value="Kazakhstan">Kazakhstan</option>
    <option value="Kenya">Kenya</option>
    <option value="Kuwait">Kuwait</option>
    <option value="Latvia">Latvia</option>
    <option value="Lebanon">Lebanon</option>
    <option value="Lithuania">Lithuania</option>
    <option value="Malaysia">Malaysia</option>
    <option value="Mexico">Mexico</option>
    <option value="Morocco">Morocco</option>
    <option value="Netherlands">Netherlands</option>
    <option value="New Zealand">New Zealand</option>
    <option value="Nigeria">Nigeria</option>
    <option value="Norway">Norway</option>
    <option value="Oman">Oman</option>
    <option value="Pakistan">Pakistan</option>
    <option value="Panama">Panama</option>
    <option value="Peru">Peru</option>
    <option value="Philippines">Philippines</option>
    <option value="Poland">Poland</option>
    <option value="Portugal">Portugal</option>
    <option value="Qatar">Qatar</option>
    <option value="Romania">Romania</option>
    <option value="Russia">Russia</option>
    <option value="Saudi Arabia">Saudi Arabia</option>
    <option value="Serbia">Serbia</option>
    <option value="Singapore">Singapore</option>
    <option value="South Africa">South Africa</option>
    <option value="South Korea">South Korea</option>
    <option value="Spain">Spain</option>
    <option value="Sri Lanka">Sri Lanka</option>
    <option value="Sweden">Sweden</option>
    <option value="Switzerland">Switzerland</option>
    <option value="Thailand">Thailand</option>
    <option value="Turkey">Turkey</option>
    <option value="Ukraine">Ukraine</option>
    <option value="United Arab Emirates">United Arab Emirates</option>
    <option value="United Kingdom">United Kingdom</option>
    <option value="United States">United States</option>
    <option value="Vietnam">Vietnam</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-600">Street Address</label>
          <input type="text" name="street" value={formData.street} onChange={handleChange} className="w-full border rounded p-2" placeholder="Enter street address" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600">City</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full border rounded p-2" placeholder="City"/>
          </div>

          <div>
            <label className="block text-gray-600">State</label>
            <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full border rounded p-2" placeholder="State/Province"/>
          </div>
        </div>

        <div>
          <label className="block text-gray-600">ZIP / Postal Code</label>
          <input type="text" name="zip" value={formData.zip} onChange={handleChange} className="w-full border rounded p-2" placeholder="ZIP Code"/>
        </div>

        <div>
          <label className="block text-gray-600">Phone</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full border rounded p-2" placeholder="Enter full phone number with country code" />
        </div>

        <button type="submit" className="w-full bg-blue-900 text-white p-2 rounded">
          Save Your Profile
        </button>
      </form>
    </div>
  );
}
