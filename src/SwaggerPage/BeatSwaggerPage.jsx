import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const BeatSwagger = () => {
  const swaggerUrl = "/beat-swagger.yml";

  console.log("Rendering Swagger UI with URL:", swaggerUrl);

  return <SwaggerUI url={swaggerUrl} />;
};

export default BeatSwagger;
