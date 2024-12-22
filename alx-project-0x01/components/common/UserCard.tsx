import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, phone, website }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        {/* Name and Username with justify-between */}
        <div className="flex justify-between space-x-3 ">
          <h3 className="font-medium">Name: {name}</h3>
          <h3 className="font-medium">Username: {username}</h3>
        </div>
      </div>

      {/* Phone and Website in separate line with blue background */}
      <div className="mt-4">
        <div className="bg-blue-700 px-4 py-2 rounded-md text-white mb-2">
          <h3>Phone: {phone}</h3>
        </div>
        <div className="bg-blue-700 px-4 py-2 rounded-full text-white">
          <span>Website: {website}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
