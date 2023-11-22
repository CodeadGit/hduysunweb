"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  limit,
  orderBy,
  query,
  doc,
  increment,
  updateDoc,
  setDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { auth, db } from "@/firebase/firebase.config";
import firebase from "firebase/app";
import { useRouter } from "next/navigation";
import {
  sendPasswordResetEmail,
  onAuthStateChanged,
  sendEmailVerification,
  signOut,
  getAuth,
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  OAuthProvider,
} from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [reader, setReader] = useState(null);
  const [changed, setChanged] = useState(false);
  const [readers, setReaders] = useState([]);
  const [readerData, setReaderData] = useState(null);
  const [logining, setLogining] = useState(false);
  const [gettingReader, setGettingReader] = useState(false);
  const [apploading, setAppLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");
  const [quota, setQuota] = useState(false);
  const [myLogs, setMyLogs] = useState([]);
  const [myLogsLoading, setMyLogsLoading] = useState(true);

  const [regForm, setRegForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const router = useRouter();

  const { name, email, password } = regForm;

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const userObj = {
    createdAt: new Date(),
    updatedAt: new Date(),
    active: false,
    likes: 0,
    comments: 0,
    dislikes: 0,
  };

  const providerG = new GoogleAuthProvider();
  const providerF = new FacebookAuthProvider();

  const whatTranslator = {
    1: { code: 1, p: 1, tr: "Beğeni" },
    2: { code: 2, p: 1, tr: "Beğenmeme" },
    3: { code: 3, p: 1, tr: "Yorum Yapma" },
    4: { code: 4, p: 1, tr: "Favorileme" },
    5: { code: 5, p: 1, tr: "ilgilendiği kategori" },
    6: { code: 5, p: 1, tr: "ilgilendiği etiket" },
  };

  const handleErrorMessageforAll = (err) => {
    if (err === "Firebase: Error (auth/email-already-in-use).") {
      setErrorMessage("Bu email zaten kullanılıyor");
    } else if (err === "Firebase: Error (auth/id-token-expired).") {
      setErrorMessage("kullanıcı hatırlama süresi doldu.");
    } else if (err === "Firebase: Error (auth/internal-error).") {
      setErrorMessage(
        "Kimlik doğrulama sunucusu beklenmeyen bir hatayla karşılaştı. "
      );
    } else if (err === "Firebase: Error (auth/invalid-email).") {
      setErrorMessage(
        "email kullanıcı özelliği için sağlanan değer geçersiz. mail adresi, geçerli e-posta adresi olmalıdır."
      );
    } else if (err === "Firebase: Error (auth/wrong-password).") {
      setErrorMessage("şifreyi yanlış girdiniz");
    } else if (err === "Firebase: Error (auth/user-not-found).") {
      setErrorMessage("Kullanıcı bulunamadı, kaydolun veya tekrar deneyin");
    } else {
      setErrorMessage("Bir hata meydana geldi, tekrar deneyin");
    }
  };

  const facebooklogin = async (e, go) => {
    e.preventDefault();
    const subs = await signInWithPopup(auth, providerF);
    var readerid = subs.user.uid;
    var email = subs.user.email;
    var name = subs.user.displayName;
    var provider = subs.operationType;
    var referance = doc(db, "Readers", readerid);

    go();
    try {
      await setDoc(referance, {
        readerid: readerid,
        name: name,
        email: email,
        provider: provider,
        createdAt: new Date(),
        readerUnique: new Date().valueOf().toString().substring(6),
        updatedAt: "",
        activedAt: false,
        interestedCat: "",
        interestedTag: "",
        likes: 0,
        comments: "",
        dislikes: 0,
      });
    } catch (error) {
      setLogining(false);
    }
    setReader({
      readerid: readerid,
      name: name,
      email: email,
      provider: provider,
      createdAt: new Date(),
      updatedAt: new Date(),
      activedAt: false,
      interestedCat: "",
      interestedTag: "",
      likes: 0,
      comments: 0,
      dislikes: 0,
      readerUnique: new Date().valueOf().toString().substring(6),
    });
  };

  const googlelogin = async (e, go) => {
    e.preventDefault();

    const subs = await signInWithPopup(auth, providerG);
    var readerid = subs.user.uid;
    var email = subs.user.email;
    var name = subs.user.displayName;
    var provider = subs.operationType;
    var referance = doc(db, "Readers", readerid);
    go();

    try {
      await setDoc(referance, {
        readerid: readerid,
        name: name,
        email: email,
        provider: "Google",
        createdAt: new Date(),
        readerUnique: new Date().valueOf().toString().substring(6),
        updatedAt: "",
        activedAt: false,
        interestedCat: "",
        interestedTag: "",
        likes: 0,
        comments: "",
        dislikes: 0,
      });
    } catch (error) {
      setLogining(false);
    }
    setReader({
      readerid: readerid,
      name: name,
      email: email,
      provider: provider,
      createdAt: new Date(),
      updatedAt: new Date(),
      activedAt: false,
      interestedCat: "",
      interestedTag: "",
      likes: 0,
      comments: 0,
      dislikes: 0,
      readerUnique: new Date().valueOf().toString().substring(6),
    });

    // This gives you a Google Access Token. You can use it to access the Google API.
    // The signed-in user info.
  };

  const handleLoginFormChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleRegFormChange = (e) => {
    setRegForm({ ...regForm, [e.target.name]: e.target.value });
  };

  const addManner = async (collect, what, path, detailStr) => {
    var userid = auth.currentUser.uid;
    var idForAll = new Date().valueOf().toString();
    var colreferance = doc(db, "Readers", userid, collect, idForAll);
    try {
      await setDoc(colreferance, {
        what: what,
        id: idForAll,
        referance: path,
        detailStr: detailStr,
      });
    } catch (error) {
      console.log(error)
    }
  };
  const addLogToNew = async (item, collect) => {
    var userid = auth.currentUser.uid;
    var colreferanceone = doc(db, item?.category, item.id);
    var colreferancedeep = doc(db, item?.category, item.id, collect, userid);
    try {
      await updateDoc(colreferanceone, {
        likes: increment(1),
      });
    } catch (error) {
      console.log(error)
    }
    try {
      await setDoc(colreferancedeep, {
        who: userid,
        when: new Date(),
      });
    } catch (error) {
      console.log(error)
    }
  };
  const errorTranslater = (message) => {
    if (message === "Firebase: Error (auth/wrong-password).") {
      setErrorMessage("E-posta ve/ veya şifre hatalı");
    } else if (message === "Firebase: Error (auth/user-not-found).") {
      setErrorMessage("Böyle bir kullanıcı bulunamadı");
    } else if (
      message ===
      "FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password)."
    ) {
      setErrorMessage("Şifreniz en az 6 karakterli olması gerekmektedir.");
    }
  };

  useEffect(() => {
    const fetchReaders = async () => {
      const q = query(collection(db, "Readers"));
      try {
        const querySnapshot = await getDocs(q);
        var list = [];
        querySnapshot.forEach((doc) => {
          list.unshift({ ...doc.data() });
        });
        setReaders(list);
      } catch (error) {
        if (error.message === "Quota exceeded.") {
          //console.log("bedava bitti");
          reportQuotaExceeded("readers pulling");
        }
      }
    }
      fetchReaders();
  }, []);

  // const getReaderData = async () => {
  //   if (reader) {
  //     setGettingReader(true);
  //     try {
  //       const readerRef = doc(db, "Readers", reader.uid);
  //       const docSnap = await getDoc(readerRef);
  //       if (docSnap.exists()) {
  //         setReaderData({
  //           ...docSnap.data(),
  //           readerNameAuth: auth.currentUser.displayName,
  //         });
  //         setGettingReader(false);
  //       } else {
  //         alert("context:user bulunamadı");
  //         setGettingReader(false);
  //       }
  //     } catch (e) {
  //       console.log(e.message);
  //       setGettingReader(false);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   const getUser = onAuthStateChanged(auth, async (currentUser) => {
  //     if (currentUser) {
  //       setReader(currentUser);
  //       const userRef = doc(db, "Readers", currentUser.uid);
  //       getDoc(userRef).then((doc) => {
  //         if (doc.exists()) {
  //           setReaderData(doc.data());
  //         } else {
  //           console.log("user yok");
  //         }
  //       });
  //       setAppLoading(false);
  //     } else {
  //       setAppLoading(false);
  //     }
  //     setErrorMessage(null);
  //   });
  //   try {
  //     getUser();
  //   } catch (error) {
  //     console.log("hata");
  //   }
  // }, [changed]);

  const register = async (e, go) => {
    e.preventDefault();
    setLogining(true);
    let a, b, c;
    if (regForm.password !== regForm.confirmPass) {
      setLogining(false);
      setErrorMessage("Şifreler eşleşmiyor");
    } else {
      try {
        const auth = getAuth();
        a = await createUserWithEmailAndPassword(
          auth,
          regForm.email,
          regForm.name,
          regForm.password
        );
        setReader(a.user);
      } catch (error) {
        setLogining(false);
        handleErrorMessageforAll(error.message);
        //  console.log(error);
      }
      try {
        const auth = getAuth();
        b = updateProfile(auth.currentUser, { displayName: regForm.name });
      } catch (error) {
        setLogining(false);
        handleErrorMessageforAll(error.message);
      }
      try {
        c = await setDoc(doc(db, "Readers", a.user.uid), {
          readerid: a.user.uid,
          //  ...regForm,
          email: a.user.email,
          name: a.user.displayName,
          provider: a.operationType,
          readerUnique: new Date().valueOf().toString().substring(6),
          ...userObj,
        });
        setLogining(false);
        setErrorMessage(null);
        setRegForm({
          name: "",
          email: "",
          password: "",
          confirmPass: "",
        });
        // setReaderData({
        //   readerid: a.user.uid,
        //   name: regForm.name,
        //   email: regForm.email,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        //   activedAt: false,
        //   interestedCat: "",
        //   interestedTag: "",
        //   likes: 0,
        //   comments: 0,
        //   dislikes: 0,
        //   readerUnique: new Date().valueOf().toString().substring(6),
        // });
        setReader({
          readerid: a.user.uid,
          name: a.user.displayName,
          email: a.user.email,
          createdAt: new Date(),
          updatedAt: new Date(),
          activedAt: false,
          interestedCat: "",
          interestedTag: "",
          likes: 0,
          comments: 0,
          dislikes: 0,
          readerUnique: new Date().valueOf().toString().substring(6),
        });
        await sendEmailVerification(auth.currentUser).catch((e) => {
          handleErrorMessageforAll(e.message);
        });
        go();
      } catch (error) {
        setLogining(false);
         console.log(error)
        // alert(error);
      }
      return a + b + c;
    }
  };

  const logout = async (e) => {
    e.preventDefault();
    setLogining(true);
    await signOut(auth)
      .then(() => setReader(null))
      .then(() => setLogining(false));
  };
  const reportQuotaExceeded = (cause) => {
    setQuota({ cond: true, cause: cause });
  };

  const login = async (e, go) => {
    e.preventDefault();
    setLogining(true);
    try {
      await signInWithEmailAndPassword(
        auth,
        loginForm.email,
        loginForm.password
      )
        .then((user) => setReader(user.user))
        .then(() => {
          setErrorMessage(null);
          setLogining(false);
          setAppLoading(false);
          go();
        })
        .catch((e) => {
          setLogining(false);
          errorTranslater(e.message);
        });
    } catch (error) {
      setLogining(false);

      if (error.message == "Quota exceeded.") {
        // console.log("bedava bitti");
        reportQuotaExceeded("login");
      }
    }
  };
  const handleErrorMessage = () => {
    setErrorMessage(null);
  };

  const submitReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, loginForm.email)
      .then(() => alert("Şifre Yenileme E-Postası adresinize gönderildi. "))
      .catch((e) => handleErrorMessage(e.message));
  };

  const amIauthorized = (field) => {
    //await getUserData()
    return Boolean(userData?.[field]);
  };

  useEffect(() => {
    const fetchReaders = async () => {
      const q = query(collection(db, "Readers"));
      try {
        const querySnapshot = await getDocs(q);
        var readersList = [];

        querySnapshot.forEach((doc) => {
          readersList.unshift({ ...doc.data() });
        });
        setReaders(readersList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReaders();
  }, []);

  const values = {
    readers,
    register,
    logout,
    // applelogin,
    logining,
    reader,
    apploading,
    login,
    errorMessage,
    alertMessage,
    handleErrorMessage,
    reportQuotaExceeded,
    quota,
    submitReset,
    readerData,
    handleLoginFormChange,
    handleRegFormChange,
    facebooklogin,
    regForm,
    amIauthorized,
    googlelogin,
    loginForm,
  };

  return (
    <AuthenticationContext.Provider value={values}>
      {children}
    </AuthenticationContext.Provider>
  );
};
export const useAuthenticationContext = () => useContext(AuthenticationContext);
