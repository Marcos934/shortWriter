import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <div >
        <Link  href='/login'>
          <a>Fazer Login</a>
        </Link>
    </div>
  )
}
