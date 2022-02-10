import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Header from '../../components/Header'
function signIn({ providers }) {
  return (
    <>
      <Header />
      <div className="-mt-36 flex min-h-screen flex-col items-center justify-center py-2 px-14 text-center">
        <img
          className="w-80"
          src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
        />
        <div className="mt-6">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-blue-500 p-3 text-white"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: '/' })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

export default signIn
