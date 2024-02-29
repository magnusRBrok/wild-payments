interface SignInResult {
    succes: boolean;
    error?: {
        type: string
    }
}

export function signIn(data: string, formData: FormData): SignInResult {
  try {

  } catch (error) {
    if (error) {
          return {succes: false, error: {type: "Something went wrong."}}
    }
  }
  return {succes: true}
}