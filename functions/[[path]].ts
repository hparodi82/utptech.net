interface Env {
  // Add your environment variables here
}

export const onRequest: PagesFunction<Env> = async (context) => {
  try {
    // Get the asset from the static site
    const response = await context.next();
    
    // If the response is not found, let Hugo handle the 404
    if (!response.ok && response.status === 404) {
      return await context.next();
    }
    
    return response;
  } catch (err) {
    return new Response(`Server Error: ${err}`, { status: 500 });
  }
} 