export const categoriesQuery = `
  *[_type == "category"] | order(order asc) {
    _id,
    title,
    "slug": slug.current
  }
`;

export const productsQuery = `
  *[_type == "product" && active == true] {
    _id,
    title,
    "slug": slug.current,
    startingAtEur,
    "category": category->title,
    images
  }
`;
