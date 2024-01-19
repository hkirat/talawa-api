import { ApplicationError } from "./applicationError";
/**
 * This class detects invalid file size errors and sends those errors to the superclass ApplicationError.
 */
export class InvalidFileSizeError extends ApplicationError {
  constructor(
    message = "Invalid File Size",
    code: string | null = null,
    param: string | null = null,
    metadata: Record<any, any> = {}
  ) {
    const errorJson = [
      {
        message,
        code,
        param,
        metadata,
      },
    ];
    super(errorJson, 403, message);
  }
}
