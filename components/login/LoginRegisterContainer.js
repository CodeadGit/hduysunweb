"use client";
import "./loginRegisterContainer.scss";
import { useAuthenticationContext } from "@/context/AuthenticationContext";
import firebase from "firebase/app";
import {
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  doc,
  increment,
  updateDoc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { auth, db } from "@/firebase/firebase.config";
import { useRouter } from "next/navigation";

const LoginRegisterContainer = () => {
  // const [reader, setReader] = useState(null);
  // const [readers, setReaders] = useState([]);
  // const [readerData, setReaderData] = useState(null);
  // const [logining, setLogining] = useState(false);
  // const [apploading, setAppLoading] = useState(true);
  // const [errorMessage, setErrorMessage] = useState(true);

  const {
    changedUser,
    reader,
    errorMessage,
    register,
    handleRegFormChange,
    regForm,
    logining,
  } = useAuthenticationContext();

  //  const handleRegFormChange = (e) => {
  //    setRegForm({ ...regForm, [e.target.name]: e.target.value });
  //  };

  //  const router = useRouter()

  //  const [regForm, setRegForm] = useState({
  //    name: "",
  //    email: "",
  //    password: "",
  //    confirmPass: "",
  //  });

  //  const userObj = {
  //    createdAt: new Date(),
  //    updatedAt: new Date(),
  //    activedAt: false,
  //    interestedCat: "",
  //    interestedTag: "",
  //    likes: "",
  //    comments: "",
  //    dislikes: "",
  //   readerUnique: "",
  //  };

  //  const errorTranslater = (message) => {
  //    if (message === "Firebase: Error (auth/wrong-password).") {
  //      setErrorMessage("E-posta ve/ veya şifre hatalı");
  //    } else if (message === "Firebase: Error (auth/user-not-found).") {
  //      setErrorMessage("Böyle bir kullanıcı bulunamadı");
  //    } else if (
  //      message ===
  //      "FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password)."
  //    ) {
  //      setErrorMessage("Şifreniz en az 6 karakterli olması gerekmektedir.");
  //    }
  //  };

  // const register = async (e) => {
  //   e.preventDefault();
  //   let a, b, c;
  //   if (regForm.password !== regForm.confirmPass) {
  //    setLogining(false);
  //     setErrorMessage("Şifreler eşleşmiyor");
  //   } else {
  //     try {
  //       a = await createUserWithEmailAndPassword(
  //         auth,
  //         regForm.email,
  //         regForm.password
  //       );
  //       setReader(a.user);
  //     } catch (error) {
  //       setLogining(false);
  //       errorTranslater(error.message);
  //       console.log(error);
  //     }
  //     try {
  //       b = updateProfile(auth.currentUser, { displayName: regForm.name });
  //     } catch (error) {
  //       setLogining(false);
  //       errorTranslater(error.message);
  //     }
  //     try {
  //       b = updateProfile(auth.currentUser, {
  //       displayName: regForm.name,
  //       });
  //     } catch (error) {
  //       setLogining(false);
  //       errorTranslater(error.message);
  //     }
  //     try {
  //       c = await setDoc(doc(db, "Readers", a.user.uid), {
  //         readerid: a.user.uid,
  //         ...regForm,
  //         userObj,
  //       });
  //       setLogining(false);
  //       setErrorMessage(null);
  //       changedUser()
  //       setRegForm({
  //         name: "",
  //         email: "",
  //         password: "",
  //         confirmPass: "",
  //       });
  //       setReaderData({
  //         readerid: a.user.uid,
  //         name: regForm.name,
  //         email: regForm.email,
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //         activedAt: false,
  //         interestedCat: "",
  //         interestedTag: "",
  //         likes: "",
  //         comments: "",
  //         dislikes: "",
  //         readerUnique: new Date().valueOf().toString().substring(6),
  //       });
  //     } catch (error) {
  //       setLogining(false);
  //       alert(error);
  //     }
  //     router.push("/")
  //     return a + b + c;
  //   }
  // };
  const router = useRouter();
  console.log(reader);

  return (
    <form
      onSubmit={(e) => register(e, () => router.push("/"))}
      className="register-inputs"
    >
      <input
        name="email"
        required
        id="email"
        onChange={handleRegFormChange}
        type="email"
        className="input-area"
        value={regForm?.email}
        placeholder="E-posta Adresi"
      />
      <input
        onChange={handleRegFormChange}
        type="text"
        id="name"
        required
        name="name"
        className="input-area"
        value={regForm?.name}
        placeholder="İsim"
      />
      <input
        className="input-area"
        onChange={handleRegFormChange}
        type="password"
        id="password"
        required
        name="password"
        value={regForm?.password}
        placeholder="Şifre"
      />
      <input
        className="input-area"
        onChange={handleRegFormChange}
        type="password"
        required
        name="confirmPass"
        value={regForm?.confirmPass}
        placeholder="Şifreyi doğrulayın"
      />
      <button type="submit">Kayıt Ol</button>
      {errorMessage ? (
        <div className="error-message">{errorMessage}</div>
      ) : null}
    </form>
  );
};

export default LoginRegisterContainer;
