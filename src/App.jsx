// src/App.jsx
import UserProfile from "./components/UserProfile";
import LikeButton from "./components/LikeButton";
import SecretWord from "./components/SecretWord";
function App() {
  return (
    <>
      <UserProfile name="Ngo Hoang Anh" job="IT" />
      <LikeButton />
      <SecretWord name="Bam de bien mat" />
    </>
  );
}

export default App;
