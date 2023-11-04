import * as yup from "yup";

const settingsProfileSchema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username is too short")
    .max(30, "Username is too long")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    ),
  displayName: yup
    .string()
    .required("Display name is required")
    .min(3, "Display name is too short")
    .max(50, "Display name is too long")
    .matches(
      /^[a-zA-Z0-9\s.'-]+$/,
      "Display name can only contain letters, numbers, spaces, periods, apostrophes, and hyphens"
    ),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  websiteURL: yup.string().url("Invalid URL format").notRequired(),
  twitter: yup.string().notRequired(),
  instagram: yup.string().notRequired(),
});

export default settingsProfileSchema;
