import { useContext, useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { backendUrl } from "../api/api";
import { TokenDataContext, UserDataContext } from "./context/Context";

const AuthRequired = ({ children }) => {
  // assume just re-loaded
  const { user, setUser } = useContext(UserDataContext);
  const { token, setToken } = useContext(TokenDataContext);
  const [loading, setLoading] = useState(token ? false : true);

  const timeoutRef = useRef(null); // aktuellen timeout für silent refresh

  //   console.log({ token, loading });

  const navigate = useNavigate();

  // try refreshing token --> get new access token
  // if succes --> show children
  // else --> navigate to signinup

  useEffect(() => {
    if (token) return doSilentRefresh(token); // logged in

    async function checkLoggedIn() {
      console.log("check if logged in previously");
      const response = await fetch(`${backendUrl}/users/refresh-token`, {
        method: "POST",
        credentials: "include",
      });

      const data = await response.json();
      if (data.result) {
        console.log("was logged in, got new access token");
        setUser(data.result.user);
        setToken(data.result.newAccessToken);
        doSilentRefresh(data.result.newAccessToken);
      } else {
        console.log("was not logged in (anymore)");
        navigate("/signinup");
      }

      setLoading(false);
    }

    checkLoggedIn();

    function doSilentRefresh(currentAccessToken) {
      const tokenExpiration = calcTokenExpDuration(currentAccessToken); // per gegebenen token die expiration -10s berechnen
      console.log("doing silent refresh in", tokenExpiration);
      timeoutRef.current = setTimeout(async () => {
        try {
          console.log("fetching backend for silent refresh");
          const response = await fetch(`${backendUrl}/users/refresh-token`, {
            method: "POST",
            credentials: "include",
          });

          if (!data.result) navigate("/signinup");

          const data = await response.json();
          console.log({ data });
          setToken(data.result.newAccessToken);

          doSilentRefresh(data.result.newAccessToken); // rekursion (eine funktion sich selbst aufruft)
        } catch (err) {
          // error handling
          console.log(err);
          navigate("/signinup");
        }
      }, tokenExpiration);
    }

    function calcTokenExpDuration(accessToken) {
      const tokenPayloadBase64 = accessToken.split(".")[1];
      const tokenPayloadJson = atob(tokenPayloadBase64);
      const tokenPayload = JSON.parse(tokenPayloadJson);
      const duration = tokenPayload.exp - tokenPayload.iat;
      const nextFetchAfter = duration - 30;
      return nextFetchAfter * 1000;
    }

    // clean up callback return
    return () => clearTimeout(timeoutRef.current);
  }, []);

  if (loading) return "Loading...";
  else return <>{children}</>;
};

export default AuthRequired;

/* <AuthRequired>
    // ... children
    // ... children
    // ... children
    </AuthRequired>; */
