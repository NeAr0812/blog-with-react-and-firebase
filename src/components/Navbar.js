import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      <Link to="/createpost">
        <FontAwesomeIcon icon={faFilePen} />
        記事投稿
      </Link>
      {/* isAuthが!でtrueの時は権限がない場合loginを表示、ある場合falseの場合はログアウト表示 */}

      {isAuth ? (
        <Link to="/logout">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          ログアウト
        </Link>
      ) : (
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          ログイン
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
