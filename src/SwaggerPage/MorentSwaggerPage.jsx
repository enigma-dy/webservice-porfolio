import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const MorentSwagger = () => {
  const swaggerUrl = "/swagger.yml";

  console.log("Rendering Swagger UI with URL:", swaggerUrl);

  return <SwaggerUI url={swaggerUrl} />;
};

export default MorentSwagger;
