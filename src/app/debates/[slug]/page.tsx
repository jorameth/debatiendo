import { Navbar } from '@/components'
import Comments from '../../comments'
import Hero from '../../hero'

export default function Commentarios({ debate }: any) {
  return (
    <>
      <Navbar />
      <Hero />
      <Comments slug={debate?.slug} />
    </>
  )
}
