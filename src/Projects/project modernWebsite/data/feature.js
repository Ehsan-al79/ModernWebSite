export const features = [
  {
    title: "AI Code Completion",
    description:
      "Intelligent code suggestions powered by advanced AI that learns from your coding patterns. Get real-time assistance with syntax, logic, and best practices.",
    codeSnippet: `function handleSubmit() {
  // AI suggests next line
  const data = await fetch("/api/submit")
  // Auto-completed by AI
}`,
    imagePosition: "left",
  },
  {
    title: "Automated Testing",
    description:
      "Generate comprehensive test suites automatically. Our AI analyzes your code and creates unit tests, integration tests, and edge case coverage.",
    codeSnippet: `describe("User Authentication", () => {
  // Auto-generated tests
  it("should login successfully", () => {
    // Test implementation
  })
})`,
    imagePosition: "right",
  },
  {
    title: "Smart Debugging",
    description:
      "Identify and fix bugs before they reach production. AI-powered error detection and resolution suggestions help you debug faster.",
    codeSnippet: `// AI suggests fix:
const result = await processData(input)
// Fixed: Added await keyword`,
    imagePosition: "left",
  },
];