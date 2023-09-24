const loggingMiddleware = (req, res, next) => {
  const start = new Date();

  res.on("finish", () => {
    const end = new Date();
    const durationMs = end.getTime() - start.getTime();

    console.log(
      `${start.toISOString()} [${req.method}] ${req.originalUrl} ${
        res.statusCode
      } ${durationMs}ms`
    );
  });

  next();
};

export default loggingMiddleware;
