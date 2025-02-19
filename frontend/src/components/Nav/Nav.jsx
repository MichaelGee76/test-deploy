import { useContext } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { UserDataContext } from "../context/Context";

const Nav = () => {
  const { user, setUser } = useContext(UserDataContext);
  const location = useLocation();

  // Function to check if the URL contains a certain string
  const urlContains = (substring) => {
    return location.pathname.includes(substring);
  };

  // Example usage
  const containsExampleString = urlContains("upload");
  const strokeColor = containsExampleString ? "green" : "#9E9E9E";
  return (
    <nav>
      <NavLink to="/">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.53222 20.7714V17.7047C9.5322 16.9246 10.1681 16.2908 10.956 16.2856H13.8421C14.6337 16.2856 15.2755 16.9209 15.2755 17.7047V17.7047V20.7809C15.2753 21.4432 15.8093 21.9845 16.478 22H18.4021C20.3201 22 21.875 20.4607 21.875 18.5618V18.5618V9.83784C21.8648 9.09083 21.5105 8.38935 20.913 7.93303L14.3327 2.6853C13.1799 1.77157 11.5412 1.77157 10.3884 2.6853L3.83703 7.94256C3.23726 8.39702 2.88239 9.09967 2.875 9.84736V18.5618C2.875 20.4607 4.42988 22 6.34791 22H8.27196C8.95735 22 9.51297 21.4499 9.51297 20.7714V20.7714"
            stroke="#9E9E9E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>Home</p>
      </NavLink>
      <NavLink to="/search">
        <svg
          className="search_svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="11.8916"
            cy="11.7666"
            r="8.98856"
            stroke="#9E9E9E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.1433 18.4851L21.6673 22"
            stroke="#9E9E9E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>Search</p>
      </NavLink>
      <NavLink className="upload_link" to="/upload">
        <svg
          className="upload_svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_2137)">
            <g clipPath="url(#clip1_1_2137)">
              <path
                className="cross_svg"
                d="M12.9364 6.10437V18.0184"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.8993 12.0614H6.97302"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cross_svg"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M-3.29169 12.0614C-3.29169 -0.108792 0.766208 -4.16669 12.9364 -4.16669C25.1066 -4.16669 29.1645 -0.108792 29.1645 12.0614C29.1645 24.2316 25.1066 28.2895 12.9364 28.2895C0.766208 28.2895 -3.29169 24.2316 -3.29169 12.0614Z"
                stroke="#9E9E9E"
                strokeWidth="71"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
          <rect
            x="1.625"
            y="0.75"
            width="22.5"
            height="22.5"
            rx="11.25"
            stroke="#9E9E9E"
            strokeWidth="1.5"
          />
          <defs>
            <clipPath id="clip0_1_2137">
              <rect x="0.875" width="24" height="24" rx="12" fill="white" />
            </clipPath>
            <clipPath id="clip1_1_2137">
              <rect
                width="40"
                height="40"
                fill="white"
                transform="translate(-7.125 -8)"
              />
            </clipPath>
          </defs>
        </svg>
        <p>Upload</p>
      </NavLink>
      <NavLink to={user ? `/profile/${user._id}` : `/profile`}>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.6097 15.3462C8.74213 15.3462 5.43927 15.931 5.43927 18.2729C5.43927 20.6148 8.72117 21.2205 12.6097 21.2205C16.4774 21.2205 19.7793 20.6348 19.7793 18.2938C19.7793 15.9529 16.4983 15.3462 12.6097 15.3462Z"
            stroke="#9E9E9E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.6098 12.0059C15.1479 12.0059 17.205 9.94779 17.205 7.40969C17.205 4.8716 15.1479 2.81445 12.6098 2.81445C10.0717 2.81445 8.01358 4.8716 8.01358 7.40969C8.00501 9.93922 10.0488 11.9973 12.5774 12.0059H12.6098Z"
            stroke="#9E9E9E"
            strokeWidth="1.42857"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>Profile</p>
      </NavLink>
    </nav>
  );
};

export default Nav;
