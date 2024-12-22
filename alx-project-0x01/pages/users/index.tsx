import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData, UserProps } from "@/interfaces";
import { useState } from "react";
const Users: React.FC<UserProps[]> = ({ posts }) => {
  console.log(posts);
  const [isModalOpen, setModalOpen] = useState(false);
  const [userpost, setPost] = useState<UserData | null>(null);
  const handleAddUser = (newPost: UserData) => {
    setPost({ ...newPost, id: posts.length + 1 });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">Post Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {posts?.map(
            (
              { name, username, phone, website, userID }: UserProps,
              key: number
            ) => (
              <UserCard
                name={name}
                username={username}
                phone={phone}
                website={website}
                userID={userID}
                key={userID}
              />
            )
          )}
        </div>
      </main>

      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}
export default Users;
