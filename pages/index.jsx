// import styles from "../styles/Home.module.scss";
import MainScreen from "../components/MainScreen/MainScreen";
import SignInModal from "../components/SignInModal/SignInModal";
import { useSelector } from "react-redux";

export default function Home() {
  const username = useSelector((state) => state.username);
  return (
    <>{!username || username.length < 1 ? <SignInModal /> : <MainScreen />}</>
  );
}
