

function generateUsernameSuggestions(fullName){
  if (!fullName?.trim()) return [];

  const names = fullName
    .trim()
    .toLowerCase()
    .split(/\s+/);

  const firstName = names[0] || "";
  const lastName = names[1] || "";

  const suggestions = [
    `${firstName}${lastName}`,
    `${lastName}_${firstName}`,
    `${firstName}_${lastName[0] || ""}`,
    `${lastName}${Math.floor(Math.random() * 1000)}`
  ];

  // Remove duplicates and empty values
  return [...new Set(suggestions)].filter(Boolean).slice(0, 4);
};

export default generateUsernameSuggestions;