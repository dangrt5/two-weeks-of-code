import React from "react";

const styles = () => {
  return (
    <style jsx>
      {`
        .header-container {
          display: flex;
          justify-content: flex-end;
          padding: 24px;
          font-size: 2.4rem;
        }

        .link,
        a {
          text-decoration: none;
        }

        .link-title {
          color: #0095b8;
        }
      `}
    </style>
  );
};

export default styles;
