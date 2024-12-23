const ProfileForm = ({ userData, errors, handleFieldChange, handleSubmit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleFieldChange(name, value);
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="p-6 rounded-lg shadow-lg border-4 "
    >
      <div className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
            placeholder="Your email address"
            readOnly
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Age Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Age
          </label>
          <input
            type="number"
            name="age"
            value={userData.age}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your age"
          />
          {errors.age && (
            <p className="text-red-500 text-sm mt-1">{errors.age}</p>
          )}
        </div>

        {/* Gender Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Gender
          </label>
          <select
            name="gender"
            value={userData.gender}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
          )}
        </div>

        {/* Address Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your address"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
          >
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
