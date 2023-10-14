import * as yup from "yup";

const registerSchema = yup.object({
  username: yup
    .string()
    .required("Please enter a username")
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username can be at most 20 characters long")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    ),

  displayName: yup
    .string()
    .required("Please enter a display name")
    .min(3, "Display name must be at least 3 characters long")
    .max(50, "Display name can be at most 50 characters long"),
});

export default registerSchema;
