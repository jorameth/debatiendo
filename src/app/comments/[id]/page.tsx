import { Navbar } from '@/components'
import Comments from '../../comments'
import Hero from '../../hero'

export default function Commentarios({ params }: any) {
  return (
    <>
      <Navbar />
      <Hero />
      <Comments slug={params?.slug} />
    </>
  )
}
