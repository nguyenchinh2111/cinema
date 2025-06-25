// Central export file for all mock data
export * from "./cinemaData";
export * from "./blogData";

// Re-export default objects with specific names
export { default as cinemaData } from "./cinemaData";
export { default as blogData } from "./blogData";

// Combined data object for backward compatibility
import cinemaDataImport from "./cinemaData";
import blogDataImport from "./blogData";

export const combinedData = {
  ...cinemaDataImport,
  ...blogDataImport,
};

// Legacy export for backward compatibility
export const cinemaData_legacy = {
  ...cinemaDataImport,
  blogPosts: blogDataImport.blogPosts,
};

export default combinedData;
