"use server"

export async function submitContactForm(formData) {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Here you would typically send an email or save to a database
  console.log("Form submission:", { name, email, message })

  // For demonstration purposes, we'll just return a success message
  // In a real application, you'd want to handle errors and validate inputs
  return {
    message: "Thanks for your message, Rohit will get back to you soon!",
  }
}

