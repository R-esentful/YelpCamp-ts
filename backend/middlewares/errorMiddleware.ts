import express, { Request, Response, NextFunction } from "express";

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: error.stack,
  });
};
