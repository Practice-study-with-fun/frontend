import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import '@/styles/globals.css'
export function App() {
  return (
    <ClerkProvider>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
      <UserButton />
    </SignedIn>
    
  </ClerkProvider>
)
}